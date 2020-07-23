const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', (event) => {
    //console.log('DOM loaded');

    // <div class="container">
    // <div class= image>
    //   <img src="https://3.bp.blogspot.com/-Nuq97fie9Y0/WbzZuNG5OBI/AAAAAAAKRp8/V-CkGZB17M4DPZtcKyHgVIYGcZDC1lLSwCLcBGAs/s1600/AW540451_01.gif" alt="Panda" >
    //   </br> </br>
    // </div>

    // <div class="search">
    //   <h1>Panda Image Search</h1>
    //   <input type="search"></input>
    //   </br> </br>
    //   <Button type="search"> 🔍  Search</Button>
    // </div>

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.textAlign = 'center';
    container.style.color = ' #f5f5f5;';
    
    const imageLogoDiv = document.createElement('div');
    imageLogoDiv.classList.add('image');
    
    const imageLogo = document.createElement('img');
    imageLogo.src = 'https://3.bp.blogspot.com/-Nuq97fie9Y0/WbzZuNG5OBI/AAAAAAAKRp8/V-CkGZB17M4DPZtcKyHgVIYGcZDC1lLSwCLcBGAs/s1600/AW540451_01.gif';
    imageLogo.alt = 'Panda';
    //console.log(imageLOgo);
    imageLogoDiv.appendChild(imageLogo);
    container.appendChild(imageLogoDiv);
    body.appendChild(container);
    
    
    const newLine = imageLogoDiv.innerHTML= '</br> </br>';

    const search = document.createElement('div');
    search.classList.add('search');
    
    const header = document.createElement('h1');
    header.textContent = 'Panda Image Search';
    
    const input = document.createElement('input');
    input.type = 'Search';
    input.height= '40px';
    input.width= '450px';
    input.border= '1px';
    
    
    const button = document.createElement('button');
    button.type = "button";
    button.innerText = "🔍  Search";
    button.style.height= '36px';
    button.style.width= '100px';
    
    search.appendChild(header);
    search.appendChild(input);
    search.appendChild(button);
    Image.innerHTML= '</br> </br>';
    body.appendChild(search);


    


    



    console.log(container);










});