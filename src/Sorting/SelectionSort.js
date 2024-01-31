export const swap = async (arr, i, j, bars, delay, speed) => {
  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "#101d42";
  }
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  bars[i].style.height = arr[i] + "px";
  bars[j].style.height = arr[j] + "px";
  bars[i].style.backgroundColor = "red";
  bars[j].style.backgroundColor = "red";
  await delay(speed + 50);
  for (let i = 0; i < arr.length; i++) {
    bars[i].style.backgroundColor = "#26751F";
  }
  return arr;
};

export const selectionSort = async (arr, bars, delay, speed, setIsRunning) => {
  setIsRunning(true);
  var i, j, min_idx;
  for (i = 0; i < arr.length - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    await delay(speed + 50);
    swap(arr, min_idx, i, bars, delay, speed);
  }
  setIsRunning(false);
};
