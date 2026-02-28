const form = document.getElementById("meuForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(e){
    e.preventDefault(); // evita recarregar a página
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    resultado.textContent = `Olá, ${nome}! Sua mensagem foi: "${mensagem}"`;
    form.reset(); // limpa os campos
});