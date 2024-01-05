function Tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0){
        window.alert(`[ERRO] Confira os dados!`)
    } else {
        var n = Number(num.value)
        var e = Number(end.value)
        var contador = 0
        var resultado = ''
        var saida = window.document.getElementById('resposta')
        saida.innerHTML = `A tabuada do ${n} é: <br>`
        do{
            resultado = n*contador
            saida.innerHTML += `${contador} X ${n} = ${resultado} <br>`
            contador++
        } while(contador <= e)
    }
}