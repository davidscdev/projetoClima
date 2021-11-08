document.querySelector('.busca').addEventListener('submit', async(evento) => {
    evento.preventDefault();
    let cidade = document.getElementById('searchInput').value;

    if (cidade !== '') {
        showMsg('Carregando dados....')
        console.log(cidade);

        let requisicao = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&APPID=0e9cecdb81e7b1a3637f3173424f5501&units=metric&lang=pt_br`;

        // let requisicao = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e9cecdb81e7b1a3637f3173424f5501`;

        await axios.get(requisicao).then(
                (resposta) => {

                    console.log(resposta);
                }

            )
            .catch((error) => {
                showMsg('Não foi possível localizar os dados.')
            });

    }


})


function showMsg(msg) {
    document.querySelector('.aviso').innerHTML = msg;

}