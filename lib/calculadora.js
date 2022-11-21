export function calcular(a, b, c) {   
    let n1 =  a
    let n2 =  b 
    let n3 =  c
    
    let somar = a + b 
    let subtrair= a - b
    let multiplicar= a * b
    let dividir= a / b

  if (c== '+') {
    return somar
  }
  if (c== '-') {
    return subtrair
  }
  if (c== '*') {
    return multiplicar
  }
  if (c== '/') {
    return dividir
  }
}
  

