import React from 'react'


function UltimoProducto(props) {

    return (
		
	
        
            <div className="card shadow mb-4">
                <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase {props.info.name}</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={` ${props.info.image}`} alt="image dummy"/>
                    </div>
                    <p>{props.info.description}</p>
                    <a target="_blank" rel="nofollow" href={` ${props.info.detail}`}>View product detail</a>
                </div>
            </div>
       
    )}
export default UltimoProducto
