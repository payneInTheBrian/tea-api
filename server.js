const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const beatle = {
        'paul':{
            'name': 'Paul McCartney',
            'instrument': 'Bass, Vocals, Piano, Organ?',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'john':{
            'name': 'John Lennon',
            'instrument': 'Guitar, Piano, Vocals',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'matcha':{
            'type': 'green',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'matcha':{
            'type': 'green',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        }
        'unknown':{
            'type': 'unkown',
            'origin': 'unknown',
            'waterTemp': 'unknown',
            'steepTime': 'unknown',
            'caffinated': 'false',
            'flavor': 'unknown'
        }
        
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
    response.json(tea)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})