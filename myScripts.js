//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }

   //Spotify
   //Direct to Hello Internet Podcast

var showSpotify = false;
function showSpotify(){
    if (showSpotify == false){
        document.getElementById("spotify").style.opacity = 1;
        document.getElementById("spotify").style.zIndex = 1;
        showSpotify = true;
    }
 }

 function hideSpotify(){
    if (showSpotify == true){
        document.getElementById("spotify").style.opacity = 0;
        document.getElementById("spotify").style.zIndex = -1;
        showSpotify = false;
    }
 }

 //Youtube
//Direct to Daryl Talks Game Channel
 var showYoutube = false;
function showYoutube(){
    if (showYoutube == false){
        document.getElementById("youtube").style.opacity = 1;
        document.getElementById("youtube").style.zIndex = 1;
        showYoutube = true;
    }
 }

 function hideYoutube(){
    if (showYoutube == true){
        document.getElementById("youtube").style.opacity = 0;
        document.getElementById("youtube").style.zIndex = -1;
        showYoutube = false;
    }
 }

