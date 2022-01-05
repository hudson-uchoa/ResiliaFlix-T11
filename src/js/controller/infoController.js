class infoController {
    buscaRequisicao(filme){
        const model = new infoModel(filme)
        model.pesquisa()

        const view = new infoView()
        view.mostraFilme(model)
    }
}