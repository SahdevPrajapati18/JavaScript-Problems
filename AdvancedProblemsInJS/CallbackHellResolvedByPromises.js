function stepOne(){
    return new Promise(function(res,rej){
        console.log("step1");
        res();
    });
}

function stepTwo(){
    return new Promise(function(res,rej){
        console.log("step2");
        res();
    });
}

function stepThree(){
    return new Promise(function(res,rej){
        console.log("step3");
        res();
    });
}

stepOne().then(stepTwo).then(stepThree).then(function(){
    console.log("resolved");
})