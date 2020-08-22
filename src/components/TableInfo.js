import React from 'react'


function TableInfo (props){


    return (
             <tr>
				<td>{props.user.Name}</td>
				<td>{props.user.Description}</td>
				<td>{props.user.Price}</td>
				<td>
					<ul>
						<li>{props.user.Categories[0]}</li>
						<li>{props.user.Categories[1]}</li>
						<li>{props.user.Categories[2]}</li>
					</ul>
				</td>
				<td>
					<ul>
						<li><span className="text-danger">{props.user.Colors[0]}</span></li>
						<li><span className="text-primary">{props.user.Colors[1]}</span></li>
						<li><span className="text-success">{props.user.Colors[2]}</span></li>
												</ul>
				</td>
				<td>{props.user.Stock}</td>
			</tr>
    )
}

export default TableInfo