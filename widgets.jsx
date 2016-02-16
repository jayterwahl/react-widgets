var React = require('react');
var ReactDOM = require('react-dom');
var WeatherClock = require('./weatherClock.jsx');
var Autocomplete = require('./autocomplete.jsx');

var tabData = this;


var Tabs = React.createClass({
  getInitialState: function() {
    return {
      focused: 3
    };
  },

  clicked: function(index){
      this.setState({focused: index});
  },

  render: function() {
    var self = this;

    var mappedTabs = this.props.tabs.map(function(tab,index) {
      var style = '';
      if(self.state.focused === index){
          style = 'focused';
      } else { 
        style = "listthing";
      }

      return <li
        className={style}
        key={tab.id}
        onClick={self.clicked.bind(self, index)}>
          {tab.title}
        </li>;
    });

    var focusedTab = this.props.tabs[this.state.focused];
    var selectedContent = focusedTab.content;

    return (
      <div>
          <span>
          <ul>{mappedTabs}</ul>
            <hr />
            <br />

          <article>{selectedContent}</article>
        </span>


      </div>
    );
  }
});



var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

var myTabs = [
    {id: 1, title: "Here's the WeatherClock!", content: <WeatherClock /> },
    {id: 2, title: "hi again", content: "bye again"},
    {id: 3, title: "and Nick Cage", content: <img src="http://ia.media-imdb.com/images/M/MV5BMTUzMDM4Nzk2MV5BMl5BanBnXkFtZTcwNTcwNjExOQ@@._V1_UY1200_CR96,0,630,1200_AL_.jpg" />},
    {id: 4, title: "Autocomplete", content: <Autocomplete libraries={libraries}/>}
  ];

ReactDOM.render(
    <Tabs tabs={ myTabs } />,
    document.getElementById('menu'));
