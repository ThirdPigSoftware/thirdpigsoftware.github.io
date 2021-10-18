import React from 'react';
import CloudsAnim from './clouds.svg';

function Clouds({ flip }) {
    return <div className="clouds" style={flip ? { transform: 'rotate(180deg)', marginTop: -10,} : {}}>
        <CloudsAnim />
    </div>
}

export default Clouds;