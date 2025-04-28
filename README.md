# Fairbanks Film Streaming - Project Documentation

## Prerequisites

#### Hardware Requirements :
- Any modern computer with at least 2GB of RAM
- 500MB of free disk space
- Internet connection (for initial setup and YouTube)
#### Software Requirements :
- Docker (version 20.10.0 or higher)
- Docker Compose (version 1.29.0 or higher)
- Modern web browser (Chrome, Firefox, Edge, or Safari)
- Node.js (version 16 or higher)

## Installation: 
Clone the repository :
`git clone https://github.com/Katykochte/CS_372_Review.git` 
`cd CS_372_Review` 
### Add directory : 
There also needs to be an added "uploads" folder, this will need to be added manually
as github does not do empty folder uploads. 

### Build and run using Docker :
`docker-compose up --build`
The website comes with admin accounts; the credentials are: 
User: contente@movie.com 
Password: CoEd123!
User: contente2@movie.com
Password: CoEd234!
User: marketman@movie.com
Password: MaMa123!
User: marketman2@movie.com
Password: MaMa234! 
User accounts will need to be added can be added through the frontend interface. 
Movies will need to be added and can be added through a content editor account. 

### Open browser: 
Open your choice of browser and go to http://localhost:6543

## Usage
### Viewers: 
The page loads with an empty screen and the login tab in the top left corner. 
Clicking on the login tab will allow you to log in or create a new account, or send a change password email. 
If you log in as a user account, it will send you to the gallery, where you will be able to view and play all 
movies currently displayed. Clicking the play button on a movie will open a pop-up player with play, pause,
full screen, volume, and scroll abilities for watching. There is a close player button to return to the 
gallery. Under each movie are the genre and like/dislike buttons. If a movie is liked, it will be added to your 
favorites list and you can view the in the favorites tab. There is also a search bar on the gallery that 
will allow you to search for movies by name. Navigating back to the login tab will assume log out, and you 
will not be able to return to the gallery or favorites until you log in again. 
### Content Editors: 
The login and initial page loading are the same as for viewers. After logging in, content editors will see the gallery
page as well as a top bar with movie-adding abilities. There are fields for movie name, genre, thumbnail, and 
YouTube link. All fields must be filled out before adding a movie. Each movie card in the gallery will also have 
an "x" in the top right corner that will allow you to remove the movie. There will also be a text box containing
the marketing manager's comment, if any, on the movie. The likes, favorites, playing ability, and search bar of the 
gallery are the same as viewers. Navigating back to the login tab will assume log out and you 
will not be able to return to the gallery or favorites until you log in again.
### Marketing Managers: 
The login and initial page loading are the same as for viewers. After logging in, marketing managers will see the gallery
with the same likes and dislikes and genre information that viewers see. Below the movie genre, the likes and dislikes of
the movie will be shown. There will also be a text box under each movie that allows marketing managers to add a 
comment to every movie by typing something in and hitting the save button. Favorites, likes, viewing, and search 
functionality are the same as the other two account types. Navigating back to the login tab will assume a log out, and you 
will not be able to return to the gallery or favorites until you log in again.
