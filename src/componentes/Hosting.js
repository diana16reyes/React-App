import React from 'react';
// import Formulario from '../pages/Formulario';
import Pagos from '../pages/Pagos';
import Reportes from'../pages/Reportes';
import Biografia from '../componentes/Biografia';
import Formulario from '../pages/Formulario';
import Validaciones  from '../pages/Validaciones';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Error from '../pages/Error';
import ReporteUsuarios from '../pages/ReporteUsuarios';
import InfUsuarios from '../pages/InfUsuarios';
import DeleteUser from '../pages/DeleteUser';




function Hosting (){
return(

<Router>

<nav className="uk-navbar-container uk-margin">

        <div className="uk-navbar-left">

            <Link to="/" className="uk-navbar-item uk-logo">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: home"></span>
                Home
            </Link>

            <ul className="uk-navbar-nav">
                <li>
                    <Link to="/Reportes">
                        <span className="uk-icon uk-margin-small-right" uk-icon="icon: cart"></span>
                        Planes Hosting
                    </Link>
                </li>
            </ul>


            <ul className="uk-navbar-nav">
            <li>
                <Link to="/Formulario">
                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: credit-card"></span>
                    Formulario
                </Link>
            </li>
        </ul>


        
        <ul className="uk-navbar-nav">
        <li>
            <Link to="/Resumen">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: list"></span>
                Resumen
            </Link>
        </li>
    </ul>

            

    <ul className="uk-navbar-nav">
        <li>
            <Link to="/Validaciones">
                <span className="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
                Registro
            </Link>
        </li>
    </ul>



    
    <ul className="uk-navbar-nav uk-text-center">
        <li>
            <Link to="/Reporte">
            <i className="fa fa-user-circle uk-margin-small-right fa-lg" aria-hidden="true"></i> Reporte Usuario
            </Link>
        </li>
    </ul>



        </div>
</nav>


<Switch>


    <Route exact path="/" component={Biografia}/>


    <Route exact path="/Reportes" component={Reportes}/>
   

    <Route exact path="/Formulario" component={Formulario}/>
  

    <Route exact path="/Resumen" component={Pagos}/>
   

    <Route exact path="/Validaciones" component={Validaciones}/>
   

    <Route exact path="/Reporte" component={ReporteUsuarios}/>


    <Route exact path="/InfUsuarios" component={InfUsuarios}/>

    <Route exact path="/DeleteUser" component={DeleteUser}/>


    <Route path="*" component={Error}/>


      

</Switch>

</Router>



)


}

export default Hosting;