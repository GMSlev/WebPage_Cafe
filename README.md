# ☕ Originne - Café Especial Premium

A **Originne** é uma landing page moderna e responsiva desenvolvida para expressar a sofisticação e o cuidado artesanal envolvidos na produção de cafés especiais. O projeto combina design limpo, tipografia elegante, paleta de cores terrosa e funcionalidades interativas.

---

## 📋 Visão Geral

| Aspecto | Descrição |
|--------|-----------|
| **Tipo** | Landing Page - Café Artesanal |
| **Status** | Em desenvolvimento |
| **Responsividade** | Mobile-first, Desktop-optimized |
| **Stack** | HTML5 + CSS3 + Vanilla JavaScript |
| **Dependências** | Nenhuma (Zero dependencies) |

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando apenas tecnologias web fundamentais (sem frameworks):

### HTML5
- Estrutura semântica com tags modernas (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Meta tags para responsividade e SEO

### CSS3
- **Flexbox & Grid:** Alinhamentos precisos e layouts responsivos
- **CSS Variables (Custom Properties):** Paleta de cores dinâmica e fácil manutenção
- **Media Queries:** Adaptação para diferentes tamanhos de tela
- **Transições e Animações:** Efeitos suaves e modernos
- **Position Sticky:** Cabeçalho fixo durante scroll
- **Pseudo-elementos:** Barra deslizante no menu (`:after`)

### JavaScript (Vanilla)
- Sistema de tema dinâmico (Dark/Light Mode)
- Detecção de preferência do usuário via `localStorage`
- Event listeners para interatividade
- Verificação de DOM readiness

### Google Fonts
- **Montserrat:** Títulos e navegação
- **Raleway:** Corpos de texto

---

## ✨ Funcionalidades Implementadas

### ✅ Header & Navegação
- [x] Logo com icon do site
- [x] Menu de navegação centralizado
- [x] Barra deslizante elegante sob links (hover effect)
- [x] Botão toggle de tema (Dark/Light)
- [x] Header sticky no topo

### ✅ Seção Home
- [x] Card de boas-vindas com texto atrativo
- [x] Imagem com fundo transparente (PNG)
- [x] Responsividade para mobile/tablet
- [x] Botão CTA "Descubra a Origem"

### ✅ Seção Sobre
- [x] Storytelling da marca
- [x] Destaque em palavras-chave (spans coloridas)
- [x] Frase de impacto com styling especial

### ✅ Seção Produtos
- [x] Grade dinâmica de produtos (Grid responsivo)
- [x] Cards com nome, preço e notas de sabor
- [x] Efeitos de hover interativos
- [x] Uso de `<article>` para semântica HTML

### ✅ Tema Dark/Light
- [x] Toggle button com emoji (🌙 / ☀️)
- [x] Duas paletas de cores completas
- [x] Persistência via `localStorage`
- [x] Transições suaves entre temas
- [x] Suporte a preferências do sistema

### ✅ Responsividade
- [x] Mobile (480px)
- [x] Tablet (768px)
- [x] Desktop (1920px+)

---

## 🎨 Paleta de Cores

### 🌙 Modo Escuro (Dark Mode - Padrão)

| Cor | Hex | Uso |
|-----|-----|-----|
| **Main** | `#1a1b1c` | Fundo principal |
| **Primary** | `#4B2C20` | Header, Cards, Seções |
| **Secondary** | `#D4A373` | Destaques, Títulos secundários |
| **Accent** | `#BC6C25` | CTAs, Barra de hover |
| **Text** | `#E8E8E8` | Texto principal |
| **White** | `#ffffff` | Textos claros |

### ☀️ Modo Claro (Light Mode)

| Cor | Hex | Uso |
|-----|-----|-----|
| **Main** | `#F5F1ED` | Fundo principal |
| **Primary** | `#8B5A3C` | Header, Cards, Seções |
| **Secondary** | `#C68642` | Destaques, Títulos |
| **Accent** | `#D4814F` | CTAs, Barra de hover |
| **Text** | `#2C2C2C` | Texto principal |
| **White** | `#1a1b1c` | Títulos escuros |

---

## 📁 Estrutura de Arquivos

```
WebPage_Cafe/
├── index.html              # Página principal
├── style.css               # Estilos globais e responsivos
├── javascript.js           # Funcionalidades (Tema Dark/Light)
├── README.md              # Documentação
├── .git/                  # Controle de versão
└── img/                   # Pasta de imagens
    ├── Originne Logo.png
    ├── COFFEE.jpg
    └── Produto.png
```

---

## 🎯 Como Usar Localmente

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhum servidor necessário (arquivos estáticos)

### Instalação
```bash
# Clone o repositório (ou baixe os arquivos)
git clone https://github.com/GMSlev/WebPage_Cafe.git

# Navegue até a pasta
cd WebPage_Cafe

# Abra no navegador
# Opção 1: Clique duplo no index.html
# Opção 2: Use a extensão Live Server do VS Code
# Opção 3: Python http.server
python -m http.server 8000  # Acesse http://localhost:8000
```

---

## 🔧 JavaScript - Funcionalidade de Tema

### Arquitetura
```javascript
initTheme()
├── Procura o botão de tema
├── initializeTheme()
│   └── Lê tema salvo (localStorage)
├── updateThemeButton()
│   └── Muda emoji (🌙 / ☀️)
└── toggleTheme()
    └── Alterna e salva tema
```

### LocalStorage
- **Chave:** `'theme'`
- **Valores:** `'dark'` ou `'light'`
- **Persistência:** Mantém a escolha do usuário entre visitas

---

## 🚧 Próximas Funcionalidades

| Prioridade | Funcionalidade | Status |
|-----------|-----------------|--------|
| 🔴 Alta | Formulário de Contato | ⏳ Planejado |
| 🔴 Alta | Seção de Depoimentos | ⏳ Planejado |
| 🟡 Média | Blog/Artigos | ⏳ Planejado |
| 🟡 Média | Carrossel de Imagens | ⏳ Planejado |
| 🟢 Baixa | Carrinho de Compras | ⏳ Futuro |
| 🟢 Baixa | Animações de Scroll | ⏳ Futuro |

---

## 💡 Melhorias Recentes

- ✨ Sistema de tema dark/light com localStorage
- ✨ Barra deslizante elegante no menu
- ✨ Estrutura HTML semântica com `<article>` para produtos
- ✨ Paleta de cores dinâmica (light mode implementado)
- ✨ Menu centralizado com flexbox
- ✨ Imagens responsivas e otimizadas

---

## 📱 Testes de Responsividade

- ✅ **Mobile:** iPhone 12, Samsung S21 (480px)
- ✅ **Tablet:** iPad Air (768px)
- ✅ **Desktop:** 1920px+
- ✅ **Modos:** Dark e Light

---

## 🔍 SEO & Performance

- Semântica HTML5 adequada
- Meta tags para mobile
- Fontes otimizadas (Google Fonts)
- Imagens PNG com transparência
- Zero dependências externas (performance otimizada)
- Scroll suave nativo (CSS)

---

## 📄 Licença

Este projeto é de uso livre. Desenvolvido por **Gabriel Martinez**.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Abra uma issue ou faça um pull request.

---

## 📞 Contato

- **Repositório:** [GitHub - WebPage_Cafe](https://github.com/GMSlev/WebPage_Cafe)
- **Branch:** Main (produção)

---

**Última atualização:** 2 de Abril de 2026  
**Versão:** 1.1.0
