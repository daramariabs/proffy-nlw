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
        subject: "Design",
        cost: "20",
        weekday: [1],
        time_from: [720] ,
        time_to: [1220]
    }
]


function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res){
    return res.render("study.html", {proffys})
}

function pageGiveClasses(req,res){
    return res.render("give-classes.html")
}

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