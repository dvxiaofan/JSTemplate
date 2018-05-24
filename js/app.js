function make(adj) {
	return new Function('unon', "return unon[0].toUpperCase() + unon.slice(1) + ' is " + adj + "!'");
}

// var isFun = make('fun');

// console.log(make('fun')('xiaoming'));
// console.log(make('fun')('singing'));


// Create the numLetters constructor function. This function should:
//
// 1. accept a letter (either an integer or a decimal number)
// 2. return a function
// 3. the returned function should accept a number
// 4. calling the returned function with a number should log out that many letters
// 

/* 构造函数 */
// function numLetters(letter) {
// 	return new Function('nums', 
// 		"if(nums < 0) return ''; \
// 		var result = '';\
// 		nums = Math.round(nums);\
// 		for (let i = 1; i <= nums; i++) result += 'a';\
// 		return result;"
// 	);
// }

// console.log(numLetters('a')(4.5));		// aaaaa

// /* 正则表达式 */
// var pattern = /([a-z])\w+/,
// 	str = '1. accept a letter (either an integer or a decimal number)return afunction the returned function should accept a number calling the returned function with a number should log out that many letters';

// console.log(pattern.test(str));
// if ('content' in document.createElement('template')) {
// 	let t = document.querySelector('#productrow');
// 	td = t.content.querySelectorAll('td');
// 	td[0].textContent = 'oneone';
// 	td[1].textContent = 'hahahah';

// 	let tb = document.getElementsByTagName('tbody');
// 	let clone = document.importNode(t.content, true);
// 	tb[0].appendChild(clone);

// 	td[0].textContent = 'two';
// 	td[1].textContent = 'eee';
// 	let clone2 = document.importNode(t.content, true);
// 	tb[0].appendChild(clone2);

// } else {
// 	console.log('else');
// }


var templateInfo = _.template(
	$('#beach-supplies').html(), 
	{variable: 'supplies'}
);

$('#beach-info').html(
	templateInfo({
		empty: false,
		sunscreen: true,
		towel: 'red'
	})
);