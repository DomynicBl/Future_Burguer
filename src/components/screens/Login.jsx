import React from "react";
import "../Styles/Login.css";

function Login() {
    return (
        <div className="Login">
            <div className="Area_Login">
                <div className="Titulo">
                    <div className="Titulo_Input">
                        <img src="../src/assets/Icones/Logo_Colorido.svg" alt="Logo" />
                        <h2>Gerenciamento</h2>
                    </div>
                    <h1>Login</h1>
                </div>
                <form className="Infos_Input">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                </form>
                <button className="btn-entrar">Entrar</button>
                <a href="/cadastro" className="btn-cadastrar">Ainda não possui conta? Cadastrar-se</a>
            </div>
            <div className="Complementar">
                <img src="../src/assets/Icones/Login_img.svg" alt="Login Imagem" />
            </div>
        </div>
    );
}

export default Login;