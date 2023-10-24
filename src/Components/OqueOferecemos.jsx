import React, { useState } from 'react';
import star from '../midia/star.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const elementos = [
    { texto: '4 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: faTv },
    { texto: '5 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: faLightbulb },
    { texto: '2 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: faMicrophone },
    { texto: '3 microfones profissionais disponíveis para melhor qualidade de sua gravação', imagem: faWifi },
    { texto: '1 microfone profissional disponível para melhor qualidade de sua gravação', imagem: faCamera }
];

export default function OqueOferecemos() {
    const [iconeAtivo, setIconeAtivo] = useState (0);

    return (
        <div className="oqueoferecemos">
            <div className="titulo">
                <h1>O Que Oferecemos</h1>
                <hr />
            </div>
            <div className="ativo">
                <FontAwesomeIcon icon={elementos[iconeAtivo].imagem} id='iconeAtv'/>
                <p>{elementos[iconeAtivo].texto}</p>
                <img id="star" src={star} />
            </div>
            <div className="icones">
                {elementos.map((elementos, index) => (
                    <FontAwesomeIcon onClick={() => setIconeAtivo(index)} icon={elementos.imagem} 
                    className={`FaIconsOQ ${iconeAtivo == index ? "icone-ativo" : ""}`}/>
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
 