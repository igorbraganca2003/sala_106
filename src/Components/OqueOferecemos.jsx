import React from 'react';
import star from '../midia/star.png'
import icone01 from '../midia/icone01.png'
import icone02 from '../midia/icone02.png'
import icone03 from '../midia/icone03.png'
import icone04 from '../midia/icone04.png'
import icone05 from '../midia/icone05.png'

const elementos = [
    { texto: '4 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: icone01 },
    { texto: '5 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: icone02 },
    { texto: '2 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: icone03 },
    { texto: '3 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: icone04 },
    { texto: '1 microfone profissional disponível para melhor qualidade de sua gravação', imagem: icone05 }
];

// const icones = [
//     { imagem: 'icone01' },
//     { imagem: 'icone02' },
//     { imagem: 'icone03' },
//     { imagem: 'icone04' },
//     { imagem: 'icone05' }
// ];

export default function OqueOferecemos() {
    return (
        <div className="oqueoferecemos">
            <div className="titulo">
                <h1>O Que Oferecemos</h1>
                <hr />
            </div>
            <div className="ativo">
                <img id="icone" src={icone01} alt="televisão" />
                <p>4 microfones profissionais disponíveis para melhor qualidade de sua gravação </p>
                <img id="star" src={star} />
            </div>
            <div className="icones">
                {elementos.map((elementos, index) => (
                    <img key={index} src={elementos.imagem} id="icone" />
                ))}
            </div>
            <div className="titulos">
                <h2>
                    Sala 106<br/>
                    <span>Sala 106</span><br/>
                    Sala 106<br/>
                    Sala 106
                </h2>
            </div>
        </div>
    );
}
