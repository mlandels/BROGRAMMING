let nightclubName = 'Tom and Matts Nightclub';
let members = [
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



    validateAge = function () {
			members.forEach(function(m) {
				if (m.Age > 18) {
					console.log(m)
				}
			 })
		};
	
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
