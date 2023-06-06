// Datos de ejemplo, en la vida real estos serían recuperados de una base de datos
const data = [
    { title: 'Noticia 1', content: 'Contenido de la noticia 1.' },
    { title: 'Noticia 2', content: 'Contenido de la noticia 2.' },
    // Agrega más datos aquí...
];

window.onload = function() {
    const contentDiv = document.getElementById('content');
    data.forEach(item => {
        const box = document.createElement('div');
        box.classList.add('box');
        const title = document.createElement('h2');
        title.textContent = item.title;
        const content = document.createElement('p');
        content.textContent = item.content;
        box.appendChild(title);
        box.appendChild(content);
        contentDiv.appendChild(box);
    });
};
