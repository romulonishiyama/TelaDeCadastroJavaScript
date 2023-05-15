async function buscaEndereco() {

    var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
    var consultaCEPConvertida = await consultaCEP.json();
    console.log(consultaCEPConvertida);
};

// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('Esse cep não existe!')
//     }else 
//         console.log(r)})
//         .catch(erro => console.log(erro))
//         .finally(mensagem => console.log('Processamento concluído'));
buscaEndereco();



