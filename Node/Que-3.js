const express=require("express");
const app=express();
const port=4500;


app.use(express.json()) // Middleware to parse JSON bodies


const users=[
    {id:1,name:"Jay",age:22},
    {id:2,name:"Sam",age:23},
];

app.get('/users',(req,res)=>{
    res.send( users)
});

app.post('/users',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.status(201).send("User created sucessfully"); // 201 Created status code
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})