import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

// Funções de notificação
const notify9 = () => toast.warn('Por favor, preencha todos os campos.', { position: "top-center", theme: "colored" });
const notify10 = () => toast.warn('Somente gerentes podem acessar essa plataforma.', { position: "top-center", theme: "colored" });
const notify11 = () => toast.warn('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.', { position: "top-center", theme: "colored" });
const notify13 = () => toast.warn('Por favor, insira um email válido.', { position: "top-center", theme: "colored" });
const notify14 = () => toast.success('Login realizado com sucesso!', { position: "top-center", theme: "colored" });
const notify15 = (errorMessage) => toast.error(<div>Erro ao realizar o login:<br />{errorMessage}</div>, { position: "top-center", theme: "colored" });
const notify16 = () => toast.error('Erro ao conectar com o servidor!', { position: "top-center", theme: "colored" });
const notify17 = () => toast.warn('Você já está logado.', { position: "top-center", theme: "colored" });

function Get_Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [filial, setFilial] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Verificar se o usuário já está logado
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            notify17();
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, []);

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
            // URL do backend para login
            const backendUrl = 'https://future-burguer-novo.onrender.com';
    
            // Enviar solicitação de login para obter o token JWT
            const loginResponse = await fetch(`${backendUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            if (!loginResponse.ok) {
                const errorMessage = await loginResponse.json();
                throw new Error(errorMessage.message);
            }
    
            const loginData = await loginResponse.json();
            console.log("Resposta da API", loginData);
    
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
    
            const user = userData.find(user => user.email === email);
    
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
    
            // Verificar se a filial do usuário existe e é uma string antes de comparar
            //if (user.filial && typeof user.filial === 'string') {
                // Verificar se a filial selecionada corresponde à filial do usuário
                //if (user.filial.toLowerCase() !== filial.toLowerCase()) {
                   // throw new Error('Esse usuário não pertence a essa filial.');
                //}
            //} else {
                //throw new Error('Filial inválida para o usuário.');
            //}
    
            // Salvando o token JWT nos cookies apenas se o login for bem-sucedido e a filial for válida
            Cookies.set('token', token, { expires: 7 }); // O token expira em 7 dias
    
            if (user.role === 'Gerente') {
                notify14();
                setTimeout(() => { 
                    navigate('/'); 
                }, 2000);
            } else {
                notify10();
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Erro:', error);
            if (error instanceof TypeError && error.message === "Failed to fetch") {
                notify16(); // Erro ao conectar com o servidor
            } else {
                notify15(error.message); // Erro retornado pelo servidor
            }
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
