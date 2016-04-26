//var    mensagemDB = new Firebase('https://glowing-heat-2770.firebaseio.com/mensagem');
var    usuarioDB = new Firebase('inventdb.firebaseIO.com/usuarios');
//
//function saveToList(event) {
//    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
//        var movieName = document.getElementById('movieName').value.trim();
//        if (movieName.length > 0) {
//            saveToFB(movieName);
//        }
//        document.getElementById('movieName').value = '';
//        return false;
//    }
//};
//

function enviarMensagem(){

    var nome = document.getElementById('nome').value.trim();
     var email = document.getElementById('email').value.trim();
     var fone = document.getElementById('fone').value.trim();
    var assunto = document.getElementById('assunto').value.trim();
    var mensagem = { name: nome,
                    mail: email,
                   tel: fone,
                   msg: assunto};
    console.log(mensagem);
    mensagemDB.push(mensagem);
}


function cadastrarUsuario(){

    var usuario = document.getElementById('usuario').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var user =  { usuario: usuario,
                    senha: senha
                  };
usuarioDB.set(user);
}


//
//function saveToFB(movieName) {
//    // this will save data to Firebase
//    favMovies.push({
//        name: movieName
//    });
//};
//
//function refreshUI(list) {
//    var lis = '';
//    for (var i = 0; i < list.length; i++) {
//        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
//    };
//    document.getElementById('favMovies').innerHTML = lis;
//};
//
//// this will get fired on inital load as well as when ever there is a change in the data
//favMovies.on("value", function(snapshot) {
//    var data = snapshot.val();
//    var list = [];
//    for (var key in data) {
//        if (data.hasOwnProperty(key)) {
//            name = data[key].name ? data[key].name : '';
//            if (name.trim().length > 0) {
//                list.push({
//                    name: name,
//                    key: key
//                })
//            }
//        }
//    }
//    // refresh the UI
//    refreshUI(list);
//});
