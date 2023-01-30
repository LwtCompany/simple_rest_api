const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const fs = require("fs");

let dataUsers;

fs.readFile("data.json", (err, data) => {
    if(err)
        console.log(err);
    else{
        dataUsers = JSON.parse(data)
    }
        
});


app.get('/users', (req, res) => {
    const {id} = req.query;
    let final_result = dataUsers;
    if(id){
        let result = dataUsers.find((val, ind) => {
            if(val.id == id)
                return val;
        });
        final_result = result;
    }
    res.send(final_result)
})

app.put('/users', (req, res) => {
    const {id, name} = req.query;
    let final_result = dataUsers;
    if(id){
        let create_new = true;
        dataUsers.forEach((val, ind) => {
            if(val.id == id){
                create_new  = false;
                val.name = name;
            }
                
        });
        
        if(create_new){
            let new_users = {
                "id": id,
                "name": name
            };

            final_result.push(new_users);
        }
        fs.writeFile('data.json', JSON.stringify(final_result), function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
        res.send(final_result)
    }else{
        res.send("We haven't got id")
    }
    
    
})

app.delete("/users", (req, res) => {
    const {id} = req.query;
    if(id){
  
        let newUsers =  dataUsers.filter((val, ind) => {
            if( !(val.id == id))
                return val
             
            
                
        });
        
      
        
        fs.writeFile('data.json', JSON.stringify(newUsers), function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
        res.send(newUsers)
    }else{
        res.send("We haven't got id")
    }
})

app.post("/users", (req, res) => {
 
           
        let final_result = dataUsers;  

        final_result.push(req.body);
        
        fs.writeFile('data.json', JSON.stringify(final_result), function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
        res.send(final_result)
 
})

app.listen(port, () => {
    console.log(`server running on the port http://localhost:${port}`)
})