
const bcrypt = require("bcryptjs");

const Order = require("../models/Order");


module.exports={

      
      getAll :  async (req, res) => {
        // const {  email, password } = req.body;

        res.status(200).send({
            message: "order getAll"
        })


      },
      getById :  async (req, res) => {

      
        const {id } = req.params;

         const order =  await Order.findById(id).exec();

        return res.status(200).send(order)


      },
      Create :  async (req, res) => {

        const {startDate, endDate, isPublished ,totalPrice, customer } = req.body;

        order = new Order({
            startDate,
            endDate,
            isPublished,
            totalPrice,
            customer
          });
        
         await order.save();
        
        return res.status(201).send(order)

      },
      Update :  async (req, res) => {

        res.status(200).send({
            message: "order Update"
        })


      },
      Destroy :  async (req, res) => {
        res.status(200).send({
            message: "order Destroy"
        })


      }

}