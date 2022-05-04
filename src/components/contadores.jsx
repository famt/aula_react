import React, { Component } from 'react';
import Contador from './contador';

const Contadores = (props) => {
    return (<div>
        <button onClick={props.onResetar}>Resetar</button><br /><br />
        {props.contadores.map(
            contador => <Contador
            contador={contador} 
            onRemover = {props.onRemover}
            onIncrementar = {props.onIncrementar}
            key={contador.id}>
                </Contador>
        )}
    </div>  );
}
 
export default Contadores;