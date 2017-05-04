export function getPortfoliosCompleted (data) {
	return  {
		type: "GET_PORTFOLIOS",
		payload: data
	}
}

export function saveNewPortfolio(data) {
	return (dispatch) => {
		return fetch('/api/portfolios', {
			method: "POST",
			body: data
		})
		// .then((res) => res.json())
		// .then((data) => getPortfolios())
	}
}

export function getPortfolios () {
	return (dispatch) => {
		return fetch('/api/portfolios', {
			method: "GET"
		})
		.then((res) => res.json())
		.then((data) => dispatch(getPortfoliosCompleted(data)))
	}
}
