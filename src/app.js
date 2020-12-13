const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const Bussi = require('./model/register');
require('./db/conn');
const port = process.env.PORT || 9000;


const staticpath = path.join(__dirname, '../public');
const templatepath = path.join(__dirname, '../templates/views')
const  partials = path.join(__dirname,'../templates/partials')


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(staticpath));


app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partials);

app.get('/',(req,res)=>{
res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
    });

    app.get('/servies',(req,res)=>{
        res.render('servies');
        });

        app.get('/contact',(req,res)=>{
            res.render('contact');
            });
        
    
        app.post('/contact',async(req,res)=>{
            try{
               // res.send(req.body)
              const userData = new Bussi(req.body);
              await userData.save();
              res.status(201).render('index')
            }catch(error){
                res.status(500).send(error)
            }
            
            });
        
           
         
app.listen(port,()=>{
console.log (`server are running at ${port}`)
})