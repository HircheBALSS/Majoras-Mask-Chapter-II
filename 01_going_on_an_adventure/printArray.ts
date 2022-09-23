export default function printArray(array: string[]) {
  console.log('List of destination:');
  for (let j = 0; j < array.length; j += 1) {
    console.log(`${j + 1} - ${array[j]}`);
  }
}
