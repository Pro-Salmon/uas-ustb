import React, { useState } from 'react';
import jurusanData from './SupportData/JurusanData';

const Jurusan = () => {
  const [activeJurusan, setActiveJurusan] = useState(null);

  const handleModalShow = (index) => {
    setActiveJurusan(index);
  };

  const handleModalClose = () => {
    setActiveJurusan(null);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>JURUSAN</h5>
          <h1>Program Studi</h1>
        </div>
        <div className="row">
          {jurusanData.map((jurusan, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={jurusan.image} alt="" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                <a className="cat-overlay text-white text-decoration-none" onClick={() => handleModalShow(index)} href="#">
                  <h4 className="text-white font-weight-medium">{jurusan.nama}</h4>
                  <span>{jurusan.fakultas}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeJurusan !== null && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{jurusanData[activeJurusan].nama}</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleModalClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container d-flex">
                  <div className="row">
                    <div className="col">
                      <h4>{jurusanData[activeJurusan].fakultas}</h4>
                      <p>{jurusanData[activeJurusan].deskripsi}</p>
                    </div>
                    <div className="col">
                      <img src={`${process.env.PUBLIC_URL}/image/${jurusanData[activeJurusan].image}`} alt={jurusanData[activeJurusan].nama} style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jurusan;
