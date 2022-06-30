// WillUnmount

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
    
    componentWillUnmount(){
        console.log('Comportamento antes de que el componente desaparesca');
    }
    
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamento antes de que el componente desaparesca');
        }
    }, [])

    return (
        <div>
            <h1>WillUnmountHook</h1>
        </div>
    )
}