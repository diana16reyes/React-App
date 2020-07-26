import React from 'react';
import Titulo from "../componentes/Titulo";
// import Actividad from '../componentes/Actividad';
import Lista from '../componentes/Lista';


class Reportes extends React.Component{

constructor(props){
super(props)   

this.state={
datos:[{
"fotos":"img/junior.jpg",
"classimg": "img1 uk-animation-scale-down",
"precio":"$350.00 MXN",
"proyecto":"Inicia con tu proyecto personal",
"plan":"Basico",
"colorfondos":"mediumseagreen",
"fondo":"mediumseagreen",
"bord":"solid mediumseagreen",
"box":"5px 5px 10px mediumseagreen",
"iconcolor":"darkgreen",
"numero":"8",
"cuentas":"100",
"boton":"mediumseagreen",
"texto":"white"



},


{
  
"fotos":"img/semi.jpg",
"classimg":"img2",
"precio":"$700.00 MXN",
"proyecto":"Coloca tu servicio en internet",
"plan":"Intermedio",
"colorfondos":"cornflowerblue",
"fondo":"cornflowerblue",
"bord":"solid cornflowerblue",
"box":"5px 5px 10px cornflowerblue",
"iconcolor":"darkblue",
"numero":"16",
"cuentas":"200",
"boton":"cornflowerblue",
"texto":"white"


},


{
"fotos":"img/senior.jpg",
"classimg": "img3",
"precio":"$1400.00 MXN",
"proyecto":"Lleva tu negocio al siguiente nivel",
"plan":"Experto",
"colorfondos":"orange",
"fondo":"orange",
"bord":"solid orange",
"box":"5px 5px 10px orange",
"iconcolor":"orange",
"numero":"32",
"cuentas":"Ilimitadas",
"boton":"orange",
"texto":"white"


}]

}

}



render(){



return(
 <div> 

    <div><Titulo /></div>
    
    <div><Lista detalle={this.state.datos}/></div>
    
</div>

);




        }
    }


export default Reportes;