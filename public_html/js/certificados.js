$('#botao_certificado').click(function () {

    var cpf = document.getElementById("cpf").value;
    var link = "certificados/{0}.pdf";
    var link_final = link.replace("{0}", cpf);

    //verificaUrl(link_final);
    Download(link_final)
});

function Download(link) {

    window.open(link, 'Download');
}

function DownloadComChecagem(link) {

  $.ajax({
      url:link_final,
      type:'HEAD',
      success: function() {
          Download(link_final);
      },
      error: function() {
          //arquivo não existe
          alert("sdsd");
      },
  });
}
