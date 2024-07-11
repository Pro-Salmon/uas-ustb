import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ModalPendaftaran from "../SupportData/ModalPendaftaran";

const Navbar = () => {
    return (
        <header>
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center py-4 px-xl-5">
                    <div className="col-lg-3">
                        <Link to="/" className="text-decoration-none">
                            <img className="img-fluid mx-auto mb-3" src={`./image/logo-universitas-satya-terra-bhinneka.png`} alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Address</h6>
                                <small>Medan. Sumatera Utara </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                                <small> office@satyaterrabhinneka.ac.id</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                                <small>(061) 8457702</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row border-top px-xl-5">

                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0"><span className="text-primary"></span></h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav py-0">
                                    <Link to="/" className="nav-item nav-link active">Home</Link>
                                    <Link to="/profil" className="nav-item nav-link">Profil</Link>
                                    <Link to="/jurusan" className="nav-item nav-link">Jurusan</Link>
                                    <Link to="/mitra" className="nav-item nav-link">Mitra</Link>
                                    <Link to="/kontak" className="nav-item nav-link">Contact</Link>
                                </div>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Pendaftaran Mahaiswa
                                </button>
                                <ModalPendaftaran />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;