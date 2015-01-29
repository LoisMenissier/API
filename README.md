<snippet>
<content>
#API
Ce projet fait référence au cours concernant les API et WebServices.
Reviews.
## Responses
1. Que se passe­t­il? Analysez le fichier generé. Que contient­il ?
Création du fichier “package.json”.
Ce fichier contient toutes les informations nécessaires aux modules externes qui seront requis pour l’application, et les informations de base de l’application.

2. Selon la configuration, quel est le fichier que permet de lancer l’application ? Que contient t­il ?
Le fichier qui permet de lancer l'application est le fichier './bin/www', qui permet la création du serveur sur le port 3000, et qui appelle le fichier './app.js'.

3. Allez a l’url http://localhost:3000. Quel fichier permet d’afficher le contenu ? Y-a-t-il une méthode http utilisée ?
Le fichier qui permet d'afficher le contenu est le fichier './views/index.jade'. La method http utilisée est la méthode GET, et qui récupère le contenu.

4. Qu’est­ce qu’une route en Express ?
Une route en Express définie un comportement particulier de l'app, s'appuyant sur la requète qui est effectuée. Cela inclue la route utilisée (ex : "/", "/reviews", ...), la requète http spécifiée (GET, POST, DELETE, PUT, ...).

5. À quoi sert les fichiers jade ?
Les fichiers jade sont des fichiers de templating, ils permettent de créer une vue, et intègre les données gérées par l'application (généralement envoyées depuis les différentes routes, mais également les données de base de l'application -globales-).

6. Qu’est­ce qu’un middleware en Express ?
Express est un framework basé sur le concept de middlewares. Ce sont des petits morceaux d'application qui rendent chacun un service spécifique.
Ces middlewares sont interconnectés et peuvent communiquer entre eux. Express ne fait qu'ajouter les routes et les vues par-dessus l'ensemble.
Un middleware permet donc d'effectuer des actions, en utilisant les objets request (req) et response (res), mais bien d'autres également.
</content>
</snippet> 
