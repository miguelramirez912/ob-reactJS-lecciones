
// DidUpdate

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
    
    componentDidUpdate(){
        console.log('Comportamento cuando el componente recibe nuevas props o cun cambio en su estado privado');
    }
    
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamento cuando el componente recibe nuevas props o cun cambio en su estado privado');
    })

    return (
        <div>
            <h1>DidUpdateHook</h1>
        </div>
    )
}