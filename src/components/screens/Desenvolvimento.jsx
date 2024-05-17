import React from "react";
import "../Styles/Desenvolvimento.css";

function Desenvolvimento() {
    return (
        <div className="Erro_Code">
            <div className="Em_Desenvolvimento">
                <img src="../src/assets/Icones/Erro_404.png" alt="Em Desenvolvimento" />
                <h1>Esta página está em construção</h1>
                <p>Nos desculpe pelo inconveniente.</p>
                <p>Estamos trabalhando para tornar esta página incrível. </p>
                <p>Por favor, volte em breve!</p>
                <button>Voltar</button>
            </div>
        </div>
    );
}

export default Desenvolvimento;