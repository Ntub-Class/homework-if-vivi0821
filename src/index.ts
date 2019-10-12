//n1086727 曾淑芬
// 請介紹兩個字串方法跟數字方法

let orig : string = '   foo  ';
console.log(orig.trim()); 
//ans:foo
//將字串左右去空白

let sentence : string = 'The quiAAAAAarown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());
//ans: the quiaaaaaarown fox jumps over the lazy dog.
//將字串裡的字元通通轉成小寫

console.log(Number.isInteger(5.123));
console.log(Number.isInteger(5));
//ans:false
//    true
// Number.isInteger 判斷內容值是否為整數


console.log(Number.parseFloat('5.123'));
console.log(Number.parseFloat("一"));
//ans:5.123
//    NaN
//Number.parseFloat(string) 
//將參數值轉為浮點數,如果無法被解析成浮點數則傳回NaN


// 錢錢大於一個值，叫乾爹

let money = 40000;
let limit = 500000; // 限制值

if (money>limit)
{
    console.log ("乾爹");
}
else
{
    console.log ("乾兒子");
}
  