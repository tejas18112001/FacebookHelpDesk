
const mongoose  = require('mongoose') ;

const userSchema1 = new  mongoose.Schema ({
    username :{
        type : String ,
        required  : true ,
        unique : true ,
        min : 3 ,
        max : 50 ,
    } ,

    email :{
       type : String ,
       required  : true ,
       unique : true ,
       max : 50 ,
    } ,

    password :{
       type : String ,
       required : true ,
       min :8 ,
    } ,
   
})

const userSchema2 = new mongoose.Schema({
    username :{
        type : String ,
      
    } ,

    email :{
       type : String ,
       
    } ,

    avatar : {
        type : String ,
        default : "" ,
    }
})


const User = mongoose.model("User", userSchema1);
const FacebookUser = mongoose.model('FacebookUser', userSchema2);

module.exports = { User, FacebookUser };