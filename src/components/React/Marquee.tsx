import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
    return (
        <Marquee speed={400} gradient={true} gradientColor={'#d9c322cf'}>
            <span
                style={{
                    fontSize: '6.5rem',

                    color: 'white',
                }}
            >
                SBRK Devices appears to be a boutique manufacturer or designer specializing in
                modular synthesizer hardware, specifically for the Eurorack format. Their notable
                product is the "zerua nahasi," a polyphonic granular synthesizer module for Eurorack
                systems,
            </span>
        </Marquee>
    );
};

export default MarqueeComponent;
