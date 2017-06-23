var script = document.createElement('script');
script.onload = function (){console.log('mathjax loaded');};
script.type = 'text/javascript';
script.src = '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML';
document.getElementsByTagName('head')[0].appendChild(script);
