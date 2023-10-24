import './Paginas.css'
import NavBar from '../Components/Navbar';
import Rodape from '../Components/Rodape';
import star from '../midia/star.png'

//Import das fotos 
import foto01 from '../midia/foto01.jpg'
import foto02 from '../midia/foto02.jpg'
import foto03 from '../midia/foto03.jpg'
import foto04 from '../midia/foto04.jpg'
import foto05 from '../midia/foto05.jpg'

export default function Servicos(){
    return(
        <div className="paginaServicos">
            <NavBar/>
            <div className="titulo">
                <h1>Nossos Serviços</h1>
                <img src={star}/>
                <hr />
                <h1>Teste github</h1>
            </div>
            <Cards/>
            <Rodape/>
        </div>
    )
}

function Cards() {

    const conteudoCards = [
        { nome: 'Televisões 4k', foto: foto01, descricao: 'Um estúdio moderno oferece múltiplas opções de televisores, proporcionando uma experiência audiovisual completa. Com diversos aparelhos de alta resolução, a qualidade de imagem é excepcional.' },
        { nome: 'Microfones', foto: foto02, descricao: 'No estúdio, são disponibilizados 4 microfones profissionais de última geração, cuidadosamente selecionados para proporcionar a melhor qualidade de gravação.' },
        { nome: 'Luzes de LED', foto: foto03, descricao: 'As luzes de LED são uma opção brilhante e eficiente para iluminar o estúdio. Com sua capacidade de oferecer uma gama variada de cores e intensidades, as luzes de LED permitem criar atmosferas personalizadas para cada produção.' },
        { nome: 'Wi-fi de ponta', foto: foto04, descricao: 'O estúdio também oferece uma conexão Wi-Fi robusta e de alta velocidade, garantindo que a equipe de produção e os convidados possam permanecer conectados e realizar transmissões ao vivo sem interrupções.' },
        { nome: '4 Câmeras', foto: foto05, descricao: 'As câmeras do estúdio são de última geração, oferecendo uma qualidade de imagem impressionante. Com resoluções ultra HD e recursos avançados de captura de vídeo, essas câmeras garantem que cada detalhe seja registrado com clareza.' }
    ]

    return (
        <div className="cards">
            {conteudoCards.map((item, index) => (
                <div className="cardsElementos">
                    <img src={conteudoCards[index].foto} alt="" />
                    <h2>{conteudoCards[index].nome}</h2>
                    <p>{conteudoCards[index].descricao}</p>
                </div>
            ))}
        </div>
    )
}
