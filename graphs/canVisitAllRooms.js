/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  if (rooms.length <= 1) return true;
  let visited = [];

  let stack = [0];
  while (stack.length > 0) {
    let curr = stack.pop();
    visited[curr] = true;

    for (let i = 0; i < rooms[curr].length; i++) {
      let temp = rooms[curr][i];
      if (visited[temp] === undefined) {
        stack.push(temp);
      }
    }
  }
  for (let i = 0; i < rooms.length; i++) {
    if (visited[i] !== true) {
      return false;
    }
  }
  return true;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
