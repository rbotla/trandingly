export default ( state = initialPortfolios, { type, payload } ) => {
  // switch ( type ) {
  //   case 'CREATE_PORTFOLIO':
  //   	const { initiativeId } = payload;
  //    	const filteredInitiatives = initiatives.initiatives.filter( i => ( i.id == initiativeId) );
  //   	return {...initiatives, 
  //   					epics: filteredInitiatives[0].epics,
  //   					currentInitiative: filteredInitiatives[0],
  //   					tasks: []
  //   				};
  //     break;

  //   case 'PORTFOLIO_CLICKED':
  //   	const { epicId } = payload;
  //    	const epics = initiatives.currentInitiative.epics;
  //    	const epic = epics.filter( i => ( i.id == epicId) );
  //   	return {...initiatives, 
  //   					tasks: epic[0].tasks};
  //     break;
  // }
  switch (type) {
  	case "GET_PORTFOLIOS":
  		return [...payload];
  	case "SAVE_NEW_PORTFOLIO":
  		return [...payload];
  	default: 
  		return state;
  }
};

const initialPortfolios =
[
	{
		id: "1234",
		name: "IT Portfolio", 
		trades: [
			{
				id: "1234",
				name: "Oracle", 
				code: 'ORCL',
			},
			{
				id: "1235",
				name: "Facebook", 
				code: "FB",
			}
		]
	},
	{
		id: "1235",
		name: "Healthcare portfolio", 
		trades: [
			{
				id: "1236",
				name: "UnitedHealth Group", 
				code: "UHG", 
			},
			{
				id: "1237",
				name: "Medtronic", 
			},
			{
				id: "1238",
				name: "McKesson", 
			},
		]
	},
];