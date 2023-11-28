-- menu_item Table
CREATE TABLE menu_item (
    itemID INT PRIMARY KEY,
    itemName VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2),
    itemImage TEXT
);

-- ingredient Table
CREATE TABLE ingredient (
    ingredientID INT PRIMARY KEY AUTO_INCREMENT,
    ingredientName VARCHAR(255)
);

-- menu_item_ingredient Relationship Table
CREATE TABLE item_ingredient (
    itemID INT,
    ingredientID INT,
    PRIMARY KEY (itemID, ingredientID),
    FOREIGN KEY (itemID) REFERENCES menu_item(itemID),
    FOREIGN KEY (ingredientID) REFERENCES ingredient(ingredientID)
);

-- customer Table
CREATE TABLE customer (
    customerID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(50),
    zip VARCHAR(10),
    rewardPoints INT,
    created_at DATETIME,
    updated_at DATETIME,
    email VARCHAR(255)
);

-- employeeType Table
CREATE TABLE employeeType (
    typeID INT PRIMARY KEY AUTO_INCREMENT,
    typeName VARCHAR(255) UNIQUE
);

-- employee Table
CREATE TABLE employee (
    employeeID INT PRIMARY KEY AUTO_INCREMENT,
    pin VARCHAR(255) UNIQUE,
    typeID INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(50),
    zip VARCHAR(10),
    clockedIn BOOLEAN,
    hourlyRate DECIMAL(10,2),
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (typeID) REFERENCES employeeType(typeID)
);

-- orders Table
CREATE TABLE orders (
    orderID INT PRIMARY KEY AUTO_INCREMENT,
    orderStatus VARCHAR(20),
    menuItems TEXT,
    created_at DATETIME,
    updated_at DATETIME,
);

-- order_item Relationship Table
CREATE TABLE order_item (
    orderID INT,
    itemID INT,
    itemQuantity INT,
    PRIMARY KEY (orderID, itemID),
    FOREIGN KEY (orderID) REFERENCES orders(orderID),
    FOREIGN KEY (itemID) REFERENCES menu_item(itemID)
);

-- restaurant_table Table
CREATE TABLE restaurant_table (
    tableID INT PRIMARY KEY,
    tableStatus ENUM('occupied', 'empty'),  -- Adjust this as per your requirements
    orderID INT,
    FOREIGN KEY (orderID) REFERENCES orders(orderID)
);

-- payment_methods Table
CREATE TABLE payment_methods (
    paymentMethodID INT PRIMARY KEY,
    methodName VARCHAR(255)
);

-- transaction Table
CREATE TABLE transaction (
    transactionID INT PRIMARY KEY AUTO_INCREMENT,
    customerID INT,
    employeeID INT,
    orderID INT,
    methodOfPayment INT,
    timeStamp DATETIME,
    subtotal DECIMAL(10,2),
    tax DECIMAL(10,2),
    tip DECIMAL(10,2),
    transTotal DECIMAL(10,2),
    FOREIGN KEY (customerID) REFERENCES customer(customerID),
    FOREIGN KEY (employeeID) REFERENCES employee(employeeID),
    FOREIGN KEY (orderID) REFERENCES orders(orderID),
    FOREIGN KEY (methodOfPayment) REFERENCES payment_methods(paymentMethodID)
);

-- transaction_item Relationship Table
CREATE TABLE transaction_item (
    transactionID INT,
    itemID INT,
    PRIMARY KEY (transactionID, itemID),
    FOREIGN KEY (transactionID) REFERENCES transaction(transactionID),
    FOREIGN KEY (itemID) REFERENCES menu_item(itemID)
);

-- reservation Table
CREATE TABLE reservation (
    reservationID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    customerID INT,
    dateTime DATETIME,
    numPeople INT,
    tableSelection INT,
    FOREIGN KEY (customerID) REFERENCES customer(customerID),
    FOREIGN KEY (tableSelection) REFERENCES restaurant_table(tableID),
    created_at DATETIME,
    updated_at DATETIME
);

-- time_log Table
CREATE TABLE time_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employeeID INT,
    timeClockedIn DATETIME,
    timeClockedOut DATETIME,
    FOREIGN KEY (employeeID) REFERENCES employee(employeeID)
);
