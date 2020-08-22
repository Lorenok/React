import React from 'react'


function Sidebar(props) {
    return (
	<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-text mx-3">Gametech</div>
        </a>

        <hr className="sidebar-divider my-0"/>

        <li className="idebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-section sidebar-user clearfix sidebar-nav-mini-hide">
                <div className="sidebar-user-avatar">
                    <a href="page_ready_user_profile.html">
					
                        <img src={` ${props.info.imagen}`} alt="avatar"/></a>
                    </div>
	<div className="sidebar-user-name">{props.info.name}</div>
                    <div className="sidebar-user-links">
                        
                        <a href="page_ready_inbox.html" data-toggle="tooltip" data-placement="bottom" title="Messages">
                            <i className="gi gi-envelope"></i>
                        </a>
                    </div>
                </div>

            </li>
            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">Actions</div>


            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </a>
            </li>
        </ul>
        )
        }
        
        export default Sidebar
