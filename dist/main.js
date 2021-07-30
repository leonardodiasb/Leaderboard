/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tbody = document.querySelector('#scores-list');\nconst form = document.querySelector('#form');\nconst refreshBtn = document.querySelector('#refresh-btn');\n\nconst addScores = async (e) => {\n  e.preventDefault();\n  const input = document.querySelectorAll('input');\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BiksNeQJh8tuANM43GM8/scores/', {\n    method: 'POST',\n    body: JSON.stringify({\n      user: input[0].value,\n      score: Number(input[1].value),\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  input[0].value = '';\n  input[1].value = '';\n};\n\nconst refreshScoreList = async () => {\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BiksNeQJh8tuANM43GM8/scores/')\n    .then((response) => response.json())\n    .then((json) => {\n      tbody.innerHTML = '';\n      json.result.sort((a, b) => {\n        if (a.score < b.score) {\n          return 1;\n        } if (b.score < a.score) {\n          return -1;\n        }\n        return 0;\n      });\n      json.result.forEach((element) => {\n        const tr = document.createElement('tr');\n        const td1 = document.createElement('td');\n        const td2 = document.createElement('td');\n        td1.innerHTML = `${element.user}`;\n        tr.appendChild(td1);\n        td2.innerHTML = `${element.score}`;\n        tr.appendChild(td2);\n        tbody.appendChild(tr);\n      });\n    });\n};\n\nform.addEventListener('submit', addScores);\nrefreshBtn.addEventListener('click', refreshScoreList);\ndocument.addEventListener('DOMContentLoaded', refreshScoreList);\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;