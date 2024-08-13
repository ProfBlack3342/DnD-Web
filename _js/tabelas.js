const livros = [];

function preencherTabelaClasses() {
    const headerClasses = [];
    const classes = listarClasses();
    const subclasses = [];
    for(i = 0; i < classes.length; i++) {
        subclasses[i] = listarSubclasses(classes[i]);
    }
}

function preencherTabelaRacas() {
    const racas = [];
}

function preencherTabelaBackgrounds() {
    const backgrounds = [];
}

//Funções que acessam o banco de dados, ainda n implementadas
function listarClasses() {

}
function listarSubclasses(classe) {

}