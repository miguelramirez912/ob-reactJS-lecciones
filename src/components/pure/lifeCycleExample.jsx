//Ejemplo de componente tipo clase con metodos de ciclo de vida

import React, { Component } from "react";
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('Se laza el Constructor del componente');
    }

    componentWillUnmount() {
        console.log('componentWillMount: Antes de que el componente se monte');
    }

    componentDidMount() {
        console.log('componentDidMount: Despues de que el componente se ha montado pero antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouleComponentUpdate: Si el componente debe o no actualizarse')
        // return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Justo antes de eliminar este componente')
    }

    render() {
        return (
            <div></div>
        )
    }

}