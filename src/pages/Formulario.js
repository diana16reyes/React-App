
import React from 'react';

class Formulario  extends React.Component{

// constructor(){
// super();

// this.state={
// combo1:'',
// combo2:'',
// gigas:'',
// precio:0,
// dominio:0,
// total:0,
// host:false,
// vps:false,
// nombredominio:'',
// preciogigas:0,
// mensaje1:'',
// mensaje2:'',
// logo:'',
// color:''

// }

// }






state={
    preciogigas:'',
    precio:''

}




calcular= e=>

{

// this.setState({total: this.state.preciogigas + this.state.precio})

const{disco}=this.props

    if(disco.gigas === '8'){
    
        this.setState({preciogigas:300 + parseInt(disco.combo1)})

        // this.setState({mensaje1:'Precios registrados'})

    }

    else if(disco.gigas === '16'){

        this.setState({preciogigas:600 + parseInt(disco.combo1)})

        // this.setState({mensaje1:'Precios registrados'})

    }

    else if(disco.gigas === '32'){

        this.setState({preciogigas:900 + parseInt(disco.combo1)})

        // this.setState({mensaje1:'Precios registrados'})

    }

    else if(disco.gigas === '64'){

        this.setState({preciogigas:1200 + parseInt(disco.combo1)})

        // this.setState({mensaje1:'Precios registrados'})

    }





    switch(disco.combo2){
    
    case ".online": this.setState({precio:150})
                    // this.setState({mensaje2:"Tu dominio es: " + this.state.nombredominio + this.state.combo2})
        break;

    case ".com":    this.setState({precio:250})
                   
        break;

    case ".mx":     this.setState({precio:350})
                    
        break;

    default: return null
    }



}


// recibevalores=e=>{
// this.setState({[e.target.name]:e.target.value})

//  }

render(){

const{agregar,disco}=this.props



return(

<div>
<form>
    <div className="uk-flex uk-flex-center">

            <div className="uk-card uk-card-default uk-card-body" hidden></div>

            <div className="uk-card uk-card-default uk-card-body uk-margin-left">
                    



                <legend className="uk-legend  uk-margin uk-text-bold"> Formulario De Pago</legend>



                <div className="uk-column-1-2 uk-column-divider">

                
                    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">

                        <label><input className="uk-radio" type="radio" name="gigas" value={"8"} onChange={agregar}/> 8 GB</label>

                        <label><input className="uk-radio" type="radio" name="gigas" value={"16"} onChange={agregar}/> 16 GB</label>

                        <label><input className="uk-radio" type="radio" name="gigas" value={"32"} onChange={agregar}/> 32 GB</label>

                        <label><input className="uk-radio" type="radio" name="gigas" value={"64"} onChange={agregar}/> 64 GB</label>
                        
                    </div>

                        
                        
                    <div className="uk-margin">
                    <label>Memoria RAM</label>

                    <input className="uk-range" type="range"  min="0" max="16" step="2" name="rango" onChange={agregar}  value={disco.rango}/>

                    </div>

                    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">

                            <label><input className="uk-checkbox" type="checkbox" name="host" value="web" onChange={agregar}/> Hosting Web</label>

                            <label><input className="uk-checkbox" type="checkbox" name="vps" value="vps" onChange={agregar}/>VPS</label>
                    </div>


                    <div className="uk-margin">
                        <select className="uk-select" name="combo1" onChange={agregar}>
                        <option  value={"1000"}>1 Año</option>
                        <option  value={"2000"}>2 Años</option>
                        <option  value={"3000"}>3 Años</option>
                        <option  value={"4000"}>4 Años</option>
                         </select>



                   </div>


                   <div className="uk-margin">
                   
                   <input className="uk-input" type="text" placeholder="Escribe tu dominio" name="nombredominio" onKeyUp={agregar}/>

                   </div>

                
                 
                   <div className="uk-margin">
                        <select className="uk-select" name="combo2" onChange={agregar}>
                        <option value=".com">.com</option>
                        <option value=".mx">.mx</option>
                        <option value=".online">.online</option>
                        </select>

    
                 </div>

                
                 <div className="uk-margin">
                   
                 <input className="uk-input" type="text" placeholder="Inserta un logo" name="icono" onKeyUp={agregar}/>
 
                 </div>
 
 
 
 
                 <div>
 
                 <div className="uk-margin">
 
                     <div>
                     
                         <input className="uk-input uk-width-1-3" type="color" name="color" onChange={agregar}/>
 
                         <span className="uk-text-middle">Elige un color</span>
                         
                     </div>
 
                       
                 </div>
               
                


                 <div className="uk-margin">
                    
                 <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" type="button" onClick={this.calcular}  >Agregar</button>

                
                 </div>

                


                 <div className="uk-margin">
                         <input className="uk-input"  value={'$'+(this.state.preciogigas + this.state.precio)} type="text" placeholder="Precio total" readOnly/>
                </div>
        

               
                <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" name="total" type="button" value={this.state.preciogigas + this.state.precio} onClick={agregar}>terminar compra</button>


                


                
               

 







                
                </div>

                
               </div>
                        
               

            </div>

            <div className="uk-card uk-card-default uk-card-body uk-margin-left" hidden></div>


    </div>
    </form>

</div>



);

    }
}


export default Formulario;