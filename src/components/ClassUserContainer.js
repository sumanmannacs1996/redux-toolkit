import React, { Component } from 'react'
import { fetchUser } from '../features/user/userSlice'
import { connect } from 'react-redux'

class ClassUserContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: 1,
        }
    }
    handlefetch = () => {
        this.props.fetchUser(this.state.user_id)
    }
    render() {
        const { user_id } = this.state
        const { userData } = this.props
        return (
            <div>
                <input type='number' min="1" max="100" value={user_id} onChange={(e) => this.setState({ user_id: e.target.value })} />
                <button onClick={this.handlefetch}>Fetch Data</button>
                <div>
                    {
                        userData.loading ? (<h2>Loading.....</h2>) : userData.error ? (<h2>{userData.error}</h2>) : (<h2>{userData.name}</h2>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUserContainer)