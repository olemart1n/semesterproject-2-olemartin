export const bidHighest = (bidArr) => {
    let array = [];
    bidArr.forEach(element => {
        array.push(element.amount)
    });

    for (let i = 0; i < array.length; i++) {
      let hasSwapped = false;
  
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          hasSwapped = true;
        }
      }
      if (!hasSwapped) {
        return array[array.length - 1];
      }
    }
    return array[array.length - 1];
}