import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify9 = () => toast.warn('Por favor, preencha todos os campos.', { position: "top-center", theme: "colored" });
const notify10 = () => toast.warn('Somente gerentes podem acessar essa plataforma.', { position: "top-center", theme: "colored" });
const notify11 = () => toast.warn('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.', { position: "top-center", theme: "colored" });
const notify13 = () => toast.warn('Por favor, insira um email válido.', { position: "top-center", theme: "colored" });
const notify14 = () => toast.success('Login realizado com sucesso!', { position: "top-center", theme: "colored" });
const notify15 = () => toast.error('E-mail ou senha incorretos.', { position: "top-center", theme: "colored" });
const notify16 = () => toast.error('Erro ao conectar com o servidor!', { position: "top-center", theme: "colored" });

function Get_Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [filial, setFilial] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%&]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password || !filial) {
            notify9();
            return;
        }

        if (!validateEmail(email)) {
            notify13();
            return;
        }

        if (!validatePassword(password)) {
            notify11();
            return;
        }

        setIsLoading(true);

        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL;

            // Enviar solicitação de login para obter o token JWT
            const loginResponse = await fetch(`${backendUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!loginResponse.ok) {
                const errorMessage = await loginResponse.text();
                throw new Error(`Falha no login: ${errorMessage}`);
            }

            const loginData = await loginResponse.json();

            const token = loginData.access_token;

            // Usar o token JWT para buscar os dados do usuário
            const userResponse = await fetch(`${backendUrl}/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!userResponse.ok) {
                const errorMessage = await userResponse.text();
                throw new Error(`Falha ao buscar dados do usuário: ${errorMessage}`);
            }

            const userData = await userResponse.json();

            setIsLoading(false);

            const user = userData.find(user => user.email === email);

            if (user && user.role === 'Gerente') {
                notify14();
                navigate('/'); // Redirecione para a página principal
            } else {
                notify10();
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Erro:', error);
            notify16();
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <ToastContainer />
            <div className="main_login">
                <div className="area_login">
                    <div className="card_login">
                        <div className="titulo">
                            <a href=""><img src="../src/assets/Icones/Logo_Colorido.svg" alt="Logo" /></a>
                            <h1>Gerenciamento</h1>
                        </div>
                        <h2>Login</h2>
                        <div className="campos_login">
                            <input
                                type="email"
                                id="login"
                                name="login"
                                placeholder="Digite seu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="campos_login">
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder="Digite sua Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="campos_login">
                            <select
                                name="filial"
                                id="filial"
                                value={filial}
                                onChange={(e) => setFilial(e.target.value)}
                            >
                                <option value="" disabled>Selecione sua Filial</option>
                                <option value="Centro">Centro</option>
                                <option value="Barão">Barão</option>
                                <option value="Barreiro">Barreiro</option>
                                <option value="Buritis">Buritis</option>
                                <option value="Camargos">Camargos</option>
                                <option value="Savassi">Savassi</option>
                                <option value="São Gabriel">São Gabriel</option>
                            </select>
                        </div>
                        <button className="btn_login" type="submit" disabled={isLoading}>
                            {isLoading ? 'Enviando...' : 'Enviar'}
                        </button>
                        <div className="cadastro">
                            <Link to="/cadastro">Não possui conta? Cadastre-se</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Get_Login;
