# 🚀 My Personal Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) 
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green)
![GCP Deployment](https://img.shields.io/badge/GCP-Deployment-orange)
![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-2.5.0-yellow?logo=vite&logoColor=white)

Welcome to my personal portfolio project! Here, I showcase my skills, projects, and experiences. Built with modern web technologies like **Vite**, **React.js**, and **CSS**, this portfolio is a continuously evolving project as I add new content and refine the design.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Branch Structure](#-branch-structure)
- [Technologies Used](#-technologies-used)
- [Workflow](#-workflow-through-yaml)

---

## 📄 Overview

This project serves as my digital footprint in the tech world, reflecting my journey and growth. It features dynamic components, responsive design, and automated deployment workflows.

---

## 🌿 Branch Structure

This repository is structured into two primary branches, each serving a unique purpose:

### `main` Branch | GitHub Pages Development

- **Purpose**: The `main` branch is the development hub. It’s where I experiment with new features, designs, and content.
- **Tools Used**:
  - **Vite**: Lightning-fast build tool for a modern development experience.
  - **React.js**: For crafting interactive and dynamic user interfaces.
  - **CSS**: Custom styles for a unique and responsive design.
  - **YAML**: Automating workflows using GitHub Actions.
- **Deployment**: Changes pushed to this branch are automatically live on [GitHub Pages](https://ryanctruong.github.io/personal-project/).
- **Usage**: Ideal for testing and iterating on new ideas before public release.

### `dev` Branch | Google Cloud Platform Deployment

- **Purpose**: The `dev` branch is dedicated to stable releases. This is where the final version of the portfolio is deployed.
- **Tools Used**:
  - **Docker**: Containerization of the application for consistent environments.
  - **GCP Cloud Run**: Deploying Docker containers in a scalable manner.
  - **GCP**: Ensuring the portfolio is hosted on a reliable cloud platform.
- **Deployment**: The stable version is deployed to [GCP Cloud Run](https://rtruong-gcp.com).
- **Usage**: Only thoroughly tested features from `main` are merged into `dev` for production deployment.

---

## 🛠️ Technologies Used

- **Vite**: Fast, modern front-end tooling.
- **React.js**: Building rich, interactive user interfaces.
- **CSS**: Designing a responsive and modern look.
- **YAML**: Configuration of CI/CD pipelines with GitHub Actions.
- **Docker**: Containerizing the application for deployment.
- **Google Cloud Platform (GCP)**: Cloud hosting using Cloud Run for scalability.

---

## 🔄 Workflow through YAML

1. **Development**:
   - Work in the `main` branch using Vite, React.js, and CSS.
   - Preview changes live via GitHub Pages.
2. **Dockerization**:
   - When ready, create a Docker image of the application.
   - Push the Docker image to Google Container Registry.
3. **Deployment**:
   - Merge stable changes from `main` into `dev`.
   - Deploy the Docker image from `dev` to GCP Cloud Run, making the portfolio publicly accessible.

---
