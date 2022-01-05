$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=black+widow",
    type:"GET",
    success:function(dados){
        $(".titulo1").text(dados.Title)
        $(".img1").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=black+panther",
    type:"GET",
    success:function(dados){
        $(".titulo2").text(dados.Title)
        $(".img2").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Wonder+Woman+1984",
    type:"GET",
    success:function(dados){
        $(".titulo3").text(dados.Title)
        $(".img3").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Thor+Ragnarok",
    type:"GET",
    success:function(dados){
        $(".titulo4").text(dados.Title)
        $(".img4").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Spider+Man+No+Way+Home",
    type:"GET",
    success:function(dados){
        $(".titulo5").text(dados.Title)
        $(".img5").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Eternals",
    type:"GET",
    success:function(dados){
        $(".titulo6").text(dados.Title)
        $(".img6").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Justice+League",
    type:"GET",
    success:function(dados){
        $(".titulo7").text(dados.Title)
        $(".img7").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Venom",
    type:"GET",
    success:function(dados){
        $(".titulo8").text(dados.Title)
        $(".img8").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=+Shang+Chi",
    type:"GET",
    success:function(dados){
        $(".titulo9").text(dados.Title)
        $(".img9").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Joker",
    type:"GET",
    success:function(dados){
        $(".titulo10").text(dados.Title)
        $(".img10").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=Avengers+EndGame",
    type:"GET",
    success:function(dados){
        $(".titulo11").text(dados.Title)
        $(".img11").attr("src", dados.Poster)
    }
})
$.ajax({
    url:"http://www.omdbapi.com/?apikey=dd6f049d&t=+SUICIDE+SQUAD",
    type:"GET",
    success:function(dados){
        $(".titulo12").text(dados.Title)
        $(".img12").attr("src", dados.Poster)
    }
})