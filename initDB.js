db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      {
        role: "readWrite",
        db: "orders"
      }
    ]
  }
);


testsDB = db.getSiblingDB('orders');

testsDB.createUser(
  {
    user: "order",
    pwd: "order",
    roles: [
      {
        role: "readWrite",
        db: "orders"
      }
    ]
  }
);

