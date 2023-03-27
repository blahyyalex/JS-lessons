function showUser(id) {
    if (id < 0) {
        throw new Error("ID must not be negative: " + id);
    }
    return { id: id };
}

function showUsers(ids) {
    const result = [];
    for (let id of ids) {
        try {
            result.push(showUser(id));
        } catch (error) {
            console.log(error.message);
        }
    }
    return result;
}
console.log(showUsers([7, -12, 44, 22]));