let grid :string [] []= [
['X','O','X'],
['X','O','O'],
['O','O','X'],
]

let compareX :string = "X";
let compareO :string = "O";
function result(params:string[][]) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if(grid[i][j] == 'X'){
                return true
            }else {
               return false
            }
        }

    }
}
console.log(result(grid));
