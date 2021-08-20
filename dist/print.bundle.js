/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/check_complete.js":
/*!*******************************!*\
  !*** ./src/check_complete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkComplete)
/* harmony export */ });
function checkComplete(arr) {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].completed = checkboxes[i].checked;
  }
  localStorage.setItem('toDoList', JSON.stringify(arr));
}

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remove)
/* harmony export */ });
function remove(num, list) {
  list.splice(num, 1);
  localStorage.setItem('toDoList', JSON.stringify(list));
  console.log('remove is running');
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/gen_html.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genHTML)
/* harmony export */ });
/* harmony import */ var _check_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_complete */ "./src/check_complete.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/remove.js");



function genHTML(list, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('li');
    const descCont = document.createElement('div');
    const checkbox = document.createElement('input');
    const desc = document.createElement('label');
    const itemIcon = document.createElement('i');

    descCont.classList.add('description-container');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      (0,_check_complete__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
    });
    checkbox.id = `checkbox-${i}`;
    checkbox.classList.add('checkbox');
    checkbox.checked = arr[i].completed;
    desc.htmlFor = `checkbox-${i}`;
    desc.innerHTML = arr[i].description;
    if (checkbox.checked) {
      desc.classList.add('done');
    }
    itemIcon.classList.add('fas', 'fa-ellipsis-v', 'item-icon');

    itemIcon.addEventListener('click', () => {
      if (itemIcon.classList.contains('red')) {
        (0,_remove__WEBPACK_IMPORTED_MODULE_1__.default)(i, arr);
        arr.forEach(item => {
          if (item.index > i) {
            item.index -= 1;
          };
        });
        localStorage.setItem('toDoList', JSON.stringify(arr));
        list.innerHTML = '';
        genHTML(list, arr);
        console.log('clicked on the button');
      }
    });

    desc.addEventListener('click', () => {
      desc.setAttribute('contenteditable', 'true');
    });
    desc.addEventListener('click', (e) => {
      e.preventDefault();
    }, false);
    desc.addEventListener('focus', () => {
      desc.parentElement.parentElement.classList.add('bisque-bkg');
      desc.parentElement.nextElementSibling.classList.add('red');
      desc.parentElement.nextElementSibling.classList.replace('fa-ellipsis-v', 'fa-trash-alt');
    });
    desc.addEventListener('blur', () => {
      arr[i].description = desc.innerHTML;
      localStorage.setItem('toDoList', JSON.stringify(arr));
      setTimeout(() => {
        desc.parentElement.parentElement.classList.remove('bisque-bkg');
        desc.parentElement.nextElementSibling.classList.remove('red');
        desc.parentElement.nextElementSibling.classList.replace('fa-trash-alt', 'fa-ellipsis-v');
        desc.setAttribute('contenteditable', 'false');
      }, 150);
    });

    descCont.appendChild(checkbox);
    descCont.appendChild(desc);

    item.appendChild(descCont);
    item.appendChild(itemIcon);

    list.appendChild(item);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDZjs7QUFFZjtBQUNmLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFhO0FBQ25CLEtBQUs7QUFDTCw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0EsK0JBQStCLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxnREFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jaGVja19jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZW5faHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0NvbXBsZXRlKGFycikge1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyW2ldLmNvbXBsZXRlZCA9IGNoZWNrYm94ZXNbaV0uY2hlY2tlZDtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmUobnVtLCBsaXN0KSB7XG4gIGxpc3Quc3BsaWNlKG51bSwgMSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgY29uc29sZS5sb2coJ3JlbW92ZSBpcyBydW5uaW5nJyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2hlY2tDb21wbGV0ZSBmcm9tICcuL2NoZWNrX2NvbXBsZXRlJztcbmltcG9ydCByZW1vdmUgZnJvbSAnLi9yZW1vdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5IVE1MKGxpc3QsIGFycikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGRlc2NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gICAgZGVzY0NvbnQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY2hlY2tDb21wbGV0ZShhcnIpO1xuICAgIH0pO1xuICAgIGNoZWNrYm94LmlkID0gYGNoZWNrYm94LSR7aX1gO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGFycltpXS5jb21wbGV0ZWQ7XG4gICAgZGVzYy5odG1sRm9yID0gYGNoZWNrYm94LSR7aX1gO1xuICAgIGRlc2MuaW5uZXJIVE1MID0gYXJyW2ldLmRlc2NyaXB0aW9uO1xuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICB9XG4gICAgaXRlbUljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWVsbGlwc2lzLXYnLCAnaXRlbS1pY29uJyk7XG5cbiAgICBpdGVtSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpdGVtSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlZCcpKSB7XG4gICAgICAgIHJlbW92ZShpLCBhcnIpO1xuICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pbmRleCA+IGkpIHtcbiAgICAgICAgICAgIGl0ZW0uaW5kZXggLT0gMTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGdlbkhUTUwobGlzdCwgYXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgb24gdGhlIGJ1dHRvbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIH0pO1xuICAgIGRlc2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBkZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgZGVzYy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmlzcXVlLWJrZycpO1xuICAgICAgZGVzYy5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgIGRlc2MucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlcGxhY2UoJ2ZhLWVsbGlwc2lzLXYnLCAnZmEtdHJhc2gtYWx0Jyk7XG4gICAgfSk7XG4gICAgZGVzYy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgYXJyW2ldLmRlc2NyaXB0aW9uID0gZGVzYy5pbm5lckhUTUw7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZXNjLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiaXNxdWUtYmtnJyk7XG4gICAgICAgIGRlc2MucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICAgIGRlc2MucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlcGxhY2UoJ2ZhLXRyYXNoLWFsdCcsICdmYS1lbGxpcHNpcy12Jyk7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfSk7XG5cbiAgICBkZXNjQ29udC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgZGVzY0NvbnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2NDb250KTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=