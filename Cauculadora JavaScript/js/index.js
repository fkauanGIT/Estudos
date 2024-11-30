const result = document.getElementById('result');

// Manipulando as teclas
document.addEventListener('click', function (ev) {
    const target = ev.target; // aq eu estou pegando o botão que foi clicado

    //preciso verificar se o meu botão tem a classe charkey
    if(target.classList.contains('charKey')){
        const value = target.dataset.value; //pega o valor
        result.value += value; // adiciona o valor no resultado
    };
});

//limpar 
document.getElementById('clear').addEventListener('click', function(){
    result.value = '';
});

// Remover último elemento
document.getElementById('set').addEventListener('click', function(){
    result.value = result.value.slice(0, -1); // remove o meu último elemento
});

//Caucular
document.getElementById('equal').addEventListener('click', function () {
    if (result.value) {
        result.value = eval(result.value);
    }else{
        result.value = 'ERRO, informe a sua conta !'
    }
});

//ThemeDarkLight
document.getElementById('themeSwitcher').addEventListener('click', function(){
    const buttons = document.querySelectorAll('.charKey')
    buttons.forEach(buttons => {
        buttons.classList.toggle('dark')
    })
});