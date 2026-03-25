# <p align="center"><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=36&pause=1000&color=2563EB&center=true&vCenter=true&width=800&lines=API+de+gestion+des+r%C3%A9servations;Projet+Node.js+%2B+Express" alt="Typing SVG" /></a></p>

## 🚀 À propos du projet

Ce projet est une API back-end simple pour la gestion des réservations, développée avec **Node.js** et **Express.js**. Elle expose des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) permettant de gérer les réservations de chambres de manière efficace.

## 🛠️ Stack Technique

<p align="center">
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="80" height="80"/>
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://expressjs.com" target="_blank" rel="noreferrer">
    <!-- Express icon with inverted coloration for visibility in dark/light modes -->
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express.js" width="80" height="80"/>
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="70" height="70"/>
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="70" height="70"/>
  </a>
</p>

## ⚙️ Installation & Démarrage

1. **Cloner ou télécharger le dépôt** de l'API.
2. **Naviguer dans le dossier du projet** :
   ```bash
   cd expressjs
   ```

3. **Installer les dépendances** :
   ```bash
   npm install
   ```

4. **Démarrer le serveur** :
   ```bash
   node app.js
   ```
   Le serveur sera lancé sur `http://localhost:3000`.

## 📌 Points d'accès de l'API (Endpoints)

L'API fonctionne avec les endpoints suivants :

| Méthode | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Message d'accueil / Point d'entrée |
| `GET` | `/search?client=nom` | Rechercher les réservations par nom de client |
| `GET` | `/reservations/:id` | Récupérer les détails d'une réservation spécifique |
| `POST` | `/reservations` | Créer une nouvelle réservation (Body JSON: `{ "client": "...", "chambre": "..." }`) |
| `PUT` | `/reservations/:id` | Modifier une réservation existante |
| `DELETE` | `/reservations/:id` | Procéder à la suppression d'une réservation |
| `GET` | `/info` | Lire les informations (ex: User-Agent) depuis les Headers |

---
**Développé avec ❤️**
