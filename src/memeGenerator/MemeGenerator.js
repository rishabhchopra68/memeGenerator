import React from 'react'


class MemeGenerator extends React.Component{
    state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            memeData:[]
        }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").then(response=>response.json())
        .then(response=>{
            const {memes}=response.data;
            console.log(memes[0]);
            this.setState({
                memeData: memes
            })
        })
    }
    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const randIndex= Math.floor(Math.random()*this.state.memeData.length)
        const randImg= this.state.memeData[randIndex].url
        this.setState({
            randomImage:randImg
        })
    }
    render(){
        //console.log(images);
        // const {name}= this.state.memeData[0];
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input placeholder="Top-Text" type="text" name="topText" value={this.state.topText} onChange={this.handleChange}></input>
                    <input placeholder="Bottom-Text" type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}></input>
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="Error :("/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                
            </div>
        )
    }
}

export default MemeGenerator
