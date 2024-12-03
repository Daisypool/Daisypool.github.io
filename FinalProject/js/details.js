
//gets the images for the arcana 
const arcanaImages = {
    "Magician": 'images/Magician.png',
    "Fool": 'images/fool.png',
    "Priestess": 'images/Pristess.png',
    "Empress": 'images/Empress.png',
    "Emperor": 'images/Emperor.png',
    "Hierophant": 'images/Hierophant.png',
    "Lovers": 'images/Lovers.png',
    "Chariot": 'images/Chariot.png',
    "Justice": 'images/Justice.png',
    "Hermit": 'images/Hermit.png',
    "Fortune": 'images/Fortune.png',
    "Strength": 'images/Strength.png',
    "Hanged Man": 'images/Hangedman.png',
    "Death": 'images/Death.png',
    "Temperance": 'images/Temperance.png',
    "Devil": 'images/Devil.png',
    "Tower": 'images/Tower.png',
    "Star": 'images/Star.png',
    "Moon": 'images/Moonarcana.png',
    "Sun": 'images/Sunarcana.png',
    "Judgement": 'images/Judgement.png',
    "Aeon": 'images/Aeon.png',
};

//images for elements 
const elementsImages = {
    "Slash": 'images/slashsmall.png',
    "Strike": 'images/strikesmall.png',
    "Pierce": 'images/piercesmall.png',
    "Fire": 'images/firesmall.png',
    "Ice": 'images/icesmall.png',
    "Electric": 'images/electricsmall.png',
    "Wind": 'images/windsmall.png',
    "Light": 'images/lightsmall.png',
    "Dark": 'images/darksmall.png'
}

document.addEventListener("DOMContentLoaded", () => {
    // gets data from local storage on browser 
    const item = JSON.parse(localStorage.getItem("selectedItem"));

    // if theres no data when opening the page 
    if (!item) {
        document.getElementById("details").innerHTML = "<p>I am thou... thou art I... Thou hast established a new bond...Thou shalt have our blessings when thou chooseth To create a Persona of the Fool Arcana... <br> You're not supposed to be here...</p>";
    } else {

        //const arcanaImage = arcanaImages[item.arcana];
        const arcanaImage = arcanaImages[item.arcana];

        // get the weakness elements pictures
        const weaknessesHTML = item.weak.length > 0
            ? item.weak.map(weakness => `
            <span class="weakness">
                <img src="${elementsImages[weakness]}" alt="${weakness}" class="weakness-img">
                <p class="elementstext">${weakness}</p> 
            </span>
        `).join("")
            : `<p>None</p>`;

        const resistanceHTML = item.resists.length > 0
            ? item.resists.map(resists => `
            <span class="weakness">
                <img src="${elementsImages[resists]}" alt="${resists}" class="weakness-img">
                <p class="elementstext">${resists}</p> 
            </span>
        `).join("")
            : `<p>None</p>`;


        const reflectHTML = item.reflects.length > 0
            ? item.reflects.map(reflects => `
            <span class="weakness">
                <img src="${elementsImages[reflects]}" alt="${reflects}" class="weakness-img">
                <p class="elementstext">${reflects}</p> 
            </span>
        `).join("")
            : `<p>None</p>`;

        const absorbHTML = item.absorbs.length > 0
            ? item.absorbs.map(absorbs => `
            <span class="weakness">
                <img src="${elementsImages[absorbs]}" alt="${absorbs}" class="weakness-img">
                <p class="elementstext">${absorbs}</p> 
            </span>
        `).join("")
            : `<p>None</p>`;

        const nullifiesHTML = item.nullifies.length > 0
            ? item.nullifies.map(nullifies => `
            <span class="weakness">
                <img src="${elementsImages[nullifies]}" alt="${nullifies}" class="weakness-img">
                <p class="elementstext">${nullifies}</p> 
            </span>
        `).join("")
            : `<p>None</p>`;

        // the html on the page
        const detailsDiv = document.getElementById("details");
        detailsDiv.innerHTML = `
         <h1 class="name">${item.name}</h1>
         <img src="${item.image}" class="personaimg">
         <div class="blue">
         <h2 class="catagoryhead"> Description </h2>
         <p class="desc"> ${item.description}</p>
         <h2 class="catagoryhead"> Arcana </h2>
         <p class="arcana"> ${item.arcana}</p>
         <img src="${arcanaImage}" alt="${item.arcana}" class="arcanaimage">

        <div class="reactiongrid"> 
    <div class="weaknessdiv">
        <h2 class="catagoryhead">Weaknesses</h2>
        <div class="weak">
            ${weaknessesHTML}
        </div>
    </div>

    <div class="resistancediv">
        <h2 class="catagoryhead">Resistances</h2>
        <div class="weak">
            ${resistanceHTML}
        </div>
    </div>

    <div class="reflectdiv">
        <h2 class="catagoryhead">Reflects</h2>
        <div class="weak">
            ${reflectHTML}
        </div>
    </div>

    <div class="absorbdiv">
        <h2 class="catagoryhead">Absorbs</h2>
        <div class="weak">
            ${absorbHTML}
        </div>
    </div>

    <div class="nullifiesdiv">
        <h2 class="catagoryhead">Nullifies</h2>
        <div class="weak">
            ${nullifiesHTML}
        </div>
    </div>
</div>
`;

    }
}); 