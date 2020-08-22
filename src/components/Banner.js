import React from 'react'


function Banner(props) {
    return (
        <div className="row">
            <div className="col-md-8 col-lg-6">
                <div className="row text-center">
                    <div className="col-xs-4 col-sm-3">
                        <h2 className="animation-hatch">
                            $<strong>93.7k</strong></h2>
                            <h2>  <small>
                                <i className="fa fa-thumbs-o-up"></i>  
                                   Great</small>
                        </h2>
                    </div>
                    <div className="col-xs-4 col-sm-3">
                        <h2 className="animation-hatch">
                            <strong>167k</strong></h2>
                            <h2> <small>
                            
                                <i className="fa fa-heart-o"></i>
                                Likes</small>
                        </h2>
                    </div>
                    <div className="col-xs-4 col-sm-3">
                        <h2 className="animation-hatch">
                            <strong>101</strong></h2>
                            <h2> <small>
                                <i className="fa fa-calendar-o"></i>
                                Events</small>
                        </h2>
                    </div>

                    <div className="col-sm-3 hidden-xs">
                        <h2 className="animation-hatch">
                            <strong>27° C</strong></h2>
                            <h2>  <small>
                                <i className="fa fa-map-marker"></i>
                                Sydney</small>
                        </h2>
                    </div>
                </div>
            </div>
    </div>)
}


export default Banner
