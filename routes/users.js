const mongoose= require('mongoose');
const plm=require("passport-local-mongoose");
 mongoose.connect("mongodb+srv://kishangupta4514:gyg7LbRJh51WL8oj@cluster0.yuzo3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema= mongoose.Schema({
     username: String,
     name: String,
     email: String,
     password: String,
     profileImage: String,
     bio: String,
     posts: [{ type: mongoose.Schema.Types.ObjectId, ref:"post"}],
});

userSchema.plugin(plm);

module.exports=mongoose.model("user",userSchema);