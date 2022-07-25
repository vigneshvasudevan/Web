var calc = calc || {};
calc.square = (x) => {
    return calc.mul(x, x);
};

console.log('Parsing square.js');
let dom = document.getElementById("foo");
if (dom) {
    dom.innerText = '5 Square is = ' + calc.square(5);
} else {
    console.error('Element with Id = foo not found');
}
