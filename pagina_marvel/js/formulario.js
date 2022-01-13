const formulario = document.querySelector('#formulario');
const inputTexto = document.querySelector('#inputTexto');

const formularioReal = (data) => {
    // console.log(data)
    formulario.addEventListener('keyup', async(e) => {
        e.preventDefault()

        const textoCliente = inputTexto.value.toLowerCase()
        // console.log(textoCliente)

        const formularioFiltrado = data.filter(item => {
            const textoApi = item.name.toLowerCase()
            if (textoApi.indexOf(textoCliente) !== -1) {
                return item
            }
        })
        banderillas(formularioFiltrado)
    
    })
}