import React from "react";
import "../Styles/Login.css";

function Login() {
    return (
        <div className="Cadastro">
            <div className="Area_Cadastro">
                <div className="Titulo">
                    <div className="Titulo_Input">
                        <img src="../src/assets/Icones/Logo_Colorido.svg" alt="Logo" />
                        <h2>Gerenciamento</h2>
                    </div>
                    <h1>Cadastro</h1>
                </div>
                <form className="Infos_Input">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <select className="cargo" >
                        <option value="0">Cargo</option>
                        <option value="1">Gerente</option>
                        <option value="2">Sub Gerente</option>
                        <option value="3">Atendente</option>
                    </select>
                </form>
                <button className="btn-entrar">Entrar</button>
                <a href="/cadastro" className="btn-cadastrar">Já possui conta? Logar</a>
            </div>
            <div className="Complementar">
                <img src="../src/assets/Icones/Login_img.svg" alt="Login Imagem" />
            </div>
        </div>
    );
}

export default Login;