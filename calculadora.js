var botaoSomar= document.getElementById('soma')

function result(){
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var resultado = document.getElementById('result')

    if (n1== '' || n2== ''){
        alert('Digite todos os campos!')
    } else{
        let soma = parseFloat(n1) + parseFloat(n2)
        resultado.textContent= soma
    }
}


botaoSomar.addEventListener('click', result)