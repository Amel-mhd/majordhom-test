import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    demandes: [],
    message: "",
    dispoDate: "",  
    dispoHeure: ""  
  });

  // ÉTAT POUR LA NOTIFICATION MAISON
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "" // "success" ou "error"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const nouvellesDemandes = checked
        ? [...prev.demandes, value]
        : prev.demandes.filter((item) => item !== value);
      return { ...prev, demandes: nouvellesDemandes };
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. VERIFICATION : Est-ce qu'au moins une demande est cochée ?
  if (formData.demandes.length === 0) {
    setNotification({
      show: true,
      message: "Veuillez sélectionner au moins un type de demande.",
      type: "error"
    });

    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 4000);
    
    return; // On stoppe l'envoi ici
  }

  // 2. ENVOI SI TOUT EST OK
  try {
    await axios.post("http://localhost:5001/api/contact", formData);

    setNotification({
      show: true,
      message: "Votre demande a été enregistrée avec succès !",
      type: "success"
    });

    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 4000);

    // Réinitialisation du formulaire
    setFormData({
      civilite: "",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      demandes: [],
      message: "",
      dispoDate: "",
      dispoHeure: "",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    
    setNotification({
      show: true,
      message: "Erreur lors de l'envoi du formulaire.",
      type: "error"
    });

    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 4000);
  }
};

  return (
    <main className="page">
      {/* LE COMPOSANT NOTIFICATION DANS L'APPLI */}
      {notification.show && (
        <div className={`toast-notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <section className="contact-panel">
        <div className="brand">
          <p className="tag">Majordhom Agency</p>
          <h1>
            Contactez <br />
            <span>l’agence</span>
          </h1>
          <div className="separator"></div>
          <p className="description">
            Planifiez une visite, demandez un rappel ou envoyez-nous votre projet.
            Notre équipe vous accompagne avec attention et réactivité.
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="block">
              <h2>Vos coordonnées</h2>

              <div className="civilite">
                <label>
                  <input 
                    type="radio" 
                    name="civilite" 
                    value="Mme" 
                    checked={formData.civilite === "Mme"} 
                    onChange={handleChange} 
                    required
                  /> Mme
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="civilite" 
                    value="M" 
                    checked={formData.civilite === "M"} 
                    onChange={handleChange} 
                  /> M
                </label>
              </div>

              <div className="row">
                <input 
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Nom" 
                  required 
                />
                <input 
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Prénom" 
                  required 
                />
              </div>

              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse mail" 
                required 
              />
              <input 
                type="tel" 
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Téléphone" 
              />
            </div>

            <div className="block">
              <h2>Votre demande</h2>

              <div className="choices">
                <label>
                  <input 
                    type="checkbox" 
                    value="Demande de visite" 
                    checked={formData.demandes.includes("Demande de visite")}
                    onChange={handleCheckboxChange}
                  /> Demande de visite
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    value="Être rappelé" 
                    checked={formData.demandes.includes("Être rappelé")}
                    onChange={handleCheckboxChange}
                  /> Être rappelé
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    value="Plus de photos" 
                    checked={formData.demandes.includes("Plus de photos")}
                    onChange={handleCheckboxChange}
                  /> Plus de photos
                </label>
              </div>

              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message" 
                required 
              />
            </div>
          </div>

          <div className="visit-row">
            <div className="availability-block">
              <h2>Disponibilités souhaitées</h2>
              <div className="availability-inputs">
                <input 
                  type="date" 
                  name="dispoDate"
                  value={formData.dispoDate}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="time" 
                  name="dispoHeure"
                  value={formData.dispoHeure}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit">
              Envoyer la demande
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;