const imagem = document.querySelector('.imagem');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar');
const legenda = document.querySelector('.legenda');

imagem.addEventListener('click',() => {
    modal.style.display = "block";
    fechar.style.display = "block"
    imagem.style.display = 'none'
    legenda.style.display = 'block'
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
})
fechar.addEventListener('click',() => {
    modal.style.display = "none";
    fechar.style.display = "none";
    imagem.style.display = 'block';
    legenda.style.display = 'none';
    document.body.style.backgroundColor = "white";
})
