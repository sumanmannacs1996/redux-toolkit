import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ordere, restock } from '../features/cake/cakeSlice'

class CakeClassView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buy: 1,
            restock: 10
        }
    }
    render() {
        const { numOfCakes, buyCake, restockCake } = this.props
        const { buy, restock } = this.state
        return (
            <div>
                No of cakes is {numOfCakes}
                <div>
                    <input
                        type='number'
                        min='1'
                        max='5'
                        onChange={(e) => this.setState({ buy: parseInt(e.target.value) })}
                        value={buy}
                    />
                    <button onClick={() => buyCake(buy)}>Buy Cake</button>
                </div>
                <div>
                    <input
                        type='number'
                        min='1'
                        max='10'
                        onChange={(e) => this.setState({ restock: parseInt(e.target.value) })}
                        value={restock}
                    />
                    <button onClick={() => restockCake(restock)}>Restock Cake</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (num) => dispatch(ordere(num)),
        restockCake: (num) => dispatch(restock(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeClassView)