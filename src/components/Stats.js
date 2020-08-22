import React from 'react'


function Stats (props){
    return (
		<div className="col-md-6 mb-6">
				<div className={`card border-left-${props.info.variant} shadow h-100 py-2`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className={`text-xs font-weight-bold text-${props.info.variant} text-uppercase mb-1`}> 
                                {props.info.title}
                                </div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">
                                    
                                    {props.info.number}
                                    
                                    </div>
							</div>
							<div className="col-auto">
								<i className={` ${props.info.icono}`}></i>
							</div>
						</div>
					</div>
				</div>
			</div>

    )
}

Stats.defaultProps = {info :{title:'No Title',
number:'25', 
variant:'', 
icono:'fas fa-clipboard-list fa-2x text-gray-300'}
    
};

export default Stats