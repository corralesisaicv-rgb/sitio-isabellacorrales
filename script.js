// Mejora de accesibilidad: resalta foco al navegar con tab
document.addEventListener('keydown', (e)=>{ if(e.key==='Tab'){ document.body.classList.add('show-focus'); } });