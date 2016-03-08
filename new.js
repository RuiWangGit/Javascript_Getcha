     function New (f) {
// /*1*/  var n = { '__proto__': f.prototype };      
       return function () {
/*2*/    f.apply(n, arguments);
/*3*/    return n;
       };
     }



 function Point(x, y) {
    this.x = x;
    this.y = y;
    }
Point.prototype = {
  print: function () { console.log(this.x, this.y); }
};
 
var p1 = new Point(10, 20);
p1.print(); // 10 20
console.log(p1 instanceof Point); // true
 
var p2 = New (Point)(10, 20);
p2.print(); // 10 20
console.log(p2 instanceof Point); // true


// Object.create = function (parent) {
//   function F() {}
//   F.prototype = parent;
//   return new F();
// };

// Object.create = function (parent) {
//   return { '__proto__': parent };
// };