# Thème Ghost - Mon Magazine

Thème personnalisé pour Ghost développé en local.

## Structure

- `package.json` - Configuration du thème
- `default.hbs` - Template principal (wrapper)
- `index.hbs` - Liste des articles (page d'accueil)
- `post.hbs` - Article individuel
- `page.hbs` - Pages statiques
- `assets/css/` - Fichiers CSS
- `assets/js/` - Fichiers JavaScript

## Développement local

1. Démarre Docker : `docker compose up -d`
2. Accède à Ghost : http://localhost:2368
3. Active le thème dans l'admin : http://localhost:2368/ghost
4. Les modifications de fichiers sont prises en compte en temps réel

## Templates disponibles

Tu peux créer d'autres templates selon tes besoins :

- `tag.hbs` - Page d'un tag
- `author.hbs` - Page d'un auteur
- `error.hbs` - Page d'erreur 404
- `home.hbs` - Alternative à index.hbs pour la page d'accueil

## Documentation

- [Documentation Ghost Themes](https://ghost.org/docs/themes/)
- [Handlebars Helpers](https://ghost.org/docs/themes/helpers/)
