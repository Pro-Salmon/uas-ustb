const ModalPendaftaran = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0;' }}>
                            <div className="container py-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 mb-5 mb-lg-0">
                                        <div className="mb-4">
                                            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px;" }}>Daftarkan Dirimu Sekarang Juga!!</h5>
                                            <h1 className="text-white">Kamu akan mendapatkan Diskon 50%</h1>
                                        </div>
                                        <p className="text-white">Jangan sampai ketinggalan pendaftaran hanya sampai tanggal 10-15 juli 2024, Mari menjadi bagiandari mahasiswa baru ST Bhinneka</p>
                                        <ul className="list-inline text-white m-0">
                                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Gratis uang pembangunan</li>
                                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Uang kuliah diskon 50%</li>
                                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Bebas test masuk</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card border-0">
                                            <div className="card-header bg-light text-center p-4">
                                                <h1 className="m-0">Daftar Sekarang</h1>
                                            </div>
                                            <div className="card-body rounded-bottom bg-primary p-5">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control border-0 p-4" placeholder="Your name" required="required" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control border-0 p-4" placeholder="Your email" required="required" />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="custom-select border-0 px-4" style={{ height: "47px;" }}>
                                                            <option selected>Select a course</option>
                                                            <option value="1">S1 Informatika</option>
                                                            <option value="2">S1 Kewirausahaan</option>
                                                            <option value="3">S1 Bisnis Digital</option>
                                                            <option value="3">D3 Kebidanan</option>
                                                            <option value="3">S1 Agribisnis</option>
                                                            <option value="3">S1 Manajemen Hutan</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-dark btn-block border-0 py-3" type="submit">Daftar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPendaftaran;