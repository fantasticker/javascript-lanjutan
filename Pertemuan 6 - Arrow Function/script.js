let mahasiswa = ['sandhika galih', 'doddy ferdiansyah', 'erik'];

let jumlahHuruf = mahasiswa.map((nama) => ({nama: nama, jmlHuruf: nama.length}));

console.table(jumlahHuruf);