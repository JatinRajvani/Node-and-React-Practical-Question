const express=require("express");
const app=express();
const port=4000;

const users=[
    {id:1,name:"Jay",age:22},
    {id:2,name:"Sam",age:23},
];

app.get('/users',(req,res)=>{
    res.send( users)
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})