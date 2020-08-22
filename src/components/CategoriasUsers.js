import React from 'react'
import Subcategories from './Subcategories'



function CategoriasUsers(props) {
    return (






        <div className="col">
            <div className="card shadow mb-4">
                <div className="card-header py-3">

                    <h4 className="m-0 font-weight-bold text-primary">Categories in Data Base</h4>
                </div>
                <div className="card-body">

                    <div className="justify-content">
                        {props.info.map(dato => { return <Subcategories info={dato} /> })}


                    </div>
                </div>
            </div>
        </div>



    )
}





export default CategoriasUsers