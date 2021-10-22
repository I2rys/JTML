//Dependencies
const Fs = require("fs")

//Variables
var Self = {}

//Functions
Self.get_root = function(data_eachline){
    const the_root = data_eachline[i].slice(0, data_eachline[i].indexOf(">"))

    return the_root
}

Self.pretty_root_data = function(rd){
    var results = ""

    rd = rd.replace(/\w+>/, "")

    for( i in rd.split("\n") ){
        if(!results.length){
            results = rd.split("\n")[i].replace(/\s/g, "")
        }else{
            results += `\n${rd.split("\n")[i].replace(/\s/g, "")}`
        }
    }

    return results
}

Self.parse = function(data){
    var upper_root = ""
    var upper_root_data = ""
    var results = {}

    const data_eachline = data.split("<")

    for( i in data_eachline ){
        if(data_eachline[i].indexOf(">") != -1 && data_eachline[i].indexOf("/") == -1){
            const root = Self.get_root(data_eachline)
            const root_data = Self.pretty_root_data(data_eachline[i])
            
            if(root_data && JSON.stringify(upper_root_data).indexOf(root) == -1){
                results[root] = root_data
            }else if(root_data && upper_root && JSON.stringify(upper_root_data).indexOf(root) != -1){
                if(!results[upper_root]){
                    results[upper_root] = {}
                }

                results[upper_root][root] = root_data
            }else{
                upper_root = root
                upper_root_data = data_eachline.slice(i, data_eachline.indexOf(`/${root}>\n`))
            }
        }
    }

    return results
}

//Main
function parse(jtml){
    const parsed_data = Self.parse(jtml)

    return parsed_data
}

//Exporter
module.exports = {
    parse: parse
}
