import React from 'react';
import ReactDOM from 'react-dom';
import LanguageSwitch from './components/LanguageSwitch/index';

console.log('hello world')


function App(){
    return (<div><LanguageSwitch/>hello world</div>);
}
ReactDOM.render(<App/>, document.querySelector('#root'))
