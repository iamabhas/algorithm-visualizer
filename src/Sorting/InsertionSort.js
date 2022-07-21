export async function insertionSort(array, setIsRunning, delay, speed, bars) {
  setIsRunning(true);
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = array[j + 1] + "px";
      bars[j + 1].style.backgroundColor = "red";
      await delay(speed + 5);

      for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#101d42";
      }
      j = j - 1;
    }
    array[j + 1] = key;
    bars[j + 1].style.height = array[j + 1] + "px";
    bars[j + 1].style.backgroundColor = "red";
    await delay(speed + 5);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "#26751F";
  }
  setIsRunning(false);
  return array;
}
