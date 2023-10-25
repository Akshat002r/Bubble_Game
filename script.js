var timer=15;
var score=0;
var rn=0;

function increaseScore(){
    score=score+1;
    document.querySelector('#sco').textContent=score;
}

function bubble_banao(){
    var clutter="";

    for(var i=1;i<=68;i++)
    {   
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }

document.querySelector('#pbot').innerHTML=clutter;
}


function timer_chalao(){
    var iid=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector('#tt').textContent=timer;
        }

        else{
            clearInterval(iid);
            document.querySelector("#pbot").innerHTML=`<h1>Game Over ! Refresh to Play Again.</h1>`
        }
        
    },1000);
}


function hit_value(){
    rn=Math.floor(Math.random()*10);
    document.querySelector('#htval').textContent=rn;
}




hit_value();
bubble_banao();
timer_chalao();

var qa=document.querySelector("#pbot");
qa.addEventListener("click",function(det){
    // alert("chal raha hai !!");
    var clicked=(Number(det.target.textContent));
    if(clicked===rn)
    {
        increaseScore();
        bubble_banao();
        hit_value();
    }
})
