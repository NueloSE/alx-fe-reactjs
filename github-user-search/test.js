
function sumAll( ...args) {
    let url = "";
    args.map(arg => {
        for (let [key, value] of Object.entries(arg)) {
            url += `${key}:${value}+`
        }
    })
    
    url = url.slice(0, -1)
    return url;
}

console.log(sumAll({location: 'nigeria'}, {repos:'>40'}))