async function buscaEndereco() {
    try {
        var consultaCEP = await fetch('https://viacep.com.br/ws/72300531/json/');
        var consultaCEPConvertida = await consultaCEP.json();
        if(!consultaCEPConvertida){
            throw Error("CEP não existente!")
        }
        console.log(consultaCEPConvertida);

    } catch (erro) {
        console.log(erro);
    }

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



