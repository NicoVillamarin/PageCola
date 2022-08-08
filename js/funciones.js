jQuery(document).ready(listo);

function listo(){

    jQuery(".hamb").click(function(e){
        //anula la accion de href de hamb con prenvetDefault
        e.preventDefault();
        //hace funcionar la hamburgesa, abriendo "open" de css
        jQuery("header .container nav").toggleClass("open");
        //toggleClass modifica el icono de hamb por otro icono
        jQuery(".hamb i").toggleClass("fa-times-circle");
    });

    jQuery("header .container nav a").click(function(){
        
        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times-circle");
        //es la menera de seleccionar los href de los a
        var dev = jQuery(this).attr("href");

        //aca el query selecciona el html y body
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top
        })
    });
}