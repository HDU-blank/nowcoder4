function waterProblem (arr){
    if (arr == null || arr.length==0){
        return 0;
    }
    var left = 0,
        right =arr.length-1,
        max = 0,
        i = 0,
        j = arr.length-1;
        
         while ((i-1) != j){
            if (arr[left]<=arr[right]){
                if(arr[left]<arr[i]){
                    left = i;
                    i++;
                }else{
                    max += arr[left]-arr[i];
                    i++;
                }
            }else{
                if(arr[right]<arr[j]){
                    right = j;
                    j--;
                }else{
                    max += arr[right]-arr[j];
                    j--;
                }
            }
        }
        return max;
}
waterProblem ([3,1,2,4]);