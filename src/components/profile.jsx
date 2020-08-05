import React,{Component} from 'react'
import Bio from './bio'
import Skills from './skills'
import Social from './social'
class Profile extends Component{
    render(){
        return (
            <div className="wrapper">
                <Bio name={this.props.name} title={this.props.title}/>
                <h3 className="text-center">Skills</h3>
                <Skills skills={this.props.skillA}/>
                <Skills skills={this.props.skillB}/>
                <Skills skills={this.props.skillC}/>
                <h3 className="text-center">Social</h3>
                <div className="text-center">
                    <Social url={this.props.urlA} social={this.props.socialA}/>
                    <Social url={this.props.urlB} social={this.props.socialB}/>
                    <Social url={this.props.urlC} social={this.props.socialC}/>
                </div>

            </div>  
        )
    }
}

export default Profile