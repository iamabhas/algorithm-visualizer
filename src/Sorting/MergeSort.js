export async function mergeSort(
  array,
  start,
  end,
  bars,
  delay,
  speed,
  setIsRunning
) {
  if (start < end) {
    let middle = Math.floor((start + end) / 2);

    await mergeSort(array, start, middle, bars, delay, speed, setIsRunning);
    await mergeSort(array, middle + 1, end, bars, delay, speed, setIsRunning);
    await merge(array, start, middle, end, bars, delay, speed);
  }
  if (start === 0 && end === array.length - 1) {
    for (let i = 0; i < array.length; i++) {
      bars[i].style.backgroundColor = "#26751F";
    }
    await setIsRunning(false);
  }
}

async function merge(array, start, middle, end, bars, delay, speed) {
  let start2 = middle + 1;

  if (array[middle] <= array[start2]) {
    return;
  }

  while (start <= middle && start2 <= end) {
    bars[start].style.backgroundColor = "green";
    bars[start2].style.backgroundColor = "red";
    await delay(speed);

    if (array[start] <= array[start2]) {
      start++;
    } else {
      let value = array[start2];
      let index = start2;

      while (index !== start) {
        array[index] = array[index - 1];
        bars[index].style.height = array[index] + "px";
        index--;
        await delay(speed);
      }
      array[start] = value;

      bars[start].style.height = value + "px";

      start++;
      middle++;
      start2++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    bars[i].style.backgroundColor = "#101d42";
  }
}
