function max(arr){
    var cur = 0,
        max = -1000000,
        maxSum = -100000,
        leftArr = [],
        rightArr = [];
    for (var j = arr.length-1;j>=0;j--){
        cur += arr[j];
        max = max>cur?max:cur;
        cur = cur>0?cur:0;
        rightArr[j] = max;
    } 
    max = -1000000;
    cur = 0;
    for (var i = 0;i<arr.length-1;i++){
        cur += arr[i];
        max = max>cur?max:cur;
        cur = cur>0?cur:0;
        maxSum = maxSum>max+rightArr[i+1]?maxSum:max+rightArr[i+1];
    }
    return maxSum;
}
max([-1,3,4,-9,1,2]);