
//counter for the win number
let count = 0;

const counterDisplay = document.getElementById('counter');
const button = document.getElementById('count');

button.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

//gets value from the select menu
var participants = document.getElementById("Participants");

function onChange() {
  var value = Number(participants.value);
  var text = participants.options[participants.selectedIndex].text;
  selectdisplay.textContent = value;  
}
participants.onchange = onChange;
onChange();

//gets the place value depening on the people who are participating 
function placeCounter() {
    var place = document.getElementById("particminuswin");
    let end = "th";
    var customtext = document.getElementById('customtext');
    placenum = Number(participants.value) - Number(count); 

    //writes the place value on the losing screen, N/A if not a number/ out of range
    if(isNaN(placenum)){
        place.textContent = "N/A"
        customtext.textContent = "N/A";
    }
    else if(placenum <= 0){
        place.textContent = "N/A"
        customtext.textContent = "N/A";
    }
    else if(placenum == 1){
        end = "st";
        place.textContent = placenum + end; 
        customtext.textContent = "You Win! Congratulations!";
    } else if(placenum == 2){
        end = "nd";
        place.textContent = placenum + end; 
        customtext.textContent = ":)";
    } else if(placenum == 3){
        end = "rd";
        place.textContent = placenum + end; 
        customtext.textContent = ":)";
    }
    else{
        end = "th"
        place.textContent = placenum + end; 
        customtext.textContent = ":)";
    }
    
}
setInterval(placeCounter, 500);
