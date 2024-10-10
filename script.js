let array=[50,70,30,90,20,60,40,80,10];
const arrayContainer = document.getElementById('array');
const sortedArrayDiv = document.getElementById('sortedArray');
function displayArray(arr){
    arrayContainer.innerHTML='Array:[' + arr.join(',')+']';
}
displayArray(array);
function bubbleSort(){
    let n = array.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
displaySortedArray(array);
}
function displaySortedArray(arr){
    sortedArrayDiv.innerHTML = 'Sorted Array:[' + arr.join(',')+']';
}