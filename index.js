document.getElementById('btnStart').addEventListener('click', function () {
    const pagenumber = document.getElementById('pageNumber').value

    if (pageNumber) {
        const chapterId = 'Capitulo ' + pagenumber
        const chapterElement = document.getElementById(chapterId)
        if (chapterElement) {
            chapterElement.scrollIntoView({behavior: 'smooth'})
            document.getElementById('pageNumber').value = ''
        }else {
            alert('Capitulo não encontrado!')
        }

    }else {
        alert('Por favor, inserir o número de um cápitulo válido.')
    }
})