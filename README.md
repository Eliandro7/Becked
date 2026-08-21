# 🎮 Alura Games Album - Copa dos Consoles 🕹️

> Um álbum de figurinhas digital e interativo 3D dedicado aos jogos lendários e capas icônicas que marcaram gerações de consoles.

![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)
![Backend](https://img.shields.io/badge/Backend-FastAPI%20%2F%20Python-green)
![PageFlip](https://img.shields.io/badge/3D%20Flipbook-PageFlip.js-purple)

---

## 🌟 Sobre o Projeto

O **Alura Games Album** é um álbum de figurinhas web interativo com tema Gamer. As 30 figurinhas estão organizadas por consoles icônicos:

1. 🕹️ **SNES (Super Nintendo):** *Super Mario World, Chrono Trigger, Donkey Kong Country, Zelda A Link to the Past, Super Metroid*
2. 🎮 **PlayStation 2 (PS2):** *GTA San Andreas, God of War II, Shadow of the Colossus, Resident Evil 4, NFS Most Wanted*
3. 🎮 **PlayStation 3 (PS3):** *The Last of Us, Uncharted 2, Red Dead Redemption, Metal Gear Solid 4, God of War III*
4. 🟢 **Xbox Classic:** *Halo Combat Evolved, Halo 2, Fable, Star Wars KOTOR, Ninja Gaiden Black*
5. 🟢 **Xbox 360:** *Halo 3, Gears of War 2, Forza Horizon, Left 4 Dead 2, BioShock*
6. 🏆 **PS4 & Clássicos Modernos:** *God of War (2018), The Witcher 3, Red Dead Redemption 2, Elden Ring, Grand Theft Auto V*

---

## 🚀 Funcionalidades

- 📖 **Folheamento 3D Realista:** Animação fluida de dobradura das páginas usando mouse, gestos de toque (touch) ou setas do teclado (`←` e `→`).
- 🔊 **Efeito Sonoro Dinâmico:** Ruído e filtro de papel sintetizado via Web Audio API.
- ⚡ **Integração com Backend FastAPI:** Figurinhas e capas de jogos consumidas dinamicamente do endpoint `/figurinhas`.
- 🎨 **Estilização por Consoles:** Badges e tags com cores e estilos característicos de cada plataforma (SNES, PS2, PS3, Xbox, Xbox 360, PS4).

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
