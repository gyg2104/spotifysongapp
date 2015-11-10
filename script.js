// Creates rows for the table of songs
//knows the artist name as well
function generateListItemNode(name, preview_url, artists){//(responseType, albumType, albumName) {
    var text, td, link, tr, i, artistString;
    
    text = artists + ": " + name;
    
    //make links out of the preview_url
    link = preview_url;
 


    var a = document.createElement('a');
    td = document.createElement("td");
    var linkText = document.createTextNode(text);
    
  
    a.appendChild(linkText);
    a.title = text;
    a.href = link


    td.appendChild(a);

    tr = document.createElement("tr");
    tr.appendChild(td);

    return tr;
 
}


//when there is a success in entering search item, then the table of songs
//is created using this function
function onSuccessfulSearch(response) {
    var i,
	size,
	ul,
	li,
	arrayOfTracks,
	length,
	results,
	name,
    artists,
	preview_url,
	playing,
	audioObject,
	currentlyPlaying,
	message;
    
    console.log(response);



    var withinDiv = document.getElementById("search-results").getElementsByTagName("tbody");
    while(withinDiv.length){
    	withinDiv[0].parentNode.removeChild(withinDiv[0]);
    }
    console.log(withinDiv);

    ul = document.createElement("tbody");

   

    arrayOfTracks = response.tracks.items;
    length = response.tracks.items.length;
    for (i=0; i < length; i++){
    	name = arrayOfTracks[i].name;
        artists = arrayOfTracks[i].artists[0].name;
    	preview_url = arrayOfTracks[i].preview_url;
    	ul.appendChild(generateListItemNode(name, preview_url, artists));
    }
    playing = false;

    //this appends the table to the document
    document.getElementById("search-results").appendChild(ul);
    //then I add event listener so that when the table is clicked on, the songs play
    document.getElementById("search-results").addEventListener('click', function(e){
    	e.preventDefault();
		
    	//console.log(target);
		var target, link;
		//console.log(link);
    	if (playing){
    		audioObject.pause();
    		target = e.target;
    		//playing = false;
    		if (currentlyPlaying == target.title){
    			playing = false;
    			message = "";
            	document.getElementById("now-playing").innerText = message;
    			
    			
    		}
    		else{
    			target = e.target;
    			link = target.href
    			audioObject = new Audio(link);
    			audioObject.play();
    			playing = true;
    			audioObject.addEventListener('ended', function () {
                	playing = false;
                	message = "";
            		document.getElementById("now-playing").innerText = message;
                	
            	});

            	currentlyPlaying = target.title;
            	message = "Now Playing>>> "+currentlyPlaying
            	document.getElementById("now-playing").innerText = message;
            	


    		}

    	}
    	else{
    		target = e.target;
    		link = target.href;
    		audioObject = new Audio(link);
    		audioObject.play();
    		playing = true;
    		audioObject.addEventListener('ended', function () {
                playing = false;
                message = "";
            	document.getElementById("now-playing").innerText = message;
      
            });

            currentlyPlaying = target.title;
            console.log(currentlyPlaying);
            message = "Now Playing>>> "+currentlyPlaying
            document.getElementById("now-playing").innerText = message;
            
    	}

    


    });

	


}






//this does a search through the api for a track given the search terms

function executeSearch(event) {
    event.preventDefault();

    // Get the user's input from the textbox.
    var searchTerms = document.getElementById("search-terms").value;

    // Print out the user's search terms to the developer console.
    console.log("The user has submitted the following search terms: " + searchTerms);

    // Make an asynchronous request to Spotify's library. We'll have to provide the
    // function that should be called once the results are received.
    var parameters = {
	url: 'https://api.spotify.com/v1/search',
	data: {
	    q: searchTerms,
	    type: 'track'
	},
	success: onSuccessfulSearch
    };
    
    $.ajax(parameters);
    
    
}


// Specify the function to be called when the user clicks the search button
function init() {
    document.getElementById("search-btn").addEventListener("click", executeSearch);

    // automatically place focus on the textbox after the page is finished loading
    document.getElementById("search-terms").focus();


    var t = document.getElementById("search-results");
    console.log(t);

    

}

// Calls our initializing function. It'll run whatever function
// we pass to it AFTER the page is done loading. For now, all we need
// is to establish a connection between the search button 'click' and the
// a call to the Spotify web api.
$(document).ready(init);

