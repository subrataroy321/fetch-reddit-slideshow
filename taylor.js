let slideshow;
let searchForm;
let input;
let baseEndPoint = 'https://www.reddit.com/search.json?q=';
let resultArray = [];
let currIndex = 0;
let interval;

const changePhoto = () => {
    currIndex++
    slideshow.setAttibute('src', resultArray[currIndex].data.url)
}
const getSearchResults = () => {
    // fetch from reddit api
    fetch(`${baseEndPoint}${input.value}`)
    .then(response => {
        return response.json();
    }).then(data => {
        resultArray = data.children.map((result) => {
            return result.data.url;
        });
        slideshow.setAttibute('src', resultArray[0].data.url );
        startSlideshow();
    }).catch(err => {
        console.log(err);
        })

}
const startSlideshow = () => {
    interval = setInterval(changePhoto, 3000)
}
document.addEventListener('DOMContentLoaded', event => {
    slideshow = document.getElementById('slideshow');
    input = document.querySelector('input')
    searchForm = document.querySelector('form')
    searchForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        // slideshow appears
        slideshow.style.display = "block"
        // hide the search form
        searchForm.style.display = "none"
        // get search results
        getSearchResults()
    })

    resetButton = document.getElementById("reset")

    resetButton.addEventListener("click", () => {
        //console.log('reset clicked');
        slideshow.style.display = "none"
        // hide the search form
        searchForm.style.display = "block";
        resultArray = [];
        clearInterval(interval);
    })

});

