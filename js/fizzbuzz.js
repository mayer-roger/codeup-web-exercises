function fizzbuzz(num){
    for (let i = 1; i <= num; i++){
        if(i % 15 === 0) console.log("fizzbuzz");
        else if (i % 5 === 0) console.log("fizz");
        else if (i % 3 === 0) console.log("buzz");
        else console.log(i);
    }
}

fizzbuzz(100);

// function ternbuzz(num) {
//     for(let i = 0; i < num;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz') ||i)
// }
//
// ternbuzz(15);