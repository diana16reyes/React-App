import React from 'react';
import {Link} from 'react-router-dom';

class DeleteUser extends React.Component{

 state={


   usuarios:[]

}

componentDidMount(){

     fetch("http://localhost/api/public/api/showById/"+this.props.location.state.idu)//recibir la api 
    .then(response => response.json())
    .then(showById => this.setState({ usuarios:showById })) //asignacion de un nuevo estado

    fetch("http://localhost/api/public/api/forceDelete/"+this.props.location.state.idu, 
    {method:"delete"})   //recibir la api 


}

render(){

    const{usuarios}=this.state


return(



 <div className="uk-flex uk-flex-center">
    <div className="uk-alert-danger uk-card-body"> 

    <p><strong>El usuario:</strong> {usuarios.usuario_id} {usuarios.name} {usuarios.apellidop} Ha sido eliminado   <Link to="/Reporte">
                    <span className="uk-icon-button icon-x">   
                        <i className="fa fa-times fa-lg" aria-hidden="true"></i>  
                    </span>
                </Link>

    </p>

        

    </div>
 </div>
)


}
}

export default DeleteUser;