var React = require('react');

var sarahComponent = React.createClass({
    getInitialState: function() {
      return {
        greeting: ""
      };
    },
  
    greet: function() {
      this.setState({ greeting: "Hello, " + this.props.name + "!" });
    },
  
    render: function() {
        return (
	       	<div>
	          <button onClick={this.greet}>Greet</button>
	          <br />
	          <span>{this.state.greeting}</span>
	        </div>
    	);
    }
});

module.exports=sarahComponent;