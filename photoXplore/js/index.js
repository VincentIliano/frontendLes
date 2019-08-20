let module = new Flickr();
// module.searchPhotos();

let searchBox, searchButton;

function init(){
    searchBox = document.getElementById("searchBox");
    searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
        if(searchBox.value !== null && searchBox.value !== undefined){
            module.searchPhotos(searchBox.value);
            window.scrollTo(0,0);
        }
        
    })
}
 init();