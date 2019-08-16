import React, { Component } from 'react'
import {connect} from "react-redux"
import {getHoteles, verHotel} from "../reduxConfig/actionCreators"
import '../App.css';

class GridHoteles extends Component {

    componentDidMount(){
        this.props.getHoteles()
    }

    render() {
      
        return (
          <div className="row App gridView" style={{border:"1px solid", width:"100vw"}}>
          {
            this.props.hoteles.map((hotel, i) => {
            const folderUrl = "./recursos/assets/images/hotels/";
            const folderIcons = "./recursos/assets/icons/amenities/"
            const folderStar = "./recursos/assets/icons/filters/"
            const stars = hotel.stars;
            const arrayInventado = [1,2,3,4,5,6,7,8,9,10];
            // var myHotel = this.props.selectedHotel.image
            return(
                <div key={i}>
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img className="card-img" style={{width: "8rem", height:"7rem"}} 
                                src={require(`${folderUrl}${hotel.image}`)} alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          <div className="card-header">
                            <h5 className="card-title">{hotel.name}</h5>
                          </div>
                          <div className="card-body">
                            <div className="container">
                              <div>
                                {
                                  arrayInventado.map((valor, i) => {
                                    if(i < stars){
                                      return(
                                        <img key={i} className="star card-img" src={require(`${folderStar}star.svg`)} alt="..." style={{width: "1rem", height:"1rem", background:"yellow"}}></img>
                                      )
                                    }
                                  })
                                }
                              </div>
                              <div>
                                {
                                  hotel.amenities.map((amenity, i) => <img key={i} className="card-img" 
                                  style={{width: "1rem", height:"1rem"}} src={require(`${folderIcons}${amenity}.svg`)} alt="..."></img>)
                                }
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                          <p className="card-text">Precio Noche habitacion: $</p>
                            <h5 className="card-title">{hotel.price}</h5>
                            
                            <button type="button" onClick={() => this.props.verHotel(hotel)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                              Ver Hotel
                            </button>


                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        {this.props.selectedHotel.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  
                                  <div className="modal-body"> 
                                        {
                                          this.props.selectedHotel.image ?
                                          <img className="card-img" style={{width: "8rem", height:"7rem"}}
                                            src={require(`${folderUrl}${this.props.selectedHotel.image}`)} alt="..."></img>
                                            :
                                          <div></div>
                                        }
                                  </div>
                                  
                                  <div className="modal-footer">
                                    {/* <button type="button" className="btn btn-primary">ok</button> */}
                                  </div>

                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            )
            })
          }       
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      hoteles : state.hoteles,
      selectedHotel: state.selectedHotel
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      verHotel : (hotel) => {
        dispatch(verHotel(hotel))
      }, 
      getHoteles : () => { 
        dispatch(getHoteles())
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(GridHoteles);