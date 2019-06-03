# viacep
## Uma simples amostra de como consumir uma API utilizando jQuery

Muitas vezes nos deparamos com a necessidade de desenvolver um formulário de cadastro e de capturar as informações de endereço. Podemos deixar os campos de Rua, Bairro, Cidade, Estado livres para edição ou fazer uma validação mínima dos campos para evitar de capturar informações erradas. 

Nesse caso, podemos validar o endereço utilizando uma API que nos forneça o endereço ou parte dele pelo número do CEP. Assim facilitando para os usuários e evitamos erros nos cadastros. Felizmente existem diversas opções para isso, hoje demonstrarei como utilizar a API ViaCEP, que além de ser muito boa é gratuita.

Para esse pequeno exemplo, vamos utilizar o Bootstrap 4 como base. A ideia é quando o usuário preencher o INPUT com ID "cep", o script capture o valor, depois faça uma requisição a API, tendo resultado, preencha os demais campos do formulário.

Exemplo em funcionamento: https://marcos-queiroz.github.io/viacep/
