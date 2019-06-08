
var book = firebase.database();

function newEntry(entrada){
    $("#tabla").append(`
        <tr>
            <th>`+entrada.title+`</th>
            <th>`+entrada.category+`</th>
            <th>`+entrada.author+`</th>
            <th>`+entrada.isbn+`</th>
        </tr>
    `)
}
book.ref('BOOKS').once('value').then(function (snapshot) {
    if(snapshot.exists()){
        snapshot.forEach(function (data) {
            var entrada = data.val();
            newEntry(entrada);
        })
    }
})