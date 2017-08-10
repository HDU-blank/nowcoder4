function maxArraySum(arr){
    if (arr = null || arr.length==0){
        return 0;
    }
    var cur = 0,
        max = -1000000;
    for(var i = 0;i<arr.length;i++){
        cur += arr[i];
        max = max>cur?max:cur;
        cur = cur>0?cur:0;
    }
    return max;
}
function maxMatrixSum(arr){
    if (arr = null || arr.length == 0 || arr[0].length == 0){
        return 0;
    }
    var cur = 0,
        max = -1000000,
        len = arr[0].length,
        newArr = Array.apply(null, Array(len)).map(function(item, i) {
        return 0;
    });
    for (var i = 0;i<arr.length;i++){
        for (var j = i;j<arr.length;j++){
            for (var k = 0;k<len;k++){
                newArr[k] += arr[j][k];
            }
            max = max>maxArraySum(newArr)?max:maxArraySum(newArr);
        }
        newArr = Array.apply(null, Array(len)).map(function(item, i) {
            return 0;
        });
    }
    return max;
}
maxMatrixSum([[-90,48,78],[64,-40,64],[-81,-7,66]]);