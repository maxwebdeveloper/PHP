$(document).ready(function(){

  $('#btn_calcular').on('click', function(){

    var nota = 0;

    // datos para la tabla
    var puntajeAprobacion = $('#puntajeAprobacion');
    var notaAprobacion = $('#notaAprobacion');
    var miPuntaje = $('#miPuntaje');
    var miCalificacion = $('.miCalificacion');
    var aviso = $('#aviso');

    // input del formulario
    var puntajeTotal = parseInt($('#puntajeTotal').val());
    var puntajeObtenido = parseInt($('#puntajeObtenido').val());
    var exigencia = $("input[name=exigencia]:checked").val();
    var puntajeExigencia = exigencia * puntajeTotal;
    puntajeExigencia = puntajeExigencia.toFixed(1);

    if(puntajeTotal>=puntajeObtenido){

      nota = calcularNota(puntajeObtenido, puntajeExigencia);

    }else{
      aviso.html("El <u>puntaje Obtenido</u> no puede ser superior a <u>puntaje Total</u>.");
    }

    nota = nota.toFixed(1);

    // mostramos la nota, el puntaje Obtenido y el de exigencia
    miCalificacion.html("<b>" + nota + "</b>");
    miPuntaje.html(puntajeObtenido + " puntos");
    puntajeAprobacion.html(puntajeExigencia + " puntos");
    notaAprobacion.html("4.0");
  })

  // funcion calcular nota
  function calcularNota(puntajeObtenido, puntajeExigencia) {
    var nota = 0;
    if (puntajeObtenido <= puntajeExigencia){

        nota = formula2(puntajeObtenido, puntajeExigencia);

    }else{

        nota = formula1(puntajeTotal, puntajeObtenido, puntajeExigencia);

    }

    return nota;
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

});
