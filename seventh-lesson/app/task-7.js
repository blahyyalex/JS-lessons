const countries = {
    'ger': ['Berlin', 'Munich', 'Hamburg'],
    'usa': ['New York', 'Los Angeles', 'Chicago'],
    'ukr': ['Kyiv', 'Lviv', 'Kharkiv']
};
const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');

countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    const cities = countries[selectedCountry];

    // Очищуємо список міст
    citySelect.innerHTML = '';

    // Додаємо нові елементи у список міст
    cities.forEach(function(city) {
        const option = document.createElement('option');
        option.value = city;
        option.text = city;
        citySelect.add(option);
    });
});
citySelect.addEventListener('change', function() {
    const selectedCity = this.value;
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;

    const result = document.querySelector('p');
    result.innerHTML = `Ви обрали місто ${selectedCity} у країні ${selectedCountry}.`;
});
