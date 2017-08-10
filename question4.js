function maxABSBetweenLeftAndRight(arr){
    var max = -1000000;
    for (var i = 0;i < arr.length;i ++){
        max = max>arr[i]?max:arr[i];
    }
    return max = (max-arr[0]>max-arr[arr.length-1])?max-arr[0]:max-arr[arr.length-1];
}
 maxABSBetweenLeftAndRight([2,7,3,1,1]);