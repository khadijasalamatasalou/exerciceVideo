let number = 0; 
const titleArea = document.getElementById("title"); 
const contentArea = document.getElementById("content"); 
const videoArea = document.getElementById("video"); 
const button = document.getElementById('btn'); 

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if(request.status == 200) {
                resp_val = resquest.response
            }
        }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  }


function changeVideo(){
button.addEventListener('click', e => { 
          titleArea.innerHTML = resp_val[number].title; 
          contentArea.innerHTML = resp_val[number].content; 
          videoArea.setAttribute("src", resp_val[number].url); 
          number == 2 ? number = 0 : number++; 
        })
      
    }
window.onload = getData;
