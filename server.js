const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const beatle = {
        'john':{
            'type': 'black',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'paul':{
            'type': 'green',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'george':{
            'type': 'green',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'ringo':{
            'type': 'green',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        },
        'unknown':{
            'type': 'unkown',
            'origin': 'unknown',
            'waterTemp': 'unknown',
            'steepTime': 'unknown',
            'caffinated': 'false',
            'flavor': 'unknown'
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