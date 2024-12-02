//json file came from https://persona-compendium.onrender.com/personas/
//git hub link is https://github.com/luyluish/persona-compendium?tab=readme-ov-file
//by Luyluish

var fireAttribute = "Unknown"; //variable used to sort through json 
var iceAttribute = "Unknown";
var electricAttribute = "Unknown";
var windAttribute = "Unknown";
var lightAttribute = "Unknown";
var darkAttribute = "Unknown";
var slashAttribute = "Unknown";
var strikeAttribute = "Unknown";
var pierceAttribute = "Unknown";

var elementsType = []; //collection of each type and reaction after pressing search 

// sorted elements from elementsType array 
var unknownArray = [];
var weakArray = [];
var resistsArray = [];
var reflectsArray = [];
var absorbsArray = [];
var nullifiesArray = [];

//change the fire button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const fireButton = document.getElementById('firebutton'); //gets the element once page is loaded
    const fireImg = document.getElementById('fireoptionsimg'); //gets the image displayed for fire

    fireButton.addEventListener('click', () => {
        console.log("pressed fire button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (fireAttribute) {
            case "Unknown":
                fireImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                fireAttribute = "Weak";
                break;
            case "Weak":
                fireImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                fireAttribute = "Resists";
                break;
            case "Resists":
                fireImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                fireAttribute = "Reflects";
                break;
            case "Reflects":
                fireImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                fireAttribute = "Absorbs";
                break;
            case "Absorbs":
                fireImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                fireAttribute = "Nullifies";
                break;
            case "Nullifies":
                fireImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                fireAttribute = "Unknown";
                break;
        };
    });
});

//change the ice button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const iceButton = document.getElementById('icebutton'); //gets the element once page is loaded
    const iceImg = document.getElementById('iceoptionsimg'); //gets the image displayed for fire

    iceButton.addEventListener('click', () => {
        console.log("pressed ice button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (iceAttribute) {
            case "Unknown":
                iceImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                iceAttribute = "Weak";
                break;
            case "Weak":
                iceImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                iceAttribute = "Resists";
                break;
            case "Resists":
                iceImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                iceAttribute = "Reflects";
                break;
            case "Reflects":
                iceImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                iceAttribute = "Absorbs";
                break;
            case "Absorbs":
                iceImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                iceAttribute = "Nullifies";
                break;
            case "Nullifies":
                iceImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                iceAttribute = "Unknown";
                break;
        };
    });
});

//electric button change 
document.addEventListener('DOMContentLoaded', () => {
    const electricButton = document.getElementById('electricbutton'); //gets the element once page is loaded
    const electricImg = document.getElementById('electricoptionsimg'); //gets the image displayed for fire

    electricButton.addEventListener('click', () => {
        console.log("pressed electric button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (electricAttribute) {
            case "Unknown":
                electricImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                electricAttribute = "Weak";
                break;
            case "Weak":
                electricImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                electricAttribute = "Resists";
                break;
            case "Resists":
                electricImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                electricAttribute = "Reflects";
                break;
            case "Reflects":
                electricImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                electricAttribute = "Absorbs";
                break;
            case "Absorbs":
                electricImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                electricAttribute = "Nullifies";
                break;
            case "Nullifies":
                electricImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                electricAttribute = "Unknown";
                break;
        };
    });
});

//change the wind button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const windButton = document.getElementById('windbutton'); //gets the element once page is loaded
    const windImg = document.getElementById('windoptionsimg'); //gets the image displayed for fire

    windButton.addEventListener('click', () => {
        console.log("pressed wind button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (windAttribute) {
            case "Unknown":
                windImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                windAttribute = "Weak";
                break;
            case "Weak":
                windImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                windAttribute = "Resists";
                break;
            case "Resists":
                windImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                windAttribute = "Reflects";
                break;
            case "Reflects":
                windImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                windAttribute = "Absorbs";
                break;
            case "Absorbs":
                windImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                windAttribute = "Nullifies";
                break;
            case "Nullifies":
                windImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                windAttribute = "Unknown";
                break;
        };
    });
});

