import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCpf(formatted);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um email válido');
      return;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      setError('Por favor, insira um CPF válido');
      return;
    }

    const phoneRegex = /^\(\d{2}\)\s\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      setError('Por favor, insira um telefone válido');
      return;
    }

    if (!password) {
      setError('Por favor, insira uma senha');
      return;
    }

    try {
      // Store user data
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userCPF', cpf);
      localStorage.setItem('userPhone', phone);
      navigate('/');
    } catch (err) {
      setError('Ocorreu um erro ao fazer o cadastro');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center pt-20 p-4">
      <div className={`max-w-md w-full space-y-8 p-8 rounded-xl shadow-lg ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${
            darkMode ? 'text-white' : 'text-primary'
          }`}>
            Cadastro
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                }`}
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="cpf" className={`block text-sm font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                CPF
              </label>
              <input
                id="cpf"
                type="text"
                value={cpf}
                onChange={handleCPFChange}
                maxLength={14}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                }`}
                placeholder="000.000.000-00"
              />
            </div>

            <div>
              <label htmlFor="phone" className={`block text-sm font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Telefone
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={14}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                }`}
                placeholder="(00) 0000-0000"
              />
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                }`}
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;