let nightclubName = 'Tom and Matts Nightclub';
let nightclubAddress = '420 St.';
let currentTime = Date.now();

let clubAttendees = [
	{
		'Name' : 'Jimmy Napkins',
		'Age' : 24,
		'Height' : '6\'0"',
		'Vip' : 'yes'
	},
	{
		'Name' : 'Billy Shakes',
		'Age' : 18,
		'Height' : '5\'4"',
		'Vip' : 'no'
	},
	{
		'Name' : 'Ted Coffee',
		'Age' : 24,
		'Height' : '5\'11"',
		'Vip' : 'no'
	}
];


let validateVip = function () {
	members.forEach(function(v) {
		if (v.Vip === 'yes') {
			console.log('you get a bottle bruh');
		} else {
			console.log('no bottle for you');
		}
	})
}

validateVip();

/*
 * Ensure the new member is over 18
 * @param age - the age of the new member
*/
validateAge = function (age) {
	if (age < 18) {
		alert('Yous a Minor');
		return false;
	}
	return true;
}

/*
 * Take input from the HTML, create a newMember object
 * Add the newMember into our clubAttendees "database"
*/
createMember = function () {
	// let age = document.getElementById("age").value;
	// let name = document.getElementById("name").value;
	// let height = document.getElementById("height").value;

	// console.log(document.getElementById("age").value);
	// console.log(document.getElementById("name").value);
	// console.log(document.getElementById("height").value);
	
	if ( validateAge(document.getElementById("age").value) ) {
		let newMember = {
			'Name' : document.getElementById("name").value,
			'Age' : document.getElementById("age").value,
			'Height' : document.getElementById("height").value
		}
		clubAttendees.push(newMember);
		console.log(clubAttendees);
	}
}

