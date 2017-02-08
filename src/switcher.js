

function indexArray(arrs, target) {
    var index = arrs.indexOf(target)
    return arrs.splice(index, 1)
}

export default function switcher() {

    var turnOnListeners = [],
        turnOffListeners = [];

    const onTurnOn = (listener) => {

       turnOnListeners.push(listener);

       return function unSubscribe() {
           var index = turnOnListeners.indexOf(listener);
           turnOnListeners.splice(index, 1);
       }
    }

    const onTurnOff = (listener) => {
        var offListener = indexArray(turnOnListeners, listener);
        if(offListener && offListener.length > 0) {
          turnOffListeners.push(offListener)
        }
    }

    const trunOn = () => {
        for (var i = 0; i < turnOnListeners.length; i++) {
          turnOnListeners[i]()
        }
    }

    return {
      onTurnOn,
      onTurnOff,
      trunOn
    }
}
