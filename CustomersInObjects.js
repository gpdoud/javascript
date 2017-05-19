var customers = [
	{ 
		id: 1000, 
		name: "Waldorf Electonics", 
		address: "123 Any Street",
		city: "Berlin",
		state: "Germany",
		postalcode: "ABC123" 
	}, 
	{
		id: 1010, 
		name: "Google", 
		address: "1 Google Way",
		city: "Mountain View",
		state: "California",
		postalcode: "12345" 
	}, 
	{
		id: 1020, 
		name: "Native Instruments", 
		address: "2 Guitar Way",
		city: "New York",
		state: "New York",
		postalcode: "10101" 
	}
];
function listCustomers() {
	console.log("Called listCustomers()");
	for(var idx = 0; idx < customers.length; idx++) {
		var id = customers[idx].id;
		var name = customers[idx].name;
		var address = customers[idx].address;
		var citystpostal = customers[idx].city + ", " +
							customers[idx].state + " " +
							customers[idx].postalcode;
		console.log(id, name, address, citystpostal);
	}
}