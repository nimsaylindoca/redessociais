import { getCSS } from "./common.js"

async function quantidadedeUsuarios(){
    const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados) 
    const quantidadedeUsuarios = Object.values(dados)
    
    const data =[
    {
    x: nomeDasRedes,
    y: quantidadedeUsuarios,
    type: 'bar',
    marker: {
        color: getCSS('--cor-primaria')
    }
    
    }
    
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title:{
            text:'Redes sociais mais populares do mundo',
            font: {
                color: getCSS('--cor-do-texto'),
                family: getCSS('--font'),
                size:25
            }
        },
        xaxis:{
            title:{
                text:'Nome da rtede social'
            }
        },
        yaxis:{

        }
    }
    const grafico =document.createElement ('div')
    grafico.className = 'grafico' 
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,data,layout)
    }
    
    quantidadedeUsuarios()