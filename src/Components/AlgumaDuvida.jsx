import SaibaMais from './BotaoSaibaMais'
import letra_japonesa_menor from '../midia/letra-japonesa-menor.png'


export default function AlgumaDuvida() {
    return (
        <div className="algumaDuvida">
            <img src={letra_japonesa_menor}/>
            <h1>Alguma Dúvida?</h1>
            <div className="botao">
                <SaibaMais />
            </div>
        </div>
    )
}