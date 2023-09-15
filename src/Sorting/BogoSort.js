function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function bogoSort(array, setIsRunning, speed, delay, bars) {
  setIsRunning(true);

  while (!isSorted(array)) {
    shuffleArray(array);
    for (let i = 0; i < array.length; i++) {
      bars[i].style.height = array[i] + "px";
      bars[i].style.backgroundColor = "red";
      await delay(speed);
    }

    for (let i = 0; i < array.length; i++) {
      bars[i].style.backgroundColor = "#101d42";
    }

    await delay(speed);
  }
  for (let i = 0; i < array.length; i++) {
    bars[i].style.backgroundColor = "#26751F";
  }

  setIsRunning(false);
  return array;
}

function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}