//change the light button and image 
document.addEventListener('DOMContentLoaded', () => {
    const lightButton = document.getElementById('lightbutton'); //gets the element once page is loaded
    const lightImg = document.getElementById('lightoptionsimg'); //gets the image displayed for fire

    lightButton.addEventListener('click', () => {
        console.log("pressed light button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (lightAttribute) {
            case "Unknown":
                lightImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                lightAttribute = "Weak";
                break;
            case "Weak":
                lightImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                lightAttribute = "Resists";
                break;
            case "Resists":
                lightImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                lightAttribute = "Reflects";
                break;
            case "Reflects":
                lightImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                lightAttribute = "Absorbs";
                break;
            case "Absorbs":
                lightImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                lightAttribute = "Nullifies";
                break;
            case "Nullifies":
                lightImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                lightAttribute = "Unknown";
                break;
        };
    });
});

//change the dark button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const darkButton = document.getElementById('darkbutton'); //gets the element once page is loaded
    const darkImg = document.getElementById('darkoptionsimg'); //gets the image displayed for fire

    darkButton.addEventListener('click', () => {
        console.log("pressed dark button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (darkAttribute) {
            case "Unknown":
                darkImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                darkAttribute = "Weak";
                break;
            case "Weak":
                darkImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                darkAttribute = "Resists";
                break;
            case "Resists":
                darkImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                darkAttribute = "Reflects";
                break;
            case "Reflects":
                darkImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                darkAttribute = "Absorbs";
                break;
            case "Absorbs":
                darkImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                darkAttribute = "Nullifies";
                break;
            case "Nullifies":
                darkImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                darkAttribute = "Unknown";
                break;
        };
    });
});

//change the slash button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const slashButton = document.getElementById('slashbutton'); //gets the element once page is loaded
    const slashImg = document.getElementById('slashoptionsimg'); //gets the image displayed for fire

    slashButton.addEventListener('click', () => {
        console.log("pressed slash button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (slashAttribute) {
            case "Unknown":
                slashImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                slashAttribute = "Weak";
                break;
            case "Weak":
                slashImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                slashAttribute = "Resists";
                break;
            case "Resists":
                slashImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                slashAttribute = "Reflects";
                break;
            case "Reflects":
                slashImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                slashAttribute = "Absorbs";
                break;
            case "Absorbs":
                slashImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                slashAttribute = "Nullifies";
                break;
            case "Nullifies":
                slashImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                slashAttribute = "Unknown";
                break;
        };
    });
});

//change the strike button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const strikeButton = document.getElementById('strikebutton'); //gets the element once page is loaded
    const strikeImg = document.getElementById('strikeoptionsimg'); //gets the image displayed for fire

    strikeButton.addEventListener('click', () => {
        console.log("pressed strike button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (strikeAttribute) {
            case "Unknown":
                strikeImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                strikeAttribute = "Weak";
                break;
            case "Weak":
                strikeImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                strikeAttribute = "Resists";
                break;
            case "Resists":
                strikeImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                strikeAttribute = "Reflects";
                break;
            case "Reflects":
                strikeImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                strikeAttribute = "Absorbs";
                break;
            case "Absorbs":
                strikeImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                strikeAttribute = "Nullifies";
                break;
            case "Nullifies":
                strikeImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                strikeAttribute = "Unknown";
                break;
        };
    });
});

//change the pierce button attribute and image 
document.addEventListener('DOMContentLoaded', () => {
    const pierceButton = document.getElementById('piercebutton'); //gets the element once page is loaded
    const pierceImg = document.getElementById('pierceoptionsimg'); //gets the image displayed for fire

    pierceButton.addEventListener('click', () => {
        console.log("pressed pierce button"); //what to do when clicked 

        //switches the image and the type of damgage to be added to array 
        switch (pierceAttribute) {
            case "Unknown":
                pierceImg.style.backgroundImage = "url('images/centeredweak.crop.png')";
                pierceAttribute = "Weak";
                break;
            case "Weak":
                pierceImg.style.backgroundImage = "url('images/centeredresistbetter.crop.png')";
                pierceAttribute = "Resists";
                break;
            case "Resists":
                pierceImg.style.backgroundImage = "url('images/centeredreflects.crop.png')";
                pierceAttribute = "Reflects";
                break;
            case "Reflects":
                pierceImg.style.backgroundImage = "url('images/centeredabsorb.crop.png')";
                pierceAttribute = "Absorbs";
                break;
            case "Absorbs":
                pierceImg.style.backgroundImage = "url('images/centerednull.crop.png')";
                pierceAttribute = "Nullifies";
                break;
            case "Nullifies":
                pierceImg.style.backgroundImage = "url('images/centeredunknown.crop.png')";
                pierceAttribute = "Unknown";
                break;
        };
    });
});


