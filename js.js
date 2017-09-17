import {coroutine as co } from 'bluebird';
function log(e) {
	console.log(e);
}

// var getRandomUsers = function( /*#__PURE__*/regeneratorRuntime.mark(function _callee(n) {
// 	var fetchRandomUsers, data;
// 	return regeneratorRuntime.wrap(function _callee$(_context) {
// 		while (1) {
// 			switch (_context.prev = _context.next) {
// 				case 0:
// 					_context.next = 2;
// 					return fetch("https://randomuser.me/api/?results=" + n);

// 				case 2:
// 					fetchRandomUsers = _context.sent;
// 					_context.next = 5;
// 					return fetchRandomUsers().json;

// 				case 5:
// 					data = _context.sent;
// 					return _context.abrupt("return", data);

// 				case 7:
// 				case "end":
// 					return _context.stop();
// 			}
// 		}
// 	}, _callee, this);
// }));

const getRandomUsers = co(function*(n){
	const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
	const data = yield fetchRandomUsers.json();
	return data;
});

getRandomUsers(5).then(function (randomUsers) {
	randomUsers.results.forEach(function (user) {
		log(user);
	});
});