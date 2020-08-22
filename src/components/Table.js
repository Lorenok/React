import React from 'react'
import TableInfo from './TableInfo'
import TableTags from './TableTags'


function Table (props){
	let tags = [{titulos:'Name'},{titulos:'Description'},{titulos:'Price'},{titulos:'Categories'},{titulos:'Colors'},{titulos:'Stock'}]


	let usuarios = [{Name:'Tiger Nixon',
    Description:'System Architect',
    Price:'$320,800',
    Categories:['Category 01','Category 02','Category 03'],
    Colors:['Red','Blue','Green'],
    Stock:'245'},{Name:'Jane doe',
    Description:'Fullstack developer',
    Price:'$320,800',
    Categories:['Category 01','Category 02','Category 03'],
    Colors:['Red','Blue','Green'],
	Stock:'245'}]
	
    return (
    		
				<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
										{tags.map(taggs => {return <TableTags taggs={taggs}/> })}
										</tr>
										
									</thead>
									<tfoot>
										<tr>
										{tags.map(taggs => {return <TableTags taggs={taggs}/> })}
										</tr>
									</tfoot>
									<tbody>
										{usuarios.map(user => {return <TableInfo user={user}/> })}
									</tbody>
				</table>
	

                
    
    )
}

export default Table