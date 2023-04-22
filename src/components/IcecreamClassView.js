import React, { Component } from 'react'
import { connect } from 'react-redux';
import { order, restock } from '../features/icecream/icecreamSlice'

class IcecreamClassView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buy: 1,
            restock: 10
        }
    }
    render() {
        const { numOfIcecream, buyIcecream, restockIcecream } = this.props
        const { buy, restock } = this.state
        return (
            <div>
                No of Icecream is {numOfIcecream}
                <div>
                    <input
                        type='number'
                        min='1'
                        max='5'
                        onChange={(e) => this.setState({ buy: parseInt(e.target.value) })}
                        value={buy}
                    />
                    <button onClick={() => buyIcecream(buy)}>Buy Icecream</button>
                </div>
                <div>
                    <input
                        type='number'
                        min='1'
                        max='10'
                        onChange={(e) => this.setState({ restock: parseInt(e.target.value) })}
                        value={restock}
                    />
                    <button onClick={() => restockIcecream(restock)}>Restock Icecream</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numOfIcecream: state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: (num) => dispatch(order(num)),
        restockIcecream: (num) => dispatch(restock(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamClassView)