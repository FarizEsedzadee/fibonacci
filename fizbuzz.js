/*
Konsol aracılığıyla (yazılı olarak) gösteren bir program yazınız.
1'den 100'e kadar sayılar (her ikisi de dahil ve aralarında satır sonu bulunan)
her baskıda), aşağıdakilerin yerine:
"Fizz" kelimesi için 3'ün katları.
"Buzz" kelimesi için 5'in katları.
"fizzbuzz" kelimesi için aynı anda 3 ve 5'in katları.
*/



for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else {
        console.log(i);
    }
}