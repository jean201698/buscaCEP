const button = document.querySelector('button')
const input = document.querySelector('input')
const p = document.querySelector('p')



button.addEventListener('click', cep)

async function cep(){
    const url = `https://viacep.com.br/ws/${input.value.replace('-', '')}/json/`
    const promi = await fetch(url)
    const data = await promi.json()
     showCep(data)
}

function showCep(value){ 

    for(let valor in value)
    {
        if(valor === 'cep' || valor === 'bairro' || valor === 'logradouro' || valor === 'localidade' || valor === 'uf'){
          p.innerHTML = `
         <li>${value.cep}</>
         <li>${value.bairro}</>
         <li>${value.logradouro}</>
         <li>${value.localidade}</>
         <li>${value.uf}</> 
          `
        }
    }
}
