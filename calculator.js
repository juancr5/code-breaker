function add(a,b){
    return a+b;
}

function subs(a,b){
    return a-b;
}

function div(a,b){
    if (b != 0){
        return a/b;
    }
    return null;
}




module.exports.add = add;
module.exports.subs = subs;
module.exports.div = div;