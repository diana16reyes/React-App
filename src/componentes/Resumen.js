import React from 'react';

class Resumen extends React.Component{

     
    render(){



    const{icono,color,rango,gigas,host,vps,combo2,total,nombredominio} =this.props

    let mensaje;

    if(total !== ''){
        mensaje="Compra Exitosa";
    }

    return(

    

        <div className="uk-card uk-card-default uk-width-large uk-margin-left">

                <div className="uk-card-header">

                    <div className="uk-grid-small uk-flex-middle" >


                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">Resumen de compra Del Host</h3>
  
                        </div>


                        <div className="uk-width-auto uk-margin-small">
                    
                        
                            <i className={icono} aria-hidden="true" style={{color:`${color}`}}></i> <small>Logo de tu empresa</small> 

                        </div>

                    </div>

                </div>

                
                <div className="uk-card-body">

                <h4>Caracteristicas: </h4>
                    <p>
                    SSD: {gigas} GB
                    <br/>
                    Ram: {rango} GB
                    <br/>
                    Tipo De host: {host}  {vps}

                    </p>  

                </div>


                <div className="uk-card-footer">
              
                    <h4>Nombre De Dominio</h4>

                    <p>{nombredominio}{combo2}</p>
                </div>


                <div className="uk-card-footer">
                    <h4>Precio Total</h4>

                    <div className="uk-margin">
                        <input className="uk-input uk-form-success uk-form-width-small" type="text" value={'$'+total} readOnly/>
                    </div>

                    <div className="uk-alert-primary">
                        <p className="uk-text-center">{mensaje}</p>
                    </div>

                </div>

        </div>


    )
    }
}

export default Resumen;