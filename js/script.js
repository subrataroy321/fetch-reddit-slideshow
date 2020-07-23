const body = document.querySelector('body');



    const container = document.createElement('div');
    container.classList.add('container');
    container.style.textAlign = 'center';
    container.style.color = ' #f5f5f5;';
    body.appendChild(container);
    
    const imageLogoDiv = document.createElement('div');
    imageLogoDiv.classList.add('image');
    container.appendChild(imageLogoDiv);
    
    const imageLogo = document.createElement('img');
    imageLogo.src = 'https://3.bp.blogspot.com/-Nuq97fie9Y0/WbzZuNG5OBI/AAAAAAAKRp8/V-CkGZB17M4DPZtcKyHgVIYGcZDC1lLSwCLcBGAs/s1600/AW540451_01.gif';
    imageLogo.alt = 'Panda';
    //console.log(imageLOgo);
    imageLogoDiv.appendChild(imageLogo);
    imageLogoDiv.appendChild(document.createElement('br'));
    
    // const newLine = imageLogoDiv.innerHTML= '</br> </br>';
    
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search');
    
    const header = document.createElement('h1');
    header.textContent = 'Panda Image Search';
    
    const input = document.createElement('input');
    input.type = 'Search';
    input.height= '36px';
    input.width= '450px';
    input.border= '1px';
    
    
    const button = document.createElement('button');
    button.id = 'searchText';
    button.type = "button";
    button.innerText = "🔍  Search";
    button.style.height= '36px';
    button.style.width= '100px';
    
    searchDiv.appendChild(header);
    searchDiv.appendChild(input);
    searchDiv.appendChild(document.createElement('br'));
    searchDiv.appendChild(document.createElement('br'));
    searchDiv.appendChild(button);
    container.appendChild(searchDiv);
    
    const buttonTag = document.querySelector('button');
    const searchText = buttonTag.addEventListener('click', (event) => {
        const searchTag = document.getElementById('searchText');
        
        return searchTag.value;

    });
    
    document.addEventListener('DOMContentLoaded', (event) => {

    fetch('http://www.reddit.com/search.json?q='+searchText+'+nsfw:no')
    .then(response => {

    return response.json();
    })
    .then(data => {

    console.log(data)



    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});