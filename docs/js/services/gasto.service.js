var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

import {GASTOS_DB} from '../data/gasto.data.js';

function almacenarGastos(){
  GASTOS_DB.forEach(gasto => {
    localStorage.setItem(gasto.id,JSON.stringify(gasto));

    gastoAnual[gasto.date.getFullYear()] += gasto.precioViaje;
  });

  for (let anio in gastoAnual) {
    sessionStorage.setItem(anio, gastoAnual[anio]);
  };

}
import {GastoCombustible} from '../models/GastoCombustible.js'
function procesarGasto(jsonNuevoGasto){
  const g=JSON.parse(jsonNuevoGasto);
  const gasto=new GastoCombustible(g.id,g.vehicleType,g.date,g.kilometers,g.precioViaje);

  const anio=gasto.date.getFullYear();
  var acumI=parseFloat(sessionStorage.getItem(anio));
  var acumF=acumI+gasto.precioViaje;

  sessionStorage.setItem(anio,acumF);

}
// Exportar objeto con las funciones
export const GastoService={
  almacenarGastos,
  procesarGasto
};