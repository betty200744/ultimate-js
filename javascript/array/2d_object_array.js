

const samples = [10, 11, 12, 20, 21, 22];


const m = 3;
const n = samples.length / m;

var result = []
for (let i = 0; i < samples.length; i = i + m) {
    result.push({sn: samples[i], sub_sn: samples.slice(i + 1, i + m)});
}

console.log('result: ' + JSON.stringify(result, null, 4) + '\n')