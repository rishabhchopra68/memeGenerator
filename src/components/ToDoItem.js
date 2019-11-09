import React from 'react'
import { PassThrough } from 'stream'

const completedStyle = {
    textDecoration: "line-through",
    fontStyle: "italic",
    fontColor: "gray"
}

class ToDoItem extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (

            <div className="todo-item">

                <input type="checkbox"
                    checked={this.props.Item.completed}
                    onChange={() => this.props.HandleChange(this.props.Item.id)}>
                </input>

                <p style={this.props.Item.completed ? completedStyle : null}>{this.props.Item.text}</p>

            </div>
        )
    }
}

export default ToDoItem