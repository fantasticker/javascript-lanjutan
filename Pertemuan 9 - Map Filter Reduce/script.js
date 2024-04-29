const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// const newAngka = [];
// for(let i = 0; i < angka.length; angka++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// Array.prototype.filter
// Ambil semua angka di dalam array angka yang nilainya >= 3
// const newAngka = angka.filter(function(a){
//     return a >= 3})

// Array.prototype.map
// Kalikan semua angka dengan 2
// const newAngka = angka.map(function(a){
//     return a*2;
// })

// Array.prototype.reduce
// Jumlahkan angka indeks ke-i dengan angka indeks ke-i+1
// const newAngka = angka.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan

const hasil = angka.filter(a => a>5)
.map(a => a*3)
.reduce((acc, cur) => acc + cur);