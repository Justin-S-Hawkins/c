let rs= require('readline-sync');


function getOperation() {
 const operators = ['+','-' , '*','/'];
 const intro = rs.question('What operation do you want to perform ? ');
 if (!operators.includes(intro)){
  console.log('That is not a valid operation');
   return getOperation();
 }

 return intro
}
const intro = getOperation();

function getFirstNumber() {
  const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  const firstNumb= rs.question('Please enter the first number ');
  if (!numbers.includes(firstNumb)){
   console.log('This is not a number');
    return getFirstNumber();
  }
 
  return Number(firstNumb);
 }
 const firstNumb = getFirstNumber();


 function getSecondNumber() {
  const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  const secondNumb= rs.question('Please enter the second number ');
  if (!numbers.includes(secondNumb)){
   console.log('This is not a number');
    return getSecondNumber();
  }
 
  return Number(secondNumb);
 }

const secondNumb = getSecondNumber();


function sumTotal() {
if( intro == '+'){
  return firstNumb + secondNumb;
}else if( intro == '-'){
  return firstNumb - secondNumb;
}else if( intro == '*'){
  return firstNumb * secondNumb;
}else if( intro == '/'){
  return firstNumb / secondNumb;
}

}
console.log(sumTotal());
 

//look into the input variable in the example and how it uses .prompt
// I think we've found the loop
//goal: make a loop that compares intro to all the operational 
//////////values and pushes the value equal to intro in to the math array.

//find a way to restate the question once wrong 

//possible .find method 

//let instigate = operations.find(operation => operation.intro)


// the start to a forloop (doesnt work right now)
// for (let i = 0; i < operations.length; i++){
  //   if (i != intro){
  //     math.push('That is not a valid operation')
  //   } else if(i == intro){
  // math.push(i)
  //   }
  // }


  // for (let i =0; i < operations.length; i++){
  //   if (start(operations[i]) === operations[i]){
  //   math = operations[i];
  //   break
  //   } else if ( start() !== operations[i]){
  //    math ='That is not a valid operation'; 
  //   }
  //   }
