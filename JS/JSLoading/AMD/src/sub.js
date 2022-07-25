// sub function not having any dependency
define([], () => {
   function sub(x, y) {
      return x-y;
   }
   return sub;
});