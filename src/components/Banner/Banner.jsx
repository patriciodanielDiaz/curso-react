
import './Banner.css';
import img_1 from '../../images/banner_1.jpg';
import img_2 from '../../images/banner_2.jpg';

const Banner = () => {
  return (
    <div className='container' style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img_1} className="d-block w-100" alt="no encontrada" />
            </div>
            <div className="carousel-item">
              <img src={img_2} className="d-block w-100" alt="no encontrada" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
        </div>
    </div>
    );
}

export default Banner;