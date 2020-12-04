import React from "react";

class Profile extends React.Component{
    render(){
        return (
            // display: block;
//   margin-left: auto;
//   margin-right: auto;
            <html>
            <img style={{display: "block", marginLeft: "auto", marginRight: "auto", top: 0, bottom:0, borderRadius: 10000, width: '20%', height: '20%' }} src="https://avatars0.githubusercontent.com/u/48477105?s=460&u=395a5e8d8ee34d6f616549bc1f2ea08058355aa8&v=4"/>
            <h2 style={{textAlign: "center"}}>
                Teyyihan Refet Serdar AKSU
            </h2>
            <h4 style={{textAlign: "center"}}>
                Android and Backend Developer
            </h4>
            </html>
       );
    }   
}

export default Profile;
