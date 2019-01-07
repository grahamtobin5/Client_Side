function heatIndex(temperature, humidity)
{
    var formula;
    var newForm
    var thirdform;
        formula = -42.379 + 2.04901523*temperature + 10.14333127*humidity + -.22475541*temperature*humidity + -6.83783 * Math.pow(10, -3)* Math.pow(temperature,2);
        newForm = -5.481717 * Math.pow(10, -2) *  Math.pow(humidity,2) + 1.22874 * Math.pow(10,-3) * Math.pow(temperature,2)*humidity;
        thirdform = 8.5282 * Math.pow(10 ,-4) * temperature * Math.pow(humidity,2) + -1.99 * Math.pow(10,-6) * Math.pow(temperature,2) * Math.pow(humidity,2);
        formula = formula + newForm + thirdform;
        return formula; 
}


