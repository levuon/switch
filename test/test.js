import {switcher} from '../src/index.js'


const log123 = function() {
   console.log('123');
}

let store = switcher()
const offLog = store.onTurnOn(log123);
store.trunOn()
