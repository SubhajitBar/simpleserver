import {app} from "./app.js";

app.get("/", (req,res)=>{
    res.send(`<h1>Working file</h1>`)
})

app.route("/user").get((req,res,next)=>{
    res.status(200).json({
        users: [],
        success: false,
    });
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})