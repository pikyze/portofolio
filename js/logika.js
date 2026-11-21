
// Tugas JavaScript Dasar - P1-W06
// Lima Soal Logika


// =====================================
// SOAL 1: GANJIL ATAU GENAP
// =====================================

function ganjilGenap(angka) {

    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }

}

console.log("===== SOAL 1: GANJIL GENAP =====");

console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`);
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`);
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`);


// =====================================
// SOAL 2: CELSIUS KE FAHRENHEIT
// =====================================

const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};

console.log("===== SOAL 2: KONVERSI SUHU =====");

console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`);
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`);
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`);


// =====================================
// SOAL 3: NILAI TERBESAR
// =====================================

function nilaiTerbesar(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }

}

console.log("===== SOAL 3: NILAI TERBESAR =====");

console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(80, 75, 80) = ${nilaiTerbesar(80, 75, 80)}`);
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`);


// =====================================
// SOAL 4: TAHUN KABISAT
// =====================================

function tahunKabisat(tahun) {

    return (tahun % 4 === 0 && tahun % 100 !== 0)
        || tahun % 400 === 0;

}

console.log("===== SOAL 4: TAHUN KABISAT =====");

console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`);
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`);
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`);
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`);


// =====================================
// SOAL 5: HARGA SETELAH DISKON
// =====================================

function hargaSetelahDiskon(total) {

    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }

}

console.log("===== SOAL 5: HARGA SETELAH DISKON =====");

console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`);
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`);
console.log(`hargaSetelahDiskon(75000) = ${hargaSetelahDiskon(75000)}`);
