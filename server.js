const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const beatle = {
        'john lennon':{
            'vocals': true,
            'origin': 'Liverpool',
            'Born': 1940,
            'Death': 1980,
            'instruments': 'Guitar and Piano/Keys'
        },
        'paul mccartney':{
            'vocals': true,
            'origin': 'Liverpool',
            'Born': 1942,
            'Death': 'TBD',
            'instruments': 'Bass, Piano/Keys, Guitar, and Drums'
        },
        'george harrison':{
            'vocals': true,
            'origin': 'Liverpool',
            'Born': 1943,
            'Died': 2001,
            'instruments': "Guitar and Sitar"
        },
        'ringo starr':{
            'vocals': true,
            'origin': 'Liverpool',
            'Born': 1940,
            'Died': 'TBD',
            'instruments': 'Drums and Percussion'
        },
        'unknown':{
            'vocals': 'unkown',
            'origin': 'unknown',
            'Born': 'unknown',
            'Died': 'unknown',
            'Instruments': 'false',
            
        },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const beatleName = request.params.name.toLowerCase()
    if( beatle[beatleName] ){
        response.json(beatle[beatleName])
    }else{
        response.json(beatle['unknown'])
    }
    response.json(beatle)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})