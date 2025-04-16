// Initialize MongoDB collections
db = db.getSiblingDB('streamMovieDb');

// Create collections
db.createCollection('streamMovieCollection');
db.createCollection('streamMovieGallery');
