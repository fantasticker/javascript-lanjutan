// Cara yang lebih singkat dalam membuat function expression
let mahasiswa = ['sandhika galih', 'doddy ferdiansyah', 'erik'];

let jumlahHuruf = mahasiswa.map((nama) => ({nama: nama, jmlHuruf: nama.length}));
// Fungsi diatas adalah fungsi yang berisi objek

console.table(jumlahHuruf);