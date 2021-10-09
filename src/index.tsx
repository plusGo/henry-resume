console.log('hello world')
import React from 'react';
import ReactDOM from 'react-dom';
import LanguageSwitch from 'components/LanguageSwitch'
function App(){
    return (<div><LanguageSwitch/>hello world</div>);
}
ReactDOM.render(<App/>, document.querySelector('#root'))
