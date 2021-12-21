import React, { Component } from 'react'

 class Comp extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>position</label>
                    <select type="text" >
                        <option default value>select</option>
                        <option>L1 post</option>
                        <option>l2 post</option>
                    </select>
                </form>
            </div>
        )
    }
}
export default Comp;