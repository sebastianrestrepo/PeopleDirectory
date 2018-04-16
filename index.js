const express = require('express'),
    fs = require('fs'),
    consolidate = require('consolidate'),
    hbs = require('handlebars'),
    app = express();

//Configure the render engine (express + consolidate -> handlebars)
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/css', express.static('css'));

app.listen(6060, () => console.log('Example app listening on port 6060!'));

var name, phone, genre;

//Read the whole directory folder
var folders = fs.readdirSync('people');

//Write the HTML with the folder's name
app.get('/', (req, res) => {
    res.render('index', {
        folders: folders
    });
});
