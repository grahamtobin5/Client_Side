var welcome = "hello";
var formula;
var newForm
var thirdform;
    formula = -42.379 + 2.04901523*96 + 10.14333127*50 + -.22475541*96*50 + -6.83783 * Math.pow(10, -3)* Math.pow(96,2);
    newForm = -5.481717 * Math.pow(10, -2) *  Math.pow(50,2) + 1.22874 * Math.pow(10,-3) * Math.pow(96,2)*50;
    thirdform = 8.5282 * Math.pow(10 ,-4) * 96 * Math.pow(50,2) + -1.99 * Math.pow(10,-6) * Math.pow(96,2) * Math.pow(50,2);
    formula = formula + newForm + thirdform;
var el = document.getElementById('heatindex');
el.textContent = formula + "°";

