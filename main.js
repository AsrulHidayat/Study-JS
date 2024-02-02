// // = Garis miring 4 untuk komentar
// =  Garis miring 2 untuk Percobaan Code

// // alert : menampilkan pop up
// alert('heyho')

// // Terlihat di bagian console di inspect chrome. Gunanya untuk debugging, ke developer lain.
// console.log('yoo broh')


// // var, const, dan let digunakan untuk menampung variabel.

// var usia =  30 
// const x = 1 //Constanta : tidak dapat diubah-ubah
// let y = 2 //mirip dengan var : bisa diubah dengan bebas
// console.log('Yo usia kamu 20' + usia)

// // Contoh

// // let : code dieksekusi dan menyesuaikan dengan variable 
// let usia = 30
// usia = 35
// console.log('yoo usia kamu' +  usia)

// // const : Code hanya dieksekusi secara tunggal.
// const usia2 = 30
// console.log('yoo usia kamu' +  usia2)

// // percobaan di bagian alert dengan inputan
// let usia = prompt('berapa usia kamu?')
// alert('usia anda adalah ' + usia)


// // muncul pop up tampilan "nama anda adalah Asrul Hidayat dan usia anda adalah 20"
// let nama = 'Asrul Hidayat' // tipe string
// let usia =  20 // tipe integer atau number

// alert('nama anda adalah ' + nama + ' dan usia anda adalah ' + usia)


// // // di sini berat badan terbaca undefined dam pacar terbaca null
// let nama = 'Asrul Hidayat' // tipe string
// let usia =  20 // tipe integer atau number
// let tinggiBadan = 173.5 // tipe double float
// let beratBadan 
// let pacar = null //tipe data kosong

// // `` ${} : mirip + cuma lebih efisien untuk digunakan karena tidak menggunkan lagi tanda kutip
// alert(
//     `nama saya ${nama} usia saya adalah ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`
//     )

// // di sini berat badan terbaca undefined dam pacar terbaca null
let nama = 'Asrul Hidayat' // tipe string
let usia =  20 // tipe integer atau number
let tinggiBadan = 173.5 // tipe double float
let beratBadan 
let pacar = 1

beratBadan = 60

// // kondisi if = jika, else = kalau tidak
// // If else : Cocok digunakan ketika kondisi yang diuji cukup kompleks dan tidak dapat diwakilkan dengan baik oleh struktur switch-case.
// if(pacar == null){
//     pacar = 'belum punya'
// }else {
//     pacar ='sudah punya'
// }


/* Kapan Menggunakan switch-case:

    Kondisi yang bersifat seragam: 
    switch-case cocok digunakan  ketika terdapat banyak kondisi yang bersifat seragam atau dapat dievaluasi sebagai kasus yang terpisah.

    Membandingkan nilai dengan beberapa opsi: 
    Jika nilai yang diuji perlu dibandingkan dengan beberapa opsi yang mungkin, switch-case bisa lebih mudah dibaca.
*/

// switch(pacar){
//     case 1:
//         pacar = 'punya 1 aja'
//         break;
//     case 2 :
//         pacar ='sudah punya 2, playboy men'
//         break;
//     default:
//         pacar = 'Gak punya pacar'
//         break;
// }


if(pacar == null){
    pacar = 'belum punya pacar'
}else {
    pacar ='sudah punya pacar'
}

// Operator

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

const x = 9
const y = 5
const z = x * y
const a = x / y

alert(`nilai x = ${x} dikali nilai y = ${y} maka hasilnya adalah ${z}`)

alert(
    `nama saya ${nama} usia saya adalah ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan saya ${pacar}`
    )
alert(
    `saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan}. Jadi total saldo yang saya miliki adalah sebanyak Rp.${saldoAkhir}`
)



