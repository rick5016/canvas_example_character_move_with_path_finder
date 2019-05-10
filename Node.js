class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.walkable = this.isWalkableAt();
    }

    isWalkableAt() {
        for (var key in walls) {
            var wall = walls[key];
            if (this.y >= wall.y1 && this.y <= (wall.y1 + wall.y2)) {
                if (this.x >= wall.x1 && this.x <= (wall.x1 + wall.x2)) {
                    return false
                }
            }
        }
        if (this.x == 690 && this.y == 400) {
            var tt = 1;
        }
        for (var key in population) {
            var perso = population[key];
            if (this.y == perso.coords_y && this.x == (perso.coords_x)) {
                return false
            }
        }

        return true
    }

}