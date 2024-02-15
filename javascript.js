/* JS PARA O MENU LATERAL */
function changeContent(contentId) {
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active'); // Remove a classe 'active' de todos os conteúdos
    }
    document.getElementById(contentId).classList.add('active'); // Adiciona a classe 'active' ao conteúdo correspondente

    // Ajusta a margem esquerda do wrapper do conteúdo para exibir o conteúdo ativo
    var sidebarWidth = document.querySelector('.sidebar').offsetWidth;
    document.getElementById('content-wrapper').style.marginLeft = sidebarWidth + 'px';
}

/* FIM DO JS PARA O MENU LATERAL */
