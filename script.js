// Rohit@123


const accessKey="RTWL4LzA-C28Ocdcg61gto8rX0dHVmcsaqvVaKHB50k";

const formElem=document.querySelector("form");

const inputElem=document.getElementById("search_Input");

const search_results=document.querySelector(".Search_results");

const showMore=document.getElementById("show_more_btn");

let inputData="";

let page=1;

async function searchImages(){
    inputData=inputElem.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(inputData)}&client_id=${accessKey}`;

    const response=await fetch(url);
    const data=await response.json();

    const results=data.results;

    if(page===1){
        search_results.innerHTML="";
    }

    results.map((result)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add("search_result");
        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;
  

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        search_results.appendChild(imageWrapper);


    });

    page++;

    if(page>1){
        showMore.style.display="block";

    }

}

formElem.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();

});

showMore.addEventListener("click",()=>{
   
    searchImages();



});