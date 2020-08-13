// Declare variables
console.log("app.js is triggered seccessfully!");

const input = document.getElementById('search_input');
const gallery = document.getElementsByClassName("gallery")[0];
const photos = gallery.getElementsByTagName("a");

let filter, photo, i, caption;

input.addEventListener('keyup', search_function);


function search_function() {
    filter = input.value.toUpperCase();

    // Loop through all photo's captions and hide those who don't match the search query
    for (i = 0; i < photos.length; i++) {
        photo = photos[i];
        caption = photo.getAttribute("data-caption");
        if (caption.toUpperCase().indexOf(filter) > -1) {
            photo.style.display = "";
        } else {
            photo.style.display = "none";
        }
    }
}