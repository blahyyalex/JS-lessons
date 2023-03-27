function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Invalid arguments. Both arguments must be numbers.');
    }
    return width * height;
}

// Example usage:
try {
    const area = calcRectangleArea(10, 5);
    console.log(area); // 50
    const invalidArea = calcRectangleArea('invalid', 5);
    console.log(invalidArea);
} catch (error) {
    console.error(error.message);
}