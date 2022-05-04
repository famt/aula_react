import React, { Component } from 'react';

//Stateless Functional Component

const QuantContadores = (props) => {
    return (
        <div>
            <span>Quantidade Contadores: {props.quantContadores.length}</span>
        </div>
    )
}


export default QuantContadores


//                  App
// QuantContadores  <-> Contadores
//                      Contador