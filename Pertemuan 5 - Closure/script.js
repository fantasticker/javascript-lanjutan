// // Closure adalah kondisi dimana sebuah fungsi mengambil variabel dari parent-nya.
// function init(){
//     // let nama = 'sandhika';
//     // let umur = '33'  
//     function tampilNama(nama){
//         console.log(nama);
//     }
//     // console.dir(tampilNama);
//     return tampilNama;
// }

// init();

// let panggilNama = init();
// panggilNama('Vissi');

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan.`)
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Sandhika');

let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

counter = 10;

console.log(add());
console.log(add());
console.log(add());