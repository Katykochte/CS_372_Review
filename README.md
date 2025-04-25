# NOTE ** Please raise issues in the other repo, (https://github.com/Katykochte/CS_372_MovieProj2) NOT THIS ONE!!! Thank you!!! **

# Instructions on how to use:
1) First note there also needs to be an "uploads" folder inside the public folder but github doesn't let me upload an empty folder.
2) Everything from this repo should be in the same folder with matching subfolders as this repo on your machine.
3) Everything needed should be in the files, and once this is all on your local machine and given you have Docker the command "docker-compose up --build" should start everything
   up and it will eventually say "web-1      | Server running on port 6543" on your terminal. That means it's good and working. Going to http://localhost:6543/ should now pull up
   the website and all it's functionalities.
4) There are 4 admin accounts that come with:
   User: contente@movie.com 
   Password: CoEd123!
   User: contente2@movie.com
   Password: CoEd234!
   User: marketman@movie.com
   Password: MaMa123!
   User: marketman2@movie.com
   Password: MaMa234! 
#### Reminder: User accounts have to be added, and can be added from frontend. Movies will also need to be added and can be done through the content editor accounts. 


If for some horrible reason the above is not working, go back to the first repo, download all those files (they are slightly different than these one) and make the same needed 
subdirectories "public/assets" and "public/uploads" create a MongoDB DB named "streamMovieDb" and create two collections in there called "streamMovieCollection" and 
"streamMovieGalley" on your local DB or change this line "const uri = "mongodb://localhost:27017"; // MongoDB URI" in streamNetflixServer.js to whatever your Mongo has (mine was that).
Run npm install and the package.json should cover any installs or needed things. 
Then you should also be able to run "node streamNetflixServer.js" and the http://localhost:6543/ should have the website. 
The adding of accounts will be the same as the above instructions. 

## If neither of these works please email kykochte@alaska.edu or cabettisworth@alaska.edu and we'll try to help! 
