function getUserInfo(){
    return new Promise(function(res,rej){
        setTimeout(() => {
             res({id: 1, name: "Sahdev"});
        },1000);
    });
}

function getUserPics(id){
    return new Promise(function (res, rej){
        res(["pic1","pic2"]);
    });
}

getUserInfo().then(function (data){
    console.log(data);
    return getUserPics(data.id);
})
.then((data)=>{
    console.log(data)
})
