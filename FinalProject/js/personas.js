//json file came from https://persona-compendium.onrender.com/personas/
//git hub link is https://github.com/luyluish/persona-compendium?tab=readme-ov-file
//by Luyluish


document.addEventListener("DOMContentLoaded", function () {
    fetch()
        .then((response) => response.json()) // Parses the response as JSON.
        .then((data) => {
            // Gets a reference to the element with the id 'content' in the HTML document.
            const contentDiv = document.getElementById("content");
            // Iterates over each item in the fetched data array.
            data.forEach((item) => {
                    // Creates a new 'section' element.
                    const section = document.createElement("section");
                    // Sets the innerHTML of the section with dynamic data from the current item.
                    section.innerHTML = `
                    <h2>${item.name}</h2>
                    <img src="${item.image}" style="width:100%;max-width:300px;">
                    <p> Disc: ${item.description} </p>
                    <p> Arcana: ${item.arcana} </p>
                    
               
                    `;
                    // Appends the newly created section to the 'content' div.

                    contentDiv.appendChild(section);

                
            });
        })



});