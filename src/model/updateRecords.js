var fs = require("fs")


const updateRecords = async (dbName, record, attrs) => {

    let path = "D:/Quick access/Documents/tables/" + dbName + ".DB"
    // Update record
    Object.assign(record, attrs)

    // Write all records back to the
    // custom database
    await fs.promises.writeFile(
        path,
        JSON.stringify(records, null, 2)
    )
    console.log('update success')
}




exports.updateRecords = updateRecords;