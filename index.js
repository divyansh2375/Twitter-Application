const express = require("express");
const app = express();
const connect = require('./src/config/database')

//1st part ka he
// const Tweet = require('./src/models/tweet');

//2nd part ka he
const TweetRepository = require('./src/repository/tweet-repository')

// 3rd comment
const Comment = require ('./src/models/comment')


app.listen(3000, async () => {

    console.log("server started ")
    await connect();
    console.log("mongodb connected");
//1st Part
    
//    const tweet = await Tweet.create({
//     content: 'second tweet',
//     userEmail : 'Second@123'
//    })
//    console.log(tweet);

// const tweets = await Tweet.find({userEmail:"Second@123"});
// console.log(tweets);

//2nd part ka he
// const tweetRepo = new TweetRepository();
// const tweet = await tweetRepo.update('650041947c32bcfa88e2a92c' , {content: "new latest update data"})  // give old one while updating but mongodb me kr rha latest update  so added {new:true in tweet repository}

// const tweet = await tweetRepo.update('650041947c32bcfa88e2a92c' , {content: "new new latest update data"}) 
// console.log(tweet);


//3rd part comment kr sakte hein 
// const tweetRepo = new TweetRepository();
// const tweet = await tweetRepo.create({content: 'my tweet'})
// console.log(tweet)

// tweet.comments.push({content: 'first comment- i am enjoying it'})

// await tweet.save();
// console.log(tweet)

//4th 3rd equal smjho 
// const tweetRepo = new TweetRepository();
// const tweet = await tweetRepo.create({content: 'tweet with a comment schema'});
// console.log(tweet);
// const comment = await Comment.create({content: 'new comment'})
// tweet.comments.push(comment);
// await tweet.save();
// console.log(tweet);


//5th
const tweetRepo = new TweetRepository();
const tweet = await tweetRepo.getWithComments('650040a0ebbd471f6e248ba2');
console.log(tweet);
})

