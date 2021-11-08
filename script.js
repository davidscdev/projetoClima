document.querySelector('.busca').addEventListener('submit', async(evento) => {
    evento.preventDefault();
    let cidade = document.getElementById('searchInput').value;

    if (cidade !== '') {
        showMsg('Carregando dados....')
        console.log(cidade);

        let requisicao = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&APPID=0e9cecdb81e7b1a3637f3173424f5501&units=metric&lang=pt_br`;

        await axios.get(requisicao).then(
                (resposta) => {
                    console.log(resposta);
                    showInfo({
                        nome: resposta.data.name,
                        temperatura: resposta.data.main.temp,
                        ventoVel: resposta.data.wind.speed,
                        ventoDir: resposta.data.wind.deg,
                        icone: resposta.data.weather[0].icon,
                        descricao: resposta.data.weather[0].description
                    });

                }

            )
            .catch((error) => {
                showMsg('Não foi possível localizar os dados.')
            });

    }


})


function showMsg(msg) {
    document.querySelector(".resultado").style.display = "none";
    document.querySelector('.aviso').innerHTML = msg;
    document.querySelector('.aviso').style.display = "flex";
}

function showInfo(dados) {
    document.querySelector(".resultado").style.display = "flex";
    document.querySelector('.aviso').style.display = "none";
    document.querySelector('.titulo').innerHTML = `${dados.nome}`;
    document.querySelector('.tempInfo').innerHTML = `${dados.temperatura}  <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${dados.ventoVel} <span>km/h</span>`;
    document.querySelector(".ventoPonto").style.transform = `rotate(${dados.ventoDir}deg)`;

    document.querySelector('.icone').setAttribute('src', `http://openweathermap.org/img/wn/${dados.icone}@2x.png`);

    console.log(document.querySelector('.icone').getAttribute('src'));
    console.log(dados);
}