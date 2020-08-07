//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "61 983212229",
        bio: "Entusiastas das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passarem por uma das minhas explosões.",
        subject: "Quimica",
        cost:"20",
        weekday: [0],
        time_from: [720] ,
        time_to: [1220]
    },
    {
        name: "Dara Maria",
        avatar: "https://avatars3.githubusercontent.com/u/67131700?s=460&u=f8172d3e2b9e034e2a8bc6cc8809e7e9824a6fa9&v=4",
        whatsapp: "61 983212229",
        bio: "Entusiastas das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passarem por uma das minhas explosões.",
        subject: "Biologia",
        cost: "20",
        weekday: [1],
        time_from: [720] ,
        time_to: [1220]
    },
    {
        name: "Guilherme Capitão",
        avatar: "https://avatars3.githubusercontent.com/u/52411032?s=460&u=af7a96df95e691aa93bc03ab22e7bd2a38ae47dc&v=4",
        whatsapp: "61 983212229",
        bio: "Entusiastas das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passarem por uma das minhas explosões.",
        subject: "Fisica",
        cost: "20",
        weekday: [1],
        time_from: [720] ,
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", {proffys,filters,subjects,weekdays})
}

function pageGiveClasses(req,res){
    const data = req.query
    
    //adicionar dados a lista de proffys
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        //adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    //se nao, mostrar a pagina
    return res.render("give-classes.html",{subjects,weekdays})
}

//Servidor
const express = require('express')
const { static } = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configurar arquivos estaticos (css,scripts,imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)