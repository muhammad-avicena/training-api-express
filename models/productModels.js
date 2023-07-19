const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        productQuantity: {
            type: Number,
            required: true,
            default: 0
        },
        productPrice: {
            type: Number,
            required: true
        },
        productImage: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const productModels = mongoose.model('Product', productSchema);

module.exports = productModels;