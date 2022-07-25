define (['mul'], function(mul) {
        function square(x) {
            return mul (x, x);
        }
        console.log('Square loaded');
        return square;
    }
);