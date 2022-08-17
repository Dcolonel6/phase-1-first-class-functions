function receivesAFunction(callback){
    callback()

}
function returnsANamedFunction(){
    return function something (b="hello"){
        return b 
    };
}
function returnsAnAnonymousFunction(){
    return a => a;
}