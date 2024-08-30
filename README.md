# My Personal Portfolio

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green)
![GCP Deployment](https://img.shields.io/badge/GCP-Deployment-orange)

## Overview

This is my personal portfolio project where I showcase my skills, projects, and experiences. The project is built using modern web technologies like Vite, React.js, and CSS. It is continuously evolving as I add new projects and update my portfolio.

## Branch Structure

This repository uses two primary branches:

### `main` Branch (GitHub Pages Development)

- **Purpose**: The `main` branch serves as a development environment using GitHub Pages. It’s my playground for experimenting with new features, designs, and content.
- **Tools Used**: 
  - **Vite**: For fast development and building of the project.
  - **React.js**: For building interactive and dynamic components.
  - **CSS**: For styling the portfolio with custom designs.
  - **YAML**: For managing GitHub Actions workflows.
- **Deployment**: Changes in this branch are automatically reflected on [GitHub Pages](https://your-username.github.io/your-repo-name/).
- **Usage**: I use this branch to test new ideas and ensure everything works as expected before making any changes public.

### `dev` Branch (Google Cloud Platform Deployment)

- **Purpose**: The `dev` branch is used for deploying the finalized and stable version of the portfolio to Google Cloud Platform (GCP), making it publicly accessible.
- **Tools Used**:
  - **Docker**: To create containerized images of the application.
  - **GCP Cloud Run**: For deploying the Docker container.
  - **GCP**: Hosting the portfolio on a scalable and reliable cloud platform.
- **Deployment**: The `dev` branch is deployed to [GCP Cloud Run](https://rtruong-gcp.com) for public access.
- **Usage**: Only stable and tested features from the `main` branch are merged into `dev` for public deployment.

## Technologies Used

- **Vite**: A next-generation front-end tooling for faster builds.
- **React.js**: JavaScript library for building user interfaces.
- **CSS**: Styling the portfolio with modern and responsive designs.
- **YAML**:  For managing GitHub Actions workflows and CI/CD pipelines.
- **Docker**: For containerizing the application to create images that can be deployed on GCP Cloud Run.
- **Google Cloud Platform (GCP)**: Hosting the portfolio using Cloud Run to manage and scale the containerized application.

## Workflow through YAML

1. **Development**:
   - Work in the `main` branch using Vite, React.js, and CSS.
   - Test and preview changes via GitHub Pages.
2. **Dockerization**:
   - Create a Docker image of the application when ready for deployment.
   - Push the Docker image to Google Container Registry.
3. **Deployment**:
   - Merge stable changes from `main` into the `dev` branch.
   - Deploy the Docker image from the `dev` branch to GCP Cloud Run, making the portfolio publicly accessible.
