
// Latihan JavaScript Dasar - Minggu 06
// Kalkulator nilai rapor di Console

// 1. Pesan pertama ke Console
console.log("Halo, saya Muhamad Zeind!");
console.log("Ini latihan JavaScript pertamaku.");


// 2. Data siswa
const nama = "Muhamad Zeind Nur Rofiqi";
const kelas = "X RPL";
const kkm = 75;

let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas: ${nilaiTugas}`);
console.log(`Nilai UTS: ${nilaiUts}`);
console.log(`Nilai UAS: ${nilaiUas}`);


// 3. Fungsi

// Menghitung rata-rata nilai
const hitungRataRata = (tugas, uts, uas) =>
    (tugas + uts + uas) / 3;


// Menentukan predikat
function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}


// Membuat laporan nilai siswa
function rapor(namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata(tugas, uts, uas);

    return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}


// 4. Hasil nilai siswa

const rataRata = hitungRataRata(
    nilaiTugas,
    nilaiUts,
    nilaiUas
);

const lulus = rataRata >= kkm;

const dapatSertifikat = lulus && kehadiran >= 80;

console.log("===== HASIL NILAI RAPOR =====");

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);


// Pesan kelulusan
if (lulus) {
    console.log("Selamat, kamu lulus KKM!");
} else {
    console.log("Tetap semangat, ikuti remedial ya.");
}


// 5. Menguji fungsi predikat

console.log("===== UJI FUNGSI PREDIKAT =====");

console.log(`predikat(95) = ${predikat(95)}`);
console.log(`predikat(90) = ${predikat(90)}`);
console.log(`predikat(84) = ${predikat(84)}`);
console.log(`predikat(70) = ${predikat(70)}`);
console.log(`predikat(69) = ${predikat(69)}`);


// 6. Rapor beberapa siswa

console.log("===== RAPOR SISWA =====");

console.log(rapor("Zeind", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));
