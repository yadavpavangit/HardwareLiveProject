function TopBar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-12 text-lg-right">
                        {/* <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">Sign in</button>
                                    <button className="dropdown-item" type="button">Sign up</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="//" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style= {{paddingBottom:"2px;"}}>0</span>
                            </a>
                            <a href="//" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom:"2px;"}}>0</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-6 text-left">
                        <a href="//" className="text-decoration-none">
                            <span className="h1 text-uppercase text-light bg-dark px-2">Eonic</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">India</span>
                        </a>
                    </div>
                    
                    <div className="col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;