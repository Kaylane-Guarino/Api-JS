'use strict'

const mostrarDados = (data) => {
    const resultado = document.getElementById('resultado')

    console.log(mostrarDados)
    
    resultado.innerHTML = `
        <table border="1">
            <tr>
                <th>logradouro</th>
                <th>CEP</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
            </tr>
            <tr>
                <td>${data.logradouro}</td>
                <td>${data.cep}</td>
                <td>${data.bairro}</td>
                <td>${data.localidade}</td>
                <td>${data.uf}</td>
            </tr>
        </table>
    `
}


const getAPI = () => {
    
    const cep = "06665-080"
    const url = `https://viacep.com.br/ws/${cep}/json/`

    
    fetch(url).then(response => response.json())
        .then(data => mostrarDados(data))
    
}

document.getElementById('consumir')
    .addEventListener('click', getAPI)