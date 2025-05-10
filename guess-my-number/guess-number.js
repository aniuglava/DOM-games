let secretNum=Math.floor(Math.random()*20)+1;
let score=20;
let highScore=0;

document.querySelector(".btn-check").addEventListener("click",function(){
let input=document.getElementById("guess").value;
let number=Number(input);
if(!number||number<1||number>20){
    document.querySelector(".message").textContent="Enter a number between 1 and 20";
    return;
}
if (score==0){
    document.querySelector(".message").textContent="You lost! Click again";
    return;
}
if(secretNum==number){
    document.querySelector(".message").textContent="Correct Number";
    document.querySelector(".number-box").textContent=secretNum;
    document.querySelector(".number-box").style.backgroundColor="purple";
    if(score>highScore){
        highScore=score;
    }
    document.querySelector(".highscore").textContent=highScore;
    return;
}else if(secretNum>number){
    if(secretNum-number>5){
        document.querySelector(".message").textContent="Too low";
        score--;
        document.querySelector(".score").textContent=score;
    }else{
     document.querySelector(".message").textContent="You are close, try a higher number";
     score--;
     document.querySelector(".score").textContent=score;
    }
}else if(secretNum<number){
    if(number-secretNum>5){
        document.querySelector(".message").textContent="Too high";
        score--;
        document.querySelector(".score").textContent=score;
    }else{
     document.querySelector(".message").textContent="You are close, try a lower number";
     score--;
     document.querySelector(".score").textContent=score;
    }
}

});
document.querySelector(".btn-again").addEventListener("click",function(){
     secretNum=Math.floor(Math.random()*20)+1; 
     score=20;
     document.querySelector(".message").textContent="Start guessing...";
     document.querySelector(".score").textContent=score;
     document.querySelector(".number-box").style.backgroundColor="black";
});
