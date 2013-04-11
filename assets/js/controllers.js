//get data from json folder
//
//

//
//Temp JSON will be grqabbed from a DB at some point
var json = {
		'title' : 'Kieran Foxley-Jones Curriculum Vitae',
		'name' : 'Kieran Foxley-Jones',
		'occupation' : 'Web Developer',
		'email' : 'KieranF-J@blueyonder.co.uk',
		'details' : {
			'address' : [
				{'line' : '4 Ribble Close'},
				{'line' : 'Brockworth'},
				{'line' : 'Gloucester'},
				{'line' : 'GL3 4LF'}				
			],
			'phone' : '07800 555555'
		},
		'links' : [
			{'name' : 'TestLinkName1', 'link' : 'http://www.example.com/test1/'},
			{'name' : 'TestLinkName2', 'link' : 'http://www.example.com/test2/'},
			{'name' : 'TestLinkName3', 'link' : 'http://www.example.com/test3/'}
		],
		'summary' : 'testSumm',
		'avaliability' : 'testAvail',
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
				'name' : 'Name1',
				'link' : 'http://test.com',
				'bullets' : [
					{'point' : 'point1'},
					{'point' : 'point2'},
					{'point' : 'point3'}
				]
			},
			{
				'name' : 'Name2',
				'link' : 'http://test.com',
				'bullets' : [
					{'point' : 'point1'},
					{'point' : 'point2'},
					{'point' : 'point3'}
				]
			}
		]
	}
function CirVitCtrl($scope) {

	//loads json into scope properties for output
	$scope.cv = json;

	console.log($scope);
}


