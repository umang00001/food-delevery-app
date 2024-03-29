const express = require('express');
const app = express();
const router = express.Router();
const { createOrganization, createItem, createPricing, getItems, getOrganizations } = require("../controller/controller")
const multer = require("multer");


// const upload = multer({
//     storage: multer.diskStorage({
//         distination: function (req, file, cb) {
//             cb(null, "../upload");
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now())
//         }
//     })
// }).single("photo")



router.post("/create-organization", createOrganization)
router.post("/create-item", createItem)
router.post("/create-pricing", createPricing)
router.get("/get-items", getItems)
router.get("/get-organization", getOrganizations)


module.exports = router