import React from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

const LiveChat = () => {
    // const tawkMessengerRef = useRef();

    const onLoad = () => {
        // console.log('onLoad works!');
    };

    // const handleMinimize () => {
    //     tawkMessengerRef.current.minimize();
    // };

    return (
        <div className="App">
            {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}
        <TawkMessengerReact
            propertyId="645261df31ebfa0fe7fbc11c"
            widgetId="1gvgsskku"/>
            {/* onLoad={onLoad} */}
    </div>
    );
};

export default LiveChat;