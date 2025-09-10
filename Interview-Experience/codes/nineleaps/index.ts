const express = require('express');
const app = express();
const axios = require('axios');


app.use(express.json());
app.get('/', (req, res) => {
    console.log("this is a sample express app")
})

app.post('/api/dynamicArray', async (req, res) => {
    const { numberOfItem } = req.body;
    
    try{
        const dynamicArray = Array.from({length : numberOfItem}, (_ , i) => ({
            id : i+1,
            metadata : null
        }))

        const data = dynamicArray.map(item => {
            return axios.get(`https://jsonplaceholder.typicode.com/todos/${item.id}`)
        })
        const result = await Promise.all(data)

        const finalResult = dynamicArray.map((item, index) => ({
            ...item,
            metadata: result[index].data
        }))

        res.json(finalResult);

    }
    catch(err) {
        console.log(err);
        res.status(500).json({error : "internal server error"})
    }
})

app.listen(8080,() => {
    console.log("app is listening to port 8080")
})