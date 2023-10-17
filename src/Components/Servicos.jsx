import SaibaMais from './BotaoSaibaMais'
import imagem02 from '../midia/imagem02.jpg'
import star from '../midia/star.png'
import letra_japonesa from '../midia/letra-japonesa.png'

export default function Servicos() {
    return (
        <div className="Servicos">
            <img id="star" src={star} />
            <img id="imagem2" src={imagem02} alt="Uma pessoa fazendo anotações em um livro ouvindo um podcast em um iPhone" />
            <div className="textos">
                <h2>Nossos Serviços</h2>
                <p>Conheça o maior estúdio de podcast do
                    Brasil localizado em São Paulo.
                    Vamos te ajudar a evoluir e desenvolver
                    seu programa para conquistar
                </p>
                <SaibaMais />
            </div>
            <img id="letra_japonesa" src={letra_japonesa} />
        </div>
    )
}
