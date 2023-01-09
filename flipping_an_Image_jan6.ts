// status: Complete

function flipAndInvertImage(image: number[][]): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < image.length; i++) {
    let newArray: number[] = [];

    for (let j = image[i].length - 1; j >= 0; j--) {
      if (image[i][j] === 0) {
        newArray.push(1);
      } else {
        newArray.push(0);
      }
    }

    result.push(newArray);
  }

  return result;
}
console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
