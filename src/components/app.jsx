import React, { Component } from 'react'

class App extends Component {
	state = {
		count:0
	}
	counterId = null
	increementHandler = ()=>{
		this.setState({count:this.state.count+1})
	}
	decreementHandler = ()=>{
		if(this.state.count>0)this.setState({count:this.state.count-1})
	}
	startHandler = ()=>{
		this.counterId = setInterval(()=>{
			this.setState({count:this.state.count+1})
		},1000)
		
	}
	stopHandler = ()=>{
		if(this.counterId){
			clearInterval(this.counterId) 
			if(this.counterId)this.counterId = null 
		}
	}
	resetHandler = ()=>{
		this.setState({count:0})
		if(this.counterId)clearInterval(this.counterId) 
	}
	render() {
		return (
			<div className="app text-center">
				<div className="mb">
					<button className="btn-a" onClick={this.decreementHandler}>-</button>
					<span>{this.state.count}</span>
					<button className="btn-a" onClick={this.increementHandler}>+</button>
				</div>
				<button className="btn" onClick={this.startHandler}>Start</button>
				<button className="btn" onClick={this.stopHandler}>Stop</button>
				<button className="btn" onClick={this.resetHandler}>Reset</button>
			</div>
		)
	}
}

export default App
