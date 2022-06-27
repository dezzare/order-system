db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      {
        role: "readWrite",
        db: "admin"
      }
    ]
  }
);


testsDB = db.getSiblingDB('my_db');

testsDB.createUser(
  {
    user: "order",
    pwd: "order",
    roles: [
      {
        role: "readWrite",
        db: "my_db"
      }
    ]
  }
);

