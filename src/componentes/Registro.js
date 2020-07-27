import React from 'react';
import {Link} from 'react-router-dom';

// expreciones regulares e inregulares

const textoRegex =RegExp(/^[a-zA-Z, ,ÑñÁáÉéÍíÓóÚúÜü]+$/);
const telefonoRegex =RegExp(/^[0-9]{3}[-. ][0-9]{3}[-. ][0-9]{4}$/);
const correoRegex=RegExp(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})$/);
const passwordRegex=RegExp(/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/)
const generoRegex = RegExp(/^[A-ZÑñÁÉÍÓÚÜ]{1}[a-záéíóúü]+$/)
const placaRegex=RegExp(/^[A-Z]{3}[- ][0-9]{3}$/)


const formValid = ({errores,...rest}) =>{
let valid =true;

Object.values(errores).forEach(val=>{val.length>0 && (valid=false);
})

Object.values(rest).forEach(val=>{val===null && (valid=false);
})

return valid;
}

class Resgistro extends React.Component{
    

state={

nombre:null,
apep:null,
apem:null,
telefono:null,
correo:null,
contra:null,
recontra:null,
marca:null,
modelo:null,
sexo:null,
comentario:null,
genero:'otro',
placa:null,
status:'',
foto:"img/user.png",
marcas:[],
modelos:[],

    errores:{ 
    nombre:"",
    apep:"",
    apem:"",
    telefono:"",
    correo:"",
    contra:"",
    recontra:"",
    marca:"",
    modelo:"",
    sexo:"",
    comentario:"",
    genero:"",
    placa:"",

    }

}

componentDidMount(){


    fetch("http://localhost/api/public/api/showMarcas")//recibir la api 
    .then(response => response.json())
    .then(showMarcas => this.setState({marcas:showMarcas}))

    fetch("http://localhost/api/public/api/showModelos")//recibir la api 
    .then(response => response.json())
    .then(showModelos => this.setState({modelos:showModelos}))
}



handleChange =e => {

const{name,value} = e.target
let errores ={...this.state.errores}

switch(name){
    case "nombre":
            errores.nombre = textoRegex.test(value)
            ? "" 
            :"ingresar solo Letras"; 
    break;

    case "apep":
        errores.apep = textoRegex.test(value)
        ? "" 
        :"ingresar solo Letras"; 

    break;


    case "apem":
        errores.apem = textoRegex.test(value)
        ? "" 
        :"ingresar solo Letras"; 
    break;

    case "telefono":
        errores.telefono = telefonoRegex.test(value)
        ? "" 
        :"ingresar solo Numeros"; 
    break;

    case "correo":
        errores.correo = correoRegex.test(value)
        ? "" 
        :"ingresa un correo válido"; 
    break;


    case "contra":
        errores.contra = passwordRegex.test(value)
        ? "" 
        :"ingresa contraseña por ejemplo:Diana23"; 
    break;

    case "recontra":
        errores.recontra = passwordRegex.test(value)
        ? "" 
        :"Vuelve a introducir la contraseña"; 
    break;

    case "marca":
        errores.marca = value===""
        ? "Selecciona al menos un valor" 
        :""; 
    break;


    case "modelo":
        errores.modelo = value===""
        ? "Selecciona al menos un valor" 
        :""; 
    break;

    case "placa":
        errores.placa = placaRegex.test(value)
        ? "" 
        :"ingresar placa por ejemplo: FDO-165"; 
    break;


    case "genero":
        errores.genero = generoRegex.test(value)
        ? "" 
        :"Ingresa solo letras iniciando con mayúsculas"; 
    break;


    case "sexo":
        errores.sexo = value==="otro"
        ?  <div className="uk-form-controls uk-inline">
                <span className="uk-form-icon">
                    <i className="fa fa-venus-mars" aria-hidden="true"></i>
                </span>   
                <input className="uk-input uk-form-width-large" 
                name="genero" type="text" placeholder="Define tu Sexo" onKeyUp={this.handleChange}/>
            </div>
        :""; 

    break;


    
    case "comentario":
        errores.comentario = value.length>123 //evaluar la longitud
        ? "Maximo 123 caracteres" 
        :""; 
    break;




    default:
    break;

}

this.setState({errores,[name]:value})
  
}


    handleSubmit=e=>{
    e.preventDefault();

    if(formValid(this.state))

    {

        let data= {

            foto: this.state.foto,
            name: this.state.nombre,
            apellidop: this.state.apep,
            apellidom: this.state.apem,
            sexo: this.state.sexo,
            genero: this.state.genero,
            telefono: this.state.telefono,
            email: this.state.correo,
            password: this.state.contra,
            placa: this.state.placa,
            comentario: this.state.comentario,
            marca_id: this.state.marca,
            modelo_id: this.state.modelo
        }

        fetch("http://localhost/api/public/api/newStore",
        {
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })

        .then(response =>response.json())
        .then(this.setState({status: "Alta Exitosa"}))

    }

    else{

    this.setState({status:"Corregir la información"})

    }


    }

