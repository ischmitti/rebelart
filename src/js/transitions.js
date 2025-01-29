if("serviceWorker" in navigator) {
    console.log('sw check');
    send();
}else{
    console.log("no sw")
}
function send(){
    navigator.serviceWorker
    .register("/js/sw.js")
    .then(console.log("send"))
    .catch(console.error)
}

let links = document.querySelectorAll("a");
 if(links){
     links.forEach ((link)=>{
        link.onclick = (e) => {
            let body = document.querySelector("body");
            e.preventDefault();
            setTimeout(function(){
                if(body.classList.contains('fade-out')){
                    console.log("navigation..");
                    if(!e.srcElement.parentElement.href){
                        window.location = e.srcElement.href;
                    }else{
                        window.location = e.srcElement.parentElement.href;
                    }
                }else {
                    console.log("whoops", e.srcElement.parentElement.href)
                }
            },500)
            body.classList.add('fade-out');
        }
    })
 }