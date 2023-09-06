- menu_item Table
CREATE TABLE menu_item (
    itemID INT PRIMARY KEY,
    itemName VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2)
);

-- ingredient Table
CREATE TABLE ingredient (
    ingredientID INT PRIMARY KEY,
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

-- user_info Table
CREATE TABLE user_info (
    userID INT PRIMARY KEY,
    userType INT,
    accountType INT,
    username VARCHAR(255) UNIQUE,  -- Assuming usernames are unique
    password VARCHAR(255),
    rewardPoints INT,
    created_at DATETIME,
    updated_at DATETIME
);

-- orders Table
CREATE TABLE orders (
    orderID INT PRIMARY KEY,
    userID INT NOT NULL,
    orderStatus ENUM('pending', 'completed'),  -- Adjust this as per your requirements
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (userID) REFERENCES user_info(userID)
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

-- account Table
CREATE TABLE account (
    accountType INT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(50),
    zip VARCHAR(10),
    created_at DATETIME,
    updated_at DATETIME
    FOREIGN KEY (accountType) REFERENCES user_info(accountType),
);

-- payment_methods Table
CREATE TABLE payment_methods (
    paymentMethodID INT PRIMARY KEY,
    methodName VARCHAR(255)
);

-- transaction Table
CREATE TABLE transaction (
    transactionID INT PRIMARY KEY,
    userID INT,
    employeeID INT,  -- Needs to be connected to an employees table or another relevant table
    orderID INT,
    methodOfPayment INT,
    timeStamp DATETIME,
    subtotal DECIMAL(10,2),
    tax DECIMAL(10,2),
    tip DECIMAL(10,2),
    transTotal DECIMAL(10,2),
    FOREIGN KEY (userID) REFERENCES user_info(userID),
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
    reservationID INT PRIMARY KEY,
    name VARCHAR(255),
    userID INT,
    dateTime DATETIME,
    numPeople INT,
    tableSelection INT,
    FOREIGN KEY (userID) REFERENCES user_info(userID),
    FOREIGN KEY (tableSelection) REFERENCES restaurant_table(tableID),
    created_at DATETIME,
    updated_at DATETIME
);

-- time_log Table
CREATE TABLE time_log (
    id INT PRIMARY KEY,
    userID INT,
    timeClockedIn DATETIME,
    timeClockedOut DATETIME,
    FOREIGN KEY (userID) REFERENCES user_info(userID)
);