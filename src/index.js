
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || !matrix.length){
        return [];
    }
    let arr = [];
    for(let i = 0; i < matrix.length; i++){
        if(i%2==0){
            matrix[i].forEach(element => {
                arr.push(element);
            });
        } else {
            matrix[i].reverse().forEach(element => {
                arr.push(element)
            })
        }
    }
    return arr;
}
