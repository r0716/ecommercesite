const productData = require(`../Data/products.js`)

const getProducts = (req,res) => {
    const products = productData.getProducts();
    res.send(products);
};

const getProduct = (req, res) => {
    try {
        const product = productData.getProduct(req.params.id);
        res.send(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

};

const getDepartment = (req, res) => {
    try {
        const department = productData.getDepartment(req.params.department);
        res.send(department);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

};


module.exports = {
    getProducts,
    getProduct,
    getDepartment
}