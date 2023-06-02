import React, { useState } from 'react';
import './App.css';

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  const toggleMission = () => {
    setMissionOpen(!missionOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Oscar Jimenez</h1>
        <h2 className="subtitle">PROGRAMACIÓN WEB</h2>
        <h3 className="company">Empresa LAS Peñitas SAS</h3>
        <div className="content">
          <div className={`card ${aboutOpen ? 'open' : ''}`} onClick={toggleAbout}>
            <h3 className="card-title">Acerca de nosotros</h3>
            {aboutOpen && (
              <div className="card-content">
                <p>Contenido de la sección "Acerca de nosotros".</p>
                <p>Aquí puedes agregar más contenido específico sobre tu compañía.</p>
              </div>
            )}
          </div>
          <div className={`card ${missionOpen ? 'open' : ''}`} onClick={toggleMission}>
            <h3 className="card-title">Misión y visión de la compañía</h3>
            {missionOpen && (
              <div className="card-content">
                <p>Contenido de la sección "Misión y visión de la compañía".</p>
                <p>Puedes compartir tu misión, visión y valores fundamentales aquí.</p>
              </div>
            )}
          </div>
          <div className={`card ${contactOpen ? 'open' : ''}`} onClick={toggleContact}>
            <h3 className="card-title">Contáctenos</h3>
            {contactOpen && (
              <div className="card-content">
                <p>Contenido de la sección "Contáctenos".</p>
                <p>Aquí puedes proporcionar información de contacto, como dirección, teléfono, correo electrónico, etc.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
