### Intégration continue

Chaque push sur une branche `feat/**` ou sur `dev` déclenche un workflow GitHub Actions.  
Ce workflow vérifie que le projet est prêt à être buildé, en exécutant :

- Un checkout du code  
- Un `docker build` de l'image

---

### Livraison continue

Une fois le build validé, l’image Docker est poussée automatiquement sur le GitHub Container Registry (GHCR) :  
`ghcr.io/Boris-Picard/devops-cesi:latest`

Cela garantit que chaque version valide est disponible pour déploiement, sans action manuelle.

---

### Déploiement continu
