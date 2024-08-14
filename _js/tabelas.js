class tabelaClasses {
    #headers;
    #classes;
    #subClasses;
    #livros;

    constructor() {
        this.#headers = ["Classe", "Subclasse", "Livro de Origem"];
        this.#classes = [];
        this.#subClasses = [];
        this.#livros = [];
    }

    getHeaders() { return this.#headers; }
    setHeaders(h) { this.#headers = h; }

    getClasses() { return this.#classes; }
    setClasses(c) { this.#headers = c; }

    getSubClasses() { return this.#subClasses; }
    setSubClasses(sc) { this.#subClasses = sc; }

    getLivros() { return this.#livros; }
    setLivros(l) { this.#livros = l; }
}

class tabelaRacas {
    #headers;
    #racas;
    #subRacas;
    #livros;

    constructor() {
        this.#headers = ["Raça", "Subraça", "Livro de Origem"];
        this.#racas = [];
        this.#subRacas = [];
        this.#livros = [];
    }

    getHeaders() { return this.#headers; }
    setHeaders(h) { this.#headers = h; }

    getRacas() { return this.#racas; }
    setRacas(r) { this.#headers = r; }

    getSubRacas() { return this.#subRacas; }
    setSubRacas(sr) { this.#subRacas = sr; }

    getLivros() { return this.#livros; }
    setLivros(l) { this.#livros = l; }
}

class tabelaBackgrounds {
    #headers;
    #backgrounds;
    #livros;

    constructor() {
        this.#headers = ["Background", "Livro de Origem"];
        this.#backgrounds = [];
        this.#livros = [];
    }

    getHeaders() { return this.#headers; }
    setHeaders(h) { this.#headers = h; }

    getBackgrounds() { return this.#backgrounds; }
    setBackgrounds(b) { this.#backgrounds = b; }

    getLivros() { return this.#livros; }
    setLivros(l) { this.#livros = l; }
}

function atualizarTabelaClasses() {
    let tabelaNova = new tabelaClasses();

    let classesBanco = [];
    tabelaNova.setClasses (
        () => {
            // Receber do banco de dados um vetor com todas as classes aqui. Salvar esse vetor em 'classesBanco[]'.
        }
    );

    let subClassesBanco = []
    tabelaNova.setSubClasses (
        () => {
            for(i = 0; i < tabelaNova.getClasses(); i++) {
                // Receber do banco de dados um vetor com todas as subclasses de cada raça. Salvar cada vetor em'subClassesBanco[]' como uma matriz.
            }
        }
    );

    let tabela = "<table>";
    // Montar a tabela e seus componentes
    tabela += "</table>";
    
    document.getElementById("divTabelaC").innerHTML = tabela;
}

function atualizarTabelaRacas() {

}

function atualizarTabelaBackgrounds() {

}