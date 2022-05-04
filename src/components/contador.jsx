import React, {Component} from 'react'
import "./contador.css"


const Contador = (props) => {
    return (
        <React.Fragment>
            <span className={formataCSS(props)}>{formatarSaidaContador(props)}</span>
            <button onClick={() => {props.onIncrementar(props.contador)}}>  Adicionar</button>
            <button onClick={() => {props.onRemover(props.contador.id)} }>Remover</button>
           <br></br>
        </React.Fragment>
    )
}


const formatarSaidaContador = (props) => {
    let saida = "Zero"
    if (props.contador.valor > 0){
        saida = props.contador.valor + ""
    }
    return saida
}

const formataCSS = (props) => {
    let saida = "alerta"
    if (props.contador.valor > 0){
        saida = "normal"
    }
    return saida        
}


export default Contador;

