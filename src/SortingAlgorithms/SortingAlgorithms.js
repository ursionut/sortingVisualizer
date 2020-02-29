export function bubbleSortAnimation(numArray) {
    const animations = [];
    if (numArray <= 1) return numArray;
    bubbleSort(numArray, animations);
    return animations
}

function bubbleSort(numArray, animations) {
    let arrayLength = numArray.length;
    for (let i = 0; i < arrayLength; i++) {
        for( let j = 0; j < arrayLength - i - 1; j++) {
            animations.push([j, j + 1]);
            if(numArray[j] > numArray[j + 1]){
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            } 
            animations.push([...numArray]); 
        }
    }
}