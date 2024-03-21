const Length = {
    max: 999999,
    min: 0
}

function checkFibonacci(randomNumber) {
    let fib1 = 0;
    let fib2 = 1;
    console.log(randomNumber + " bir fibonacci değer mi?");
    for (i = 0; i < 30; i++) {
        fibonacci = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibonacci;

        if (randomNumber == fibonacci) {
            return true;
        }
        return false;
    }
}

const checkPairNumber = (randomNumber) => {
    console.log(randomNumber + " bir eş değer mi?");
    if (randomNumber % 2 === 0) {
        return true;
    }
    return false;
}


const checkCousineCount = (randomNumber) => {
    console.log(randomNumber + " bir kuzen değer mi?");
    if (randomNumber == 1)
        return false;
    if (randomNumber == 2)
        return true;

    for (i = 2; i < randomNumber; i++) {
        if (randomNumber % i == 0) {
            return false;
        }
        return true;
    }

}

function mainFunction() {
    let randomNumber = '';
    // create random number

    for (let i = 0; i < 10; i++) {

        randomNumber = (Math.random() * ((Length.max - Length.min) + Length.min)).toFixed(0);

        console.log('________________________________________');
        console.log("Seçilen rastgele numara: " + randomNumber);

        const pairNumber = checkPairNumber(randomNumber);
        pairNumber ?
            console.log("Bu bir eş değerdir.") :
            console.log("Bu bir eş değer değil.");

        const cousineNumber = checkCousineCount(randomNumber);
        cousineNumber ?
            console.log("Bu bir kuzen değer.") :
            console.log("Bu bir kuzen değer değil.");

        const fibonacciNumber = checkFibonacci(randomNumber);
        fibonacciNumber ?
            console.log("Bu bir fibonacci.") :
            console.log("Bu bir fibonacci değil.");

    }

    return;
}

mainFunction();
