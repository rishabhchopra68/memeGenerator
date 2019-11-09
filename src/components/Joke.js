import React from 'react'

const punchStyle={
    color: "green"
}
function Joke(props){
        return (
            <div>
                <p style={{display: props.question? 'block':'none'}}>Question: {props.question}</p>
                <p style={punchStyle}>Answer: {props.punchline}</p>
            </div>
        )
}

export default Joke