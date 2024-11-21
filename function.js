function minimo(arr) {
  if (arr.length === 0) {
    return null; 
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Ejemplo
console.log(minimo([10, -231, 8, 133, -20])); 
