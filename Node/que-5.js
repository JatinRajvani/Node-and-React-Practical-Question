const express=require("express");
const app=express();
const port =4500;

app.use(express.json()) 
const users=[
    {id:1,name:"Jay",age:22},
    {id:2,name:"Sam",age:23},
];

app.get('/users',(req,res)=>{
    res.send(users)
});

app.post('/users',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.status(201).send("User created sucessfully"); 
});

app.put('/users/:id',(req,res)=>{
 const newuser=req.body;   
 const id=parseInt(req.params.id);
 const Index= users.findIndex(user=>user.id===id);
 console.log(Index);
 users[Index]=newuser;
    res.send("User updated sucessfully")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
