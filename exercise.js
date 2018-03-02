var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    hour_col1 = Number(time.toTimeString()[0]), 
    hour_col2 = Number(time.toTimeString()[1]),
    min_col1  = Number(time.toTimeString()[3]), 
    min_col2  = Number(time.toTimeString()[4]), 
    sec_col1  = Number(time.toTimeString()[6]), 
    sec_col2  = Number(time.toTimeString()[7])
    
    return [hour_col1,hour_col2,min_col1,min_col2,sec_col1,sec_col2];
};


exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    
var position8 = false;
var position4 = false;
var position2 = false;
var position1 = false;

exercise.roman(time);

if(col>=8){
    position8 = true
    col -= 8;
}
if(col>=4){
    position4 = true
    col -= 4;
}
if(col>=2){
    position2 = true
    col -= 2;
}
if(col>=1){
    position1 = true
    col -= 1;
}

return [position8, position4, position2, position1];

}