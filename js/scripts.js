///ABRIR MODAL PARA VIDEO EN LA VISTA DE SERVICIOS
///SERVICIO DE ELECTRICIDAD
window.abrirModal=function(){
  $("#formModal").modal("show");
    $("#mensajeError").hide();

    //cargando la fecha de hoy
    $("#txtFecha")
      .datepicker({ dateFormat: "dd/mm/yy" })
      .datepicker("setDate", new Date());

}


function mostrarSelectorHora() {
  $("#selectorHora").show();
}

function guardarHora() {
  const h = $("#rangeHora").val().padStart(2, "0");
  const m = $("#rangeMinuto").val().padStart(2, "0");

  $("#inputHora").val(`${h}:${m}`);
  $("#selectorHora").hide();
}

// Actualizar visualmente los valores de los sliders
$(function () {
  $("#rangeHora").on("input", function () {
    $("#hora-val").text(this.value);
  });

  $("#rangeMinuto").on("input", function () {
    $("#minuto-val").text(this.value);
  });

  $("#rangeSegundo").on("input", function () {
    $("#segundo-val").text(this.value);
  });

  // Ocultar si se hace clic fuera del selector
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#selectorHora, #inputHora").length) {
      $("#selectorHora").hide();
    }
  });
});
