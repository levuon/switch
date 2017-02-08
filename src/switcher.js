

function indexArray(arrs, target) {
    var index = tmpArry.indexOf(target)
    return tmpArry.splice(index, 1)
}

export default function switcher() {

    var turnOnListeners = [],
        turnOffListeners = [],
        tmpListener;

    const onTurnOn = (listener) => {

       turnOnListeners.push(listener);

       return function unSubscribe() {
           var index = turnOnListeners.indexOf(listener);
           turnOnListeners.splice(index, 1);
       }
    }

    const onTurnOff = (listener) => {
        tmpListener = turnOnListeners.slice(0);
        var offListener = indexArray(tmpListener, listener);
        if(offListener && offListener.length > 0) {
          turnOffListeners.push(offListener)
        }
        tmpListener = null;
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
