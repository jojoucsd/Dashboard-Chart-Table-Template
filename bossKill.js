function BossKill() {
    var nat = SpreadsheetApp.getActive().getRange("G2").getValue(); //gets the non absent total 
    var range = SpreadsheetApp.getActive().getRange('C2:E'+nat); //sets the range dyamicaly based on attendance + bench 
    var values = range.getValues();

    values.forEach( value => logV(value) )
    
    let currentValues = values
    let updatedValues
    updatedValues = currentValues.forEach( value => updateVal(value))

    }
    
    //log the current values 
    function logV(value) {
    Logger.log(value);
    }
    //add one to all values
    function updateVal(value){
    return value++
    }