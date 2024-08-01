let user_score = 0;
let comp_score = 0;
const msg = document.querySelector(".start");
const choices = document.querySelectorAll(".choice");
const userscore = document.querySelector(".user");
const compscore = document.querySelector(".comp");



const compchoice =() => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random()* 3 );
    return options[idx] ;
}

const result = (userwin,user,comp) => {
    
    if(userwin){
        msg.style.backgroundColor="green";
        user_score++;
        userscore.innerText = user_score;
        msg.innerText = `YOU WIN ! your ${user} beats ${comp}`;
        
    }
    else{
        msg.innerText = `YOU LOSE the ${comp} beats ${user}`;
        msg.style.backgroundColor="red";
        comp_score++;
        compscore.innerText = comp_score;
    }

}

const playgame = (user_choice) => {
    
    let user = user_choice
    //genrate comp choice
    let comp = compchoice();

    // console.log(user);
    // console.log(comp);

    if(comp === user){
    
        msg.innerText = `ITS DRAW! PLAY AGAIN`;
        msg.style.backgroundColor="rgb(135, 71, 135";
    }
    else{
    let userwin = true ;
    if(user==="rock"){
        userwin = (comp) === "paper"?false : true; ;
    }
    else if(user==="scissor"){
        userwin = (comp) === "paper"?true : false ;
    }
    else{
        //user === paper
        userwin = (comp) === "rock"?true : false;
    } 
    
    result(userwin,user,comp);
}

};

choices.forEach((funclick) => {

    funclick.addEventListener("click",() =>{
        const user_choice = funclick.getAttribute("id");
        // console.log(`the ${user_choice} is clicked`);
        playgame(user_choice);
     });


});