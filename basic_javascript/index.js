// comment seharusnya menjelaskan why and how
let name = 'prasojo';
let sengaja_undefined;

let a = 1;
let b , c, d;
b = 3;
c = 5;
d = a +b +c;

// beberapa operator
// kalo tambah kurang kali bagi udah biasa disemua programming language
let pangkat, modulus;
pangkat = d ** b;
modulus = d % c;
increment = ++c;

let bigger, smaller, equal, equal2, equalvalue_type, log_and , log_or;
bigger = d > b;
smaller = b < d;
equal = 1+4 == 3+2;
equal2 = 5 == '5';
equalvalue_type = 5 === '5';
log_and = true && false;
log_or = true || false;

let x , y, z;
x = 15;
y = 31;
z = x & y;


let nama, nomor, objek, yglucu, coba;
nama = 'prasojo';
nomor = 2345;
objek = {
    firstname :'prasojo',
    lastname :'jiwandono'
        };
yglucu = c+'40';
coba = yglucu + 100;

function perkalian(nomor1, nomor2){
    return nomor1 * nomor2;
}

let kali = perkalian(4,5);

// var dengan let bedannya di scope, var scopenya lebih luas dibanding let 

var person = {
    firstname : 'John',
    lastname : 'Doe',
    id       : 332,
    fullname : function(){
        return this.firstname +' '+this.lastname;
    }
};


let waktu, ucapkan;

waktu = 21;

if (waktu<10){
    ucapkan = 'good morning';
} else if (waktu<20){
    ucapkan = 'good day';
} else {
    ucapkan = 'good evening';
}

let txt = 'nama saya prasojo jiwandono, saya seorang manusia';
let panjang_txt = txt.length;
let pos = txt.indexOf('saya');
let last_pos = txt.lastIndexOf('saya');
let last_pos2 = txt.lastIndexOf('emang ga ada');
let cari = txt.search('prasojo');


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = 'avocado';
var first = fruits[0];

let text;
text ='';
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }




// console.log(sengaja_undefined);

// console.log(d);
// console.log(pangkat)
// console.log(modulus)
// console.log(increment)
// console.log(bigger);
// console.log(equal);
// console.log(smaller);
// console.log(equal2);
// console.log(equalvalue_type);
// console.log(log_and);
// console.log(log_or);
// console.log(z);
// console.log(objek);
// console.log(yglucu);
console.log(coba);
console.log(kali);
console.log('tentang objek')
console.log(person.id);
console.log(person.fullname());

console.log('tentang if')
console.log(ucapkan);


console.log('some of string manipulation')
console.log(panjang_txt);
console.log(pos);
console.log(last_pos);
console.log(last_pos2);
console.log(cari);

console.log('tentang array');
console.log(fruits.length);
console.log(first);
console.log(fruits);

console.log(text);