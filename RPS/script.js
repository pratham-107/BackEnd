function rock(){
    let val = Math.floor(Math.random()*3);
    let r = 0;
    if(val == r){
        alert("tie");
    }
    else if(val == 1){
        alert("computer won");
    }
    else{
        alert("you won");
    }
    console.log(val);
}

function paper(){
    let val = Math.floor(Math.random()*3);
    let p = 1;
    if(val == p){
        alert("tie");
    }
    else if(val == 2){
        alert("computer won");
    }
    else{
        alert("you won");
    }
    console.log(val);
}

function scissor(){
    let val = Math.floor(Math.random()*3);
    let s = 2;
    if(val == s){
        alert("tie");
    }
    else if(val == 0){
        alert("computer won");
    }
    else{
        alert("you won");
    }
    console.log(val);
}