import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("¡LAS CONTRASEÑAS NO COINCIDEN!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'REGISTER', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="retro-auth-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="membership-form">
          <div className="form-header">
            <h2>ÚNETE AL FAN CLUB</h2>
            <div className="cassette-decoration"></div>
          </div>
          <div className="form-images">
            <img className="form-image" src="/img/05-img-costados-larga/4.png" alt="Decorative" />
          </div>
          <form onSubmit={handleRegister} className="retro-auth-form">
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
              <label>CREA TU CONTRASEÑA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="retro-input"
              />
            </div>
            <div className="form-group">
              <label>CONFIRMA TU CONTRASEÑA</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="retro-input"
              />
            </div>
            <button type="submit" className="retro-button">
              REGISTRARSE
            </button>
          </form>
          <div className="form-images">
            <img className="form-image" src="/img/05-img-costados-larga/1a.png" alt="Decorative" />
          </div>
          <div className="form-footer">
            ¡RECIBIRÁS NUESTRO NEWSLETTER RETRO!
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;