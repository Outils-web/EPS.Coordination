# Coord'EPS · Plateforme de coordination EPS

**Coord'EPS** est une application web qui centralise toute la coordination d'une
équipe d'enseignants d'EPS : tâches, emplois du temps, installations, transports,
matériel, réunions, documents et incidents — dans une interface moderne, claire et
responsive, avec mode sombre.

L'application tient dans **un seul fichier HTML autonome** (`coord-eps.html`) :
le CSS, le JavaScript et le logo y sont intégrés. Aucune installation, aucune
dépendance, aucun compte à créer.

> 100 % gratuit · sans abonnement · sans aucune fonction payante.

---

## 🚀 Démarrage rapide

1. Téléchargez le fichier `coord-eps.html`.
2. Ouvrez-le dans un navigateur récent (double-clic).
3. Sur la page d'accueil, cliquez sur **« Se connecter »**, puis sur une puce de
   compte de démonstration (le formulaire se pré-remplit automatiquement).

### Comptes de démonstration (mot de passe : `demo`)

| Rôle | E-mail |
|---|---|
| Administrateur | `admin@coordeps.fr` |
| Coordonnateur | `coord@coordeps.fr` |
| Enseignant | `prof@coordeps.fr` |

---

## 🧭 Le parcours

1. **Page d'accueil** — présente l'application : héro, atouts, liste des espaces et
   appel à l'action.
2. **Écran de connexion** — accessible depuis n'importe quel bouton « Se connecter »
   (avec un lien « ← Retour à l'accueil »).
3. **L'application** — l'ensemble des modules une fois connecté.

---

## ✨ Les espaces de l'application

| Module | Description |
|---|---|
| **Tableau de bord** | Statistiques clés, raccourcis, graphiques et échéances à venir. |
| **Tâches** | Tableau kanban d'équipe : priorités, responsables, échéances, alerte sur les retards. |
| **Emplois du temps** | Grille hebdomadaire filtrable par enseignant. |
| **Installations & réservations** | Gymnases, stades, piscines et réservation des créneaux. |
| **Transports** | Planification des déplacements pour sorties et activités. |
| **Inventaire** | Suivi du matériel et alerte sur les stocks bas. |
| **Commandes** | Suivi visuel des achats par statut. |
| **Réunions** | Ordres du jour et comptes rendus d'équipe. |
| **Documents** | Espace documentaire avec recherche et catégories. |
| **Incidents** | Déclaration et suivi (déclaré → en cours → résolu). |
| **Utilisateurs & rôles** | Gestion des comptes et des droits d'accès. |
| **Notifications** | Centre de notifications internes. |

Plus : **mode clair / sombre** et mise en page responsive (ordinateur, tablette,
smartphone).

---

## 🔐 Rôles & permissions

- **Administrateur** : accès complet, y compris la gestion des utilisateurs.
- **Coordonnateur** : gère la logistique et l'organisation (tâches, installations,
  transports, matériel, commandes, réunions, documents, incidents), sans gérer les
  comptes.
- **Enseignant** : consulte tout, gère ses tâches, déclare et suit les incidents, et
  réserve des créneaux d'installations.

---

## 💾 Stockage des données

Par défaut, les données (jeu de démonstration réaliste) sont enregistrées dans le
**navigateur** via `localStorage`.

- **En ouverture par double-clic** (`file://`), certains navigateurs bloquent
  `localStorage`. L'application bascule alors automatiquement sur un **stockage en
  mémoire** : elle fonctionne normalement, mais les modifications ne sont pas
  conservées après un rechargement de la page.
- **Pour conserver les données**, ouvrez le fichier via un petit serveur local ou
  hébergez-le en ligne (voir ci-dessous).

### Réinitialiser les données de démonstration
Ouvrez la console du navigateur (`F12`), tapez :
```js
localStorage.clear()
```
puis rechargez la page.

---

## 🌐 Mise en ligne / serveur local (optionnel)

Pour une persistance fiable, servez le fichier au lieu de l'ouvrir directement :

```bash
# Serveur local rapide (Python 3)
python3 -m http.server 8000
# puis ouvrez http://localhost:8000/coord-eps.html
```

Vous pouvez aussi déposer `coord-eps.html` sur n'importe quel hébergement de pages
statiques.

---

## 🛢 Backend multi-utilisateurs (optionnel, avancé)

Le fichier unique fonctionne sans serveur, chaque navigateur ayant ses propres
données. Pour **partager les données entre plusieurs utilisateurs**, un backend
PHP/MySQL d'exemple peut être branché : la couche d'accès aux données de
l'application est centralisée dans un objet `Store` (dans le JavaScript), dont les
méthodes peuvent être remplacées par des appels `fetch()` vers une API REST.

Endpoints types d'une telle API :
```
GET    api.php?resource=tasks          // liste
POST   api.php?resource=tasks          // créer (corps JSON)
PUT    api.php?resource=tasks&id=42     // modifier
DELETE api.php?resource=tasks&id=42     // supprimer

POST   api.php?action=login            // { email, password }
POST   api.php?action=logout
GET    api.php?action=me
```

> En production, pensez à hacher les mots de passe (`password_hash` en PHP) et à
> sécuriser l'accès aux ressources par rôle.

---

## 🎨 Identité visuelle

- **Logo** : pictogramme « personnes en mouvement » + texte *Coord'EPS*, intégré
  directement dans le fichier (image encodée), décliné en logo complet sur fonds
  clairs et en pictogramme sur pastille pour les fonds foncés et le favicon.
- **Polices** : Bricolage Grotesque (titres) et Hanken Grotesk (texte), chargées via
  Google Fonts (repli automatique sur les polices système hors connexion).

---

## 🧱 Choix techniques

- **Aucun framework, aucun bundler** : HTML, CSS et JavaScript « vanilla ».
- **Autonome** : un seul fichier, fonctionne hors-ligne (sauf chargement des polices).
- **Responsive** : menu latéral escamotable et mises en page adaptées au mobile.
- **Accessibilité** : contrastes soignés, focus visibles, prise en compte de
  `prefers-reduced-motion`.

---

## 📄 Licence

Projet libre et gratuit. Vous pouvez l'utiliser et l'adapter pour votre établissement.
