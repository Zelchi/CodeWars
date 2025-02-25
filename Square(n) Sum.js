const numbers = [1, 2, 2]

const squareSum = (nums) => {
    let sum = 0;
    for (let num of nums) {
        sum += num * num;
    }
    return sum;
}

console.log(squareSum(numbers));