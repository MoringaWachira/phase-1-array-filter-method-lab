// Code your solution here

const drivers = [

    {
        lastName: "Bobby",
        address: "109 Manhattan",

    },
    {
        lastName: "Wachira",
        address: "93 Brooklyn",

    },
    {
        lastName: "Simbine",
        address: "34 RSA",

    },
    {
        lastName: "Manyonga",
        address: "7 Bahamas",

    }
]
// function findMatching(drivers,lastName) {
    
//     for (const user of drivers) {
//         if (lastName === "Bobby") {
//             console.log(lastName)
//         }
//     }
// }
// findMatching(drivers)


function findMatching(drivers,name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    });
};


function fuzzyMatch(drivers,driverName) {
    return drivers.filter(function(driver) {
        return driver.slice(0,driverName.length ).toLowerCase() === driverName.toLowerCase()
        });
    };

   function matchName(drivers, driverMatch) {
        return drivers.filter(function(driver) {
            return driver.name.toLowerCase() === driverMatch.toLowerCase()
        });
    };




















