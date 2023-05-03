function myLocalScope(){
    //Only change code below this line
    const myVar = "loc";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('inside myLocalScope', myVar);

//Run and check the console
//myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);