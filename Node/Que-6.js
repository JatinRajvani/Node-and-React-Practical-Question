const express=require("express");
const app=express();
const port=4500;

app.use(express.json());
const users=[
    {id:1,name:"Jay",age:22},
    {id:2,name:"Sam",age:23},
];
app.get('/users',(req,res)=>{
    res.send(users)
});
app.patch('/users/:id', (req, res) => {
    const change = req.body;
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users[index] = { ...users[index], ...change };
        res.send("User updated successfully");
    } else {
        res.status(404).send("User not found");
    }
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})