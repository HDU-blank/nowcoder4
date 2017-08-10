function maxVolum(arr){
    var left = 0,
        right =arr.length-1,
        max = 0,
        i = 0,
        j = arr.length-1;
        
        while (i != j){
            if (arr[left]<=arr[right]){
                if(arr[left]<arr[i]){
                    i++;
                    left++;
                }else{
                    max += arr[left]-arr[i];
                    i++;
                }
            }else{
                if(arr[right]<arr[j]){
                    j--;
                    right--;
                }else{
                    max += arr[right]-arr[j];
                    j--;
                }
            }
        }
        return max;
}
maxVolum([3,1,2,4]);