const pool = require('../config/db');

const getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json({
            status: 'success',
            data: result.rows,
        });
    } catch (err) {
        res.status(500).json({ 
            status: 'error', 
            message: 'Failed to retrieve products', 
            error: err.message 
        });
    }
};

module.exports = {
    getProducts,
};
