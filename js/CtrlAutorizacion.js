"use strict";
var forma = document.getElementById("forma"),
campos = ["jboleta", "jnombre", "jgrupo", "jmateria", "jfecha"],
salidas = ["salidaBoleta", "salidaNombre", "salidaGrupo", "salidaMateria", "salidaFecha"];

forma.addEventListener("submit", formularios, false);
function formularios(){
  for (var i = 0, longitud = campos.length; i < longitud; i++) {
    var campo = forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
  }
}