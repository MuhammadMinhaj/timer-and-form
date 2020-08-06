import React,{Component} from 'react'

class App extends Component{
    state = {
        count:0
    }
    discreaseHandler(){
            let stoped = setInterval(()=>{
                this.setState({count:this.state.count-1})
                 
                if(this.state.count===0){
                    
                    clearInterval(stoped,0)
                    
                }
                if(this.state.count<=0)alert('Closed!')
                    
            },1000)
            
    }
    render(){
        return (
           <div className="app" style={{textAlign:'center'}}>
               <h1>{this.state.count}</h1>
               <button className="btn" onClick={()=>this.setState({count:this.state.count+1})}>Increase</button>
               <button className='btn' onClick={()=>this.discreaseHandler()}>Discrease</button>
               <button className="btn" onClick={()=>this.setState({count:0})} >Reset</button>

           </div>
        )
    }
     
}

export default App