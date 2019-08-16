import React, { Component } from 'react'
import {connect} from "react-redux"
import {funcPalabra, search} from "../reduxConfig/actionCreators"

class FormFilter extends Component {
    render() {
        return (
            <div className="accordion" id="accordionExample" role="tablist" aria-multiselectable="true" style={{margin:"10px", padding:"5px"}}>

                    <div className="card bg-transparent" style={{marginBottom:"5px"}}>
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <h4><span className="badge badge-pill badge-info">Search Hotel with name</span></h4>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                    <form style={{textAlign:"center"}} onSubmit={(e) => this.props.search(this.props.name)}>
                                        <div className="form-group">
                                                <input type="text" name="name" className="form-control bg-transparent" placeholder="Name..."
                                                    onChange={(e) => this.props.funcPalabra(e)} 
                                                    value={this.props.name}/>
                                        </div>
                                        <button type="submit" className="badge badge-pill badge-info">Search</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card bg-transparent">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4><span className="badge badge-pill badge-info">Estrellas</span></h4>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                Buscar por estrellas
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name : state.name
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        // obtenerNombre : () => {
        //     dispatch(obtenerNombre())
        // }, 
        funcPalabra : (e) => { 
            dispatch(funcPalabra(e))
        }
        ,
        search : (e, name) => {
            dispatch(search(e, name))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);