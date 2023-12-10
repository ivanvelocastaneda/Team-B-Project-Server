const db = require('./db');

async function getLatestOrders() {
    const data = await db.query(
      `SELECT 
      o.orderID,
      o.orderStatus,
      o.restaurantTable,
      DATE_FORMAT(o.created_at, '%Y-%m-%d %H:%i:%s') as created_at,
      DATE_FORMAT(o.updated_at, '%Y-%m-%d %H:%i:%s') as updated_at
  FROM 
      orders o
  INNER JOIN 
      (SELECT restaurantTable, MAX(created_at) as MaxDate
       FROM orders
       GROUP BY restaurantTable) as latest
  ON 
      o.restaurantTable = latest.restaurantTable
      AND o.created_at = latest.MaxDate
      ORDER BY created_at DESC;
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
      DATE_FORMAT(o.created_at, '%Y-%m-%d %H:%i:%s') as created_at,
      DATE_FORMAT(o.updated_at, '%Y-%m-%d %H:%i:%s') as updated_at
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