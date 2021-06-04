const yargs = require('yargs/yargs')(process.argv.slice(2));
const Constants = require('./utils/constant');
const service = require('./service/caluclator-service');

var argv = yargs
    .option("transportation-method",
        {
            alias: 't',
            describe: 'Tranportation Method',
            type: 'string',
            choices: Object.keys(Constants.CO2_EMISSIONS_IN_GRAMS_PER_KM),
            demandOption: (true, 'Transportation argument is required to calculate CO2 emission'),
            nargs: 1
        }).option("distance", {
            alias: 'd',
            describe: 'Distance travelled by the transport',
            type: 'number',
            nargs: 1,
            demandOption: (true, 'Distance argument is required to calculate CO2 emission')
        }).option('unit-of-distance', {
            alias: 'u',
            describe: 'Unit of Distance in km or m',
            type: 'string',
            default: 'km',
            choices: Object.keys(Constants.DISTANCE_UNITS),
            type: 'string'
        }).option('output', {
            alias: 'o',
            describe: 'Provide CO2 Emmision in kg or g',
            type: 'string',
            choices: Object.keys(Constants.OUTPUT),
            type: 'string'
        })
    .help('h')
    .alias('h', 'help')
    .wrap(null)
    .check((argv) => {
        if (isNaN(argv.distance))
            throw new Error("Only numbers are expected for distance argument")
        else
            return true
    })
    .argv;

// get CO2 emission
var co2emission = service.calculateEmission(argv['transportation-method'], argv['distance'], argv['unit-of-distance'], argv['output'])

// Prints the result in console with correct output 
console.log('Your trip caused ' + co2emission + ' of CO2-equivalent.')

