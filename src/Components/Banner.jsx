import SaibaMais from './BotaoSaibaMais'
import imagem01 from '../midia/imagem01.png'
export default function Banner(){
    return(
      <div className="Banner">
        <section className="texto">
          <h1>Tudo para podcasts</h1>
          <p>Conheça o maior estúdio de podcast do Brasil localizado em São Paulo. </p>
          <SaibaMais/>
        </section>
        <section className="imagem">
          <img src={imagem01} alt="Banner"/>
          <h2>Sala 106</h2>
        </section>
      </div>
    )
  }