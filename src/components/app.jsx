import React,{Component} from 'react'
import Profile from './profile'
class App extends Component{
    
    render(){
        return (
            <div className="app">
                <h1 class="text-center">Profile</h1>
                <Profile name="Muhammad Minhaj" title="Full Stack JS Developer And Student" skillA="Javascript" skillB="NodeJS" skillC="Bootstrap" urlA="https://facebook.com" urlB="https://youtube.com" urlC="https://github.com" socialA="Facebook" socialB="Youtube" socialC="Github"/>

                <Profile name="Muhammad Minar Islam" title="Full Stack JS Developer And Student" skillA="Javascript" skillB="NodeJS" skillC="Bootstrap" urlA="https://facebook.com" urlB="https://youtube.com" urlC="https://github.com" socialA="Facebook" socialB="Youtube" socialC="Github"/>

                <Profile name="Muhammad Mokhtar" title="Full Stack JS Developer And Student" skillA="Javascript" skillB="NodeJS" skillC="Bootstrap" urlA="https://facebook.com" urlB="https://youtube.com" urlC="https://github.com" socialA="Facebook" socialB="Youtube" socialC="Github"/>
            </div>
        )
    }
     
}

export default App