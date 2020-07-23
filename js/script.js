const body = document.querySelector('body');



    const container = document.querySelector('.container')
    
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
    input.id = 'searchText';
    input.type = 'Search';
    input.height= '36px';
    input.width= '450px';
    input.border= '1px';
    
    
    const button = document.createElement('button');
   
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
    const inputText = buttonTag.addEventListener('click', (event) => {
        const inputTag = document.getElementById('searchText').value;
        // console.log(inputTag.value)

        reloadButton = document.createElement('button');
        searchDiv.appendChild(reloadButton);

        reloadButton.addEventListener('click', event => {
            reload = location.reload();
        })

    


        

            fetch('http://www.reddit.com/search.json?q='+inputTag+'+nsfw:no')
            .then(response => {
                if(response.status === 200){
                    // console.log(response)
                    return response.json();
                }
            })
            .then(responseData => {
                const resData = responseData.data.children;
                

                for (i=0 ; i<resData.length; i++){
                    if(resData[i].data.url == ''){
                        resImage = resData[i].data.url_overridden_by_dest;
                        results(resImage);
                    } else {

                        resImage = resData[i].data.url;
                        results(resImage);
                        
                    }

                    

                }
                // removeButtonTag = document.querySelector('.search')
                // removeButtonTag..removeElement('button');
                // removeImageLogo = document.querySelector('.image').removeElement('img');

               
        
        
            })
            // .catch(error => {
            //     console.log('This is an error' + error);
        
            // })

});

function results(resultImage){
    resImageDiv = document.createElement('div');
    container.appendChild(resImageDiv);

    resImageTag = document.createElement('img');
    resImageTag.src = resultImage;
    resImageTag.style.width = '500px';

    resImageDiv.appendChild(resImageTag);

}