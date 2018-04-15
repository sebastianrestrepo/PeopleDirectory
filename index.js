const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => res.send('Working!'));

app.listen(6060, () => console.log('Example app listening on port 6060!'));

var file = [1];
var text;
var name, phone, genre;


    for(var i = 0; i<file.length; i++){
        file[i] = fs.readFileSync('user'+ i + '.txt');
        text = String(file[i]).split(',');
        name = text[0];
        phone = text[1];
        genre = text[2];
        console.log('user: ' + i);
        console.log('name: ' + name);
        console.log('phone: ' + phone);
        console.log('genre: ' + genre);
    }

app.get('/dir', (req, res) => {
    res.send(getHtml(name, phone, genre));
  });

//console.log('This is the file: ' + file);

fs.writeFileSync('testing2.txt', 'Hola? Como estoy');

var getHtml = function (name, phone, genre) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<<device-width>>, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>People</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i,800" rel="stylesheet"> 
</head>
<body>
    <h1>People</h1>
    <div id="people-list">
    <h2>${name}</h2>
    <p>${phone}</p>
    <p>${genre}</p>
    </div>
    <label for="">Name</label>
    <input type="text" id="name" name="name">
    <button id="show">Add</button>
    <script src="index.js"></script> 
</body>
</html>
    
    `
}