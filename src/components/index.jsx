import React,{ Component } from 'react'
import Forms from './forms'

const initValues = {
    name:'',
    email:'',
    phone:'',
    university:'',
    country:''
}

class SingupForm extends Component{
    state = {
        values:initValues,
        errors:{},
    }
    changeHandler = event => {
        this.setState({
            values:{
                ...this.state.values,
                [event.target.name]:event.target.value
            }
            
        })
    }
    submitHandler = event =>{
        event.preventDefault()

        let { errors,isValid } = this.validate()
        
        if(isValid){
            this.setState({values:{}})
            event.target.reset()
            this.setState({values:initValues})
            this.props.liftingstate(this.state.values)
           
            
        }else{
            this.setState({errors})
        }
    }

    validate = ()=>{
        let { name,email,phone,university,country } = this.state.values 
        
        let errors = {}

        let msg = 'Please provied your'
        
        if(!name){
            errors.name = `${msg} name`
        }
        if(!email){
            errors.email = `${msg} email`
        }
        if(!phone){
            errors.phone = `${msg} phone`
        }
        if(!university){
            errors.university = `${msg} university name`
        }
        if(!country){
            errors.country = `${msg} country name`
        }
        return {
            errors,
            isValid:Object.keys(errors).length===0?true:false  
        }
    }
    render(){
        return (
            <div className="form-container">
                <h2 className="text-center">Singup Forms</h2>
                <Forms
                    values={this.state.values}
                    changeHandler = {this.changeHandler}
                    submitHandler = {this.submitHandler}
                    errors = {this.state.errors}
                />
            </div>
        )
    }
}

export default SingupForm