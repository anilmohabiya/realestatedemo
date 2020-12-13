const mongoose = require('mongoose');
const validator = require('validator');

const tableSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:4,
        required:true
    },
   
    email:{
        type:String,
        required:true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error('invalid email id')
          }
      }
    },
    phone:{
        type:Number,
        required:true, 
    },
   message:{
       type:String,
       required:true,
       minlength:3
   },
   date:{
       type:Date,
       default:Date.now
   }

});
const Bussi= new mongoose.model('Bussi',tableSchema);

module.exports =Bussi;