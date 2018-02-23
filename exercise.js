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
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------


};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    
exercise.roman(time);

if(col>=8){
    document.getElementById((col+"_pos8")).background = 'red'
    col -= 8;
}
if(col>=4){
    document.getElementById((col+"_pos4")).background = 'red'
    col -= 4;
}
if(col>=2){
    document.getElementById((col+"_pos2")).background = 'red'
    col -= 2;
}
if(col>=1){
    document.getElementById((col+"_pos1")).background = 'red'
    col -= 1;
}



}