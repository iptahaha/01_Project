const express = require('express');
const app = express();
const port = 3999;
const urlencodedParser = express.urlencoded({ extended: false });

const fs = require('fs');

app.use(express.static('dist'))
app.listen(port, () => console.log("Сервер запущен..."));


/*app.post("/question-create", urlencodedParser, function (request, response) {
    let arr = [];
    if (typeof request.body.fileSystem === 'string') {
        arr = [request.body.fileSystem];
    }
    else {
        arr = request.body.fileSystem; 
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++)
     {
        switch (arr[i]) {
            case 'CSV':
                addCSV(request.body.question, request.body.selectTheme, request.body.select_answer);
                break;
            case 'JSON':
                addJSON(request.body.question, request.body.selectTheme, request.body.select_answer);
                break;
            case 'XML':
                addXML(request.body.question, request.body.selectTheme, request.body.select_answer);
                break;
            case 'YAML':
                addYAML(request.body.question, request.body.selectTheme, request.body.select_answer);
                break
        }
    }
})

function addCSV(question, theme, answer) {
    console.log('csv');
    console.log(question);
    console.log(theme);
    console.log(answer);
}

function addJSON(quest, theme, answer) {
    let info = {
        quest: quest,
        theme: theme,
        answer: answer
    };

    var tmpJson = fs.readFileSync('./server/questions.json');

    if (Object.keys(tmpJson).length === 0) {
        var jsonQuestion = JSON.stringify([info]);
        fs.writeFileSync('./server/questions.json', jsonQuestion);
    } 
    else { 
        let tmp = [];
        let tmp2 = []; 
        tmp = JSON.parse(tmpJson);
        tmp2 = tmp;
        tmp2.push(info);
        console.log(tmp2);
        var jsonQuestion = JSON.stringify(tmp2, null, '\t');
        fs.writeFileSync('./server/questions.json', jsonQuestion);
    }
}

 

function addXML(question, theme, answer) {
    console.log('xml');
    console.log(question);
    console.log(theme);
    console.log(answer);
}

function addYAML(question, theme, answer) {
    console.log('yaml');
    console.log(question);
    console.log(theme);
    console.log(answer);
}*/






