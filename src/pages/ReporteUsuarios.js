import React from 'react';


class ReporteUsuarios extends React.Component{

state = {

    usuarios:[]
}

componentDidMount(){



    fetch("http://localhost/api/public/api/showRelations")//recibir la api otorgar
    .then(response => response.json())
    .then(consulta => this.setState({usuarios:consulta}))
}

render(){

    const{usuarios} =this.state

return(



    
    <div className="uk-flex uk-flex-center">

        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-middle uk-table-hover uk-table-divider">
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

                        <th className="uk-table-shrink">
                        Car <i className="fa fa-car fa-lg" aria-hidden="true" ></i>
                        </th>
                        
                        <th className="uk-table-shrink">Model</th>
                    </tr>
                </thead>
                <tbody>


                {usuarios.map((usuario, i) =>

                    <tr key={i}>
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
                                : <i className="fa fa-male fa-3x" aria-hidden="true"></i>
                            }

                        </td>
                        <td className="uk-text-nowrap">{usuario.email}</td>
                        <td className="uk-text-nowrap">{usuario.marca}</td>
                        <td className="uk-text-nowrap">{usuario.año}</td>

                    </tr>
              
                    )}
                </tbody>
            </table>
        </div>

    </div>
);



}



}

export default ReporteUsuarios;