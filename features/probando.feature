Feature: Login Usuario
  Como usuario ingreso mi carnet y password
  Si mi contraseña es correcta obtengo un exito

  Scenario: Login de usuario julio
    Given yo soy "asdf"
    Given mi contraseña es "asdf"
    When valido en la BD
    Then esta correcto