$(document).ready(function () {

    "use strict";
    function limpa_formulario_cep() {
        // Limpa valores do formulÃ¡rio de cep.
        $("#endereco").val("");
        $('#endereco').prop('readonly', true);
        $("#bairro").val("");
        $('#bairro').prop('readonly', true);
        $("#cidade").val("");
        $('#cidade').prop('readonly', true);
        $("#uf").val("");
        $('#uf').prop('readonly', true);
    }
    
    "use strict";
    // função para preencher o endereço com API de ViaCEP
    $("body").on('blur', '#cep', function () {
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if(cep != ""){
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#endereco").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        if(dados.logradouro){
                            $("#endereco").val(dados.logradouro);
                            $('#endereco').prop('readonly', true);
                        }else{
                            $("#endereco").val("");
                            $('#endereco').prop('readonly', false);
                        }
                        if(dados.bairro){
                            $("#bairro").val(dados.bairro);
                            $('#bairro').prop('readonly', true);
                        }else{
                            $("#bairro").val("");
                            $('#bairro').prop('readonly', false);
                        }
                        if(dados.localidade){
                            $("#cidade").val(dados.localidade);
                            $('#cidade').prop('readonly', true);
                        }else{
                            $("#cidade").val("");
                            $('#cidade').prop('readonly', false);
                        }
                        if(dados.uf){
                            $("#uf").val(dados.uf);
                            $('#uf').prop('readonly', true);
                        }else{
                            $("#uf").val("");
                        }

                        $("#cep").removeClass('is-invalid');
                        $('#valida_cep span').html('*');
                        $('#btn-form-cadastro').prop("disabled", false);
                    } else {
                        //CEP pesquisado não foi encontrado.
                        $("#cep").addClass('is-invalid');
                        $('#valida_cep span').html(' não encontrado!');
                        $('#btn-form-cadastro').prop("disabled", true);

                        limpa_formulario_cep();
                        swal("Atenção", "CEP não encontrado.", "error");
                    }
                });
            }else {
                //cep invalido.
                limpa_formulario_cep();
                swal("Atenção", "Formato de CEP invÃ¡lido.", "error");
            }
        }else{
            //cep sem valor, limpa formulário.
            limpa_formulario_cep();
        }

        console.log("cep: "+ cep);

    });
});