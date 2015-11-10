UNI: gyg2104
Name: Gracie Gilbert
Assignment 1, Pt 2.
User Interface Design

I couldn't figure out how to paginate the table, so instead I made the table have a fixed height and be scrollable. 
I figure design wise it looks better that way than not implementing anything at all, because it makes it easier to digest for the user.

I used bootstrap and jquery-1.11.1min.js, so I guess that is needed to run it. Enter a song name into the search, click search, a table is generated and to play a song, click on it, to pause it, click on it again or click on another song and that will start playing instead.

My design process was as follows:
It didn't make sense to me that a user would search for a song using anything other than the song name, so that
is what I have the users search by. I tried to keep the page as minimalistic as possible so that there really
isn't anything else that the user can do and so that what needs to be done is clear (the user is given the 
direction to enter a song name initially, and the search button does exactly what the user would expect as it
returns the results). This was my attempt at the Aesthetic and minimalist design heuristic, as I tried to make the whole
process as simple as possible. 

I wanted the table of results to be separated from the area with search and the Now Playing because I think it looks better
that way and also helps keep clear what belongs where. 

Then I designed the table. Basically, to play a song, the user just clicks on the song name 
(which I decided to also include the artist name for just for more clarity in case 
2 artists write a song with the same title).
I did it this way because I think it is normal on any other website that when you click on the song name, it plays
(and that's how Itunes works also, which most people are familiar with). This is an example of
me trying to meet the Consistency and standards heuristic, because I was trying to design
in a way such that doing an action results in what the user expects based on other similar applications. 
Like most sites where you toggle something on/off, I decided that the song can be paused by
clicking on the song name again, or that the song can be changed by clicking on another song.

I also wanted there to be feedback to the user beyond just hearing the audio, so I have text update
that tells the user what is currently playing (and this disappears when the song ends by itself or 
is paused). This is my attempt at meeting the Visibility of system status heuristic, in 
which the user is provided with feedback as to what is happening when they do a certain thing.

As I mentioned above, I didn't know how to implement pagination because I am really bad at jquery and got too confused
so instead, in order to make sure that I was not overwhelming the user with info and that there was some sort of limit,
I made the table scrollable and with a limited height so that only a certain amount of items can be seen at a time. 

Users can do another search simply by entering new information into the search bar, as is expected since
with any site with a search, like Google, that is how it works. 

That's basically it, aside from that I chose blue as the color of important things like the Search and the Now Playing
alert because I think it stands out in a non-obnoxious way from the grey of the page.
