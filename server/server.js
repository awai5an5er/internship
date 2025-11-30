const http=require('http');
http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="post"){
        console.log(req);
    }
}).listen('3000',()=>{
    console.log("Server listening at port 3000");
})
