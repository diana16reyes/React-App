import React from 'react';



class Biografia extends React.Component{

    render(){


    const titulo = "¿Quien soy?"
    


    const informacion ={
    
    nombre:"Diana Liabeth Reyes Cano",
    edad:22,
    fecha:"06-06-1997"
    }

    function datos(informacion){

    return <p>
            
            <strong>Nombre:</strong> {informacion.nombre}
            <br/>
            <strong>Edad:</strong> {informacion.edad}
            <br/>
            <strong>Fecha de nacimiento:</strong> {informacion.fecha}
            </p>
    }


    return(
        
        <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-width-1-3 mycard">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle">
                        <div className="uk-width-auto">
                            <img className="uk-border-circle"   width="100" height="100" src={process.env.PUBLIC_URL + '/img/yoo.png'} alt="yo"/>
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">{titulo}</h3>
                            <p className="uk-text-meta uk-margin-remove-top">Mayo 2020</p>
                        </div>
                    </div>
                </div>

                <div className="uk-card-body datos">
                 {datos(informacion)}
                </div>

                <hr className="uk-divider-icon"/>

                <div className="uk-card-body gustos">
                    <b>Gustos:</b> 
                    <p>En mi tiempo libre me gusta ver dramas Koreanos y escuchar musica.</p>
               </div>

               <hr className="uk-divider-icon"/>

               <div className="uk-card-body utvt">
                    <b>Que me gusta de la UTVT:</b> 
                    <p>Interactuar con mis compañeros de clase y profesores e ir a la cuevita.</p>
               </div>

               
    </div>


        
        
        </div>
        
        
        )
    }
}



export default Biografia;