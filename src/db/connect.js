const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pushpraj3400:hrw6nJdFB0rxkO3Q@pushpraj7.ytttydr.mongodb.net/?retryWrites=true&w=majority',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=>{
    console.log("MongoDB Connected Successfully");
}).catch((e)=>{
    console.log("MongoDB Connection Failed");
})