$('#botao_certificado').click(function () {


    var dropdown = document.getElementById("select-edicao");
    var valor_dropdown = dropdown.options[dropdown.selectedIndex].value;
    var cpf = document.getElementById("cpf").value;

    if (valor_dropdown == "1") {

        var link = "certificados/{0}.pdf";
        var link_final = link.replace("{0}", cpf);
    }

    if (valor_dropdown == "2") {

        var link = "certificados/minicurso/{0}.pdf";
        var link_final = link.replace("{0}", cpf);
    }

    //verificaUrl(link_final);
    DownloadComChecagem(link_final)



});

function Download(link) {

    window.open(link, 'Download');
}

function DownloadComChecagem(link_final) {

  $.ajax({
      url:link_final,
      type:'HEAD',
      success: function() {
          Download(link_final);
      },
      error: function() {
          //arquivo não existe
          alert("Certificado não encontrado. Verifique se inseriu os dados corretamente.");
      },
  });
}
