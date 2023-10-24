import './Paginas.css'
import NavBar from '../Components/Navbar'
import Rodape from '../Components/Rodape'
import Setas from '../midia/Setas.png' 
import letra_japonesa from '../midia/letra-japonesa.png'
import star from '../midia/star.png'

// FontAwesome Icons
import { SocialIcons } from '../Components/Rodape'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Contatos() {
    return (
        <div className="Contatos">
            <NavBar />
            <EntreEmContato />
            <MapaContatos />
            <Rodape />
        </div>
    )
}

function EntreEmContato() {
    return (
        <div className="soProTitulo">
            <div className="tituloBack">
                <h2>Entre em contato</h2>
            </div>
            <div className="entreEmContato">
                <img id="letra_japonesa_cont" src={letra_japonesa} />
                <div className="contatosCapsula">
                <img src={star} id='starContato' />
                    <div className="section">
                        <form action="">
                            <input type="text" id="Nome" name='Nome' placeholder='Nome' />
                            <input type="email" id="Email" name='Email' placeholder='Email' />
                            <input type="text" name="Mensagem" className="Mensagem" placeholder='Mensagem' />
                            <button>Enviar</button>
                        </form>
                        <div className="nossasInfo">
                            <div className="nossasInfoTitulo">
                                <h3>Nossas Informações</h3>
                                <hr />
                            </div>
                            <div className="ContatosInfos">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <p>email@exemplo.com.br</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <p>11 12345-6789</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faClock} />
                                        <p>Seg à Sex - 8h às 19h</p>
                                    </li>
                                </ul>
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                    <img src={Setas} id='setas' />
                </div>
            </div>
        </div>
    )
}

function MapaContatos() {
    return (
        <div className="MapaContatos">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.8320500261057!2d-122.0838730483944!3d37.42199997982458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca0ce4f4fcb%3A0xd8c70e6e16c6d3e3!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1618210009086!5m2!1sen!2sus"
                allowfullscreen="" loading="lazy">

            </iframe>
            <h3>Veja Nossa localização</h3>
        </div>
    )
}