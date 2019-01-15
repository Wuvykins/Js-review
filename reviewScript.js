//console.log("Introduction to JavaScript");

function FizzBizz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        }
        else if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}
FizzBizz();

function countBs(str, letter)
{
    let count = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) === letter)
        {
            count++;
        }
    }
    return count;

}
console.log("countBs: " + countBs('BubBles', 'B'));

function countChar(str, letter)
{
    let count = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) === letter)
        {
            count++;
        }
    }
    return count;
}

console.log("countChar: " + countChar("Orange Italian Soda", 'a'));
