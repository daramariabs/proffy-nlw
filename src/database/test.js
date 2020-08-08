const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    //inserir dados
    proffyValue = {
        name: "Dara Maria",
        avatar: "https://avatars3.githubusercontent.com/u/67131700?s=460&u=f8172d3e2b9e034e2a8bc6cc8809e7e9824a6fa9&v=4",
        whatsapp: "61983212229",
        bio: "Entusiastas das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passarem por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
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

    //createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    //console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha, por exemplo é das 8h as 18h
    //o horario do time from (8h) precisa ser menor ou igual ao horario solicitado
    //o time to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `) 
    // console.log(selectClassesSchedules)
})