import React,{Component} from 'react'
import SingupForm from './index'
class App extends Component {
	state = {
		users:[]
	}
	liftingstate = (user)=>{
		user.id = new Date().toString()
		this.setState({
			users:[
				...this.state.users,
				user 
			]
		})
		console.log(user)
		console.log(this.state)
	}
	render(){
		return (
			<div className="app">
				<SingupForm liftingstate={this.liftingstate} />
				<h3 className="text-center">All Registered Users: </h3>
				<ul>
					{this.state.users.map(user=> (<li key={user.id}>{user.name}</li>) )}
				</ul>

			</div>
		)
	}
}

export default App 