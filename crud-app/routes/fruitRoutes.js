const express = require('express');
const {
  getAllFruits,
  createFruit,
  updateFruit,
  deleteFruit,
} = require('../controllers/fruitController');
const router = express.Router();

router.get('/', getAllFruits);
router.post('/', createFruit);
router.put('/:id', updateFruit);
router.delete('/:id', deleteFruit);

module.exports = router;
