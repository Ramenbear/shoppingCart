import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shopping from './src/Shopping';

function App() {
    return(
        <div style={{ margin: 100 }}>
            <Shopping/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));



