const form = document.getElementById("meuForm");
const listaComentarios = document.getElementById("lista-comentarios");

// Verifica se o formulário existe na página atual antes de rodar o código
if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault(); 
        
        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;
        
        const novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario");
        novoComentario.innerHTML = `<p><strong>${nome}:</strong> ${mensagem}</p>`;
        
        listaComentarios.appendChild(novoComentario);
        
        form.reset(); 
    });
}