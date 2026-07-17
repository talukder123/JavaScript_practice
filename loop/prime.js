/**
 * print all the prime nums between 1 to 100 & their sum.
 */
let sum = 0;

for (let num = 1; num <= 100; num++) {
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num);
        sum+=num;
    }
}

console.log('\nsum of the prime nums(1-100): ', sum, '\n\n');