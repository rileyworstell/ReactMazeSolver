
export const Arr = (num) => {
    // Creates Array to be able to map over the blocks
    var arr = [];
    var num = num;
    for (var i = 0; i < num; i++) {
        arr[i] = new Array(num);
    }
    for (i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            arr[i][j] = "0";
        }
    }
    arr[num-1][num-1] = "E";
    return [arr, num];
}
