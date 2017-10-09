'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const SKILL_NAME = 'Facts for Today';
const GET_FACT_MESSAGE = "Here's your fact for today! ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Earth is the only planet not named after a god.',
                'Jupiter has the shortest day of all the planets.',
                'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'The Sun is an almost perfect sphere.',
                'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
                'Saturn radiates two and a half times more energy into space than it receives from the sun.',
                'The temperature inside the Sun can reach 15 million degrees Celsius.',
                'The Moon is moving approximately 3.8 cm away from our planet every year.',
                'The Indian gray mongoose and others are well known for their ability to fight and kill venomous snakes, particularly cobras.',
                'Ununoctium has the highest atomic number and highest atomic mass of all the elements discovered so far.',
                'In some atoms the binding energy is not strong enough to hold the nucleus together, and the nuclei of these atoms are said to be unstable. Unstable atoms will lose neutrons and protons as they attempt to become stable.',
                'Ostriches do not actually bury their heads in the sand. The tale originates from the fact that the male ostrich will dig a large hole in the sand to protect the eggs.',
                'Approximately 10% of the world population is left-handed.',
                'Koalas need more sleep than most animals because eucalyptus leaves contain toxins and are very low in nutrition and high in fibrous matter so they take a large amount of energy to digest.',
                'Augustus Caesar became the first emperor of Rome following the Battle of Actium in 31 BCE.',
                'Honey bees do not have sensory organs that can pick up sounds that we can hear but they are very sensitive to vibrations',
                'The human hand has 27 bones, not including the sesamoid bone, the number of which varies between people.',
];
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};