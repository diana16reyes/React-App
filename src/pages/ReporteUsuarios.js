import React from 'react';
import PaginationList from 'react-pagination-list';
import {Link} from 'react-router-dom';


class ReporteUsuarios extends React.Component{

state = {

    usuarios:[]
}

componentDidMount(){



    fetch("http://localhost/api/public/api/showRelations")//recibir la api 
    .then(response => response.json())
    .then(consulta => this.setState({usuarios:consulta}))
}

render(){

    const{usuarios} =this.state

return(



    
    <div className="uk-flex uk-flex-center">

    { usuarios.length>0 ?

        <div className="uk-overflow-auto">
        
        <Link to="/Validaciones">
        
            <i className="fa fa-user-plus fa-3x" aria-hidden="true"></i>

        </Link>


        <PaginationList 
            data={usuarios} //fetch
            pageSize={2}
            renderItem={(usuario, i) =>  //recorrido de state


            <table className="uk-table uk-table-middle uk-table-hover uk-table-divider" key={i}>
                <thead>
                    <tr>
                        <th className="uk-table-shrink">
                            <i className="fa fa-slack fa-lg" aria-hidden="true"></i>
                        </th>
                        <th className="uk-table-shrink uk-text-center">
                            <i className="fa fa-camera-retro fa-lg" aria-hidden="true"></i>
                        </th>
                        <th className="uk-table-shrink">
                            <i className="fa fa-hashtag fa-lg" aria-hidden="true"></i>
                        </th>
                        <th className="uk-table-shrink">NAME</th>
                        <th className="uk-table-shrink">LASTNAME</th>
                        <th className="uk-table-shrink">
                             <i className="fa fa-venus-mars fa-lg" aria-hidden="true"></i>
                        </th>

                        <th className="uk-table-shrink uk-text-center">
                            E-Mail <i className="fa fa-envelope fa-lg rose" aria-hidden="true"></i>
                        </th>

                        <th className="uk-table-large">
                        Car <i className="fa fa-car fa-lg" aria-hidden="true" ></i>
                        </th>
                        
                        <th className="uk-table-shrink">Model</th>

                        <th className="uk-table-shrink">Info</th>

                        <th className="uk-table-shrink">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="uk-text-nowrap uk-text-bold">{i+1}</td>
                        <td>
                            <img className="uk-preserve-width uk-border-circle" src={usuario.foto} width="50" alt="Avatar"/>
                        </td>
                        <td className="uk-text-nowrap">{usuario.usuario_id}</td>
                        <td className="uk-text-nowrap">{usuario.name}</td>
                        <td className="uk-text-nowrap">{usuario.apellidop}</td>
                        <td className="uk-text-nowrap">
                    
                     
                            {
                                usuario.genero === "Femenino"
                                ? <i className="fa fa-female fa-3x" aria-hidden="true"></i>
                                : usuario.genero === "Masculino"
                                ? <i className="fa fa-male fa-3x" aria-hidden="true"></i>
                                : <i className="fa fa-venus-mars fa-3x" aria-hidden="true"></i>
                            }

                        </td>
                        <td className="uk-text-nowrap">{usuario.email}</td>
                        <td className="uk-text-nowrap">{usuario.marca}</td>
                        <td className="uk-text-nowrap">{usuario.año}</td>

                  
                        <td className="uk-text-nowrap">
                            <Link to={{pathname:"/InfUsuarios", state:{ idu: usuario.usuario_id }}}>
                                <span className="uk-icon-button icon-search">
                                    <i className="fa fa-search " aria-hidden="true"></i>
                                </span>
                            </Link>
                        </td>
                        

                        <td className="uk-text-nowrap">
                            <Link to={{pathname:"/DeleteUser", state:{ idu: usuario.usuario_id }}}>
                                <span className="uk-icon-button  icon-trash">
                                    <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                                </span>
                            </Link>
                        </td>


                    </tr>
              
                </tbody>
            </table>
        }/>   
        </div>

        : <span className="uk-margin-small-right" uk-spinner="ratio: 3"></span>
    }               
    </div>
)



}



}

export default ReporteUsuarios;