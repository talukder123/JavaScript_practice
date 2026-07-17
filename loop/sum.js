/**
 * sum all the even nums between 1-50
 */

let i = 0, sum = 0;
while (i <= 50)
{
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}

console.log('sum = ', sum);