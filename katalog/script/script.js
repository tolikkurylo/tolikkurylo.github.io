document.addEventListener('DOMContentLoaded', () => {
	async function shop () {
		const requestURL = 'https://tolikkurylo.github.io/catalog.json'
		const request = new Request(requestURL)
		const response = await fetch(request)
		const shop = await response.json()

		console.log(shop.books)

		cardShop(shop.books)
	}

	function cardShop(arr){
		const wrapper = document.getElementById('wrap')
		

		
		for(let i=0; i<arr.length; i++){
			const card = document.createElement('div')
			card.classList.add("card")
			const catalogTitle = document.createElement('div')
			catalogTitle.classList.add("catalog-title")

			const catalogContent = document.createElement('div')
			catalogContent.classList.add("catalog-content")

			const contentDescription = document.createElement('div')
			contentDescription.classList.add("content-description")

			const price = document.createElement('div')
			price.classList.add("price")

			const regPrice = document.createElement('p')
			regPrice.classList.add("regular-price")

			const discPrice = document.createElement('p')
			discPrice.classList.add("discounted-price")

			const buyBtn = document.createElement('div')
			buyBtn.classList.add("bottom-buy")

			const soonBtn = document.createElement('div')
			soonBtn.classList.add("bottom-soon")

			const stickerNew = document.createElement('div')
			stickerNew.classList.add("sticker-new")

			const stickerTop = document.createElement('div')
			stickerTop.classList.add("sticker-top")

			wrapper.append(card)
			console.log(card)
			
			const subTitle = document.createElement('p')
			subTitle.textContent= `${arr[i].category}`
			catalogTitle.append(subTitle)
			card.append(catalogTitle)
			card.append(catalogContent)
			const img = document.createElement('img')
			img.src = `${arr[i].imgsrc}`
			catalogContent.append(img)
			card.append(contentDescription)
			const descr = document.createElement('a')
			descr.href = '#'
			descr.textContent = `${arr[i].name}`
			contentDescription.append(descr)
			card.append(price)
			if(arr[i].availability === 1){
				if(arr[i].discount != 0){
					regPrice.textContent = `${arr[i].discount}`
					price.append(regPrice)
				}
				discPrice.textContent = `${arr[i].regularPrice}`
				price.append(discPrice)
			} else if(arr[i].availability === 0){
				price.append(regPrice)
			} else {
				price.append(regPrice)
			}

			if(arr[i].availability === 1){
				const addBtn = document.createElement('a')
				addBtn.href = '#'
				addBtn.textContent = 'У корзину'
				card.append(buyBtn)
				buyBtn.append(addBtn)
			} else if (arr[i].availability === 0){
				const addBtn = document.createElement('a')
				addBtn.href = '#'
				addBtn.textContent = 'У корзину'
				addBtn.classList.add("disabled")
				card.append(buyBtn)
				buyBtn.append(addBtn)
			} else{
				const addBtn = document.createElement('a')
				addBtn.href = '#'
				addBtn.textContent = 'Незабаром у продажі'
				card.append(soonBtn)
				soonBtn.append(addBtn)
			}

			if(arr[i].new === 1){
				const descrStk = document.createElement('p')
				descrStk.textContent = 'новинка'
				stickerNew.append(descrStk)
				card.append(stickerNew)
			} else if(arr[i].hit === 1){
				const descrStk = document.createElement('p')
				descrStk.textContent = 'хіт продаж'
				stickerTop.append(descrStk)
				card.append(stickerTop)
			}
		}

	}

	shop()
})




