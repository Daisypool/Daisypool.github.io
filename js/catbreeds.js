document.addEventListener("DOMContentLoaded", function () {
    fetch("https://daisypool.github.io/js/cats.json")
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
                    <h2>${item.title}</h2>
                    <img src="${item.image}" alt="${item.altText}" style="width:100%;max-width:300px;">
               
                `;
                // Appends the newly created section to the 'content' div.
                contentDiv.appendChild(section);
            });
        })
        


});