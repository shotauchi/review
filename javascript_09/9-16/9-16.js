let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = number.filter(function(e) {
    if (e % 2 == 0) {
        return true;
    } else {
        false;
    }
});
console.log(odd);
