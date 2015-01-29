<snippet>
<content>
#API
Ce projet fait référence au cours concernant les API et WebServices.
Ce projet concerne le thème des : <b>Reviews</b>.
## Responses
1. <b>Que se passe-t-il? Analysez le fichier generé. Que contient-il ?</b>
<i>Création du fichier “package.json”.
Ce fichier contient toutes les informations nécessaires aux modules externes qui seront requis pour l’application, et les informations de base de l’application.</i>

2. <b>Selon la configuration, quel est le fichier que permet de lancer l’application ? Que contient-il ?</b>
<i>Le fichier qui permet de lancer l'application est le fichier './bin/www', qui permet la création du serveur sur le port 3000, et qui appelle le fichier './app.js'.</i>

3. <b>Allez a l’url http://localhost:3000. Quel fichier permet d’afficher le contenu ? Y-a-t-il une méthode http utilisée ?</b>
<i>Le fichier qui permet d'afficher le contenu est le fichier './views/index.jade'. La method http utilisée est la méthode GET, et qui récupère le contenu.</i>

4. <b>Qu’est-ce qu’une route en Express ?</b>
<i>Une route en Express définie un comportement particulier de l'app, s'appuyant sur la requète qui est effectuée. Cela inclue la route utilisée (ex : "/", "/reviews", ...), la requète http spécifiée (GET, POST, DELETE, PUT, ...).</i>

5. <b>À quoi servent les fichiers jade ?</b>
<i>Les fichiers jade sont des fichiers de templating, ils permettent de créer une vue, et intègre les données gérées par l'application (généralement envoyées depuis les différentes routes, mais également les données de base de l'application -globales-).</i>

6. <b>Qu’est-ce qu’un middleware en Express ?</b>
<i>Express est un framework basé sur le concept de middlewares. Ce sont des petits morceaux d'application qui rendent chacun un service spécifique.
Ces middlewares sont interconnectés et peuvent communiquer entre eux. Express ne fait qu'ajouter les routes et les vues par-dessus l'ensemble.
Un middleware permet donc d'effectuer des actions, en utilisant les objets request (req) et response (res), mais bien d'autres également.</i>
</content>
</snippet> 
