import './Paginas.css'
import NavBar from '../Components/Navbar';
import Rodape from '../Components/Rodape';
import star from '../midia/star.png'
import bannerLocal from '../midia/BannerLocal.png'
import letra_japonesa_menor from '../midia/letra-japonesa-menor.png'

export default function Localizacao() {
    return (
        <div className="localizacao">
            <NavBar />
            <BannerLocal />
            <LocalInfo />
            <Rodape/>
        </div>
    )
}

function BannerLocal() {
    return (
        <div className="bannerLocal">
            <div className="tituloLocal">
                <hr />
                <h1>Nossa Localização</h1>
            </div>
            <img src={bannerLocal} alt="Foto da cidade de São Paulo" />
            <img id='star' src={star} />
        </div>
    )
}

function LocalInfo() {

    return (
        <div className="localInfo">
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.8320500261057!2d-122.0838730483944!3d37.42199997982458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca0ce4f4fcb%3A0xd8c70e6e16c6d3e3!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1618210009086!5m2!1sen!2sus"
                    allowfullscreen="" loading="lazy">

                </iframe>
            </div>
            <div className="txt">
                <h2>Onde estamos?</h2>
                <p>Estamos em uma localização
                    privilegiada na cidade de São Paulo,
                    perto do centro e de estações de metrôs
                </p>
                <hr />
                <p>
                    Rua do limoeiro, 400 <br/>
                    20° andar - Torre B <br/>
                    São Paulo - Santana
                </p>
                <img src={letra_japonesa_menor} />
            </div>
        </div>
    )

}