// ===== TEMA CLARO/ESCURO =====
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle'); // Executa quando o botão de tema for clicado
    const htmlElement = document.documentElement; // Irá acessar o elemento no html para alterar o tema 
    
    //Bloco de segurança para verificar se os elementos existem
    if (!themeToggle) {
        console.error('Botão de tema não encontrado');
        return;
    }

    // Detectar preferência do usuário ou usar a salva
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Padrão para 'dark' se não houver preferência salva
        htmlElement.setAttribute('data-theme', savedTheme); // Define o tema no elemento HTML 
        updateThemeButton(savedTheme); // Atualiza o ícone do botão de acordo com o tema atual
    }

    function updateThemeButton(theme) { // Atualiza o ícone do botão de acordo com o tema atual
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙'; // Altera o ícone conforme o tema 
    }

    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme'); // Obtém o tema atual do elemento HTML
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Alterna entre os temas
        
        htmlElement.setAttribute('data-theme', newTheme); //Define outro tema no HTML
        localStorage.setItem('theme', newTheme); // Armazena a preferência do usuário no localStorage 
        updateThemeButton(newTheme); // Atualiza o ícone do botão de acordo com o novo tema
        console.log('Tema alterado para:', newTheme); // Log para verificar o comportamento do tema
    }

    // Event listener para o botão
    themeToggle.addEventListener('click', toggleTheme); //Adiciona um ouvinte de evento para o clique no botão de tema, chamando a função toggleTheme

    // Inicializar o tema ao carregar a página
    initializeTheme();
}

// Esperar o DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}