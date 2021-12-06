 let url = window.location.href;
 let swDirect = "/pwa/sw.js"

if(navigator.serviceWorker){
    console.log('Service Worker Disponible')
    if (url.includes('localhost')) {
        swDirect='/sw.js'
    }
    
    navigator.serviceWorker.register('../U1-P1-AFG/sw.js')
}else{
    console.log('Service Worker no disponible')
}