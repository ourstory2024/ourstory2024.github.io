// 网站主题切换模式开始 
if (localStorage.getItem('themespring') === '1') { document.body.classList.add('themespring'); } else if (matchMedia('(prefers-color-scheme: themespring)').matches) { document.body.classList.add('themespring'); } function switchThemes() { var body = document.body; if(body.classList.contains('themespring')){ document.body.classList.remove('themespring'); localStorage.setItem('themespring','0'); return; } else { document.body.classList.add('themespring'); localStorage.setItem('themespring','1'); return; } }; // 网站主题切换模式结束
