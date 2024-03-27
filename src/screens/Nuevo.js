import React from 'react';
import icon from '../assets/icon.png';
import './App.css';
import RoundedButton from './src/components/RoundedButton.jsx';

function Nuevo() {
    return (
        <div className="Nuevo-body">
            <header>
                <img src={icon} alt="Icon" className="Nuevo-icon" />
                <h1>CARYON</h1>
            </header>
            <main>
                <section className="Nuevo-login">
                    <h2>Iniciar sesión</h2>
                    <form>
                        <RoundedButton to="/login">Iniciar sesión</RoundedButton>
                    </form>
                </section>
                <section className="Nuevo-register">
                    <h2>Registrarse</h2>
                    <form>
                        <RoundedButton to="/register">Registrarse</RoundedButton>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Nuevo;
