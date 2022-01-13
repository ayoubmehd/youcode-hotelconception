
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    childs: [
        { age: Number }
    ]
})

const orderSchema = new Schema({
    startDate: {
    type: Date,
    required: true

  },
  endDate: {
    type: Date,
    required: true
  },
  isPublished: {
    type: Boolean,
    required: true,
    default: false 
  },
  totalPrice: {
    type: Schema.Types.Decimal128,
  },
  goods: [{ type: Schema.Types.ObjectId, ref: 'Good' }],
//   customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  customer:customerSchema ,
  
  create_at: { type: Date, default: Date.now },


});

module.exports = mongoose.model("Order", orderSchema);

