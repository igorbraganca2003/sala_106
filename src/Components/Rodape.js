import socila_icon01 from '../midia/social-icon01.png'
import socila_icon02 from '../midia/social-icon02.png'
import socila_icon03 from '../midia/social-icon03.png'
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
                <div className="social_icons">
                    <img src={socila_icon01} alt="" />
                    <img src={socila_icon02} alt="" />
                    <img src={socila_icon03} alt="" />
                </div>
            </div>
            <a href='https://igorbraganca2003.github.io/Portifolio/Index/' target='blank'>2023 @igor.braganca</a>
        </div>
    )
}