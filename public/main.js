document.documentElement.classList.add("dark");
const dropdown = document.getElementById("dropdown");
const dropdownList = document.getElementById("dropdownList");
let isOpened = false;
dropdown.addEventListener("click", () => {
	if (isOpened) {
		console.log(isOpened);
		isOpened = false;
		dropdown.classList.add("rounded-b-xl");
		dropdownList.classList.replace("flex", "hidden");
	} else {
		console.log(isOpened);
		isOpened = true;
		dropdown.classList.remove("rounded-b-xl");

		dropdownList.classList.replace("hidden", "flex");
	}
});
