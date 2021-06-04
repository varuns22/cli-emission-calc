const Constants = require('../utils/constant');


// function to calculate the emission of CO2
function calculateEmission(transportMode, distanceTravelled, distanceUnit, output) {

    if(transportMode == undefined || transportMode == null || transportMode == '') {
        throw new Error('Transport Mode Cannot be null')
    }
    if (distanceTravelled == undefined || distanceTravelled == null || distanceTravelled == '') {
        throw new Error('Distance travelled is required')
    }
    if(isNaN(distanceTravelled)) {
        throw new Error('Distance travelled should be a number')
    }
    if (Object.keys(Constants.CO2_EMISSIONS_IN_GRAMS_PER_KM).indexOf(transportMode) == -1) {
        throw new Error('Transport Mode is not defined in Configuration')
    }

    if (distanceUnit != undefined && distanceUnit != null && distanceUnit != ''
        && Object.keys(Constants.DISTANCE_UNITS).indexOf(distanceUnit) == -1) {
        throw new Error('Unit of Distance is not defined in Configuration')
    }

    if (output != undefined && output != null && output != ''
        && Object.keys(Constants.OUTPUT).indexOf(output) == -1) {
        throw new Error('Output is not defined in Configuration')
    }

    // check if the output is not specified and distance unit in m 
    // then change the value of output to kg
    if (output == undefined || output == null || output == '') {
        if (distanceUnit == 'm') {
            output = 'g'
        } else {
            output = 'kg'
        }
    }

    // calculate CO2 emission in g for distance in km
    var totalEmission = Constants.CO2_EMISSIONS_IN_GRAMS_PER_KM[transportMode] * distanceTravelled;

    // check if distance in m then calculate the emission for distance in m
    if (distanceUnit == 'm') {
        totalEmission = totalEmission / 1000
    }

    // check if output in kg then calculate the emission in kg
    if (output == 'kg') {
        return (Math.round(((totalEmission / 1000) + Number.EPSILON) * 10) / 10) + output
    } else {
        return (Math.round((totalEmission + Number.EPSILON) * 10) / 10) + output;
    }
}

module.exports = { calculateEmission };