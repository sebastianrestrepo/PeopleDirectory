const express = require('express'),
    fs = require('fs'),
    consolidate = require('consolidate'),
    hbs = require('handlebars'),
    app = express();

//Configure the render engine (express + consolidate -> handlebars)
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(6060, () => console.log('Example app listening on port 6060!'));

var name, phone, genre;

//Write the HTML with the folder's name
app.get('/', (req, res) => {
    //Read the whole directory folder
    var folders = fs.readdirSync('people');
    folders.shift();
    res.render('index', {
        folders: folders
    });
});

app.get('/user/:id', function(req, res) {
    res.render('users', {
        user: req.params.id
    });
  });

