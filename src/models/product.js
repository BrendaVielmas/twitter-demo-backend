'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['Drinks', 'Desserts'] },
    description: String
})

module.exports = mongoose.model('Product', ProductSchema)