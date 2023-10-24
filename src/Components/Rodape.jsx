import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Rodape() {
    return (
        <div className="rodape">
            <div className="area_rodape">
                <h1>Logo</h1>
                <div className="links">
                    <div className="menu1" id="menu">
                        <h3>Menu</h3>
                        <a href="#">Link 1</a><br />
                        <a href="#">Link 2</a><br />
                        <a href="#">Link 3</a><br />
                        <a href="#">Link 4</a>
                    </div>
                    <div className="menu2" id="menu">
                        <h3>Endereço</h3>
                        <p>Rua do limoeiro, 400 <br />
                            20° andar - Torre B<br />
                            São Paulo - Santana<br />
                        </p>
                    </div>
                    <div className="menu3" id="menu">
                        <h3>Contatos</h3>
                        <p>+55 11 1234-5678</p><br />
                        <p>+55 11 1234-5679</p><br />
                        <p>email@exemplo.com.br</p>
                    </div>
                </div>
                    <SocialIcons />
            </div>
            <a href='https://igorbraganca2003.github.io/Portifolio/Index/' target='blank' id="assinatura">2023 @igor.braganca</a>
        </div>
    )
}

export function SocialIcons() {
    return (
        <div className="social_icons">
            <a href="#"><FontAwesomeIcon icon={faXTwitter} className='FaIcons'/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} id='FaIcons' className='FaIcons'/></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} id='FaIcons' className='FaIcons'/></a>
        </div>
    )
}