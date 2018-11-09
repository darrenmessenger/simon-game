# Simon Game

<img src="assets/images/Screen Print.png">

## Reason For Project

This project has been built for the Interactive Frontend Development Milestone Project. 
The brief was to build a frontend-only website using the technologies that we have learned throughout Interactive Frontend Development. 

I have decided to create a simple single-player memory game inspired by Simon. 
You can click on [a You Tube video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4) and [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) to understand the rules of the game. 

The wireframes for this website can be found in the repository within Github in the directory "assets/images/Wireframes", 
or you can click [here](https://github.com/darrenmessenger/simon-game/tree/master/assets/images/Wireframes).

The live website can be found [here](https://darrenmessenger.github.io/simon-game/).

### User Stories

- If I look at the game when the page loads I will see an information 'banner' telling me to press the 'Start/Reset' button to begin.  
- I press a coloured panel and I hear a sound that represents the panel and the panel that I pressed vibrates.
- I press the 'Start/Reset' button and I can hear and see a start up sequence. 
- After the start up sequence has finished a random panel makes a sound and vibrates. 
- If I correctly copy the random panel sequence that the game displayed then I will see an information message with a random statement and another random panel will be added to the sequence. 
- I can see a countdown timer that starts as soon as the random panel or panels are displayed. 
- If I do not press a panel before the countdown gets to zero then the game is finished and I will hear a buzzer and an information message stating which round I achieved. 
- If I copy the random sequence correcly each time the counter will increase showing me which round I am on. 
- I can see at any time which round I am on by looking at the counter. 
- If I copy the random sequence incorrectly then I will hear a buzzer and an information message stating which round I achieved. 
- If I hear the buzzer that means the game has ended and I will see a flashing information message telling me to press the 'Start/Reset' button.
- If I want to restart the game at any time then I can press the 'Start/Reset' button. 
- If I keep copying the sequence of random panels correctly the sequence will increase by one each round.
- If I keep copying the sequence of random panels correctly the sequence could get quite long as there isn't an end to the game unless a mistake is made or the game times out. 

## Features

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
All the details are very clear using descriptive placeholders. 
I have used [EmailJS](http://www.emailjs.com/) so that when the user presses 'submit' I will receive an email and see the details of what the user has typed in. 
Once the email has been sent successfully the user will see a message box and the input fields will be blanked out. 

I have also used [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) to show a map of my location. If the user clicks on the Marker then the map will zoom in. 

#### Footer:
At the bottom of the page there are links to various social media including Twitter, LinkedIN, GitHub, YouTube and Instagram. 
When the links are clicked then a new page is opened up showing the social media page. 

## Technologies Used

The following technologies have all been used during the coding of this project:

- [Bootstrap](https://getbootstrap.com/) 
- [JQuery](https://jquery.com/) 
- [EmailJS](http://www.emailjs.com/)
- [Google Fonts](https://fonts.google.com/)
- [FontAwesome](https://fontawesome.com/)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial),


## Testing
Every aspect of the site has been tested as described below.

### Header and Navigation

On the top of the page there is a navigation bar with 4 menu items. Each menu item has been tested on each page to ensure it takes the user to the correct area of the page. 
When each menu item is hovered over there is a transition to a different colour so that the user can see which menu item is being hovered over. 

On a small screen the menu items disappear and a bootstrap burger button appears which, when clicked, displays the menu items on their own row. If clicked again the menu will disappear again.  
The page should scroll smoothly when a navigation link is clicked.

### Main Page

The whole web page was checked to make sure that when on a small, medium or large screen the page reacts responsively. 
The burger button appears on a small display and the game should be shown below the about section on a medium and small display, but next to it on a large display. 
The map also appears below the contact form on medium and small displays but next to it on large displays. 

### About

The 'Read more...' link was checked to make sure a new page was opened with the Wikipedia page. 

### Simon Game

The game has been tested extensively by both me and my family!.

### Contact Me

There are 4 fields that need to be entered by the user. Each field was tested to make sure the user entered data in that field. 
If the user didn't enter data in each field then the submit button won't submit the data because an error message appears. 
When the Send Request button is pressed and all fields have been filled in nothing will happen (apart from the fields being blanked out) as that part of the course hasn't been completed yet. 


### Footer

There are links to social pages within the footer. Each link was clicked to make sure it loads up a new page with the correct social page. 

