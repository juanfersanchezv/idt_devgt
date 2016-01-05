edad= 17

if edad  == 18
  console.log 'podes entrar'
else if edad > 18
  console.log 'Eres mayor de 18'
else
  console.log "Menor de edad"


age = 10
mayorEdad = (if age >= 18 then true else false)
console.log mayorEdad

if mayorEdad
  console.log 'Eres mayor de edad'
else
  console.log 'Eres menor'


# if not (condicion) es lo mismo que unless
# es lo mismo que 'if not'

edad2 = 10
requisito = 18
unless edad2 < 18
  console.log 'Eres mayor de edad'
  if edad2 == requisito
        console.log 'Eres mayor'
else
  console.log 'Eres menor de edad'

#switch
