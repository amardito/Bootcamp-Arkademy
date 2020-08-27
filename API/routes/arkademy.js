const express = require('express');
const router = express.Router();
const Arka = require('../models/arka');

//show all availabe item
router.get('/', async (req, res, next) => {
    res.status(200).json(
        await Arka.find()
    );
});

//search an available id item
router.get('/:arkaid', async (req, res, next) => {
    res.status(200).json( 
        await Arka.findById({_id : req.params.arkaid})
    );
});

//create a item
router.post('/', async (req, res, next) => {
  const arka = new Arka({
    nama_produk : req.body.nama_produk,
    keterangan: req.body.keterangan,
    harga: req.body.harga,
    jumlah: req.body.jumlah
  });
  await arka.save();
  res.status(201).json({
      message: 'handle create idpacket',
      createdSpecial : arka
  });
});

//update some specific promos
router.put('/:arkaid', async (req, res, next) => {
  await Arka.updateOne({_id : req.params.arkaid}, {$set : req.body.data})
  res.status(200).send({updating : req.body.data});
});

//delete specific promos
router.delete('/:arkaid', async (req, res, next) => {
  await Arka.remove({_id : req.params.arkaid})
  .then(result => {
      res.status(201).json(result);
  });
});

module.exports = router;