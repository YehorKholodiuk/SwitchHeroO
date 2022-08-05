function switcheroo(string){
    let newString = "";
    for (let n = 0; n < string.length; n++){
        if (string[n] == "a"){
            newString += "b";
        } else if (string[n] == "b"){
            newString += "a";
        } else if (string[n] == "c"){
            newString += "c";
        }
    }
    return newString;
}
console.log(switcheroo('abcbca'))

//const switchheroo = x => x.replace(/[ab]/g, x=> x === "a"?"b":"a")
