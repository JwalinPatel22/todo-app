//jshint esversion:6
exports.getDate = function(){
    const today = new Date();
        
    //options object for day
    const options =  {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("hi-IN", options);
};

exports.getDay = function(){
    const today = new Date();
        
    //options object for day
    const options =  {
        weekday: "long"
    };
    return today.toLocaleDateString("hi-IN", options);
}