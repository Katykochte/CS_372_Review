// Initialize MongoDB collections
db = db.getSiblingDB('streamMovieDb');

// Create collections
db.createCollection('streamMovieCollection');
db.createCollection('streamMovieGallery');

// Add admin users
db.streamMovieCollection.insertOne({
    user: "contente@movie.com",
    password: "5d51c347dcd8c29e31b46eea80c6be56c764ba8b846bf9d307be476f2b43f588",
    salt: "eee14a43f2516d0b1699ce2bea782e28",
    failedAttempts: 0,
    role: "content editor",
    likedMovies: [],
    dislikedMovies: []
})

db.streamMovieCollection.insertOne({
    user: "contente2@movie.com",
    password: "e1605630ddfcf711d8bd8e2426e4cc96ecd0bae79c75f77056ef41af9281867f",
    salt: "5ae9578c394adb1bb446050bfac87ac6",
    failedAttempts: 0,
    role: "content editor",
    likedMovies: [],
    dislikedMovies: []
})

db.streamMovieCollection.insertOne({
    user: "marketman@movie.com",
    password: "e708cabedc14620ac0560a5ba99ecbea67587687d01ce7a7c53fa0f441313706",
    salt: "71ae7ed81ad0eeb79518389667d8dbdc",
    failedAttempts: 0,
    role: "marketing manager",
    likedMovies: [],
    dislikedMovies: []
})

db.streamMovieCollection.insertOne({
    user: "marketman2@movie.com",
    password: "593e64611b6c2f6e50172521d24d8167e0ee5f059859cb2610034e5091f4bee8",
    salt: "34850e59dcfaff2e78590327f7bef913",
    failedAttempts: 0,
    role: "marketing manager",
    likedMovies: [],
    dislikedMovies: []
})