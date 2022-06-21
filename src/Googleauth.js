/*856212945630-n9k6a9gln6e1k0idnv22tq2tqnosd1qr.apps.googleusercontent.com*/

import React from 'react'
import { signInAction } from './actions'

import { connect } from 'react-redux'
import"./component/css/style.css"
import jwt_decode from "jwt-decode";
import { useEffect } from 'react'


const Googleauth=(props)=>{

    console.log(props.state)

    useEffect(()=>{
       window.google.accounts.id.initialize({
             client_id:"181378638313-et4kr94v5p8fqmg4laa7faqgau82rdi8.apps.googleusercontent.com",
             callback:handleCallBackResponse
            })

         window.google.accounts.id.renderButton(
             
             document.getElementById("In"),
             {theme:"outline",size:"large"}
         );
    },[]);

    function handleCallBackResponse(response){
        var userObject=jwt_decode(response.credential)
        console.log(userObject)
       props.signInAction(userObject)
      
}
return(
    <div className='App'>
    {props.state.Authstate.userdata?"":<div id="In"></div>}  
    </div>
)
}

const mapStateToProps=(state)=>{
    return{state:state}
    }
    export default connect(mapStateToProps,{signInAction}) (Googleauth)









/*



class Googleauth extends React.Component{

    componentDidMount(){

        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'282882491793-omqf69s41flq0boddvg3mmn4et57klk1.apps.googleusercontent.com',
                scope:'email',
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance()
                this.authInstanceRender(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authInstanceRender)
            })
        })

    }

     authInstanceRender=(isSignedIN)=>{
        
       if(isSignedIN){
            this.props.signInAction(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
       }
       else{
           this.props.signInOut();
       }
    }

    renderbtn=()=>{
       if(this.props.loginStatus.Authstate.sign){
           return(
               <div>
                   <div className="login_btn">
                      <button className='login' onClick={this.signoutclick}>logout</button> 
                   </div>
               </div>
           )
       }
       else{
        return(
            <div>
                <div className="login_out">
                <button className='logout' onClick={this. signinclick}>login</button> 
                </div>
            </div>
        )
       }
    }

    signinclick=()=>{
        this.auth.signIn()
    }
    signoutclick=()=>{
        this.auth.signOut()
    }

    render(){
    
        return(
            <div>
               {this.renderbtn()}
            </div>
        )
    }
}






*/