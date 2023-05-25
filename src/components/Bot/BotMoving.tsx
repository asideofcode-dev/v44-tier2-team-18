// Enum representing the directions
export enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}


export const botMoving = (direction: Direction,
    position: number[]) => {
    switch (direction) {
        case 'North': {
            if (position[1] === 0) {
                position[1] += 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    direction = 'East';
                } else if (randomDirection === 1) {
                    direction = 'West';
                } else {
                    direction = 'South';
                };
            } else {
                position[1] -= 1;
            };
            break;
        }
        case 'South': {
            if (position[1] === 7) {
                position[1] -= 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    direction = 'East';
                } else if (randomDirection === 1) {
                    direction = 'West';
                } else {
                    direction = 'North';
                };
            } else {
                position[1] += 1;
            };
            break;
        }
        case 'East': {
            if (position[0] === 7) {
                position[0] -= 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    direction = 'South';
                } else if (randomDirection === 1) {
                    direction = 'North';
                } else {
                    direction = 'West';
                };
            } else {
                position[0] += 1;
            };
            break;
        }
        case 'West': {
            if (position[0] === 0) {
                position[0] += 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    direction = 'South';
                } else if (randomDirection === 1) {
                    direction = 'North';
                } else {
                    direction = 'East';
                };
            } else {
                position[0] -= 1;
            };
            break;
        }
    }
    return { direction, position };
}

