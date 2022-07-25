// mul function not having any dependency
define([], () => {
    function mul(x, y) {
       return x*y;
    }
    console.log('Mul loaded');
    return mul;
});