import React, { Component } from 'react'
import './styles.css'

import CalcButton from '../CalcButton/CalcButton'
import CalcDisplay from '../CalcDisplay/CalcDisplay'

const initialState = {
    displayValue : '0',
    clearDisplay : false,
    operation : null,
    values : [0,0],
    current : 0
}

export default class Calculator extends Component {

    constructor() {
        super()
        this.state = { ...initialState }
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState })
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) return

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

    }

    render() {

        return (
            <div className="calculator">
                <CalcDisplay value={ this.state.displayValue } />
                <CalcButton label='AC' click={this.clearMemory} triple/>
                <CalcButton label='/' click={this.setOperation} operation />
                <CalcButton label='7' click={this.addDigit} />
                <CalcButton label='8' click={this.addDigit} />
                <CalcButton label='9' click={this.addDigit} />
                <CalcButton label='*' click={this.setOperation} operation />
                <CalcButton label='4' click={this.addDigit} />
                <CalcButton label='5' click={this.addDigit} />
                <CalcButton label='6' click={this.addDigit} />
                <CalcButton label='-' click={this.setOperation} operation />
                <CalcButton label='1' click={this.addDigit} />
                <CalcButton label='2' click={this.addDigit} />
                <CalcButton label='3' click={this.addDigit} />
                <CalcButton label='+' click={this.setOperation} operation />
                <CalcButton label='0' click={this.addDigit} double />
                <CalcButton label='.' click={this.addDigit} />
                <CalcButton label='=' click={this.setOperation} operation />
            </div>
        )
    }
}
