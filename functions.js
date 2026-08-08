/*functions allows us to write a block of code 
that can be reused multiple times in our program*/
function luckynumber(value){
    if(value===4){
        return "congratulayions!!"
    }else{
        return "try again later!!"
}
}
let figure = luckynumber(4)
console.log(figure)

function welcome(name){
    console.log(`welcome to class MR/MISS/MRS {name}`)
}
welcome("Esther")
welcome("Ada")
welcome("Uzoma")

function ageCheck(age){
    return age >= 18
}

let danielAge = ageCheck(15)
console.log(danielAge)

function ageCheck(age){
    if(age<= 18){
        return "please Get Out ... YOU ARE UNDERAGE"
    }else{
        return "welcome to the club !!"
    }
  }


  function luckyNumber(figure){
    if(figure !==4){
        return "congratulations!!"
    }else{
        return "you are not lucky enough!!"
    }
    }
console.log(luckyNumber(4))  

/*GLOBAL SCOPE is wen a variabel is created outside a function
and can be accessed anywhere in the code*/
let score = 75;

function gradingSystem(){
    if (score >= 50){
        return "PASSED"
    }else{
        return "FAILED"
    }
}

//local scope is when a variable is within function
function deliveryFee(){
    let fee = 5000
    return fee
}

function schoolGrade(scores){
    if(scores >= 90){
        return "A"
    }else if(scores >= 70){
        return "B"
    }else if(scores >=50){
        return "C"
    }else{
        return "F"
    }
}
console.log(schoolGrade(97))

//arrow function
const minus = (num) =>{
    return num - 50
}
let result = minus(75)


