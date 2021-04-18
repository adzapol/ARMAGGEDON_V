import React from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/index.css';

import App from './App';

ReactDOM.render(
	<>
    <section className="section_outer">
      <section className="main section_inner">
        <App />
      </section>
    </section>
	</>,
document.getElementById('root'));