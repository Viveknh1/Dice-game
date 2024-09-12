 var randomNumber1 = Math.floor(1 + Math.random()*6)
 var randomNumber2 = Math.floor(1 + Math.random()*6)
 var randomdice = "dice " + randomNumber1 + ".png"
 var randomdice1 = "dice " + randomNumber2 + ".png"
 var randomsrcc = "imag/" + randomdice
 var randomsrcc1 = "imag/" + randomdice1

 console.log(randomdice)

 document.querySelectorAll("img")[0].setAttribute("src", randomsrcc)
 document.querySelectorAll("img")[1].setAttribute("src", randomsrcc1)
// // if(randomNumber1 ==1){
// //     document.querySelector("li #ab")
// // }
// // else if(randomNumber1 == 2){
// //     document.querySelector("li #bb")
// // }
// // else if(randomNumber1 == 3){
// //     document.querySelector("li#cb")
// // }
// // else if(randomNumber1 == 4){
// //     document.querySelector("li#db")
// // }
// // console.log("random number " + randomNumber1 )

 var a =  randomNumber1
 var b =  randomNumber2
 console.log("player1 value = " + a)
 console.log("Player2 value = " + b)

 if(a == b){
     document.querySelector("h1").innerHTML="DRAW"
 }

 else if(a > b){
     document.querySelector("h1").innerHTML="Player 1 wins"
 }
 else{
     document.querySelector("h1").innerHTML="Player 2 wins"
 }