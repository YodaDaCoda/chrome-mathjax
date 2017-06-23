var script = document.createElement('script');
script.onload = function (){console.log('mathjax loaded');};
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML';
document.getElementsByTagName('head')[0].appendChild(script);
