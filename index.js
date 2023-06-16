

for(let i = 1; i !== 16; i++){
    if(!(i % 15)){
        console.log("FizzBuzz")
    } else if(!(i % 5)){
        console.log("Buzz")
    } else if(!(i % 3)) {
        console.log("Fizz")
    } else {
        console.log(i)
    }

}