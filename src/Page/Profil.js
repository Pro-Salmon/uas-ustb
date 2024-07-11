const Profil = () => {
    return (
        <div>
            <div className="container-fluid page-header" style={{marginBottom: '90px;'}}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
                        <h3 className="display-4 text-white text-uppercase">Profil</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Profil</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={`./image/s1.jpg`} alt="" />
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px;'}}>About Us</h5>
                                <h1>Tentang Universitas</h1>
                            </div>
                            <p>Universitas ST Bhineka merupakan perguruan tinggi yang berlokasi di Medan Sunggal dan bervisi menjadi perguruan tinggi terdepan dalam mengembangkan ilmu pengetahuan, teknologi, dan riset yang berbasis nilai-nilai keberkelanjutan (sustainability) dan keberagaman. Melalui perencanaan tata kelola fasilitas, pengembangan kurikulum, dan penumbuhan budaya institusi yang inklusif, kolaboratif, dan inovatif, Universitas ST Bhineka berkomitmen menjadi alma mater (secara harfiah berarti “ibu yang mengasuh”) yang “melahirkan” generasi muda yang kritis, kompeten, berdaya saing, dan berkesadaran ekologis dan multikultural.

                                Universitas Satya Terra Bhinneka menggunakan kombinasi 3 bahasa; 1 bahasa asing (latin), 1 bahasa Asia yang mempengaruhi bahasa Indonesia (Sanskerta), dan 1 bahasa lokal (Jawa Kuno). Ini melambangkan relevansi Universitas Satya Terra Bhinneka dalam dunia internasional, regional (Asia), dan lokal (Indonesia). Universitas Satya Terra Bhinneka menggunakan wawasan internasional, regional, dan lokal dalam membangun generasi bangsa yang akan menjadi agen perubahan di dunia internasional, regional, dan lokal.</p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <span></span>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px;' }}>Pendapat Mereka</h5>
                        <h1>Para Pengajar dan Staff ST Bhinneka</h1>
                    </div>
                    <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-normal mb-4">Universitas Satya Terra Bhinneka (ST Bhinneka) berkomitmen untuk membangun SDM Indonesia melalui ilmu pengetahuan dan riset yang berdasarkan prinsip sustainability, inovatif, dan inklusif yang relevan dalam ruang lingkup lokal, regional, dan global. Di ST Bhinneka, seluruh civitas akademik didukung untuk bernalar kritis dan berorientasi problem-solving sehingga dapat menjadi teladan dan agen perubahan untuk kebaikan dalam kehidupan bermasyarakat. Dengan latar belakang pendidikan, pengalaman, dan jejaringan internasional yang saya miliki, saya siap untuk membangun SDM Indonesia dengan ST Bhinneka. Saya bangga menjadi bagian dari keluarga ST Bhinneka!</h4>
                                    <img className="img-fluid mx-auto mb-3 w-25" src={`./image/dorothy-ferary.jpg`} alt="" />
                                    <h5 className="m-0">Dorothy Ferary</h5>
                                    <span>Kepala Lembaga Penelitian dan Pengabdian Masyarakat, Universitas Satya Terra Bhinneka</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-normal mb-4">Yang luar biasa dari Universitas Satya Terra Bhinneka adalah visinya yang tidak hanya jelas, tetapi juga, kalau merujuk Ki Hajar Dewantara, selaras dengan kodrat alam dan kodrat zaman. Hal tersebut tidak hanya dilihat dari nilai keberagaman dan keberlanjutan yang menjadi core principles dalam budaya universitas, tetapi juga pengembangan kurikulum terintegrasi yang relevan dengan tantangan era digital yang disruptif serta sinergi lintas pemangku kepentingan di tingkat lokal, nasional, maupun internasional. Saya bangga menjadi bagian dari sejarah lahirnya Universitas Satya Terra Bhinneka!</h4>
                                    <img className="img-fluid mx-auto mb-3 w-25" src={`./image/irfan-l-sarhindi.jpg`} alt="" />
                                    <h5 className="m-0">Irfan L. Sarhindi</h5>
                                    <span>Tim Monitoring, Evaluasi, Pengembangan, dan Sinergi Yayasan Perguruan Sultan Iskandar Muda</span>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev" style={{ position: 'absolute', top: '60%', left: '10%' }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next" style={{ position: 'absolute', top: '60%', right: '10%' }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Profil;