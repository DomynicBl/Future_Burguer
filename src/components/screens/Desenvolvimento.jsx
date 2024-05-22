import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Desenvolvimento.css";

function Desenvolvimento() {
    return (
        <div className="Erro_Code">
            <div className="Em_Desenvolvimento">
                <img src="../src/assets/icones/Erro_404.png" alt="Em Desenvolvimento" />
                <h1>Esta página está em construção</h1>
                <p>Nos desculpe pelo inconveniente.</p>
                <p>Estamos trabalhando para tornar esta página incrível. </p>
                <p>Por favor, volte em breve!</p>
                <div className="btn-Voltar">
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Desenvolvimento;