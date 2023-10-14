import podcast from '../midia/podcast.jpg'
import star from '../midia/star.png'

const nomesPodcasts = [
    { nome: "Nercdast" },
    { nome: "PodPah" },
    { nome: "Tecnocast" },
    { nome: "Primocast" },
    { nome: "Flow-Podcast" },
    { nome: "Os Sócios Podcast" },
    { nome: "PodDelas" },
    { nome: "TechTalk" },
    { nome: "Inteligência Limitada" },
    { nome: "Mano a Mano"},
    { nome: "StarTalk"},]

export default function QuemPassouAqui() {
    return (
        <div className="quemPassouAqui">
            <h1>Quem passou por aqui!</h1>
            <img src={podcast} alt="" />
            <img id='star' src={star} />
            <div className="linhaDeNomes">
                {nomesPodcasts.map((nomesPodcasts, index) => (
                    <li>
                        <p key={index}>{nomesPodcasts.nome}</p>
                    </li>
                ))}
            </div>
        </div>
    )
}