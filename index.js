// Your code here
function createEmployeeRecord(array) {
    const employeeRecords = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecords
}

function createEmployeeRecords(employeeData) {
    let employeeRecords = [];

    employeeData.forEach(function (array) {
        let employeeRecord = {
            firstName: array[0],
            lastName: array[1],
            employeeId: array[2],
            timeInEvents: [],
            timeOutEvents: []
        };
        employeeRecords.push(employeeRecord);
    });

    return employeeRecords;
}

function createTimeInEvent(employeeRecord, timestamp) {
    let timeInEvent = {
        type: "TimeIn",
        date: timestamp.split(" ")[0],
        hour: parseInt(timestamp.split(" ")[1])
    };

    employeeRecord.timeInEvents.push(timeInEvent);

    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timestamp) {
    let timeOutEvent = {
        type: "TimeOut",
        date: timestamp.split(" ")[0],
        hour: parseInt(timestamp.split(" ")[1])
    };

    employeeRecord.timeOutEvents.push(timeOutEvent);

    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(function (e) {
        return e.date === date
    })

    const timeOutEvent = employeeRecord.timeOutEvents.find(function (e) {
        return e.date === date
    })

    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100

    return hoursWorked

}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    const hourlyWage = employeeRecord.payPerHour
    const wagesEarned = hoursWorked * hourlyWage

    return wagesEarned
}

function allWagesFor(employeeRecord) {
    let totalWages = 0

    employeeRecord.timeInEvents.forEach(function (timeInEvent) {
        const date = timeInEvent.date
        const wagesEarned = wagesEarnedOnDate(employeeRecord, date)
        totalWages += wagesEarned
    })
    return totalWages
}













