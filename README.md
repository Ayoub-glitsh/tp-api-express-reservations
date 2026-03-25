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
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.thunderclient.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/rangav/thunder-client-support/master/images/logo.png" alt="Thunder Client" width="60" height="60" style="border-radius: 12px;"/>
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

## 🏗️ Architecture du Projet (MVC)

Ce projet respecte désormais l'architecture **Modèle-Vue-Contrôleur (MVC)** pour une meilleure séparation des responsabilités et une maintenance simplifiée :
- 📁 **`models/`** : Gère l'accès aux données (simulées actuellement via un tableau en mémoire).
- 📁 **`controllers/`** : Traite la logique métier, manipule les modèles et renvoie les réponses HTTP adaptées.
- 📁 **`routes/`** : Définit l'ensemble des points d'entrée de l'API (endpoints) et les achemine vers les bons contrôleurs.
- 📁 **`middlewares/`** : Intercepte les requêtes entrantes (ex: `logger.middleware.js` pour journaliser toutes les requêtes dans la console).

## 📌 Points d'accès de l'API (Endpoints)

L'API expose le groupe principal `/reservations` :

| Méthode | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Point d'entrée de l'API (Message d'accueil express) |
| `GET` | `/reservations` | Récupère la liste de toutes les réservations |
| `GET` | `/reservations?client=Nom` | Recherche des réservations filtrées par le nom du client |
| `GET` | `/reservations/:id` | Récupère les détails complets d'une réservation selon son identifiant unique |
| `POST` | `/reservations` | Crée une réservation (Format attendu en Body JSON: `{ "client": "...", "chambre": "..." }`) |
| `PUT` | `/reservations/:id` | Mets à jour les informations d'une réservation existante |
| `DELETE` | `/reservations/:id` | Supprime définitivement une réservation par son identifiant |
| `GET` | `/info` | Affiche vos informations client comme le `User-Agent` récupéré depuis les Headers HTTP |

### 💡 Exemples d'utilisation (CLI)

**1. Récupérer l'ensemble des données**
```bash
curl -X GET http://localhost:3000/reservations
```

**2. Ajouter une nouvelle réservation test**
```bash
curl -X POST http://localhost:3000/reservations \
  -H "Content-Type: application/json" \
  -d '{"client": "Jean Dupont", "chambre": "305"}'
```

## 📸 Galerie

<!-- Ajoutez vos captures d'écran ici, par exemple des requêtes Postman -->
<p align="center">
  <img src="images/api_image_01.png" alt="Aperçu de l'API" width="800">
</p>

---
