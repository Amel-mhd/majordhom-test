# Majordhom – Test Développeur Web

## À propos de moi

**Nom :** Amel Mehdaoui

**Formation :** Étudiante en développement web

**Durée de stage souhaitée :**  6 mois à partir de septembre 2026

### Liens

* GitHub : https://github.com/Amel-mhd
* LinkedIn : https://www.linkedin.com/in/amel-mehdaoui-559213315/
* Portfolio : amel-mhd.github.io/portfolio

---

## Aperçu du projet

Cette application reproduit une page de contact immobilière moderne permettant aux utilisateurs de transmettre leurs coordonnées, leurs disponibilités et leur demande directement à l'agence.

Les données du formulaire sont enregistrées dans une base de données MongoDB via une API Express.

### Captures d'écran

formulaire.png -> formulaire
required.png -> champ obligatoire sinon demande non transmise
succès -> notification demande bien envoyé et enregistr sur la base de donnée

## Stack technique & choix

### Front-end

* **React** – Choisi pour sa simplicité, sa modularité et son écosystème riche.
* **CSS personnalisé** – Permet de créer une identité visuelle sur mesure inspirée de mes projets Aura et Coffee Mel.
* **Axios** – Utilisé pour communiquer avec l'API et envoyer les données du formulaire.

### Back-end

* **Node.js** – Environnement d'exécution JavaScript côté serveur.
* **Express.js** – Utilisé pour créer l'API REST.
* **MongoDB Atlas** – Base de données NoSQL hébergée dans le cloud.
* **Mongoose** – Permet de modéliser les données et de communiquer avec MongoDB.
* **dotenv** – Gère les variables d'environnement.
* **cors** – Autorise les échanges entre le front-end et le back-end.

---

## Lancement du projet

### Prérequis

* Node.js 20 ou supérieur
* Un compte MongoDB Atlas

### Installation

Clonez le dépôt :

```bash
git clone https://github.com/Amel-mhd/majordhom-test.git


### Front-end

```bash
cd client
npm install
npm start
```

Le projet est accessible sur :

http://localhost:300

### Back-end

Dans un second terminal :

```bash
cd server
npm install
npm run dev
```

Créez un fichier `.env` dans le dossier `server` :

MONGO_URI=votre_uri_mongodb
PORT=5001

L'API est accessible sur :


http://localhost:5001

---

## Questions

### Avez-vous trouvé l'exercice facile ou difficile ? Qu'est-ce qui vous a posé problème ?

L'intégration de l'interface et la mise en place de la communication entre le front-end et le back-end ont représenté les principaux défis de cet exercice. La configuration de MongoDB Atlas et la gestion des états du formulaire ont été particulièrement enrichissantes.

### Avez-vous appris de nouveaux outils pour répondre à l'exercice ? Si oui, lesquels ?

Oui. Cet exercice m'a permis d'approfondir l'utilisation de MongoDB Atlas, Mongoose et Axios dans un contexte concret.

### Quelle est la place du développement web dans votre cursus de formation ?

Le développement web occupe une place centrale dans ma formation. J'y développe des compétences en conception d'interfaces, en intégration front-end et en développement d'applications full-stack.

### Avez-vous utilisé un LLM ? Si oui, comment intégrez-vous les LLM à chaque étape de votre workflow ?

Oui. J'utilise les LLM comme un outil d'accompagnement pour débloquer des problématiques techniques, comprendre certains concepts, vérifier mes choix d'architecture et améliorer la qualité de mon code. Les décisions finales, les choix de conception et l'implémentation restent sous ma responsabilité.
