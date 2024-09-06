const Fruit = require('../models/Fruit');

exports.getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.findAll();
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createFruit = async (req, res) => {
  const { name, weight, value } = req.body;
  try {
    const fruit = await Fruit.create({ name, weight, value });
    res.status(201).json(fruit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateFruit = async (req, res) => {
  const { id } = req.params;
  const { name, weight, value } = req.body;
  try {
    const fruit = await Fruit.findByPk(id);
    if (!fruit) return res.status(404).json({ message: 'Fruit not found' });
    await fruit.update({ name, weight, value });
    res.json(fruit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteFruit = async (req, res) => {
  const { id } = req.params;
  try {
    const fruit = await Fruit.findByPk(id);
    if (!fruit) return res.status(404).json({ message: 'Fruit not found' });
    await fruit.destroy();
    res.json({ message: 'Fruit deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
