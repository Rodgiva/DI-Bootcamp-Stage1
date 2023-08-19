let audio = document.getElementsByClassName("music");
let btn = document.getElementsByClassName("remove-btn");

function browser() {
    let agent = navigator.userAgent;
    let browserUsed = "";

    if (agent.match(/firefox|fxios/i) != null) {
        browserUsed = "firefox";
    }
    else if (agent.indexOf(/chrome|chromium|crios/i) != null) {
        browserUsed = "chrome";
    }

    return browserUsed;
}

if (browser() == "firefox") {
    // btn[0].style.opacity = "0.6";
    btn[0].style.height = '40px';
    btn[0].style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
    btn[0].style.border = "none";
    btn[0].style.color = "white";
    btn[0].style.fontSize = '24px';


}

else if (browser() == "chrome") {
    btn[0].style.opacity = "0.6";
    btn[0].style.height = '55px';
    btn[0].style.borderRadius = '30px';
    btn[0].style.fontSize = '24px';
}

audio[0].volume = 0.3;

btn[0].addEventListener("click", remove);
function remove() {
    console.log(audio[0].style);
    if (audio[0].style.visibility == 'hidden') {
        audio[0].style.visibility = 'visible';
    }
    else if (audio[0].style.visibility == 'visible' || audio[0].style.visibility == "") {
        audio[0].style.visibility = 'hidden';
    }
}