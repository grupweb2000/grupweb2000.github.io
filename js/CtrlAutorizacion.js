"use strict";
var forma = document.getElementById("forma"),
        salidaBizcochos = document.getElementById("salidaBizcochos"),
        salidaCelebridades = document.getElementById("salidaCelebridades"),
        bizcochos = forma["bizcochos"],
        celebridades = document.getElementsByName("celebridades");
forma.addEventListener("change", validaBizcochos, false);
forma.addEventListener("click", validaCelebridades, false);
validaBizcochos();
validaCelebridades();
function validaBizcochos() {
  var opciones = bizcochos.options, bizcochosSeleccionados = new Array(); 
  for (var i = 0, total = opciones.length; i < total; i++) {
    var bizcocho = opciones[i];
    if (bizcocho.selected){
      bizcochosSeleccionados.push(bizcocho.value);
    }
  }
  salidaBizcochos.textContent = bizcochosSeleccionados.join(", ");
}
function validaCelebridades() {
  var celebridadesSeleccionadas = new Array(); 
  for (var i = 0, total = celebridades.length; i < total; i++) {
    var celebridad = celebridades[i];
    if (celebridad.checked){
      celebridadesSeleccionadas.push(celebridad.value);
    }
  }
  salidaCelebridades.textContent = celebridadesSeleccionadas.join(", ") + "."
  + (celebridadesSeleccionadas.length === 3 ? "Autorizado" : "No Autorizado");
}
