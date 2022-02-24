function greeting(name) {
    console.log('Hello ' + name);
  }
function receivesAFunction(callback) {
    var name = console.log('Please enter your name.');
    callback(name) ;
}
receivesAFunction(greeting);

function returnsANamedFunction(){
    return greeting;
}
function returnsAnAnonymousFunction() {
    return (function(){ 
        
});
}

