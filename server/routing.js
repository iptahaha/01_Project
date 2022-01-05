const express = require('express');
const { path } = require('express/lib/application');

const app = express();
const port = 3999;


const options = {
    root: "./".concat('dist')
}

app.listen(port, () => console.log("Сервер запущен..."));

app.get('/main', (req, res) => {
    res.sendFile('/index.html', options)
})
app.get('/style.css', (req, res) => {
    res.sendFile('/style.css', options)
})
app.get('/index.js', (req, res) => {
    res.sendFile('/index.js', options)
})

app.get('/home/home.html', (req, res) => {
    res.sendFile('/home/home.html', options)
})
app.get('/home/home_style.css', (req, res) => {
    res.sendFile('/home/home_style.css', options)
})
app.get('/home/home.js', (req, res) => {
    res.sendFile('/home/home.js', options)
})


app.get('/question/question.html', (req, res) => {;
    res.sendFile('/question/question.html', options)
})
app.get('/question/question.css', (req, res) => {
    res.sendFile('/question/question.css', options)
})
app.get('/question/question.js', (req, res) => {
    res.sendFile('/question/question.js', options)
})

app.get('/about/about.html', (req, res) => {;
    res.sendFile('/about/about.html', options)
})
app.get('/about/about.css', (req, res) => {
    res.sendFile('/about/about.css', options)
})
app.get('/about/about.js', (req, res) => {
    res.sendFile('/about/about.js', options)
})







