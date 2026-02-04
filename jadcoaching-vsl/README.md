# JadCoaching VSL Video - Remotion

Video de vente (VSL) pour JadCoaching, créée avec Remotion.

## Caractéristiques

- **16 slides** avec animations fluides
- **Design premium** avec effet de grain cinématographique
- **Couleur principale**: #00CFFF (HSL: 191, 100%, 50%)
- **Fond texturé** style cinéma avec grain subtil
- **Effets de glow** et ombres modernes
- **Transitions** élégantes entre slides

## Installation

```bash
npm install
```

## Utilisation

### Prévisualisation dans le studio
```bash
npm start
```
Ouvre le studio Remotion pour prévisualiser la vidéo.

### Rendu de la vidéo
```bash
npm run build
```
Rend la vidéo en MP4 dans le dossier `out/`.

### Rendu avec options personnalisées
```bash
npx remotion render JadCoachingVSL out/ma-video.mp4 --codec=h264
```

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── AnimatedText.tsx    # Texte animé avec effets
│   ├── FilmGrain.tsx       # Effet grain cinématographique
│   ├── GradientBackground.tsx  # Arrière-plans dégradés
│   ├── Logo.tsx            # Logo JadCoaching
│   ├── SlideTransition.tsx # Transitions entre slides
│   ├── SlideWrapper.tsx    # Wrapper commun pour slides
│   └── TestimonialSlide.tsx # Template témoignages
├── slides/              # Les 16 slides
│   ├── Slide01.tsx ... Slide16.tsx
│   └── index.ts
├── styles/
│   └── theme.ts         # Thème et couleurs
├── Root.tsx             # Configuration Remotion
├── Video.tsx            # Composition principale
└── index.tsx            # Point d'entrée
```

## Configuration vidéo

- **Résolution**: 1920x1080 (Full HD)
- **FPS**: 30
- **Durée totale**: ~73 secondes (2160 frames)

## Slides

1. Tu es étudiant en Suisse ? (universités)
2. Je veux te faire réussir ton prochain examen
3. Accompagnement JadCoaching - Comment ça fonctionne ?
4. #1 Débloque les concepts complexes
5. #2 Développe une méthode claire
6. #3 Travaille sur ce qui tombe aux examens
7. Comment je peux te promettre que tu vas réussir ?
8. Jad, Diplômé EPFL (+10 ans d'expérience)
9. Plus de 1254 étudiants accompagnés
10. Témoignage Lou Zahnd (HEC)
11. Témoignage Stan Stelcher (HEIG-Vaud)
12. Témoignage Alexis Allemand (EPFL)
13. Témoignage Elisa Pucci (Unidistance)
14. Témoignage Val Garnier (ESC UNIL)
15. Ce qui fait échouer - le manque de stratégie
16. Réserve ton appel gratuit (CTA)

## Personnalisation

### Couleurs
Modifiez `src/styles/theme.ts` pour changer les couleurs.

### Durées des slides
Modifiez `SLIDE_CONFIG` dans `src/Video.tsx` pour ajuster la durée de chaque slide.

### Témoignages
Les témoignages utilisent le composant `TestimonialSlide` avec les props:
- `quote`: Le texte du témoignage
- `name`: Nom de l'étudiant
- `school`: École/université
- `beforeGrade`/`afterGrade`: Notes avant/après (optionnel)
