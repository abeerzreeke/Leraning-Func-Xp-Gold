//Exercise 1 : Tips

var numInput = prompt("Enter amount of the 3 bills with comma in between each:");
var numArray = numInput.split(",");
var tips = [];
var finalPaid = [];

for (let i = 0; i < numArray.length; i++) {
   if(numArray[i] < 50){
       tips.push(numArray[i] * 0.20)
       finalPaid.push(+tips[i] + +numArray[i])
    }
   else if(numArray[i] >= 50 && numArray[i] < 200){
       tips.push(numArray[i] * 0.15)
       finalPaid.push(+tips[i] + +numArray[i])
    }
   else{
       tips.push(numArray[i] * 0.10)
       finalPaid.push(+tips[i] + +numArray[i])
    }
}
console.log(`Your Bill is ${numArray}`)
console.log(`Tips For Each Bill ${tips}`)
console.log(`Final Paid Amounts ${finalPaid}`)

//Exercise 2 : Play A Guessing Game

var count =0;
var computerNumber = Math.floor(Math.random() * 11);  

const playTheGame = () => {


    if (confirm('Hii!! You Want To Play The Game ?')) {

        var userNumber = parseInt(prompt('Please Enter A Number Between 0 And 10'));
        checkNumber(userNumber)
        test(userNumber,computerNumber)
    }
    else {alert('No Problem, Goodbye!')}   
}

const test = (userNumber,computerNumber) => {

    if(userNumber == computerNumber){
        alert('Congratulations, You Won!')
    }
    else if(userNumber > computerNumber){
        alert('that it’s bigger than try to guess again.')
        times()
    }
    else{
        alert('that it’s lower than try to guess again.')
        times()
    }
}

const checkNumber = (userNumber) => {

    if (!Number.isInteger(userNumber)){
        alert('Sorry Not a number, Goodbye!')
        return;
    }
    else if (!(userNumber >= 0 && userNumber <= 10)){
        alert('Sorry it’s not a good number, Goodbye')
        return;
    }
}

const times = () => {

    count++;

    if(count > 2){
        alert(`Sorry You Can’t Try Again the number that computer had in mind is ${computerNumber} `)
        return;
    }
    else{
        var userNumber = parseInt(prompt('Please Enter A New Number Between 0 And 10'));
        checkNumber(userNumber)
        test(userNumber,computerNumber)
    }
}
playTheGame()