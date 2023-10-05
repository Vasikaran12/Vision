const cou = ["1","2","3","4","5"]
let a = cou.length;
let b = 0;
let c = 0;

const Touch = {
    state: {
      xDown:null,
      yDown:null
    },
    getTouches: (evt) => {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    },

    handleTouchStart: (evt) => {
        let firstTouch = Touch.getTouches(evt)[0];
        Touch.state.xDown = firstTouch.clientX;
        Touch.state.yDown = firstTouch.clientY;
    },

    handleTouchMove: (evt) => {
        let action = null;
        let {xDown,yDown} = Touch.state;
        if ( ! xDown || ! yDown ) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
                b = b+1;
                if (b>=0 && b<=a-1){}
                else{b = b-1;}
                action =  'left';
            } else {
                /* right swipe */
                b = b-1;
                if (b>=0 && b<=a-1){}
                else{b = b+1;}
                action = 'right';
            }
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */
                c = c+1;
                console.log(c);
                if(c === 1){
                alert("success "+ co[b]);
                c = 0;
            }
                action = 'up';
            }
        }
        /* reset values */
        Touch.state.xDown = null;
        Touch.state.yDown = null;
        return action;
    }
}