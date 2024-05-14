const mongoose  = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MAT224", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connection to the database is successful");
})
.catch(()=>{
    console.log("Connection to the database failed");
})

const schema = new mongoose.Schema({
    xValue:{
        type: Array,
        required: true
    }
})

const model = new mongoose.model("Data", schema);   
module.exports = model;