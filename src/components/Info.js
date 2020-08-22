import React from 'react'


function Stats (props){
    return (
		<div className="col mr-2">
								<div > 
                               
								{props.datos.name}
                                </div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">
                                    
                                    {props.info.number}
                                    
                                    </div>
							</div>
    )
}


export default Stats