

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

function direction(perso) {
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

function move(perso) {
    var stop = false;
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

        if (path.length == 0 && perso.path != null) {
            path = colision(perso);
        }

        if (path.length < 1) {
            stop = true;
        } else {
            drawCoordinates(perso.coords_x, perso.coords_y, 'green');
            drawCoordinates(100, 450, 'green');
            if (perso.path == null) {
                perso.path = path;
            }
            perso.path_x = path[1][0];
            perso.path_y = path[1][1];

            direction(perso);
        }

    }
    if (!stop) {
        deplacement(perso);
    }
}

function move2(perso) {
    var stop = false;
    if ((perso.path_x == null && perso.path_x == null) || (perso.coords_x == perso.path_x && perso.coords_y == perso.path_y)) {
        var finder = new PathFinder(10);

        if (perso.coords_x == 320 && perso.coords_y == 320) {
            test2 = 1;
        } else if (perso.coords_x == 100 && perso.coords_y == 350) {
            test2 = 2;
        }

        if (test2 == 1) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 100, 350);
        } else if (test2 == 2) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 320, 320);
        }

        for (var key in path) {
            drawCoordinates(path[key][0], path[key][1], 'red');
        }

        if (path.length == 0 && perso.path != null) {
            path = colision(perso);
        }

        if (path.length < 1) {
            stop = true;
        } else {
            drawCoordinates(perso.coords_x, perso.coords_y, 'green');
            drawCoordinates(100, 450, 'green');
            if (perso.path == null) {
                perso.path = path;
            }
            perso.path_x = path[1][0];
            perso.path_y = path[1][1];

            direction(perso);
        }

    }
    if (!stop) {
        deplacement(perso);
    }
}

function move3(perso) {
    var stop = false;
    if ((perso.path_x == null && perso.path_x == null) || (perso.coords_x == perso.path_x && perso.coords_y == perso.path_y)) {
        var finder = new PathFinder(10);

        if (perso.coords_x == 320 && perso.coords_y == 420) {
            test3 = 1;
        } else if (perso.coords_x == 100 && perso.coords_y == 470) {
            test3 = 2;
        }

        if (test3 == 1) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 100, 470);
        } else if (test3 == 2) {
            var path = finder.findPath(perso.coords_x, perso.coords_y, 320, 420);
        }

        for (var key in path) {
            drawCoordinates(path[key][0], path[key][1], 'red');
        }

        if (path.length == 0 && perso.path != null) {
            path = colision(perso);
        }

        if (path.length < 1) {
            stop = true;
        } else {
            drawCoordinates(perso.coords_x, perso.coords_y, 'green');
            drawCoordinates(100, 450, 'green');
            if (perso.path == null) {
                perso.path = path;
            }
            perso.path_x = path[1][0];
            perso.path_y = path[1][1];

            direction(perso);
        }

    }
    if (!stop) {
        deplacement(perso);
    }
}

function colision(perso) {
    var recul = 10;
    var coords_x = perso.coords_x;
    var coords_y = perso.coords_y;

    var finder = new PathFinder(10);
    var recul = 20;
    var path = [];
    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x - recul, coords_y - recul);
    }
    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x, coords_y - recul);
    }
    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x + recul, coords_y - recul);
    }

    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x - recul, coords_y);
    }
    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x + recul, coords_y);
    }

    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x - recul, coords_y + recul);
    }
    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x, coords_y + recul);
    }

    if (path.length == 0) {
        path = finder.findPath(coords_x, coords_y, coords_x + recul, coords_y + recul);
    }

    return path;
}

