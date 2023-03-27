class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    if (month < 1 || month > 12 || isNaN(month)) {
        throw new MonthException('Incorrect month number');
    }

    return monthNames[month - 1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (e) {
    if (e instanceof MonthException) {
        console.log(`${e.name} ${e.message}`);
    } else {
        console.log(e.message);
    }
}