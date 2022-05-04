import React, { Component } from 'react';
import Contadores from './contadores';
import QuantContadores from './quantContadores';


class App extends Component{

    state = { 
        contadores : [
            {id:1, valor:0}, 
            {id:2, valor:0}, 
            {id:3, valor:0},
            {id:4, valor:0}, 
            {id:5, valor:0}, 
            {id:6, valor:0}  
        ]
     }

     handleRemover = (contadorId) => {
         const _contadores = this.state.contadores.filter(contador => contador.id !== contadorId);
         this.setState({
             contadores : _contadores
         })
     }

     handleResetar = () => {
        const _contadores = [...this.state.contadores]
        _contadores.map(c => c.valor = 0)
        this.setState({contadores:_contadores})
     }

     handleIncrementar = (contador) => {
        const _contadores = [...this.state.contadores]
        const indice = _contadores.indexOf(contador)
        _contadores[indice] = {...contador}
        _contadores[indice].valor++
        this.setState({contadores:_contadores})
     }


    render() {
        return (
            <React.Fragment>
                <QuantContadores quantContadores={this.state.contadores}/>
                <br />
                <Contadores 
                  contadores={this.state.contadores}
                  onRemover={this.handleRemover}
                  onResetar={this.handleResetar}
                  onIncrementar={this.handleIncrementar}
                />
            </React.Fragment>
        )
    }
}

export default App;