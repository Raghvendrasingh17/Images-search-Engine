// This is my PRIVATE 'Access Key' from "Unsplash.com" website
const accessKeyPrivate = "g_Tgq7I-9rD66mDBwI2YdMp2WZ_VVWXl6MaADMCQRRw";

let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1; //By Default 1 page result of images will be displayed

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKeyPrivate}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    //To clear the previous results
    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        //Linking the images to official "Unsplash.com" Website
        const imageLink = document.createElement("a");
        imageLink.herf = result.links.html;
        imageLink.target = "_blank";

        //Adding images into the anchor 'a' tag
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

// Event Listener for 'Search' button
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

// Function to handel 'Explore More' button 
showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages(); //Call the function again
})