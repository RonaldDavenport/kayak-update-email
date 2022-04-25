module.exports = function(options){
const button = `<a href ="https://www.google.com/">${options.fn(this)}</a>`;
return button
}