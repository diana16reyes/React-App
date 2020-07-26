import React from 'react';
import Actividad from '../componentes/Actividad';


function Lista(props){

return(

    <div className="componente"> 

    {props.detalle.map((reporte, index) => { 
        
        return(

    <Actividad key={index}
        fotos={reporte.fotos} 
        classimg={reporte.classimg}   
        precio={reporte.precio}
        proyecto={reporte.proyecto}                    
        certificado="Gratis"
        email="correo"
        plan={reporte.plan}
        colorfondos={reporte.colorfondos}
        fondo={reporte.fondo}
        bord={reporte.bord}
        box={reporte.box}
        iconcolor={reporte.iconcolor}
        numero={reporte.numero}
        cuentas={reporte.cuentas}
        boton={reporte.boton}
        texto={reporte.texto}
    
        
    
        />
        )})}
        
    </div>

)
}


export default Lista;