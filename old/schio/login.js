var    usuarioDB = new Firebase('inventdb.firebaseIO.com/usuarios');


function Login(){


     var usuario = document.getElementById('usuario').value.trim();
    var senha = document.getElementById('senha').value;
    var user = usuario: { usuario: usuario,
                    senha: senha
                  };

    console.log(user);

    // Attach an asynchronous callback to read the data at our posts reference
usuarioDB.on("value", function(usuarios) {
  console.log(usuarios.val());

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


}
