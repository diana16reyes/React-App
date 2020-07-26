import React from 'react';
import Formulario from './Formulario';
import Resumen from '../componentes/Resumen';

class Pagos extends React.Component{


    state={

    form:{
        icono:"fa fa-heart fa-5x",
        color:"Crimson",
        rango:"0",
        gigas:"0",
        host:"",
        vps:"",
        combo1:"",
        combo2:"",
        total:'',
        nombredominio:''
    }
    }

    valores=e=>{
       
        this.setState({
            form:{
                ...this.state.form,
            [e.target.name]:e.target.value
        
            }
        })
        
        }

render(){


return(
<div className="uk-flex uk-flex-center">

<div><Formulario  agregar={this.valores} disco={this.state.form}/>

</div>

<div><Resumen {...this.state.form}/></div>



</div>




);

}
}


export default Pagos;