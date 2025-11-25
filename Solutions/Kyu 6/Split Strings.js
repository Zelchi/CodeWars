function solution(str) {
    const result = [];

    for (let i = 0; i < str.length; i += 2) {
        let dupla = str[i] + (str[i + 1] || '_')
        result.push(dupla);
    }

    return result;
}

const s = solution("batataa")

console.log(s);