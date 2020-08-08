const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) =>{
    //inserir dados
    proffyValue = {
        name: "Dara Maria",
        avatar: "https://avatars3.githubusercontent.com/u/67131700?s=460&u=f8172d3e2b9e034e2a8bc6cc8809e7e9824a6fa9&v=4",
        whatsapp: "61983212229",
        bio: "Entusiastas das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passarem por uma das minhas explosões.",
    }

    classValue = {
        subject: "Biologia",
        cost: "20",
        //O proffy id vira pela banco de dados
    }

    classScheduleValues = [
        //O class_id virá pelo banco de dados, apos o cadastro da class
        {
            weekday: [1],
            time_from: [720] ,
            time_to: [1220]
        },
        {
            weekday: [0],
            time_from: [520] ,
            time_to: [1220]
        }
    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})
    //consultar dados inseridos
})