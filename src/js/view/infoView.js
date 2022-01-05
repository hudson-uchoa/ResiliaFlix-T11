class infoView {
    mostraFilme(filme) {
  
      const poster = filme.getImagem();
      $("#img-capa").attr("src", poster);
  
      const titulo = filme.getTitulo();
      $("#titulo-filme").text(titulo);
  
      const ano = filme.getAno();
      $("#ano-filme").text(ano);
  
      const atores = filme.getAtores();
      $("#atores-filme").text(atores);
  
      const diretor = filme.getDiretor();
      $("#diretor-filme").text(diretor);
  
      const genero = filme.getGenero();
      $("#genero-filme").text(genero);
  
      const plot = filme.getSinopse();
      $("#sinopse-filme").text(plot);
  
      const rating = filme.getAvalicao();
      $("#avaliacao-filme").text(rating);
  
      const idioma = filme.getIdioma();
      $("#idioma-filme").text(idioma);
  
      const pais = filme.getPais();
      $("#pais-filme").text(pais);
  
      const premios = filme.getPremio();
      $("#premio-filme").text(premios);
  
      const duracao = filme.getDuracao();
      $("#duracao-filme").text(duracao);
      }
    }