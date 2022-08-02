
num1 = 5

num2 = 3

if num1 > 0:
    if num2 >0:
        print(f"{num1} y {num2} son mayores que 0")
    elif num2<0:
        print(f"{num1} es mayor que 0 y {num2} es menor que 0")
    else:
        print(f"{num1} es mayor que 0 y {num2} es 0")

elif num1 < 0:
    if num2 >0:
          print(f"{num1} es menor a 0 {num2} es mayor a 0")
    elif num2 < 0:
          print(f"{num1} y {num2} son menores que 0")
    else:
          print(f"{num1} es menor que 0 {num2} es 0")

else:
    if num2 >0:
        print(f"{num1} es 0 y {num2} es mayor a 0 ")
    elif num2 < 0:
        print(f"{num1} es 0 {num2} es menor que 0")
    else:
        print(f"{num1} y {num2} son iguales a 0")


