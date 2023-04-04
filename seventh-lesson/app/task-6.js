let sizeDiv = document.getElementById("size");

		// функція для виведення розміру вікна
		function displayWindowSize() {
			// отримуємо розмір вікна і записуємо його в змінні
			let width = window.innerWidth;
			let height = window.innerHeight;

			// виводимо розмір вікна на сторінку
			sizeDiv.innerHTML = "Розмір вікна: " + width + "x" + height;
		}

		// викликаємо функцію для відображення розміру вікна при завантаженні сторінки
		displayWindowSize();

		// відслідковуємо зміну розміру вікна і викликаємо функцію для відображення нового розміру
		window.addEventListener("resize", displayWindowSize);