import React from 'react';


class Translator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			output: '',
			error: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.translateScss = this.translateScss.bind(this);
	}

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  translateScss(){
  	try{
	  	let css = this.state.input;
	  	let output = ''
		  css.split('\n').forEach((line) => {
		    let newline = line.replace(/ /, '').replace(/;/, '').replace(
		      /-([a-z])/,
		      function(v) {
		        return v.replace(/(-)?/, '').toUpperCase()
		      }).trim().split(':')

		    let fullstring = newline[0] + ": " + newline[1].replace(/(.*)/, '\'$1\',\n')
		    output += fullstring;
		  });
		  this.setState({
		  	output: output
		  });
  	} catch(error){
  		this.setState({
  			error: error.message,
  		});
  	}
  }

	render() {
		return (
      <div>
        Enter <br/>
        <textarea rows="5" onChange={this.handleChange} value={this.state.input}></textarea>
        <br />
        <button 
          type="button"
          onClick={this.translateScss}

        >submit</button><br />
        Exit <br />
        <textarea rows="5" value={this.state.output}></textarea>
        <h2 style={{color: 'red'}}>{this.state.error}</h2>
      </div>
		);
	}
}

export default Translator;