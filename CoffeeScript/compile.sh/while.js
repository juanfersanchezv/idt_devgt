(function() {
  var age, edad, edad2, mayorEdad, requisito;

  edad = 17;

  if (edad === 18) {
    console.log('podes entrar');
  } else if (edad > 18) {
    console.log('Eres mayor de 18');
  } else {
    console.log("Menor de edad");
  }

  age = 10;

  mayorEdad = (age >= 18 ? true : false);

  console.log(mayorEdad);

  if (mayorEdad) {
    console.log('Eres mayor de edad');
  } else {
    console.log('Eres menor');
  }

  edad2 = 10;

  requisito = 18;

  if (!(edad2 < 18)) {
    console.log('Eres mayor de edad');
    if (edad2 === requisito) {
      console.log('Eres mayor');
    }
  } else {
    console.log('Eres menor de edad');
  }

}).call(this);
