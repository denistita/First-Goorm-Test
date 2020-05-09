var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo-2", {useNewUrlParser:true, useUnifiedTopology:true});

// POST - title, content
var Post = require("./models/post");
var User = require("./models/user")
// USER - email, name
// Add some users to the manger
Post.create({
  title: "How to cook the best burger pt. 4",
  content: "namamata"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// Find user


// Find all post for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

//     User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });
