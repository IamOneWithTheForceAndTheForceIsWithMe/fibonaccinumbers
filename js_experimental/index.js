let n = parseInt(prompt('Enter fibonacci number'));

function calculateFibonacciNumberWithFor(n) {
    let first = 1;
    let second = 1;
    if (n === 1 || n === 2){
        return 1;
    }
    for (let i = 3; i <=n; i++){
        let temp = first;
        first = second;
        second = temp + first;
        //document.write(second + ' ');
    }
    return second;
}

document.write('<p>Fibonacci calculated with "for" cycle: ' + calculateFibonacciNumberWithFor(n) + '</p>');



function calculateFibonacciNumberWithRecursion(n, i) {
    document.write('<p>' + 'number=' + n + '; depth of stack= ' + i + '</p>');
    if (n === 1  ||  n === 2){
        return 1;
    }
    return calculateFibonacciNumberWithRecursion(n-1, i + 1) + calculateFibonacciNumberWithRecursion(n-2, i +1);
}

document.write('<p>Calculated with recursion: ' + calculateFibonacciNumberWithRecursion(n, 1) + '</p>');




