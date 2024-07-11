const Mitra = () => {
    return (
        <div>
            <div className="container-fluid page-header" style={{ marginBottom: '90px;' }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
                        <h3 className="display-4 text-white text-uppercase">Mitra</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Mitra</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px;' }}>Mitra</h5>
                        <h1>ST Bhinneka & Climate-U Network</h1>
                    </div>
                    <div className="row">
                        <div className="col  text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="bg-secondary p-4">
                                    <h5>ST Bhinneka is part of the Climate-U Network</h5>
                                    <p className="m-0 text-justify" >Climate U mendukung ST Bhinneka untuk mengembangkan dan menjalankan modul Pendidikan untuk Pembangunan Berkelanjutan (ESD) di Universitas. Universitas berkomitmen untuk menciptakan dampak positif terhadap lingkungan dan masyarakat. Pengembangan modul, melalui penelitian aksi partisipatif (PAR), memungkinkan dosen dan mahasiswa untuk terlibat dengan berbagai pemangku kepentingan guna mengembangkan kesadaran akan isu-isu pembangunan berkelanjutan, termasuk perubahan iklim, dan tantangan dalam mencapai Tujuan Pembangunan Berkelanjutan. Proyek ini dibagi menjadi dua tahap.Tahap pertama adalah mengembangkan kurikulum melalui PAR untuk membentuk modul ESD. Dalam tahap ini, sekelompok dosen akan bekerja sama untuk membuat kurikulum relevan yang menyoroti saling ketergantungan antara kesehatan dan kesejahteraan manusia, khususnya kelompok rentan, dan lingkungannya. Dosen akan memiliki akses ke berbagai literatur dan laporan serta bertemu dengan masyarakat setempat, perwakilan pemerintah, media, pakar lingkungan, dan LSM untuk mengembangkan kurikulum. Tahap kedua adalah menjalankan modul ESD, di mana mahasiswa bekerja dalam kelompok untuk melakukan PAR guna mengatasi masalah lingkungan yang telah mereka identifikasi. PAR memungkinkan proses pengumpulan data yang demokratis dan mengembangkan keterampilan berpikir kritis serta pemecahan masalah, sehingga membentuk peneliti mahasiswa menjadi pembawa perubahan yang aktif. Mahasiswa juga akan diminta untuk mendokumentasikan proyek mereka dalam buku harian yang kreatif dan reflektif serta cuplikan singkat kegiatan. Hasil yang diharapkan adalah dua karya tulis; (1) artikel akademis (60%) dan (2) artikel populer (40%). Artikel populer terpilih akan dikirim ke media lokal untuk dipublikasikan.</p>
                                </div>
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={`./image/Mitra.jpg`} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
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

export default Mitra;