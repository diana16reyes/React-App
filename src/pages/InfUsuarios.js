import React from 'react';
import {Link} from 'react-router-dom';


class InfUsuarios  extends React.Component{


    state = {

        usuarios:[]
    }

    componentDidMount(){

        fetch("http://localhost/api/public/api/showById/"+this.props.location.state.idu)//recibir la api 
        .then(response => response.json())
        .then(showById => this.setState({ usuarios:showById })) //asignacion de un nuevo estado
    }
    render(){


        const {usuarios} = this.state;

    return(
        <div className="uk-flex uk-flex-center">

            <div className={    usuarios.genero === "Femenino"
                                ? "uk-card uk-card-body uk-width-medium uk-animation-toggle uk-card-pink"
                                : usuarios.genero === "Masculino"
                                ? "uk-card uk-card-body uk-width-medium uk-animation-toggle uk-card-blue"
                                : "uk-card uk-card-body uk-width-medium uk-animation-toggle uk-card-yellow"

                            }>

                    <div className="uk-card-badge uk-label">{usuarios.usuario_id}</div>

                        <div className="uk-card-media-left uk-cover-container uk-margin-auto uk-animation-scale-up">
                            <img src={usuarios.foto} alt="foto"/>
                        </div>

                        <p>
                    
                        {
                            usuarios.genero === "Femenino"
                            ? <i className="fa fa-female fa-lg" aria-hidden="true"></i>
                            : usuarios.genero === "Masculino"
                            ? <i className="fa fa-male fa-lg" aria-hidden="true"></i>
                            : <i className="fa fa-venus-mars fa-lg" aria-hidden="true"></i>
                        } {usuarios.name} {usuarios.apellidop}

                        <br/>
                        <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i> {usuarios.email}
                        <br/>
                        <i className="fa fa-car fa-lg" aria-hidden="true"></i> {usuarios.marca} <i className="fa fa-cog fa-lg fa-spin" aria-hidden="true"></i> {usuarios.año}
                        
                        </p>
    
                    <div className="uk-card-footer uk-card-default uk-text-center uk-border-rounded">
                       <Link to="/Reporte">
                            <i className="fa fa-undo fa-lg" aria-hidden="true"></i> 
                       </Link>
                       <br/>
                       Regresar
                    </div>
          
            </div>
        
        </div>)
    
    
    }
}

export default InfUsuarios;