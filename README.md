# 🚀 HRnet Application

Une application de gestion des employés développée avec React, PrimeReact pour l'UI, et une modale de succès personnalisée ! 🏢

---

## 📋 Description

Cette application permet de **créer des employés** et de **visualiser la liste actuelle** avec des options de recherche et de filtrage. Elle utilise Vite pour le développement rapide, PrimeReact pour les composants UI, et Sass pour le style.

## 🛠️ Technologies Utilisées

-   **React** avec **Vite** ⚛️
-   **PrimeReact** pour des composants interactifs 🎛️
-   **React Router** pour la navigation 🧭
-   **Sass** pour des styles modulaires 💅
-   **Plugin de modal** personnalisé pour des notifications 🎉
-   **node.js** v22.11.0

## ⚙️ Installation

1. **Cloner le dépôt :**

    ```bash
    git clone [this project](https://github.com/Svenhildr/P14_Front-end.git)
    cd react
    npm install
    npm run dev
    ```

    ## 🖥️ Utilisation de l'application

-   **Créer un employé :**  
    Depuis la page d'accueil, remplir le formulaire et cliquer sur **"Save"**. Une modal de confirmation s'affiche pour confirmer la création.

-   **Consulter la liste des employés :**  
    Un lien dans la barre de navigation permet d'accéder à la liste actuelle des employés avec des options de recherche et de filtrage.

## 📦 Composants et Fonctionnalités

### `CreateEmployee`

Formulaire de création d'un nouvel employé. Les utilisateurs peuvent y saisir le nom, la date de naissance, l'adresse, le département, et plus encore.

### `EmployeeList`

Affiche la liste des employés ajoutés. Inclut des options de **recherche et filtrage** pour simplifier l'accès aux données.

### `FormContext`

Utilisation du contexte React pour centraliser les données de formulaire et la liste des employés. Ce contexte facilite la gestion de l'état de l'application.

## 📦 Dépendances

-   **PrimeReact** : pour une collection de composants UI React.
-   **React Router** : pour gérer la navigation entre les pages.
-   **Sass** : pour des styles organisés et modulaires.
-   [**success-modal-hrnet**](https://www.npmjs.com/package/success-modal-hrnet) : une modal de succès personnalisée publiée sur npm.
