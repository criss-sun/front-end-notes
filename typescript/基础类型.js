var isDone = false;
var num = 6;
var str = 'abcdefg';
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var tuple1 = [1, '123'];
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
var colorName = Color[3];
console.log(colorName);
var notSure;
notSure = '123';
notSure = 123;
var arr3 = [1, 2, 3];
arr3[1] = '2';
function voidTest() {
    console.log('void');
}
function neverTest() {
    throw new Error('徐毅叶死了');
}
// neverTest()
function objectTest(obj) {
    console.log(obj);
}
objectTest({ name: 'monkey' });
