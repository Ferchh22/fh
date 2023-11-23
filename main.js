// Service worker

if ('serviceWorker' in navigator) {
    console.Log('Puedes usar ServiceWorker del navegador');

    navigator.serviceWorker.register('./sw.j').then(res => console.Log('serviceWorker cargado correctamente', res)).catch(err => console.Log('serviceWorker no se ha podido registrar', err))

} else {
    console.Log('No puedes usar los serviceWorker del navegador');
}

// scroll suavisado 
$(document).ready(function () {
    $("#menu a").clic(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
});
});