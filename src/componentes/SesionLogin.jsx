import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="retro-auth-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="concert-poster">
          <div className="poster-border">
            <div className="poster-content">
              <h2 className="poster-title">ENTRADA BACKSTAGE</h2>
              <div className="poster-image top-image">
                <img src="/img/05-img-costados-larga/2.png" alt="Decorative" />
              </div>
              <form onSubmit={handleLogin} className="retro-auth-form">
                <div className="form-group">
                  <label>CORREO ELECTRÓNICO</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="retro-input"
                  />
                </div>
                <div className="form-group">
                  <label>CONTRASEÑA SECRETA</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="retro-input"
                  />
                </div>
                <button type="submit" className="retro-button">
                  ACCEDER
                </button>
              </form>
              <div className="poster-image bottom-image">
                <img src="/img/05-img-costados-larga/20.png" alt="Decorative" />
              </div>
              <div className="poster-footer">
                SOLO PARA MIEMBROS DE LA BANDA
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;