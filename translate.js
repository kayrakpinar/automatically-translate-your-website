function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
/* Include Many js files */
include("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");


var userLang = navigator.language || navigator.userLanguage;
var userLang = userLang.substring(0, 2);

function googleTranslateElementInit() {
     new google.translate.TranslateElement({
          pageLanguage: 'tr',
          includedLanguages: userLang
     }, 'google_translate_element');
     setTimeout(function() {
          var select = document.querySelector('select.goog-te-combo');
          select.value = userLang;
          select.dispatchEvent(new Event('change'));
     }, 1000)
}

