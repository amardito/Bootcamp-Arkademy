const mongoose = require('mongoose');

// const specialschema = mongoose.Schema();
const arkaschema = mongoose.Schema({
    nama_produk : {type : String},
    keterangan: {type: String},
    harga: {type: Number},
    jumlah: {type: Number}
});

module.exports = mongoose.model('arka', arkaschema);