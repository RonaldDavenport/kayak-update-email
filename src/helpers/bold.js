module.exports = function(options){
    const bolder = '<strong>' + options.fn(this)+ '</strong>';
    return bolder
}