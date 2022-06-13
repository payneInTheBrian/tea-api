const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
        'oolong':{
            'type': 'black',
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
        'matcha':{
            'type': 'green',
            'origin': 'To mommas HOuse',
            'waterTemp': 200,
            'steepTime': 180,
            'caffinated': true,
            'flavor': 'delicious'
        }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const beatleName = request.params.name.toLowerCase()
    if( tea[beatleName] ){
        response.json(tea[beatleName])
    }else{
        response.json(tea['unknown'])
    }
    response.json(tea)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})