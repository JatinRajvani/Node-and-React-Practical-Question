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

app.get('/users/:name',(req,res)=>{
    const name=req.params.name;
    console.log(typeof(name));
    const user=users.find(users=>users.name.toLowerCase()==name.toLowerCase());
    res.send(user);
    console.log(user);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})