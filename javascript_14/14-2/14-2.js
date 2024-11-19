let a = 10;
let b = 0;
let c;

try {
    if (b === 0) {
        throw new Error('0で割ろうとしています');
    }
    c = a / b;
} catch (e) {
    console.log(e.message);
} finally {
    c = 0;
}
console.log(c);
