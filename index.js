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
    var folder = fs.readdirSync('people');
    folder.shift();
    res.render('index', {
        folder: folder
    });
});

app.get('/user/:id', function (req, res) {
    var dataFile = fs.readFileSync('../PeopleDirectory/people/' + req.params.id);
    var dataText = String(dataFile);
    var data = dataText.split(',');
    console.log('data0' + data[0]);
    console.log('data1' + data[1]);
    res.render('users', {
        user: req.params.id,
        data: data,
    });
});