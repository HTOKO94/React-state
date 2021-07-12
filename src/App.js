import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    console.log("constructor()");
    super();
   this.state = {
   fullName: "Hamza Toukebri",
   bio:"Full Stack JS Developer",
   imgSrc:"Hamza.jpg",
   profession:"Web Developer",
   show:true,
   interval:null,
   count:0
 };
}

componentDidMount(){ 
 console.log("componentDidMount()")
  this.setState({
    interval: setInterval(()=>{
    this.setState({count: this.state.count+1});

    },1000),
  });
}

componentDidUpdate(){
  console.log("componentDidUpdate()")
}

componentWillUnmount() {
    console.log("componentWillUnmount()");

    clearInterval(this.state.interval);
  }

  render(){
    console.log("render()");
  return (
    <>
    <div className="profile">
       {this.state.show ?
          (<><img src={this.state.imgSrc} alt="Myphoto"></img>
          <h2>{this.state.fullName}</h2>
          <p>{this.state.bio}</p>
          <p className="prof">{this.state.profession}</p>
          <div className ="logos">
              <a href="https://github.com/HTOKO94?tab=repositories" target="blanc">
                  <img  src="github.png" alt="github"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/hamza-toukabri-63b2a417a/" target="blanc">
                  <img  src="linkedin.png" alt="linkedin"></img>
                  </a>
                  <a href="https://www.facebook.com/hamza.touko/" target="blanc"><img  src="facebook.png" alt="facebook"></img></a>
                  </div>
                  <h3>{this.state.count}</h3>
                  </>) : (<h2>Click button to show profile</h2>)
  } 
        </div>
        <button onClick={this.visibility}>{this.state.show ? "Hide profile" : "Show profile" }</button> 
        </>
  );
  }
}

export default App;
