const zeruaNahasi = {
    name: 'Zerua Nahasi',
    description:
        'zerua nahasi is a polyphonic granular synthesizer for the eurorack modular format, with a wide range of granulation possibilities. it features 4 stereo granular engines that can be used independently or in combination, opening a whole palette of possibilities. samples can be loaded from an SD card, or recorded via the stereo audio input. each granulation engine can use the same or different samples as sources for granulation. a live mode is also available, where the device works as a granular delay. zerua nahasi aims to work as a granulation laboratory. Furthermore, this device also includes a stereo convolution reverb, with some built-in impulse responses with barcelona’s most iconic spaces, and the possibility to load custom IRs from the SD card.',
    features: [
        '4 stereo granular engines - each slot can hold over 20 seconds of audio.',
        'the 4 engines can be synchronized and combined in multiple ways.',
        'main granulation parameters with CV control and randomization: grain position, grain length, density, pitch/speed, envelope shape, stereo image.',
        'multiple granulation modes: varispeed, paulstretch, and more to come.',
        'onset/transient detection.',
        'granulation sources: stereo input audio (live or pre-recorded), or samples from SD card.',
        'integrated convolution reverb. IRs can be loaded from SD card.',
    ],
    specs: ['size: 30 HP', 'depth: 40 mm (TBD)', 'consumption: +12V: 280 mA, -12V: 40 mA'],
    manual: '/path/to/manual.pdf',
    firmware: '/path/to/firmware.zip',
    media: {
        video: 'https://www.youtube.com/watch?v=6ysKje6HElI',
    },
};

export default zeruaNahasi;
