type Position = number[];

// Enum representing the directions
export enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}

// Function to change to a random direction excluding the provided direction
const changeRandomDirection = (exclude: Direction): Direction => {
  // Get an array of directions excluding the provided direction
  const directions = Object.values(Direction).filter(dir => dir !== exclude);

  // Randomly select a direction from the available directions
  return directions[Math.floor(Math.random() * directions.length)];
}

// Object mapping each direction to the change in position
const directionToPositionChange: Record<Direction, [number, number]> = {
  [Direction.North]: [0, -1],
  [Direction.South]: [0, 1],
  [Direction.East]: [1, 0],
  [Direction.West]: [-1, 0],
}

// Function to constrain a number within a specified range
const constrainToBounds = (n: number, min: number, max: number): number =>
  Math.min(Math.max(n, min), max);

// Main function for moving the bot
export const botMoving = (
  direction: Direction,
  position: Position
): { direction: Direction; position: Position } => {
  // Create a copy of the position array to avoid modifying the original array
  position = [...position];

  // Get the change in position based on the provided direction
  const change = directionToPositionChange[direction];

  // Update the position based on the change
  position[0] += change[0];
  position[1] += change[1];

  // Constrain the position values to ensure they stay within the bounds [0, 7]
  position[0] = constrainToBounds(position[0], 0, 7);
  position[1] = constrainToBounds(position[1], 0, 7);

  // Check if the bot is at the boundary
  const atBoundary = position[0] === 0 || position[0] === 7 || position[1] === 0 || position[1] === 7;

  // If the bot is at the boundary, change to a random direction
  if (atBoundary) {
    direction = changeRandomDirection(direction);
  }

  // Return the updated direction and position
  return { direction, position };
}
