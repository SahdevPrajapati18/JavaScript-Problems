//1. Simulate a Food Delivery

//Task: Create a function orderFood that returns a Promise. It should resolve after 2 seconds with " Pizza delivered!".

//Bonus: Add a chance to reject with "Delivery failed!".

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(Math.random()<0.8){
//                 res("Pizza Delivered");
//             }
//             else{
//                 rej("Delivery Failed");
//             }
//         },2000);
//     });
// }

// orderFood().then(function(msg){
//     console.log(msg);
// }).catch(function(err){
//     console.log(err)
// })

//2. Chained Promises: User -> Posts -> Comments

//Task:
// 1. Create getUser() -> resolves with { id: 1, name: "Sahdev"}
//2. getPosts(userId) -> resolves with list of post titles
//3. getComments(postId) -> resolves with comments
//Chain them together using .then() and log the final output.

// function getUser(){
//     return new Promise(function(res,rej){
        
//         setTimeout(() => {
//             res({ id: 1, name: "Sahdev"});
//         }, 1000);
//     });
// }

 
// function getPosts(userId){
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res(["title 1","title 2"]);
//         }, 1000);
//     });
// }

// function getComments(postId){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(["great post", "amazing content", "you rocked"]);
//         }, 1000);
//     });
// }


// getUser()
// .then(function(data){
//     console.log(data);
//     return getPosts(data.id);
// })
// .then(function(titles){
//     console.log(titles);
//     return getComments("aadada")
// })
// .then(function(comments){
//     console.log(comments)
// })
// .finally(()=>{
//     console.log("all data fetched");
// })

//3. Fake API Delay

//Task:
// Write a  function fakeApiCall(endpoint) that:
// Accepts a tring like "users" or "posts"
// Resolves with some dummy data after a random delay (1-3 sec)

function fakeApiCall(endpoint){
    const data={
        user : ["Varun", "Sahdev", "Anand"],
        posts: ["hey","hi","how are you"]
    }

    let delay = Math.random()*2000 + 1000;

    return new Promise(function(res, rej){
        setTimeout(() => {
            console.log(data[endpoint]);
        }, delay);
    });
}


fakeApiCall("posts").then(function(){
    res(data.user);
})

