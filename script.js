// const btn = document.querySelector('button');
let btn=document.getElementsByTagName("button");
console.log(btn)
btn[0].addEventListener('click',click);



 function click(){
       console.log("click")
 
    dice=document.getElementsByClassName("dice");
    let max=6;
    let  min=1;
    let dice1=0;
    let dice2=0;
    dice1=Math.floor(Math.random() * (max - min + 1) + min);
    dice2=Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(dice[0],dice[1])
    // console.log("images/dice"+dice1.toString()+ ".png");
    dice[0].src="images/dice"+dice1.toString()+ ".png";
    dice[1].src="images/dice"+dice2.toString()+ ".png";
    console.log("checking")
    if (dice1>dice2){
        document.getElementsByTagName("h3")[0].innerText="Player 1 Won";
        console.log("checking1")
    }
    else if (dice1<dice2){
        document.getElementsByTagName("h3")[0].innerText="Player 2 Won";
        console.log("checking2")
    }
    else{
        document.getElementsByTagName("h3")[0].innerText="DRAW";
        console.log("checking3")
    }
 }