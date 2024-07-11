
const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid p-0 pb-5 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ minHeight: '300px;' }}>
                            <img className="position-relative w-100" src={'./image/s1.jpg'} style={{ minHeight: '300px;', objectFit: 'cover;' }} alt="" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{ width: '100%;', maxWidth: '900px;' }}>
                                    <h5 className="text-white text-uppercase mb-md-3">Universitas Satya Terra Bhinneka</h5>
                                    <h1 className="display-3 text-white mb-md-4">Sinergi dan Kolaburasi Global</h1>
                                    <button type="button" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" data-toggle="modal" data-target="#exampleModal">
                                        Pendaftaran Mahaiswa
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ minHeight: '300px;' }}>
                            <img
                                className="position-relative w-100"
                                src={`./image/s2.jpg`}
                                style={{ minHeight: '300px', objectFit: 'cover' }}
                                alt=""
                            />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{ width: '100%;', maxWidth: '900px;' }}>
                                    <h5 className="text-white text-uppercase mb-md-3">Universitas Satya Terra Bhinneka</h5>
                                    <h1 className="display-3 text-white mb-md-4">Kultur dan Kurikulum Berkelanjutan </h1>
                                    <button type="button" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" data-toggle="modal" data-target="#exampleModal">
                                        Pendaftaran Mahaiswa
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ minHeight: '300px;' }}>
                            <img
                                className="position-relative w-100"
                                src={`./image/s3.jpg`}
                                alt="Banner S3"
                                style={{ minHeight: '300px', objectFit: 'cover' }}
                            />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-md-3">Universitas Satya Terra Bhinneka</h5>
                                    <h1 className="display-3 text-white mb-md-4">Lingkungan yang Inklusif dan Multikultural</h1>
                                    <button type="button" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" data-toggle="modal" data-target="#exampleModal">
                                        Pendaftaran Mahaiswa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img
                                className="img-fluid rounded mb-4 mb-lg-0"
                                src={`./image/logo-universitas-satya-terra-bhinneka.png`}
                                alt="Logo Universitas Satya Terra Bhinneka"
                            />
                        </div>
                        <div className="col-lg-7">
                            <div className="text-center mb-4">
                                <h1> VISI MISI </h1>
                                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px;' }}>Universitas Satya Terra Bhinneka </h5>
                            </div>
                            <p>“Menjadi perguruan tinggi yang unggul dalam mengembangkan ilmu pengetahuan, teknologi, dan penelitian yang berbasis prinsip berkelanjutan, berwawasan global, inovatif, dan inklusif untuk meningkatkan pembangunan manusia Indonesia secara holistik pada tahun 2048.”.</p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1>MISI </h1>
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px;' }}>Universitas Satya Terra Bhinneka</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i></small>
                                    </div>
                                    <a className="h5" href="">1. Menyelenggarakan pendidikan berbasis teknologi dan penelitian, berprinsip inklusif, berwawasan global, berkelanjutan, dan bermanfaat.</a>
                                    <div className="border-top mt-4 pt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i></small>
                                    </div>
                                    <a className="h5" href="">2. Menyelenggarakan penelitian yang kolaboratif, interdisipliner, inovatif, dan bermanfaat</a>
                                    <div className="border-top mt-4 pt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i></small>
                                    </div>
                                    <a className="h5" href="">3.Menyelenggarakan pengabdian kepada masyarakat yang efektif, partisipatif, dan tepat sasaran.</a>
                                    <div className="border-top mt-4 pt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i></small>
                                    </div>
                                    <a className="h5" href="">4. Membangun ekosistem universitas yang berkelanjutan, inklusif, egaliter, suportif, dan demokratis.</a>
                                    <div className="border-top mt-4 pt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i></small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i></small>
                                    </div>
                                    <a className="h5" href="">5. Mengembangkan kualitas dan kompetensi civitas akademika.</a>
                                    <div className="border-top mt-4 pt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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


            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px;' }}>informasi lainnya </h5>
                        <h1> Informasi seputar Universitas Satya Terra Bhinneka </h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={`./image/berita1.jpg`} alt="" />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">ST Bhinneka Menjadi Founding Member Jejaring Internasional Climate-U</h5>
                                    <p className="text-primary m-0"> sabtu ,21 oktober 2050</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={`./image/berita2.jpeg`} alt="" />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Belajar Praktik Baik Pendidikan Berkelanjutan dari SMU Academy</h5>
                                    <p className="text-primary m-0">Minggu, 16 Oktober 2022 </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={`./image/berita3.jpeg`} alt="" />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Belajar Desain Gedung Ramah Lingkungan dari Singapore Sustainability Academy</h5>
                                    <p className="text-primary m-0">Minggu, 16 Oktober 2022</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;