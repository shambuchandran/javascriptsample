let comNum=Math.floor(Math.random() * 100) + 1;
let count=0;
let userNum;
console.log("welcome to guess the number game")
console.log("enter a guess between 1 and 100")
do{
userNum=prompt("enter your guess number");
if(userNum<1||userNum>100){
  console.log("enter b/w 1 and 100")
  count++;
}else if(comNum==userNum){
  console.log("you guessed right");
  count++;
}else if(comNum>userNum){
  console.log("guess higher");
  count++;
}else if(comNum<userNum){
  console.log("guess lower");
  count++;
}
}while(userNum != comNum);
console.log("total guess is: "+ count);
if(count <4){
  console.log("you are a pro");
}else if(count<8){
  console.log("good job");
}else
  console.log("try again");
