const MONGO_USERNAME = process.env.DB_USERNAME
const MONGO_USER_PASSWORD = process.env.DB_PASSWORD
const MONGO_DB_NAME = process.env.DB_USERNAME

export const MONGO_URI = process.env.MONGO_URI || 'mongodb://admin:admin@mongo:27017/my_db'
// export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_USER_PASSWORD}@mongo_db:27017/${MONGO_DB_NAME}`
// export const MONGO_URI = `mongodb://mongo_db:27017/`

export const PORT = process.env.PORT || 3000;
