import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: '90px;' }}>
                <div className="row pt-5">
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px;' }}>Get In Touch</h5>
                                <p><i className="fa fa-map-marker-alt mr-2"></i>Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>(061) 8457702</p>
                                <p><i className="fa fa-envelope mr-2"></i>office@satyaterrabhinneka.ac.id</p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px;' }}>Kampus</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-white mb-2 " to="/profil"><i className="fa fa-angle-right mr-2"></i>Profil</Link>
                                    <Link className="text-white mb-2" to="/jurusan"><i className="fa fa-angle-right mr-2"></i>Jurusan </Link>
                                    <Link className="text-white mb-2" to="/mitra"><i className="fa fa-angle-right mr-2"></i>Mitra </Link>
                                    <Link className="text-white mb-2" to="/kontak"><i className="fa fa-angle-right mr-2"></i>Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-5">
                        <img className="img-fluid mx-auto mb-3" src={`./image/logo-universitas-satya-terra-bhinneka.png`} alt="" />
                        <p>Mari menjadi bagian dari Universitas Satya Terra Bhinneka: Berkebhinekaan, Berkelanjutan. Alma mater generasi muda yang kritis, kompeten, berdaya saing, serta berkesadaran ekologis dan multikultural.</p>

                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .1) !important;' }}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; <a href="#" data-toggle="modal" data-target="#MyTeam">SASA</a>. USTB WEB.

                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>


            {/* Modal */}
            <div className="modal fade" id="MyTeam" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="MyTeamLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h2>Tim ini berisikan:</h2>                            
                            <ul>
                                <li>Salomo Pangihutan Vandito Sihite</li>
                                <li>Agatha Cristy Sitanggang</li>
                                <li>Saskia Fahira</li>
                                <li>Windy Amelia Pratiwi</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;