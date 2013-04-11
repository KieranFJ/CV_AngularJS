//get data from json folder
//
//

//
//Temp JSON will be grqabbed from a DB at some point
var json = {
		'summary' :
			'testSumm',
		'avaliability' :
			'testAvail',
		'languages' : [
			{'language' : 'JavaScript'},
			{'language' : 'Java'},
			{'language' : 'PHP'},
			{'language' : 'MySQL'} 
		],
		'frameworks': [
			{'framework' : 'Twitter Bootstrap'},
			{'framework' : 'CodeIgniter'},
			{'framework' : 'AngularJS'}
		],
		'softwareTools' : [
			{'software' : 'NetBeans'},
			{'software' : 'Visual Studio 2008+'},
			{'software' : 'Git'}
		],
		'experiances' : [
			{
				'name' : 'Nupe.com',
				'bullets' : [
					{'point' : 'point1'},
					{'point' : 'point2'},
					{'point' : 'point3'}
				]
			},
			{
				'name' : 'Gloucestershire Fire Service',
				'bullets' : [
					{'point' : 'point1'},
					{'point' : 'point2'},
					{'point' : 'point3'}
				]
			}
		]
	}
function PhoneListCtrl($scope) {

	//loads json into scope properties for output
	$scope.summary = json.summary;
	$scope.avaliability = json.avaliability;
	$scope.languages = json.languages;
	$scope.frameworks = json.frameworks;
	$scope.softwareTools = json.softwareTools;
	$scope.experiance = json.experiances;
	console.log($scope);
}


