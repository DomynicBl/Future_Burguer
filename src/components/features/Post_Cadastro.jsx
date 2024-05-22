//Post_Cadastro.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Funções de notificação
const notify1 = () => toast.warn('Por favor, preencha todos os campos.', { position: "top-center", theme: "colored" });
const notify2 = () => toast.warn('As senhas são diferentes.', { position: "top-center", theme: "colored" });
const notify3 = () => toast.warn('A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.', { position: "top-center", theme: "colored" });
const notify4 = () => toast.warn('Por favor, insira um CPF válido.', { position: "top-center", theme: "colored" });
const notify5 = () => toast.warn('Por favor, insira um email válido.', { position: "top-center", theme: "colored" });
const notify6 = () => toast.success('Cadastro realizado com sucesso!', { position: "top-center", theme: "colored" });
const notify7 = (message) => toast.error(<div>Erro ao realizar o cadastro:<br />{message}</div>, { position: "top-center", theme: "colored" });
const notify8 = () => toast.error('Erro ao conectar com o servidor!', { position: "top-center", theme: "colored" });

function Post_Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [gerente, setGerente] = useState(''); // Somente gerentes podem criar uma conta
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [filial, setFilial] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%&*]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const calculateCPFSum = (cpf) => {
        return cpf.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    const isValidCPF = (cpf) => {
        const cpfSum = calculateCPFSum(cpf);
        return cpfSum === 11 || cpfSum === 22 || cpfSum === 33 || cpfSum === 44 || cpfSum === 55 || cpfSum === 66 || cpfSum === 77 || cpfSum === 88;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!nome || !email || !gerente || !senha || !confirmarSenha || !filial) {
            notify1();
            return;
        }

        if (senha !== confirmarSenha) {
            notify2();
            return;
        }

        if (!validatePassword(senha)) {
            notify3();
            return;
        }

        if (gerente.length !== 11 || isNaN(parseInt(gerente)) || !isValidCPF(gerente)) {
            notify4();
            return;
        }

        if (!validateEmail(email)) {
            notify5();
            return;
        }

        const userData = {
            name: nome,
            email: email,
            cpf: gerente,
            password: senha,
            role: 'Gerente',
            branch_company: filial
        };

        setIsLoading(true);

        try {
            const response = await fetch('https://future-burguer-novo.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            //console.log("Resposta da API", data);

            setIsLoading(false);

            if (response.ok) {
                notify6();
                setTimeout(() => { // Dalay para exibir a mensagem de sucesso
                    navigate('/login'); // Redirecionar para a página de login
                }, 3000); 
            } else {
                if (data.message) {
                    notify7(data.message);
                } else {
                    notify7('Erro desconhecido.');
                }
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Erro:', error);
            notify8();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="main_Cadastro">
                <div className="area_Cadastro">
                    <div className="card_Cadastro">
                        <div className="titulo">
                            <a href=""><img src="../src/assets/icones/Logo_Colorido.svg" alt="Logo" /></a>
                            <h1>Gerenciamento</h1>
                        </div>
                        <h2>Cadastro</h2>
                        <div className="campos_Cadastro">
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Digite seu Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="campos_Cadastro">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="campos_Cadastro">
                            <input
                                type="text"
                                id="gerente"
                                name="gerente"
                                placeholder="Código de gerente"
                                value={gerente}
                                onChange={(e) => setGerente(e.target.value)}
                            />
                        </div>
                        <div className="campos_Cadastro">
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder="Digite sua Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="campos_Cadastro">
                            <input
                                type="password"
                                name="confirmar_senha"
                                id="confirmar_senha"
                                placeholder="Confirme sua Senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />
                        </div>
                        <div className="campos_Cadastro">
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
                        <button className="btn_Cadastro" type="submit" disabled={isLoading}>
                            {isLoading ? 'Enviando...' : 'Enviar'}
                        </button>
                        <div className="cadastro">
                            <Link to="/login">Já possui conta? Faça Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Post_Cadastro;
