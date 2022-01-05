class infoModel {
    constructor(mostratitulo){
        this.filme = mostratitulo
        this.titulo = "Title"
        this.ano = "Year"
        this.atores = "Actor"
        this.diretor = "Director"
        this.sinopse = "Plot"
        this.genero = "Genre"
        this.premio = "Awards"
        this.imagem = "Poster"
        this.avaliaçao = "Ratings"
        this.idioma = "Language"
        this.pais = "Country"
        this.duracao = "Runtime"
        this.resposta = ""
    }
    pesquisa(){
        const chave = "dd6f049d"
        const request = new XMLHttpRequest()
        request.open("GET", `http://www.omdbapi.com/?apikey=${chave}&t=${this.filme}&plot=full`,false)
        request.onload =()=> {
            if(request.status == 200){
                const resposta = JSON.parse(request.responseText)
                this._upFilme(resposta)
            }else{
                throw new Error("Título Indisponível")
            }
        }
        request.send()
    }
    _upFilme(dados){
        this.titulo = dados.Title
        this.ano = dados.Year
        this.atores = dados.Actor
        this.diretor = dados.Director
        this.sinopse = dados.Plot
        this.genero = dados.Genre
        this.premio = dados.Awards
        this.imagem = dados.Poster
        this.avaliaçao = dados.Ratings
        this.idioma = dados.Language
        this.pais = dados.Country
        this.duracao = dados.Runtime
        this.resposta = dados.Response
    }
    getTitulo(){
        return this.titulo
    }
    getAno(){
        return this.ano
    }
    getAtores(){
        return this.atores
    }
    getDiretor(){
        return this.diretor
    }
    getSinopse(){
        return this.sinopse
    }
    getGenero(){
        return this.genero
    }
    getPremio(){
        return this.premio
    }
    getImagem(){
        return this.imagem
    }
    getAvalicao(){
        return this.avaliacao
    }
    getIdioma(){
        return this.idioma
    }
    getPais(){
        return this.pais
    }
    getDuracao(){
        return this.duracao
    }
    getResposta(){
        return this.resposta
    }
}

