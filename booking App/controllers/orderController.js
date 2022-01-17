
const bcrypt = require("bcryptjs");

const Order = require("../models/Order");
const Good = require("../models/Good");
const Customer = require("../models/Customer");
const paginate = require("../helpers/paginate");


module.exports = {


  getAll: async (req, res) => {

    res.json(await paginate(Order, req.query.page, { deletedAt: null }));


  },
  getById: async (req, res) => {


    const { id } = req.params;

    const order = await Order.findById(id).exec();

    return res.status(200).send(order)


  },
  create: async (req, res) => {

    const { startDate, endDate, isPublished, goods } = req.body;

    // find all goods by there ids
    const resGoods = await Good.find().where("_id").in(goods.map(g => g._id)).exec();

    // Clculate the price
    const totalPrice = resGoods.reduce((pre, val, index) => {
      return pre + (val.price * req.body.goods[index].quantiy);
    }, 0);

    // Create the customer
    const customer = new Customer(req.body.customer);

    // create the order 
    const order = new Order({
      startDate,
      endDate,
      isPublished,
      totalPrice,
      customer,
      goods: resGoods.map((g, i) => ({ good: g, quantiy: +goods[i].quantiy }))
    });

    await order.save();

    return res.status(201).send({ data: order, message: "Order created successfully" });

  },
  update: async (req, res) => {

    const { startDate, endDate, isPublished, goods } = req.body;

    const resGoods = await Good.find().where("_id").in(goods.map(g => g._id)).exec();


    const totalPrice = resGoods.reduce((pre, val, index) => {
      return pre + (val.price * req.body.goods[index].quantiy);
    }, 0);


    const customer = new Customer(req.body.customer);

    const order = await Order.findByIdAndUpdate(req.params.id, {
      startDate,
      endDate,
      isPublished,
      totalPrice,
      customer,
      goods: resGoods.map((g, i) => ({ good: g, quantiy: +goods[i].quantiy }))
    });

    return res.status(201).send(order);


  },
  destroy: async (req, res) => {

    const order = await Order.findByIdAndUpdate(req.params.id, { deletedAt: new Date() });

    res.json(order);

  },
  async restore(req, res) {

    const order = await Order.findByIdAndUpdate(req.params.id, { deletedAt: null });

    res.json(order);

  }

}