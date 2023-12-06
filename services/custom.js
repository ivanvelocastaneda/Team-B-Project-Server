const db = require('./db');

async function getLatestOrders() {
    const data = await db.query(
      `SELECT 
      o.orderID,
      o.orderStatus,
      o.restaurantTable,
      o.created_at,
      o.updated_at
  FROM 
      orders o
  INNER JOIN 
      (SELECT restaurantTable, MAX(created_at) as MaxDate
       FROM orders
       GROUP BY restaurantTable) as latest
  ON 
      o.restaurantTable = latest.restaurantTable
      AND o.created_at = latest.MaxDate;
  `
    );
  
    return data;
  }


  async function getLatestOrder(orderID) {
    const data = await db.query(
      `SELECT 
      o.orderID,
      o.orderStatus,
      o.restaurantTable,
      o.created_at,
      o.updated_at
  FROM 
      orders o
  INNER JOIN 
      (SELECT restaurantTable, MAX(created_at) as MaxDate
       FROM orders
       GROUP BY restaurantTable) as latest
  ON 
      o.restaurantTable = latest.restaurantTable
      AND o.created_at = latest.MaxDate WHERE o.orderID = ?;
      `,
      [orderID]
    );
  
    return data;
  }
  
  module.exports = {
    getLatestOrders,
    getLatestOrder
  };