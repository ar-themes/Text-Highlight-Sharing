!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.HighlightShareViaEmail=e.HighlightShareViaEmail||{})}(this,function(e){"use strict";function n(e,n,t){return'<a href="'+this.getShareUrl(e,t)+'" target="_blank" rel="noopener nofollow noreferrer">\n              <svg xmlns="http://www.w3.org/2000/svg" viewbox="-9 -9 96 96">\n                <path d="M1 12c-.553 0-1 .447-1 1v52c0 .553.447 1 1 1h76c.553 0 1-.447 1-1V13c0-.553-.447-1-1-1H1zm68.816 6L39 40.594 8.184 18h61.632zM72 60H6V23.84l29.452 21.593 3.548 2.6 3.548-2.6L72 23.838V60z" fill="currentcolor"></path>\n              </svg>\n            </a>'}function t(e,n){return"mailto:?body="+encodeURIComponent(e)+"%0a%0a"+encodeURIComponent(n)}e.render=n,e.getShareUrl=t,e.name="email",Object.defineProperty(e,"__esModule",{value:!0})});