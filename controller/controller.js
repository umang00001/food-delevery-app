const organization = require("../models/organization")
const item = require("../models/item");
const pricing = require("../models/pricing")


const createOrganization = async (req, resp) => {
    try {
        // const { id, name } = req.body
        console.log(req.body)
        let result = new organization(req.body)
        result = await result.save();
        resp.status(201).send({ success: true, message: "Organization created successfully", data: result });
    } catch (error) {
        resp.status(400).send({ error: error, success: false, message: error.message });
    }

}


const createItem = async (req, resp) => {
    try {
        // let photo = req.file

        let { id, description, type, price } = req.body
        console.log(id, description, type, price)
        let result = new item({ id: id, description, type, price })
        result = await result.save();
        resp.status(201).send({ success: true, message: "Item created successfully", data: result });
    } catch (error) {
        resp.status(400).send({ error: error, success: false, message: error.message });
    }
}

const createPricing = async (req, resp) => {
    try {
        let result = new pricing(req.body)
        result = await result.save();
        resp.status(201).send({ success: true, message: "Pricing created successfully", data: result });
    } catch (error) {
        resp.status(400).send({ success: false, message: error.message });
        console.log(error)
    }
}
const getItems = async (req, resp) => {
    try {
        const result = await item.find()
        resp.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        resp.status(400).send({
            success: false,
            message: error.message
        })
    }
}

const getOrganizations = async (req, resp) => {
    try {
        const result = await organization.find()
        resp.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        resp.status(400).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createOrganization,
    createItem,
    createPricing,
    getItems,
    getOrganizations
}