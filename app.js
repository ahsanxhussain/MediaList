displayVideo();
document.getElementById("click-add").addEventListener("click", addVideo);

function addVideo(){
    let urlLink = document.getElementById("link");
    if (urlLink.value.includes("youtube")) {
        var uLink = urlLink.value.replace("watch?v=", "embed/");
      } else if(urlLink.value.includes("dailymotion")){
        var uLink = urlLink.value.replace(".com/", ".com/embed/");
      } 
    let videos = localStorage.getItem("videos");
    if (videos == null) {
      videosObj = [];
    }
    else {
      videosObj = JSON.parse(videos)
    }
    var tempObj = {link:uLink}
    
    videosObj.push(tempObj);
    localStorage.setItem("videos", JSON.stringify(videosObj));
    // urlLink.value = "";
    displayVideo();

}

function displayVideo(){
  let videos = localStorage.getItem('videos');
  if (videos == null) {
    videosObj = [];
  }
  else {
    videosObj = JSON.parse(videos)
  }
  let html ="";
  videosObj.forEach(function (element,index) {
    html += `
    <button style="padding:10px 10px 10px 10px; background-color: white; border: none; box-shadow: rgb(223, 221, 221) 3px 3px 10px; font-family:Arial, Helvetica, sans-serif; " onClick = "url('${element.link}')">PLAY</button>
    `})

  let container = document.querySelector('.videos-container');
  container.innerHTML = html;
  

}
function url(link){
  document.getElementById("video-main-box").src = link;

}

/* toggle switch dark mode and light mode 
*will change this to more effecient and correct method
*/

let toggleSwitch = document.getElementById('toggleAll');
toggleSwitch.addEventListener('click', (e)=>{
  if(e.target.checked === true){
    document.body.style.backgroundColor = "#1F1B24";   
    document.querySelector('.navbar').style.boxShadow = "none";
    document.querySelector('.videos-container').style.boxShadow = "rgb(0,122,255) 1px 1px 5px";
    document.querySelector('.add-btn').style.backgroundColor = "#1F1B24";
    document.querySelector('.search-bar').style.boxShadow = "none";
    document.querySelector('.search-bar').style.border= "1px solid gray";
    document.querySelector('.search').style.backgroundColor = "#1F1B24";
    document.querySelector('.search').style.color = "white";
  }
  else{
    
    document.body.style.backgroundColor = "white";   
    document.querySelector('.navbar').style.boxShadow = "rgb(230, 230, 230) 1px 1px 10px;";
    document.querySelector('.videos-container').style.boxShadow = "rgb(197, 197, 197) 1px 1px 5px";
    document.querySelector('.add-btn').style.backgroundColor = "rgb(0,122,255)";
    document.querySelector('.add-btn').style.color = "white";
    document.querySelector('.search-bar').style.boxShadow = "rgb(223, 221, 221) 1px 1px 5px";
    document.querySelector('.search-bar').style.border= "none";
    document.querySelector('.search').style.backgroundColor = "white";
    document.querySelector('.search').style.color = "black";
  }

})

document.getElementById('clear-all').addEventListener('click', clearAll);
function clearAll(){
  localStorage.clear();
  window.location.reload();
}

