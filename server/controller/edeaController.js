const db = require('../utills/database');

exports.getAll = async (req, res, next) => {
    const query = `SELECT OrderId, Customer, Address, City, Region, ShippingCost
                   FROM orders 
                   JOIN customers ON CompanyName = CustomerId 
                   ORDER BY Customer`;

    try {
        const [ orders ] = await db.query(query);
        return res.status(200).json(orders);
    } catch (error) {
        error.code = 403;
        next(error);
    }
}

exports.getStatistic = async (req, res, next) => {
    const query = `SELECT COUNT(OrderId) AS 'totalOrders',
                   SUM(ShippingCost) AS 'total_shippingCost',
                   AVG(ShippingCost) AS 'shippingCost_average'
                   FROM orders;`;

    try {
        const [ response ] = await db.query(query);
        const [ statistic ] = response;
        return res.status(200).json(statistic);
    } catch (error) {
        error.code = 403;
        next(error);
    }
}