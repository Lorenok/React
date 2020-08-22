import React from 'react'


function Subcategories (props){

    return (
        
        <div className="card bg-info text-white shadow">
               
                     <div className="card-body categorias">
                      Nombre de categoría: {props.info.name}
                    </div>
                    <div className="card-body categorias">
                      Total de productos: {props.info.total}
                    </div>
                </div>
                
            

)
}


                            
    

export default Subcategories