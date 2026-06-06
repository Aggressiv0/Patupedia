import {data} from "./data.js";

const vidContainer = document.getElementById("vidContainer");

async function loadVideos(){


    for (let i = 0; i<data.videos.length; i++) {
        vidContainer.innerHTML += `
            <div class="vidBox">
                <h3>${data.videos[i].title}</h3>
                <iframe class="vidElement" src="${data.videos[i].source}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`;
    };  

};

loadVideos();
