var oracledb = require('oracledb');
module.exports = function () {
  this.Given('yo soy "$nombre"', function (nombre,callback) {

    username = nombre;
    callback();

    // The callback is passed to visit() so that when the job's finished, the next step can
    // be executed by Cucumber.
  });

  this.Given('mi contraseña es "$pass"', function (pass,callback) {
    // Express the regexp above with the code you wish you had. Call callback() at the end
    // of the step, or callback.pending() if the step is not yet implemented:
    password = pass;
    callback();
  });

  this.When('valido en la BD',function (callback){
    oracledb.getConnection(
    {
      user          : "PROYECTO",
      password      : "123456",
      connectString : "192.168.1.5/XE"
    },
    function(err, connection){
      if (err) { console.error(err.message);return; }
      connection.execute(
        "SELECT PASSWORD FROM USUARIO WHERE USERNAME =:username",[username],function(err,data){
          if(err){
            throw err;
          }else if(data.rows.length>0){
            if(data.rows[0][0]==password){
              resultado = 'correcto';
              callback();
            }
          }
        }
      );
    });
  });
  this.Then('esta correcto', function (callback) {
    console.log(resultado);
    callback();
  });
};
var username;
var password;
var resultado;
