import React from 'react';





class Actividad extends React.Component{

render(){






return(




    <div className="columna1"  style={{border: `${this.props.bord}`, boxShadow:`${this.props.box}` }}>
    
    
        <div className="panel-v uk-animation-toggle" style={{backgroundColor: `${this.props.fondo}`}}>


            <img src={this.props.fotos} className={this.props.classimg} alt="imagen"/>

            <div className="basico">
            
                 <h2 style={{color: `${this.props.colorfondos}`}}>{this.props.plan}  </h2>

            </div>


            <h3>{this.props.precio}</h3>

            

             <p className="precio">

                 <i className="fa fa-asterisk" aria-hidden="true"></i>
                 
                 Precio especial contratado por un año.

                 <i className="fa fa-info-circle" aria-hidden="true"></i>
             
             </p>


                <small className="proyect">
                {this.props.proyecto}
                </small>
        
        </div>

      <div className="icon1">

            <h6> 
            <i className="fa fa-hdd-o fa-2x" aria-hidden="true" style={{color: `${this.props.iconcolor}`}}></i> <strong>{this.props.numero} GB</strong> de almacenamiento
            </h6>

            <hr className="uk-divider-icon"></hr>

     </div>
        
      
     <div className="icon2">

     <h6> 

     <span  className="world" uk-icon="world" style={{color: `${this.props.iconcolor}`}}></span> Dominio <strong>Gratis</strong> <span uk-icon="info" className="info"></span>


     </h6>

     <hr className="uk-divider-icon"></hr>

    </div>


    <div className="icon3">

     <h6> 

     <i className="fa fa-envelope" aria-hidden="true"  style={{color: `${this.props.iconcolor}`}}></i> {this.props.cuentas} cuentas de {this.props.email} 

     </h6>

     <hr className="uk-divider-icon"></hr>

    </div>

   
    
    <div className="icon3">

     <h6> 

     <i className="fa fa-shield fa-lg"  aria-hidden="true" style={{color: `${this.props.iconcolor}`}}></i> Certificado SSL <strong>{this.props.certificado}</strong> <span uk-icon="info" className="info"></span>


     </h6>

     <hr className="uk-divider-icon"></hr>

    </div>

    <div className="boton">
    

    <a href="/formulario">

    <button className="uk-button uk-button-default" style={{backgroundColor: `${this.props.boton}`, color: `${this.props.texto}`}}><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i> Comprar</button>
    
    </a>
    </div>
    


    


    </div>




    
    

);


}

}


export default Actividad;