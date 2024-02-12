/** @format */

const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
console.log(`Current directory: ${process.cwd()}`);
app.listen(port, () => {
	console.log(`server is running on the port ${port}`);
});

app.get("/", (req, res) => {
	let data = {
		users: [
			{
				id: 1,
				firstName: "Terry",
				lastName: "Medhurst",
				maidenName: "Smitham",
				age: 50,
				gender: "male",
				email: "atuny0@sohu.com",
				phone: "+63 791 675 8914",
				username: "atuny0",
				password: "9uQFF1Lh",
				birthDate: "2000-12-25",
				image: "https://robohash.org/Terry.png?set=set4",
				bloodGroup: "A-",
				height: 189,
				weight: 75.4,
				eyeColor: "Green",
				hair: {
					color: "Black",
					type: "Strands",
				},
				domain: "slashdot.org",
				ip: "117.29.86.254",
				address: {
					address: "1745 T Street Southeast",
					city: "Washington",
					coordinates: {
						lat: 38.867033,
						lng: -76.979235,
					},
					postalCode: "20020",
					state: "DC",
				},
				macAddress: "13:69:BA:56:A3:74",
				university: "Capitol University",
				bank: {
					cardExpire: "06/22",
					cardNumber: "50380955204220685",
					cardType: "maestro",
					currency: "Peso",
					iban: "NO17 0695 2754 967",
				},
				company: {
					address: {
						address: "629 Debbie Drive",
						city: "Nashville",
						coordinates: {
							lat: 36.208114,
							lng: -86.58621199999999,
						},
						postalCode: "37076",
						state: "TN",
					},
					department: "Marketing",
					name: "Blanda-O'Keefe",
					title: "Help Desk Operator",
				},
				ein: "20-9487066",
				ssn: "661-64-2976",
				userAgent: "Mozilla/5.0 ...",
			},
		],
		total: 100,
		skip: 0,
		limit: 30,
	};
	res.send(data);
});
