# Simon Game

<img src="assets/images/Simon_Game_Screen_Print.png">

## Reason For Project

This project has been built for the Interactive Frontend Development Milestone Project. 
The brief was to build a frontend-only website using the technologies that we have learned throughout Interactive Frontend Development. 

I have decided to create a simple single-player memory game inspired by Simon. 
You can click on [a You Tube video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4) and [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) to understand the rules of the game. 
The live website can be found [here](https://darrenmessenger.github.io/simon-game/).

## Features

### Wireframes

The wireframes for this website can be found in the repository within Github in the directory "assets/images/Wireframes".

### Existing Features

#### Main Page
On the main page there is a background image of some random numbers, which seemed to suit the Simon game. 
The two main sections have this background but I have put a put an opaque overlay over the background image, one in blue and the other in yellow. 
I chose this as it suited the colours of the actual Simon game (red, blue, green, yellow).

#### Navigation:
There is a static header at the top of the page which includes some menu items to take you to different parts of the page. 
I have incorporated some jquery code that I found on stackoverflow that allows the page to scroll smoothly when a navigation link is clicked. 
On small screens the navigation menu disappears and a bootstrap burger button appears so that the menu can be toggled on or off. 

#### About:
There is an about section that utilises the bootstrap grid layout. The description of the Simon game is a summary taken from Wikipedia. 
There is also a 'Read more...' with a link to Wikipedia if the user wants to read more about the game. 

#### Simon Game:
This section utilises the bootstrap grid layout. 

#### Contact Me:
This section utilises the bootstrap grid layout. There is a form to allow the user to enter details so that they may contact me if they like the game and want to give me a project or want to discuss something.
All the details are very clear using descriptive placeholders. I have used [EmailJS](http://www.emailjs.com/) so that when the user presses 'submit' I will receive an email and see the details of what the user has typed in. 
Once the email has been sent successfully the user will see a message box and the input fields will be blanked out. 

I have also used [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) to show a map of my location. If the user clicks on the Marker then the map will zoom in. 

#### Footer:
At the bottom of the page there are links to various social media including Twitter, LinkedIN, GitHub, YouTube and Instagram. 
When the links are clicked then a new page is opened up showing the social media page. 

## Technologies Used

[Bootstrap](https://getbootstrap.com/), [EmailJS](http://www.emailjs.com/), [Google Fonts],(https://fonts.google.com/), 
[FontAwesome](https://fontawesome.com/), [Animate.css](https://daneden.github.io/animate.css/), [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial),
have all been used during the coding of this project. 

## Testing
Every page has been tested as described below.

### Header

The main title has been clicked to make sure it takes the user back to the landing page. 

### Navigation

On the top of each page there is a navigation bar with 6 menu items. Each menu item has been tested on each page to ensure it takes the user to the correct page. When each menu item is hovered over then that menu was tested to make sure the use of Hover.css rectangle out is working. 

When on a large screen the 6 menu items are across the top in one line. On a medium screen the menu items are on 2 rows of 3 items each. On a small screen the menu items disappear and a bootstrap burger button appears which, when clicked, displays the menu items on 2 rows of 3 items each. If clicked again the menu will disappear again.  

### Home

There is a short history of the Monkees with a link to Wikipedia which opens up a new page so that the user can read some more about the Monkees. The audio clip was checked to make sure it worked.  

When on medium to large screen the audio clip control and the image are on the same row. On a small screen they are on separate rows. 

### Band Members

Each band member has a link to Wikipedia which opens up a new page when the user clicks on the link. The page that opened was checked to make sure it was linking to the correct member. 

When on medium to large screen the band members description and image are on the same row. On a small screen they are on separate rows. 

### Audio Clips

There are three audio clips and each one was tested to make sure the correct song was played. There is also a download link for each song which was tested. 

When on medium to large screen the audio clip control and the image are on the same row. On a small screen they are on separate rows. 

### Video Clips

There is a video clip which was tested to make sure it played correctly. There is also a download link for the video which was tested. 

### Party Bookings

There are 4 fields that need to be entered by the user. Each field was tested to make sure the user entered data in that field. 
If the user didn't enter data in each field then the submit button won't submit the data because an error message appears. 
When the Send Request button is pressed and all fields have been filled in nothing will happen (apart from the fields being blanked out) as that part of the course hasn't been completed yet. 

### Search Bar

The seach bar menu item won't do anything yet as that part of the course hasn't been completed yet. 

### Footer

There are links to social pages within the footer. The links do not do anything when clicked as this will be a future development. 

