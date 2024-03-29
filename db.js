const mongoose = require('mongoose');


const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://umang:umang@cluster0.hvvcj0v.mongodb.net/food-delever")
        console.log("database  is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;