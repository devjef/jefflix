import React from 'react';
import PageDefault from '../../components/PageDefault'
import './Erro.css'
import {Link} from 'react-router-dom';
import imgErro from '../../assets/img/erro.gif'

function PaginaDeErro() {

    return (
        <PageDefault>
            <h1>Ops! O canal que você procura está fora do ar</h1>
            <Link to="/">
                Voltar para o Inicio
            </Link>
            <img src={imgErro} className="img-erro" alt="gif tv error"/>
        </PageDefault>
    )
};

export default PaginaDeErro;