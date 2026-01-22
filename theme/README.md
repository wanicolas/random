# Thème Ghost - Mon Magazine

Thème personnalisé pour Ghost développé en local.

## Structure

- `Fichiers .hbs` - Pages ou composants handlears utilisés pour le templating
- `assets/css/` - Fichiers CSS
- `assets/js/` - Fichiers JavaScript
- `assets/built/` - Fichiers buildés par la CI ou en dev et gitignorés (css, js, etc.)

## Développement local

1. Démarre Docker : `docker compose up -d`
2. Accède à Ghost : http://localhost:2368
3. Active le thème dans l'admin : http://localhost:2368/ghost

Les modifications de fichiers sont prises en compte en temps réel ainsi que le watch des fichiers par Tailwind pour fournir le CSS.
Le formattage de tous les fichiers par Prettier est obligatoire sinon les PR ne passeront pas. Utilisable via la commande `pnpm format` dans le conteneur node ou bien via l'extension VSCode à associer au paramètre "format on save" et à définir comme formatteur par défaut.

## Documentation

- [Documentation Ghost Themes](https://ghost.org/docs/themes/)
- [Handlebars Helpers](https://ghost.org/docs/themes/helpers/)
