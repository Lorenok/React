import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Main from './components/Main';
import MainUsers from './components/MainUsers';



class App extends React.Component {

    render() {

        return (

            <div>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"><img src='../' /></a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>

                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              Orders
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Products
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Customers
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Reports
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Integrations
            </a>
                            </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved reports</span>
                            <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Current month
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Last quarter
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Social engagement
            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Year-end sale
            </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-header">
                    <ul className="nav-horizontal text-center">
                        <li className="active">
                            <a href="page_ecom_dashboard.html"><i className="fa fa-bar-chart"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="page_ecom_orders.html"><i className="gi gi-shop_window"></i> Orders</a>
                        </li>
                        <li>
                            <a href="page_ecom_order_view.html"><i className="gi gi-shopping_cart"></i> Order View</a>
                        </li>
                        <li>
                            <a href="page_ecom_products.html"><i className="gi gi-shopping_bag"></i> Products</a>
                        </li>
                        <li>
                            <a href="page_ecom_product_edit.html"><i className="gi gi-pencil"></i> Product Edit</a>
                        </li>
                        <li>
                            <a href="page_ecom_customer_view.html"><i className="gi gi-user"></i> Customer View</a>
                        </li>
                    </ul>
                </div>



                <div className="row text-center">
                    <div className="col-sm-6 col-lg-3">
                        <a href="javascript:void(0)" className="widget widget-hover-effect2">
                            <div className="widget-extra themed-background">
                                <h4 className="widget-content-light"><strong>Pending</strong> Orders</h4>
                            </div>
                            <div className="widget-extra-full"><span className="h2 animation-expandOpen">3</span></div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <a href="javascript:void(0)" className="widget widget-hover-effect2">
                            <div className="widget-extra themed-background-dark">
                                <h4 className="widget-content-light"><strong>Conversion</strong> Rate</h4>
                            </div>
                            <div className="widget-extra-full"><span className="h2 themed-color-dark animation-expandOpen">4.7%</span></div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <a href="javascript:void(0)" className="widget widget-hover-effect2">
                            <div className="widget-extra themed-background-dark">
                                <h4 className="widget-content-light"><strong>Orders</strong> Today</h4>
                            </div>
                            <div className="widget-extra-full"><span className="h2 themed-color-dark animation-expandOpen">120</span></div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <a href="javascript:void(0)" className="widget widget-hover-effect2">
                            <div className="widget-extra themed-background-dark">
                                <h4 className="widget-content-light"><strong>Earnings</strong> Today</h4>
                            </div>
                            <div className="widget-extra-full"><span className="h2 themed-color-dark animation-expandOpen">$ 4.250</span></div>
                        </a>
                    </div>
                </div>



                <div className="block full">

                    <div className="block-title">
                        <div className="block-options pull-right">
                            <div className="btn-group btn-group-sm">
                                <a href="javascript:void(0)" className="btn btn-alt btn-sm btn-default dropdown-toggle" data-toggle="dropdown">Last Year <span className="caret"></span></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="active">
                                        <a href="javascript:void(0)">Last Year</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Last Month</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">This Month</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Today</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="javascript:void(0)" className="btn btn-alt btn-sm btn-default" data-toggle="tooltip" title="Settings"><i className="fa fa-cog"></i></a>
                        </div>
                        <h2><strong>eShop</strong> Overview</h2>
                    </div>



                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="row push">
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">45.000</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Total Orders</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">$ 1.200,00</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Cart Value</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">1.520.000</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Visits</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">28.000</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Customers</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">3.5%</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Conv. Rate</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">4.250</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Products</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">$ 260.000,00</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Net Profit</a></small></h3>
                                </div>
                                <div className="col-xs-6">
                                    <h3><strong className="animation-fadeInQuick">$ 16.850,00</strong><small className="text-uppercase animation-fadeInQuickInv"><a href="javascript:void(0)">Payment Fees</a></small></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8">

                            <div id="chart-overview" style={{ height: 350 }}></div>
                        </div>
                   
                    
                        <div clasNames="col-lg-6">

                            <div className="block">

                                <div className="block-title">
                                    <div className="block-options pull-right">
                                        <a href="page_ecom_orders.html" className="btn btn-alt btn-sm btn-default" data-toggle="tooltip" title="Show All"><i className="fa fa-eye"></i></a>
                                        <a href="javascript:void(0)" className="btn btn-alt btn-sm btn-default" data-toggle="tooltip" title="Settings"><i className="fa fa-cog"></i></a>
                                    </div>
                                    <h2><strong>Latest</strong> Orders</h2>
                                </div>


                                <table className="table table-borderless table-striped table-vcenter table-bordered">
                                    <tbody>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="javascript:void(0)"><strong>ORD.685116</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Gerald Berry</a></td>
                                            <td className="hidden-xs">Paypal</td>
                                            <td className="text-right"><strong>$65,00</strong></td>
                                            <td className="text-right"><span className="label label-success">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685115</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Patrick Bates</a></td>
                                            <td className="hidden-xs">Bank wire</td>
                                            <td className="text-right"><strong>$268,00</strong></td>
                                            <td className="text-right"><span className="label label-danger">Canceled</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685114</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Ethan Greene</a></td>
                                            <td className="hidden-xs">Paypal</td>
                                            <td className="text-right"><strong>$362,00</strong></td>
                                            <td className="text-right"><span className="label label-success">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685113</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Bruce Hicks</a></td>
                                            <td className="hidden-xs">Paypal</td>
                                            <td className="text-right"><strong>$23,00</strong></td>
                                            <td className="text-right"><span className="label label-warning">Processing</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685112</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Harry Burke</a></td>
                                            <td className="hidden-xs">Bank wire</td>
                                            <td className="text-right"><strong>$1360,00</strong></td>
                                            <td className="text-right"><span className="label label-success">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685111</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Nancy Rose</a></td>
                                            <td className="hidden-xs">Bank wire</td>
                                            <td className="text-right"><strong>$2685,00</strong></td>
                                            <td className="text-right"><span className="label label-warning">Processing</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685110</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Helen Jensen</a></td>
                                            <td className="hidden-xs">Paypal</td>
                                            <td className="text-right"><strong>$128,00</strong></td>
                                            <td className="text-right"><span className="label label-success">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685109</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Harry Medina</a></td>
                                            <td className="hidden-xs">Check</td>
                                            <td className="text-right"><strong>$3150,00</strong></td>
                                            <td className="text-right"><span className="label label-warning">Processing</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685108</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Ryan Hopkins</a></td>
                                            <td className="hidden-xs">Check</td>
                                            <td className="text-right"><strong>$750,00</strong></td>
                                            <td className="text-right"><span className="label label-success">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="javascript:void(0)"><strong>ORD.685107</strong></a></td>
                                            <td className="hidden-xs"><a href="javascript:void(0)">Anthony Franklin</a></td>
                                            <td className="hidden-xs">Paypal</td>
                                            <td className="text-right"><strong>$630,00</strong></td>
                                            <td className="text-right"><span className="label label-danger">Canceled</span></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                      

                            <div className="block">

                                <div className="block-title">
                                    <div className="block-options pull-right">
                                        <a href="page_ecom_products.html" className="btn btn-alt btn-sm btn-default" data-toggle="tooltip" title="Show All"><i className="fa fa-eye"></i></a>
                                        <a href="javascript:void(0)" className="btn btn-alt btn-sm btn-default" data-toggle="tooltip" title="Settings"><i className="fa fa-cog"></i></a>
                                    </div>
                                    <h2><strong>Top</strong> Products</h2>
                                </div>


                                <table className="table table-borderless table-striped table-vcenter table-bordered">
                                    <tbody>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8765</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">iPhone 6 Plus 32GB</a></td>
                                            <td className="text-center"><strong>435</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8764</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">Wii U</a></td>
                                            <td className="text-center"><strong>502</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8763</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">Samsung Galaxy Note 4 32GB</a></td>
                                            <td className="text-center"><strong>440</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8762</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">Playstation 4</a></td>
                                            <td className="text-center"><strong>750</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8761</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">HTC One 32GB</a></td>
                                            <td className="text-center"><strong>420</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8760</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">Xbox One</a></td>
                                            <td className="text-center"><strong>650</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8762</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">iPad Mini Retina 64GB</a></td>
                                            <td className="text-center"><strong>521</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8761</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">LG Tab 10.1</a></td>
                                            <td className="text-center"><strong>427</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8760</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">Macbook Pro 15' Retina</a></td>
                                            <td className="text-center"><strong>392</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center" style={{ width: 100 }}><a href="page_ecom_product_edit.html"><strong>PID.8760</strong></a></td>
                                            <td><a href="page_ecom_product_edit.html">PS Vita</a></td>
                                            <td className="text-center"><strong>380</strong> orders</td>
                                            <td className="hidden-xs text-center">
                                                <div className="text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            </div>
                       
                   

                </div>

            </div>

        )
    }
}

export default App
