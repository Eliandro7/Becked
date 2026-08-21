# Copa dos Consoles 🕹️

> Um álbum de figurinhas digital e interativo 3D dedicado aos jogos lendários e capas icônicas que marcaram gerações de consoles.

![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)
![Backend](https://img.shields.io/badge/Backend-FastAPI%20%2F%20Python-green)
![PageFlip](https://img.shields.io/badge/3D%20Flipbook-PageFlip.js-purple)

---

## 🌟 Sobre o Projeto

O **Memorial games** é um álbum de capas web interativo com tema Gamer. As 40 capas estão organizadas por consoles icônicos:

1. 🕹️ **Nitendo**
2. 🎮 **Playstation**
4. 🟢 **Xbox**
5. 🟣**Pc**

---

## 🚀 Funcionalidades

- ⚡ **Integração com Backend FastAPI:** Figurinhas e capas de jogos consumidas dinamicamente do endpoint `/figurinhas`.
- 🎨 **Estilização por Consoles:** Badges e tags com cores e estilos característicos de cada plataforma (Nitendo,PlayStation,Xbox,pc).
- 🧠 **QUIZ** Relacionado as jogos

---

## 📁 Estrutura de Arquivos

```text
Games-Album/
├── frontend/
│   ├── index.html     # Estrutura HTML do álbum, capa, contracapa e páginas por console
│   ├── app.js         # Lógica do flipbook 3D, áudio sintetizado e consumo do backend
│   └── style.css      # Estilos dos badges de consoles, slots de capas e animações 3D
├── backend/
│   ├── main.py        # API RESTful FastAPI servindo as 30 figurinhas de jogos
│   ├── requirements.txt # Dependências do backend
│   └── static/        # Pasta de imagens de capas gerenciada pela API
└── README.md          # Documentação do projeto
```

---

## 🛠️ Como Executar o Projeto

1. **Iniciar o Backend (FastAPI):**
   Para rodar o backend, navegue até a pasta `backend/` e execute o uvicorn:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

2. **Abrir o Frontend:**
   - Abra o arquivo [`index.html`](file:///c:/Games/Becked/frontend/index.html) no seu navegador ou utilize o Live Server.
  
3. **Link para a pagina**  https://eliandro7.github.io/Becked/frontend/index.html
