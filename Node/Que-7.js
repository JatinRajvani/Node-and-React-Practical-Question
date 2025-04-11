const express=require("express");
const app=express();
const port=4500;

app.use(express.json());

app.use(express.json());
let users=[
    {id:1,name:"Jay",age:22},
    {id:2,name:"Sam",age:23},
];

app.get('/users',(req,res)=>{
    res.send(users)
});

app.post('/users',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.send("User added successfully")
});

app.delete('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    users=users.filter(u=>u.id!==id);
    res.send({ message: `User with ID ${id} deleted.` });
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});