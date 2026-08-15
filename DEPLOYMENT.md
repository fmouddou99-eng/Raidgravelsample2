# Déploiement — Raid Gravel Maroc

Site statique (React + Vite + TailwindCSS) prêt pour GitHub Pages.

## Build local

```bash
npm install
npm run build      # génère dist/
npm run preview    # prévisualise le build localement
```

## Déploiement sur GitHub Pages

### Option A — GitHub Actions (recommandé)

1. Poussez le projet sur un dépôt GitHub.
2. Dans **Settings → Pages → Build and deployment → Source**, choisissez
   **GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` se déclenche à chaque `push` sur
   `main` : il build, ajoute `.nojekyll`, et publie `dist/`.
4. Le site est servi sur :
   `https://<votre-compte>.github.io/<nom-du-dépôt>/`

> `base: './'` dans `vite.config.ts` + `.nojekyll` garantissent l'absence de
> page blanche, quel que soit le sous-chemin du dépôt.

### Option B — gh-pages (manuel)

```bash
npm run build
npx gh-pages -d dist
```

## À configurer avant la mise en production

1. **Formulaire de contact** — ouvrez `src/components/ContactForm.tsx` et
   renseignez `FORMSPREE_ID` avec l'identifiant de votre formulaire
   (https://formspree.io). Tant que la constante est vide, un `mailto:` de
   repli est utilisé. Indiquez l'adresse email de destination à Saïd.
2. **Tarif définitif** — `src/components/Tarifs.tsx` (1390€ provisoire, marqué
   « à confirmer »).
3. **Dates 2026 & formule solo/duo** — à ajouter dans la section Tarifs.
4. **Logo** — remplacer le pictogramme `Compass` du header par le symbole
   berbère final.
5. **Visuels** — remplacer les `Placeholder` par les vraies photos et la carte
   du parcours (mêmes ratios). Fichiers GPX par étape à lier.
