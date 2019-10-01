const selection = (arr) => {
   let min = 0;
   while (min < arr.length-1){
       for(let i = min+1; i < arr.length-1; i++) {
         if (arr[min] > arr[i]) {
           let aux = arr[min];
           arr[min] = arr[i];
           arr[i] = aux;
         }
       }
       min++;
   }
    return arr;
};

