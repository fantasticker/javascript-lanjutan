function satu(){ //4. hoisting
    var nama = 'sandhika';
    console.log(nama); //5. cek variabel nama di lokal context -> parameter -> global. karena ada di lokal maka sandhika akan di cetak
}

function dua(){ //7. hoisting
    console.log(nama); //8. cek variabel nama di lokal context -> parameter -> global. karena ada di global maka erik akan di cetak. doddy akan disimpan di dalam objek dengan nama arguments, bisa dicek dengan console.log(arguments)
}

console.log(nama); //1. pertama di eksekusi, karena variabel nama dibuat setelah console.log maka undefined akan dicetak
var nama = 'erik'; //2. memberikan nilai erik pada variabel nama
satu(); //3. eksekusi
dua('doddy'); //6. eksekusi
console.log(nama); //9. cek variabel nama di global, karena ada di globak, maka erik akan di cetak

// yang tampil di console log adalah
// undefine, sandhika, erik, erik