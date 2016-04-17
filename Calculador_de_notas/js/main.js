$(document).ready(function(){

    var ayudaPT = $('#ayudaPuntajeTotal');
    $('#puntajeTotal').change(function(){
        comprobar_largo($(this));
    });
    $('#puntajeTotal').focus(function(){
        comprobar_largo($(this));
    });
    $('#puntajeTotal').blur(function(){
        comprobar_largo($(this));
    });
    
    function comprobar_largo(campo){
        var largo = campo.val().length;
        if(largo<1 || largo>3){
            campo.parent().addClass('has-error');
            ayudaPT.html("Ingrese un valor permitido.");
        }else{
            campo.parent().removeClass('has-error');
            ayudaPT.html("Puntaje total del examen.");
        }
    }
    
});

function calcular(){
    
    var nota = 0;
    
    var puntajeAprobacion = $('#puntajeAprobacion');
    var notaAprobacion = $('#notaAprobacion');
    
    var miPuntaje = $('#miPuntaje');
    var miCalificacion = $('.miCalificacion');
    
    var puntajeTotal = parseInt($('#puntajeTotal').val());
    var puntajeObtenido = parseInt($('#puntajeObtenido').val());
    var exigencia = $("input[name=exigencia]:checked").val();
    var puntajeExigencia = exigencia * puntajeTotal;
    puntajeExigencia = puntajeExigencia.toFixed(1);
    
    if (puntajeObtenido <= puntajeExigencia){
        
        nota = formula2(puntajeObtenido, puntajeExigencia);
        
    }else{
        
        nota = formula1(puntajeTotal, puntajeObtenido, puntajeExigencia);
        
    }
    nota = nota.toFixed(1);
    
    miCalificacion.html("<b>" + nota + "</b>");
    miPuntaje.html(puntajeObtenido + " puntos");
    puntajeAprobacion.html(puntajeExigencia + " puntos");
    notaAprobacion.html("4.0");
    
}

// Punt. obt. > Punt. Exi.
function formula1(pt, po, pe){
    
    var result = (3/(pt-pe)) * (po-pe) + 4;
    return result;
    
}

// Punt. obt. <= Punt. Exi.
function formula2(po, pe){
    
    var result = (3/pe) * po + 1;
    return result;
    
}