
//Buat File baru PolimorfismePPLG
//Buat 2 method skillcoding, levelCoding

// class skillPPLG{
//     constructor(nama, skillCoding, levelCoding) {
//         this.nama = nama;
//         this.skillCoding= skillCoding;
//         this.levelCoding= levelCoding;
//     }

//     skillCoding(){
//         console.log(`Siswa ini ${this.nama} memiliki skill coding sebanyak ${this.skillCoding}`);
//     }

//     levelCoding(){
//         console.log(`Siswa ini ${this.nama} memiliki level coding sebanyak ${this.skillCoding}`);
//     }
// }

// const  = new siswa("agung", "ahli", 80)

// siswa1.skillCoding();


// 1. Kelas Induk (Superclass)
// class Hewan {
//     constructor(nama) {
//         this.nama = nama;
//     }

//   // Method 1
//     bersuara() {
//         console.log(`${this.nama} membuat suara standar.`);
//     }

//   // Method 2
//     bergerak() {
//         console.log(`${this.nama} bergerak maju.`);
//     }
// }

// // 2. Kelas Turunan 1 (Subclass Anjing)
// class Anjing extends Hewan {
//   // Overriding Method 1
//     bersuara() {
//         console.log(`${this.nama} menggonggong: Guk Guk!`);
//     }

//   // Overriding Method 2
//     bergerak() {
//         console.log(`${this.nama} berlari dengan empat kaki.`);
//     }
// }

// // 3. Kelas Turunan 2 (Subclass Burung)
// class Burung extends Hewan {
//   // Overriding Method 1
//     bersuara() {
//         console.log(`${this.nama} berkicau: Cicit Cuit!`);
//     }

//   // Overriding Method 2
//     bergerak() {
//         console.log(`${this.nama} terbang mengepakkan sayap.`);
//     }
// }

// // === UJI COBA POLIMORFISME ===

// const daftarHewan = [
//     new Anjing("Doggy"),
//     new Burung("Pipit")
// ];

// // Memanggil 2 method yang sama pada objek yang berbeda
// daftarHewan.forEach(hewan => {
//     hewan.bersuara(); // Output berubah sesuai objeknya
//     hewan.bergerak(); // Output berubah sesuai objeknya
//     console.log("--------------------");
// });

class skillPPLG{
    constructor(nama, skillCoding, levelCoding){
        this.nama = nama;
        this.skillCoding = skillCoding;
        this.levelCoding = levelCoding;
    }

    tampilkannama(){
        console.log("nama siswa ini: " + this.nama);
    }

    tampilkanskillCoding(){
        console.log("skill siswa ini: " + this.skillCoding);
    }

    tampilkanlevelCoding(){
        console.log("level siswa ini: " + this.levelCoding);
    }
}

const skillPPLG1 = new skillPPLG("Agung", "ahli", 100);
skillPPLG1.tampilkannama();
skillPPLG1.tampilkanskillCoding();
skillPPLG1.tampilkanlevelCoding();

const skillPPLG2 = new skillPPLG("Azis", "tak diketahui", 0);
skillPPLG2.tampilkannama();
skillPPLG2.tampilkanskillCoding();
skillPPLG2.tampilkanlevelCoding();

const skillPPLG3 = new skillPPLG("Alvin", "efgh", 1000);
skillPPLG3.tampilkannama();
skillPPLG3.tampilkanskillCoding();
skillPPLG3.tampilkanlevelCoding();

const skillPPLG4 = new skillPPLG("Bagas", "abcd", 100000);
skillPPLG4.tampilkannama();
skillPPLG4.tampilkanskillCoding();
skillPPLG4.tampilkanlevelCoding();
