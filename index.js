function findMatching(drivers, searchText){
    return drivers.filter(driver => driver.toLowerCase() === searchText.toLowerCase());
}

// function findMatching(drivers, searchText){
//     return drivers.filter(function(drivere){
//         let matcher = driver.toLowerCase() === searchText.toLowerCase()
//         return matcher
//     })
// }

function fuzzyMatch(drivers, searchText){
    return drivers.filter(driver => driver.split("").shift() === searchText.split("").shift())
}

// function fuzzyMatch(drivers, searchText){
//     return drivers.filter(function(driver){
//         let dfl = driver.split("").shift()
//         let stfl = searchText.split("").shift()
//         if (dfl === stfl) {return driver} 
//     })
// }

function matchName(driversObject, searchText){
    return driversObject.filter(function(driver){
        let matcher = driver['name'].toLowerCase() === searchText.toLowerCase()
        return matcher
    })
}