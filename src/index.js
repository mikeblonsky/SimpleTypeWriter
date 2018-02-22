import React from 'react';
import ReactDOM from 'react-dom';
import TypeWriter from './TypeWriter';
import registerServiceWorker from './registerServiceWorker';

const userProps = {
    elements: ["Pierwszy kod do sukcesu","Zostań Front-end developerem","Naucz się programować","Poznaj nowe technologie"],
    speed: 300,
    cursorType: "lodash",
    color: "blue",
    font: "monospace",
    size: 50
}

ReactDOM.render(<TypeWriter {...userProps} />, document.getElementById('root'));

registerServiceWorker();
