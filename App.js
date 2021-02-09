const React = require('react');

class App extends React.Component{

    handleClick(e) {
        alert("handleclick...");
    }

    render(){
      return (
          <div onClick={this.handleClick.bind(this)}>jsx ....</div>
      )
    }
  };

export default App;
