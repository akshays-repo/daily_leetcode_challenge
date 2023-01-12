// TODO
// status: incomplete

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  let distance: number = 0;

  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      const element2 = arr2[j];

      if (element1 !== element2) {
        let op =
          element1 > element2 ? element1 - element2 : element2 - element1;
        if (op <= d) {
          distance = distance + 1;
          console.log(`${element1} - ${element2} = ${op}`);
        }
      }
    }
  }
  return distance;
}
console.log(findTheDistanceValue([4, 5, 8], [4, 5, 8], 3));
