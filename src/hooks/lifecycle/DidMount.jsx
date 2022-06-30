// DidMount

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
    
    componentDidMount(){
        console.log('Comportamento despues de ser montado pero antes de ser añadido al DOM')
    }
    
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamento despues de ser montado pero antes de ser añadido al DOM')
    }, [])

    return (
        <div>
            <h1>DidMountHook</h1>
        </div>
    )
}