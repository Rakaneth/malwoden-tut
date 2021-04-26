'use strict'

import { Terminal } from 'malwoden';
import img from './agm_16x16.png';

window.onload = () => {
    const mountNode = document.getElementById('canvas');

    const displayOptions = {
        width: 50,
        height: 30,
        imageURL: img,
        mountNode,
        charWidth: 16,
        charHeight: 16,
    };
    
    const terminal = new Terminal.RetroTerminal(displayOptions);
    
    terminal.clear();
    terminal.writeAt({x: 0, y: 0}, "Hello World!");
    terminal.render();
}