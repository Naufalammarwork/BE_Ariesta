var ParadoxTable = require("paradox.js")
var fs = require("fs")

const readRecords = (dbName) => {
    let recordResult = [];
    let jsonVer = [];
    var file = fs.readFileSync("D:/Quick access/Documents/tables/" + dbName + ".DB")
    var table = new ParadoxTable(file)

    table.findRecords({
        filter: function (record) {
            recordResult.push(record)
            // if(someCriteria(record)){
            //   return true
            // }
            // return false
        }
    })
    if (recordResult != null && recordResult.length > 0) {
        recordResult.map((key, i) => {
            let dataObj = {}
            Object.keys(key).map((itemKey, iKey) => {
                let valueKey = key[itemKey]
                dataObj[itemKey] = decodeURI(valueKey.value)
            })
            jsonVer.push(dataObj)
        })
    }
    return jsonVer
}





exports.readRecords = readRecords;