// search 
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchbutton');
    const contentDiv = document.getElementById("content");

    searchButton.addEventListener('click', () => {
        //clears previous search content 

        contentDiv.innerHTML = "";
        //clears arrays for another search 
        elementsType = [];
        unknownArray = [];
        weakArray = [];
        resistsArray = [];
        reflectsArray = [];
        absorbsArray = [];
        nullifiesArray = [];

        elementsType.push({ type: "Slash", reaction: slashAttribute });
        elementsType.push({ type: "Strike", reaction: strikeAttribute });
        elementsType.push({ type: "Pierce", reaction: pierceAttribute });
        elementsType.push({ type: "Fire", reaction: fireAttribute });
        elementsType.push({ type: "Ice", reaction: iceAttribute });
        elementsType.push({ type: "Electric", reaction: electricAttribute });
        elementsType.push({ type: "Wind", reaction: windAttribute });
        elementsType.push({ type: "Light", reaction: lightAttribute });
        elementsType.push({ type: "Dark", reaction: darkAttribute });
        // [slash, strike, pierce, fire, ice, electric, wind, light, dark]
        console.log(elementsType);

        typeSort(); //sorts the elementyType into individual reaction arrays 

        console.log("unknown: " + unknownArray);
        console.log("weak: " + weakArray);
        console.log("resists: " + resistsArray);
        console.log("reflects: " + reflectsArray);
        console.log("absorbs: " + absorbsArray);
        console.log("nullifies: " + nullifiesArray);

        displayJson();


    });
});

function typeSort() {
    //sorts the elementsType list into weaknesses 
    //checks the reaction of each elementAttriubte (reaction), putting the type into the right array. 
    elementsType.forEach(item => {
        if (item.reaction === "Weak") {
            weakArray.push(item.type);
        } else if (item.reaction === "Resists") {
            resistsArray.push(item.type);
        } else if (item.reaction === "Reflects") {
            reflectsArray.push(item.type);
        } else if (item.reaction === "Absorbs") {
            absorbsArray.push(item.type);
        } else if (item.reaction === "Nullifies") {
            nullifiesArray.push(item.type);
        } else {
            unknownArray.push(item.type)
        }
    })
}

function displayJson() {

    fetch("https://daisypool.github.io/FinalProject/js/persona3.json")
        .then((response) => response.json())
        .then((data) => {
            // Gets a reference to the element with the id 'content' in the HTML document.
            const contentDiv = document.getElementById("content");



            // Filters the data based on the reaction arrays
            const filteredData = data.filter((item) => {
                const matchesWeaknesses = weakArray.every((weak) => item.weak.includes(weak));
                const matchesResistances = resistsArray.every((resists) => item.resists.includes(resists));
                const matchesReflects = reflectsArray.every((reflects) => item.reflects.includes(reflects));
                const matchesAbsorbtion = absorbsArray.every((absorbs) => item.absorbs.includes(absorbs));
                const matchesNull = nullifiesArray.every((nullifies) => item.nullifies.includes(nullifies));

                return matchesWeaknesses && matchesResistances && matchesReflects && matchesAbsorbtion && matchesNull;
            });


            // Iterates over the filtered data and displays it
            filteredData.forEach((item, index) => {
                // Creates a new 'section' element
                const section = document.createElement("section");

                // Sets the innerHTML of the section with dynamic data from the current item
                section.innerHTML = `
                        <h2>${item.name}</h2>
                        <img src="${item.image}" style="width:100%;max-width:300px;">
                       
                    `;

                section.addEventListener("click", () => {
                    // when clicked, keeps data in storage
                    localStorage.setItem("selectedItem", JSON.stringify(item));
                    // goes to details page in new tab :) 
                   window.open("details.html", "_blank");
                });

                //adds class to section to alternate colors of the bg    
                section.classList.add(index % 2 === 0 ? "bg-light" : "bg-dark");

                // Appends the newly created section to the 'content' div
                contentDiv.appendChild(section);
            });

            if (filteredData.length === 0) {
                // if nothing matches the arrays then this shows 
                contentDiv.innerHTML = "<p>No personas match the criteria. :( </p>";
            }
        })

        .catch((error) => {
            console.error("Error fetching or processing data:", error);
        });
}




