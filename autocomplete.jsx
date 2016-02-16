var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({

  getInitialState: function() {
    return { textString: '' };
  },
  componentDidMount: function() {
    console.log("mounted");

  },
  handleClick: function(index) {
    this.setState( {textString: this.props.libraries[index].name} );
    console.log(this.props.libraries[index].name);
  },
  handleChange: function(e) {
    this.setState( {textString: e.target.value} );
    console.log("You want to type '" + e.target.value + "'? Fine. :(");
  },


  render: function() {
    var libraries = this.props.libraries,
        self = this,
        textString = this.state.textString.trim().toLowerCase();

    if(textString.length > 0) {
      libraries = libraries.filter(function(library) {
        return library.name.toLowerCase().match(textString);
      });
    }

    var mappedLibraries = libraries.map(function(library, index) {
      return (
        <li className="glow"
            key={index}
            onClick={self.handleClick.bind(self, index)}>
              {library.name} - <a href={library.url}>{library.url}</a>
        </li>);
      });


    return (
      <div>
        <input type="text"
               value={this.state.textString}
               onChange={this.handleChange}
               placeholder="lol lol" />

             <ul> <ReactCSSTransitionGroup
                transitionName= "fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
               {mappedLibraries}
             </ReactCSSTransitionGroup></ul>
      </div>
    );
  }

});

module.exports = Autocomplete;