    notSubmit=e=>{

        e.preventDefault();
    }


    render(){


         const{errores,foto,marcas,modelos} = this.state
 
            return(
                
        <div className="uk-flex uk-flex-center"> 

            <Link className="uk-align-left" to="/Reporte">
                <i className="fa fa-chevron-circle-left fa-3x" aria-hidden="true"></i>
            </Link>

            <div>
    
            <form onSubmit={this.notSubmit} noValidate>


                <div className="uk-card uk-card-default uk-width-large">

                    <div className="uk-card-header">

                        <div className="uk-grid-small uk-flex-middle">

                    <div className="uk-grid-small uk-grid uk-align-right">

                        <label className="uk-form-label uk-text-bold">Escoge tu avatar...</label>
                        <br/>

                        <li className="uk-button uk-button-link"> 
                            <input type="image" name="foto" src="img/vene.jpg" width="40" height="40" alt="vene" value="img/vene.jpg" onClick={this.handleChange}/>
                        </li>

                        <li className="uk-button uk-button-link"> 
                            <input type="image" name="foto" src="img/github-1.svg" width="40" height="40" alt="github" value="img/github-1.svg" onClick={this.handleChange}/>
                       </li>

                       <li className="uk-button uk-button-link"> 
                         <input type="image" name="foto" src="img/gitlab.svg" width="40" height="40" alt="gitlab" value="img/gitlab.svg" onClick={this.handleChange}/>
                      </li>

                      <br/>

                      <li className="uk-button uk-button-link"> 
                         <input type="image" name="foto" src="img/python-5.svg" width="40" height="40" alt="python" value="img/python-5.svg" onClick={this.handleChange}/>
                      </li>

                      <li className="uk-button uk-button-link"> 
                         <input type="image" name="foto" src="img/rex.png" width="40" height="40" alt="rex" value="img/rex.png" onClick={this.handleChange}/>
                      </li>

                      <li className="uk-button uk-button-link"> 
                         <input type="image" name="foto" src="img/golan.png" width="40" height="40" alt="go" value="img/golan.png" onClick={this.handleChange}/>
                      </li>
               </div>
                  
               <div className="uk-width-auto">
                    <img className="uk-border-circle" width="100" height="100" 
                    src= {foto} alt="user"/>
                </div>


                <div className="uk-width-expand">
                    <h4 className="uk-card-title uk-margin-remove-bottom">
                        <strong> Registro </strong>
                    </h4>                 
                </div>
            </div>
        </div>

                        <div className="uk-card-body">

                            <label className="uk-form-label">Nombre</label>
                            
                            <div className="">

                                    <div className="uk-form-controls uk-inline">

                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                        
                                    <input 
                                    className={errores.nombre.length>0 ? "uk-input uk-form-width-large uk-form-danger" 
                                                                       :"uk-input uk-form-width-large"} 
                                    name="nombre" type="text"  onKeyUp={this.handleChange}/>

                                    </div>
                            </div>

                            <div className="uk-alert-danger uk-margin">
                                <p>{errores.nombre}</p>
                           </div>

                            <div className="uk-column-1-2">

                                    <div className="">
                                        <label className="uk-form-label">Apellido Paterno</label>
                                        <input className={errores.apep.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                                                                :"uk-input uk-form-width-large"} 
                                        type="text" placeholder="" name="apep" onKeyUp={this.handleChange}/>
                                    </div>


                                    <div className="uk-alert-danger uk-margin">
                                    <p>{errores.apep}</p>
                                   </div>




                                    
                                    <div className="">
                                    <label className="uk-form-label">Apellido Materno</label>
                                        <input className={errores.apem.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                                                                :"uk-input uk-form-width-large"} 
                                        type="text" placeholder="" name="apem" onKeyUp={this.handleChange}/>
                                    </div>


                                    <div className="uk-alert-danger uk-margin">
                                    <p>{errores.apem}</p>
                                   </div>


                                   </div> 


                                   <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                   <label><input className="uk-radio" type="radio" name="sexo" defaultChecked value="Mujer" onChange={this.handleChange}/> Mujer</label>
                                   
                                   <label><input className="uk-radio" type="radio" name="sexo" value="Hombre"  onChange={this.handleChange} /> Hombre</label>

                         
                                   <label><input className="uk-radio" type="radio" name="sexo" value="otro" onChange={this.handleChange}/> Otro</label>


                                   </div>



                                   <div>
                                   {errores.sexo}
                                  </div>

                                  <div className="uk-alert-danger uk-margin">
                                  <p>{errores.genero}</p>
                                 </div>



                          

                            <label className="uk-form-label">Telefono</label>

                            <div className="">

                                    <div className="uk-form-controls uk-inline">

                                    <span className="uk-form-icon" uk-icon="icon:  receiver"></span>
                                        
                                    <input className={errores.telefono.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                                                            :"uk-input uk-form-width-large"} 
                                           type="text" name="telefono"  onKeyUp={this.handleChange}/>

                                    </div>
                            </div>

                            <div className="uk-alert-danger uk-margin">
                            <p>{errores.telefono}</p>
                           </div>


                            <label className="uk-form-label">Correo Electronico</label>

                            <div className="">

                                    <div className="uk-form-controls uk-inline">

                                    <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                        
                                    <input className={errores.correo.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                                                                :"uk-input uk-form-width-large"} 
                                    type="text" placeholder="example@.com" name="correo" onKeyUp={this.handleChange}/>

                                    </div>
                            </div>

                            
                            <div className="uk-alert-danger uk-margin">
                            <p>{errores.correo}</p>
                           </div>


                            <div className="uk-column-1-1">

                            <label className="uk-form-label">Contraseña</label>
                            
                            <div className="uk-inline">

                            
                                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                        
                               
                                <input className={errores.contra.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                :"uk-input uk-form-width-large"}type="password" placeholder="" name="contra" onKeyUp={this.handleChange}/>
                            </div>


                            <div className="uk-alert-danger uk-margin">
                            <p>{errores.contra}</p>
                           </div>
                            


                            <label className="uk-form-label">Repetir contraseña</label>
                            
                            <div className="uk-inline">
                           
                                 <span className="uk-form-icon" uk-icon="icon: lock"></span>

                                <input className={errores.recontra.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                :"uk-input uk-form-width-large"} type="password" placeholder="" name="recontra" onKeyUp={this.handleChange}/>
                            </div>

                            <div className="uk-alert-danger uk-margin">
                            <p>{errores.recontra}</p>
                           </div>

                    </div> 



                    <div className="uk-margin">
                    <label className="uk-form-label">Elige la marca de tu auto</label>
                    <div className="uk-form-controls">
                        <select className={errores.marca.length>0 ? "uk-select  uk-form-danger"
                                                                     :"uk-select"}
                         name="marca" onChange={this.handleChange}>

                            <option value="">Seleccionar una marca</option>
                        {marcas.map((marca, i) =>
                            <option value={marca.marca_id} key={i}>{marca.name}</option>   
                        )}                        
                        </select>
                    </div>
                   </div>

                   
                   <div className="uk-alert-danger uk-margin">
                   <p>{errores.marca}</p>
                  </div>


                  <div className="uk-margin">
                  <label className="uk-form-label">Elije el Año del auto</label>
                  <div className="uk-form-controls">
                      <select className={errores.modelo.length>0 ? "uk-select  uk-form-danger"
                                                                   :"uk-select"}
                         name="modelo" onChange={this.handleChange}>
                          <option value="">Seleccionar un modelo</option>
                         
                          {modelos.map((modelo, i) =>
                            <option value={modelo.modelo_id} key={i}>{modelo.año}</option>   
                          )} 
                          
                      </select>
                  </div>
                 </div>

                 <div className="uk-alert-danger uk-margin">
                 <p>{errores.modelo}</p>
                </div>


                
                <label className="uk-form-label">Placa de auto</label>

                <div className="">

                        <div className="uk-form-controls uk-inline">

                        <span className="uk-form-icon"> <i className="fa fa-id-card" aria-hidden="true"></i></span>
                            
                        <input className={errores.placa.length>0 ? "uk-input uk-form-width-large uk-form-danger"
                                                                 :"uk-input uk-form-width-large"} 
                               type="text" name="placa"  onKeyUp={this.handleChange}/>

                        </div>
                </div>

                <div className="uk-alert-danger uk-margin">
                <p>{errores.placa}</p>
               </div>



                <div className="uk-margin">
                  <textarea className="uk-textarea" rows="5"  name="comentario" placeholder="Textarea" onKeyUp={this.handleChange}></textarea>
                </div>

                <div className="uk-alert-danger uk-margin">
                 <p>{errores.comentario}</p>
                </div>


                  


                   <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" onClick={this.handleSubmit}>Registrar</button>

                   <div className=
                        {
                             this.state.status ==="Alta Exitosa" 
                                ? "uk-alert-success uk-margin"
                                : "uk-alert-danger uk-margin"
                        } >
                        <p className="uk-text-center">{this.state.status}</p>
                  </div>



                            

                        </div>
                      
                </div>
                
                
                </form>

            </div>

            </div>
            )
    }
}

export default Resgistro;