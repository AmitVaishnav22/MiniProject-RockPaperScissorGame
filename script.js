let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userscore");
const compScorePara=document.querySelector("#compscore");

const getCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame=(userChoice)=>{
     console.log(userChoice);
     const compChoice=getCompChoice();
     console.log(compChoice);

     if(userChoice===compChoice)
     {
        drawGame();
     }
     else{
        let userWin=true;
        if(userChoice==='rock')
        {
           userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==='paper')
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else(userChoice==='scissors')
        {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you won");
        msg.innerText=`You won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("comp won");
        msg.innerText=`You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});