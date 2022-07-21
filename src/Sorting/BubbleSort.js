//BUBBLE SORT ANIMATION LOGIC
export async function bubbleSort(array, setIsRunning, speed, delay, bars) {
  setIsRunning(true);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          bars[k].style.backgroundColor = "#101d42";
        }
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = array[j] + "px";
        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.height = array[j + 1] + "px";
        bars[j].style.backgroundColor = "red";
        await delay(speed);
      }
    }
    await delay(speed);
    for (let i = 0; i < array.length; i++) {
      bars[i].style.backgroundColor = "#26751F";
    }
  }
  setIsRunning(false);
  return array;
}
