var customers = [
	{ 
		id: 1000, 
		name: "Waldorf Electonics", 
		address: "123 Any Street",
		city: "Berlin",
		state: "Germany",
		postalcode: "ABC123",
		creditlimit: 100000 
	}, 
	{
		id: 1010, 
		name: "Google", 
		address: "1 Google Way",
		city: "Mountain View",
		state: "California",
		postalcode: "12345",
		creditlimit: 1000000 
	}, 
	{
		id: 1020, 
		name: "Native Instruments", 
		address: "2 Guitar Way",
		city: "New York",
		state: "New York",
		postalcode: "10101", 
		creditlimit: 10000 
	}
];
function formatTableData(trCtrl, data) {
	var tdCtrl = document.createElement("td");
	trCtrl.appendChild(tdCtrl);
	var textCtrl = document.createTextNode(data);
	tdCtrl.appendChild(textCtrl);
}
function formatTableRow(id, name, address, postal, credit) {
	var tbodyCtrl = document.getElementById("customers");
	var trCtrl = document.createElement("tr");
	tbodyCtrl.appendChild(trCtrl);
	// id
	formatTableData(trCtrl, id);
	// name
	formatTableData(trCtrl, name);
	// name
	formatTableData(trCtrl, address);
	// name
	formatTableData(trCtrl, postal);
	// credit
	formatTableData(trCtrl, credit);
}
function listCustomers() {
	console.log("Called listCustomers()");
	for(var idx = 0; idx < customers.length; idx++) {
		var id = customers[idx].id;
		var name = customers[idx].name;
		var address = customers[idx].address;
		var citystpostal = customers[idx].city + ", " +
							customers[idx].state + " " +
							customers[idx].postalcode;
		var creditLimit = parseInt(customers[idx].creditlimit);
		console.log(id, name, address, citystpostal, creditLimit);

		formatTableRow(id, name, address, citystpostal, creditLimit);

	} // end for
}