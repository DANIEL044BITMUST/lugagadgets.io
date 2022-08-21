const search_field = () =>{
	const searchBox = document.getElementById('search').value.toUpperCase();
	const storeItems = document.getElementById('box-container')
	const product = document.querySelectorAll('.box')
	const productName = storeItems.getElementByTagName('h3')

	for (var i = 0; i < productName.length; i++) {
		let match = productName[i].getElementByTagName('h3')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchBox) > -1) {
				product[i].style.display = "";
		}
		else{
			product[i].style.display = "none";
		}
	}   
}