

// Déplace le personnage
function deplacement(perso) {
    perso.mouvement++;
    if (perso.mouvement == perso.img.mouvement) {
        perso.mouvement = 0;
    }

    if (perso.direction == perso.img.haut_droite ||
        perso.direction == perso.img.droite ||
        perso.direction == perso.img.bas_droite) {
        perso.coords_x += perso.vitesse;
    } else if (perso.direction == perso.img.haut_gauche ||
        perso.direction == perso.img.gauche ||
        perso.direction == perso.img.bas_gauche) {
        perso.coords_x -= perso.vitesse;
    }

    if (perso.direction == perso.img.bas_droite ||
        perso.direction == perso.img.bas ||
        perso.direction == perso.img.bas_gauche) {
        perso.coords_y += perso.vitesse;
    } else if (perso.direction == perso.img.haut_droite ||
        perso.direction == perso.img.haut ||
        perso.direction == perso.img.haut_gauche) {
        perso.coords_y -= perso.vitesse;
    }
}

function move(perso) {
    if ((perso.path_x == null && perso.path_x == null) || (perso.coords_x == perso.path_x && perso.coords_y == perso.path_y)) {
        var finder = new PathFinder(10);

        if (perso.coords_x == 650 && perso.coords_y == 100) {
            test = 1;
        } else if (perso.coords_x == 100 && perso.coords_y == 450) {
            test = 2;
        } else if (perso.coords_x == 120 && perso.coords_y == 150) {
            test = 3;
        } else if (perso.coords_x == 320 && perso.coords_y == 220) {
            test = 4;
        }

        if (test == 1) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 100, 450);
        } else if (test == 2) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 120, 150);
        } else if (test == 3) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 320, 220);
        } else if (test == 4) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 650, 100);
        }

        for (var key in path) {
            drawCoordinates(path[key][0], path[key][1], 'red');
        }

        drawCoordinates(perso.coords_x, perso.coords_y, 'green');
        drawCoordinates(100, 450, 'green');
        perso.path_x = path[1][0];
        perso.path_y = path[1][1];

        if ((perso.path_x - 10) == perso.coords_x) {
            if ((perso.path_y - 10) == perso.coords_y) { // haut gauche
                perso.direction = perso.img.bas_droite;
            } else if ((perso.path_y) == perso.coords_y) { // gauche
                perso.direction = perso.img.droite;
            } else if ((perso.path_y + 10) == perso.coords_y) { // bas gauche
                perso.direction = perso.img.haut_droite;
            }
        } else if ((perso.path_x) == perso.coords_x) {
            if ((perso.path_y - 10) == perso.coords_y) { // haut
                perso.direction = perso.img.bas;
            } else if ((perso.path_y) == perso.coords_y) { // milieu

            } else if ((perso.path_y + 10) == perso.coords_y) { // bas
                perso.direction = perso.img.haut;
            }
        } else if ((perso.path_x + 10) == perso.coords_x) {
            if ((perso.path_y - 10) == perso.coords_y) { // haut droite
                perso.direction = perso.img.bas_gauche;
            } else if ((perso.path_y) == perso.coords_y) { // droite
                perso.direction = perso.img.gauche;
            } else if ((perso.path_y + 10) == perso.coords_y) { // bas droite
                perso.direction = perso.img.haut_gauche;
            }
        }
    }

    deplacement(perso);
}