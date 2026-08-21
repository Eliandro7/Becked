const API_BASE_URL = "http://localhost:8000";

const platforms = {
  playstation: {
    label: "PlayStation",
    emoji: "△ ○ × □",
    accent: "#4d8dff",
    soft: "rgba(77,141,255,.20)",
    description: "Explore alguns dos jogos mais marcantes associados ao ecossistema PlayStation, misturando aventura, ação, RPG e grandes narrativas.",
    games: [
      [1, "God of War Ragnarök", 2022, "Ação / Aventura", "Santa Monica Studio", "Kratos e Atreus encaram as consequências do Ragnarök em uma jornada épica pelos Nove Reinos."],
      [2, "The Last of Us Part II", 2020, "Ação / Drama", "Naughty Dog", "Uma história intensa sobre perda, vingança e consequências em um mundo pós-apocalíptico."],
      [3, "Ghost of Tsushima", 2020, "Ação / Mundo aberto", "Sucker Punch", "Jin Sakai luta para proteger Tsushima enquanto precisa escolher entre tradição samurai e novas táticas."],
      [4, "Marvel's Spider-Man 2", 2023, "Ação / Aventura", "Insomniac Games", "Peter Parker e Miles Morales enfrentam novas ameaças em uma Nova York ainda mais dinâmica."],
      [5, "Horizon Forbidden West", 2022, "RPG / Ação", "Guerrilla Games", "Aloy parte para o Oeste Proibido em busca de respostas para salvar o futuro do planeta."],
      [6, "Bloodborne", 2015, "RPG / Soulslike", "FromSoftware", "Uma jornada sombria pela cidade amaldiçoada de Yharnam, marcada por horror gótico e combate desafiador."],
      [7, "Uncharted 4", 2016, "Ação / Aventura", "Naughty Dog", "Nathan Drake retorna para uma última aventura atrás de um lendário tesouro pirata."],
      [8, "Demon's Souls", 2020, "RPG / Soulslike", "Bluepoint Games", "Um remake visualmente impressionante do clássico que ajudou a definir o gênero soulslike."],
      [9, "Gran Turismo 7", 2022, "Corrida / Simulação", "Polyphony Digital", "Experiência automobilística com centenas de carros, pistas e foco em realismo."],
      [10, "Ratchet & Clank: Rift Apart", 2021, "Ação / Plataforma", "Insomniac Games", "Uma aventura veloz por dimensões diferentes, aproveitando transições quase instantâneas."]
    ]
  },

  xbox: {
    label: "Xbox",
    emoji: "◉ XBOX",
    accent: "#42c65a",
    soft: "rgba(66,198,90,.19)",
    description: "Uma seleção de franquias conhecidas no Xbox, com ação, corrida, RPG, exploração e grandes experiências multiplayer.",
    games: [
      [11, "Halo Infinite", 2021, "FPS / Ficção científica", "343 Industries", "Master Chief retorna para enfrentar uma nova ameaça em um vasto anel Halo."],
      [12, "Forza Horizon 5", 2021, "Corrida / Mundo aberto", "Playground Games", "Explore o México em um festival automobilístico cheio de desafios, carros e eventos."],
      [13, "Gears 5", 2019, "Ação / Tiro", "The Coalition", "Kait Diaz investiga segredos ligados à origem dos Locust enquanto uma nova ameaça cresce."],
      [14, "Starfield", 2023, "RPG / Ficção científica", "Bethesda Game Studios", "Um RPG espacial focado em exploração, criação de personagem e centenas de mundos."],
      [15, "Hi-Fi Rush", 2023, "Ação / Ritmo", "Tango Gameworks", "Combate estiloso sincronizado com a música em uma aventura cheia de personalidade."],
      [16, "Ori and the Will of the Wisps", 2020, "Metroidvania", "Moon Studios", "Uma aventura emocional com exploração fluida, plataformas e belíssima direção de arte."],
      [17, "Sea of Thieves", 2018, "Aventura / Multiplayer", "Rare", "Navegue, explore ilhas e viva aventuras piratas em um mundo compartilhado."],
      [18, "Microsoft Flight Simulator", 2020, "Simulação", "Asobo Studio", "Uma simulação de voo em escala global com alto nível de detalhe e realismo."],
      [19, "Grounded", 2022, "Sobrevivência", "Obsidian Entertainment", "Encolhido ao tamanho de um inseto, o jogador precisa sobreviver em um quintal gigantesco."],
      [20, "State of Decay 2", 2018, "Sobrevivência / Zumbis", "Undead Labs", "Administre uma comunidade e sobreviva a um mundo dominado por zumbis."]
    ]
  },

  nintendo: {
    label: "Nintendo",
    emoji: "● NINTENDO",
    accent: "#ff4b55",
    soft: "rgba(255,75,85,.19)",
    description: "Jogos marcantes do universo Nintendo, conhecidos pela criatividade, identidade visual forte e mecânicas acessíveis e inventivas.",
    games: [
      [21, "The Legend of Zelda: Tears of the Kingdom", 2023, "Aventura / Mundo aberto", "Nintendo", "Link explora Hyrule, os céus e as profundezas usando habilidades criativas para resolver desafios."],
      [22, "Super Mario Odyssey", 2017, "Plataforma / Aventura", "Nintendo", "Mario viaja por reinos variados acompanhado de Cappy em busca de Peach."],
      [23, "Mario Kart 8 Deluxe", 2017, "Corrida", "Nintendo", "Corridas caóticas com personagens, itens e pistas inspiradas em várias franquias Nintendo."],
      [24, "Super Smash Bros. Ultimate", 2018, "Luta", "Bandai Namco / Sora", "Um enorme crossover que reúne dezenas de personagens históricos dos videogames."],
      [25, "Metroid Dread", 2021, "Ação / Metroidvania", "MercurySteam", "Samus explora o planeta ZDR enquanto enfrenta criaturas e máquinas perseguidoras."],
      [26, "Animal Crossing: New Horizons", 2020, "Simulação social", "Nintendo", "Construa e personalize sua própria ilha enquanto interage com moradores e visitantes."],
      [27, "Splatoon 3", 2022, "Tiro / Multiplayer", "Nintendo", "Combates coloridos nos quais equipes disputam território usando tinta."],
      [28, "Fire Emblem: Three Houses", 2019, "RPG / Estratégia", "Intelligent Systems", "Estratégia por turnos com relações entre personagens e escolhas que alteram a história."],
      [29, "Luigi's Mansion 3", 2019, "Aventura", "Next Level Games", "Luigi explora um hotel assombrado e captura fantasmas com equipamentos especiais."],
      [30, "Kirby and the Forgotten Land", 2022, "Plataforma / Aventura", "HAL Laboratory", "Kirby explora ambientes tridimensionais e absorve habilidades em um mundo misterioso."]
    ]
  },

  pc: {
    label: "PC",
    emoji: "⌨ PC GAMING",
    accent: "#9c78ff",
    soft: "rgba(156,120,255,.19)",
    description: "No PC, diferentes gêneros e comunidades convivem lado a lado, indo de estratégia e simulação até RPG, survival e grandes experiências online.",
    games: [
      [31, "Cyberpunk 2077", 2020, "RPG / Ação", "CD Projekt Red", "Um RPG futurista ambientado em Night City, com narrativa, exploração e grande liberdade de construção."],
      [32, "Baldur's Gate 3", 2023, "RPG", "Larian Studios", "Um RPG baseado em escolhas, combate tático e liberdade para resolver situações de inúmeras maneiras."],
      [33, "Minecraft", 2011, "Sandbox / Sobrevivência", "Mojang", "Construa, explore e sobreviva em mundos gerados proceduralmente usando blocos."],
      [34, "Counter-Strike 2", 2023, "FPS competitivo", "Valve", "Tiro competitivo tático baseado em equipes, economia e domínio de mapas."],
      [35, "League of Legends", 2009, "MOBA", "Riot Games", "Duas equipes competem para destruir a base adversária utilizando campeões com habilidades únicas."],
      [36, "Dota 2", 2013, "MOBA", "Valve", "MOBA estratégico conhecido por sua profundidade, variedade de heróis e alto nível competitivo."],
      [37, "Cities: Skylines", 2015, "Simulação / Gestão", "Colossal Order", "Construa e administre uma cidade cuidando de trânsito, serviços, economia e expansão urbana."],
      [38, "Stardew Valley", 2016, "Simulação / RPG", "ConcernedApe", "Cuide de uma fazenda, conheça moradores e explore minas em uma experiência relaxante."],
      [39, "Hades", 2020, "Roguelike / Ação", "Supergiant Games", "Zagreus tenta escapar do submundo em combates rápidos e uma narrativa que evolui a cada tentativa."],
      [40, "Terraria", 2011, "Sandbox / Aventura", "Re-Logic", "Explore, construa e enfrente criaturas em um vasto mundo 2D cheio de progressão e descobertas."]
    ]
  }
};

const quiz = [
  { q: "Qual jogo acompanha Kratos e Atreus durante os acontecimentos ligados ao Ragnarök?", a: ["Ghost of Tsushima", "God of War Ragnarök", "Bloodborne", "Halo Infinite"], c: 1 },
  { q: "Qual jogo da seleção de Xbox é ambientado em um festival automobilístico no México?", a: ["Forza Horizon 5", "Gears 5", "Starfield", "Sea of Thieves"], c: 0 },
  { q: "Em qual jogo da Nintendo Link explora Hyrule, os céus e as profundezas?", a: ["Super Mario Odyssey", "Metroid Dread", "Tears of the Kingdom", "Luigi's Mansion 3"], c: 2 },
  { q: "Qual jogo de PC é focado em construção e administração de cidades?", a: ["Hades", "Cities: Skylines", "Dota 2", "Terraria"], c: 1 },
  { q: "Qual estúdio desenvolveu The Last of Us Part II?", a: ["Naughty Dog", "Valve", "Rare", "Nintendo"], c: 0 },
  { q: "Qual título usa combate sincronizado com música?", a: ["Halo Infinite", "Grounded", "Hi-Fi Rush", "Starfield"], c: 2 },
  { q: "Qual jogo é conhecido por reunir dezenas de personagens históricos dos videogames em batalhas?", a: ["Splatoon 3", "Super Smash Bros. Ultimate", "Fire Emblem", "Mario Kart 8 Deluxe"], c: 1 },
  { q: "Qual dos jogos de PC é um RPG futurista ambientado em Night City?", a: ["Minecraft", "Cyberpunk 2077", "Baldur's Gate 3", "Stardew Valley"], c: 1 },
  { q: "Qual jogo da seleção PlayStation possui forte inspiração em horror gótico?", a: ["Gran Turismo 7", "Bloodborne", "Ratchet & Clank", "Spider-Man 2"], c: 1 },
  { q: "Em qual jogo o jogador pode navegar pelos mares vivendo aventuras piratas em um mundo compartilhado?", a: ["Sea of Thieves", "State of Decay 2", "Ori", "Gears 5"], c: 0 },
  { q: "Qual jogo da Nintendo é uma simulação social em uma ilha?", a: ["Animal Crossing: New Horizons", "Metroid Dread", "Splatoon 3", "Kirby"], c: 0 },
  { q: "Qual jogo de PC é um MOBA desenvolvido pela Valve?", a: ["League of Legends", "Counter-Strike 2", "Dota 2", "Terraria"], c: 2 }
];

let currentPlatform = "playstation";
let quizIndex = 0;
let score = 0;
let answered = false;

const nav = document.getElementById("nav");
const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");

// Inicialização de abas
Object.entries(platforms).forEach(([key, p], i) => {
  const btn = document.createElement("button");
  btn.className = "nav-btn" + (i === 0 ? " active" : "");
  btn.textContent = p.label;
  btn.onclick = () => switchPlatform(key);
  btn.dataset.key = key;
  nav.appendChild(btn);
});

// Busca dinâmica no backend (FastAPI)
async function carregarDatasetFigurinhas() {
  try {
    const response = await fetch(`${API_BASE_URL}/figurinhas`);
    if (response.ok) {
      const data = await response.json();
      
      // Limpa os jogos das plataformas atuais
      Object.keys(platforms).forEach(k => {
        platforms[k].games = [];
      });

      // Distribui os jogos retornados da API
      data.forEach(item => {
        const cat = item.categoria;
        if (platforms[cat]) {
          platforms[cat].games.push([
            item.id,
            item.nome,
            item.ano,
            item.genero,
            item.desenvolvedora,
            item.descricao,
            item.imagem_url
          ]);
        }
      });

      // Atualiza a visualização atual
      switchPlatform(currentPlatform);
    }
  } catch (e) {
    console.info("ℹ️ Usando dataset local fallback (offline).");
  }
}

function handleImageError(img, id, title, platformKey) {
  const extensions = [".png", ".jpg", ".jpeg", ".webp"];
  const currentSrc = img.src || "";
  
  let currentExt = "";
  for (const ext of extensions) {
    if (currentSrc.endsWith(ext)) {
      currentExt = ext;
      break;
    }
  }
  
  const currentIdx = extensions.indexOf(currentExt);
  const nextIdx = currentIdx + 1;
  const numStr = id < 10 ? '0' + id : id;
  
  if (nextIdx < extensions.length) {
    img.src = `capas/${numStr}${extensions[nextIdx]}`;
  } else {
    img.src = gerarCapaSVG(id, title, platformKey);
    img.onerror = null; // Evita loop infinito
  }
}

function gerarCapaSVG(id, title, platformKey) {
  const p = platforms[platformKey];
  const accentColor = p ? p.accent : "#4d8dff";
  const numStr = id < 10 ? '0' + id : id;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450">
    <defs>
      <linearGradient id="grad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#12141c"/>
        <stop offset="100%" stop-color="#07080c"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad-${id})" rx="18"/>
    <rect width="100%" height="100%" fill="none" stroke="${accentColor}" stroke-opacity="0.35" stroke-width="4" rx="18"/>
    
    <rect x="15" y="15" width="100" height="24" rx="6" fill="${accentColor}" fill-opacity="0.12"/>
    <text x="65" y="30" fill="${accentColor}" font-family="sans-serif" font-weight="900" font-size="10" text-anchor="middle" letter-spacing="1">${p ? p.label.toUpperCase() : ""}</text>
    
    <circle cx="150" cy="200" r="55" fill="rgba(255,255,255,0.02)" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="2"/>
    <text x="150" y="212" fill="${accentColor}" font-family="sans-serif" font-weight="900" font-size="34" text-anchor="middle">#${numStr}</text>
    
    <rect y="350" width="100%" height="100" fill="rgba(0,0,0,0.85)" rx="0 0 18 18"/>
    <text x="150" y="400" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle">${title}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function coverUrl(id, title, platformKey, customImgUrl) {
  if (customImgUrl && customImgUrl.trim().length > 0) {
    // Se a imagem veio da API, resolve a URL
    return customImgUrl.startsWith("http") ? customImgUrl : `${API_BASE_URL}${customImgUrl}`;
  }
  const numStr = id < 10 ? '0' + id : id;
  return `capas/${numStr}.png`;
}

function switchPlatform(key) {
  currentPlatform = key;
  const p = platforms[key];
  document.documentElement.style.setProperty("--accent", p.accent);
  document.documentElement.style.setProperty("--accent-soft", p.soft);

  document.getElementById("heroEyebrow").textContent = "🎮 " + p.emoji;
  document.getElementById("heroTitle").textContent = p.label;
  document.getElementById("heroText").textContent = p.description;
  document.getElementById("sectionTitle").textContent = "Jogos de " + p.label;
  document.getElementById("sectionText").textContent = `${p.games.length} títulos selecionados para esta plataforma.`;

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.key === key));
  search.value = "";
  renderGames(p.games);
  backToCatalog(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderGames(games) {
  grid.innerHTML = "";
  if (!games.length) {
    grid.innerHTML = '<div class="empty">Nenhum jogo encontrado.</div>';
    return;
  }
  games.forEach((g) => {
    const [id, title, year, genre, studio, desc, customImgUrl] = g;
    const card = document.createElement("article");
    card.className = "game-card";
    card.innerHTML = `
      <div class="cover">
        <img loading="lazy" src="${coverUrl(id, title, currentPlatform, customImgUrl)}" alt="${title}" onerror="handleImageError(this, ${id}, \`${title.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, '${currentPlatform}')">
        <div class="cover-overlay">
          <div class="quick">
            <span class="chip">#${id}</span>
            <span class="chip">${year}</span>
            <span class="chip">${genre}</span>
          </div>
        </div>
      </div>
      <div class="game-info">
        <h3 class="game-title">#${id} - ${title}</h3>
        <div class="game-meta"><span>${year}</span><span>•</span><span>${genre}</span></div>
      </div>`;
    card.onclick = () => openModal(g);
    grid.appendChild(card);
  });
}

search.addEventListener("input", () => {
  const term = search.value.trim().toLowerCase();
  const games = platforms[currentPlatform].games.filter(g =>
    g.slice(1, 6).join(" ").toLowerCase().includes(term)
  );
  renderGames(games);
});

function openModal(game) {
  const [id, title, year, genre, studio, desc] = game;
  document.getElementById("modalPlatform").textContent = platforms[currentPlatform].label;
  document.getElementById("modalTitle").textContent = `#${id} - ${title}`;
  document.getElementById("modalDescription").textContent = desc;
  document.getElementById("modalYear").textContent = year;
  document.getElementById("modalGenre").textContent = genre;
  document.getElementById("modalStudio").textContent = studio;
  document.getElementById("modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

window.closeModal = function() {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "";
}

window.modalBackdrop = function(e) {
  if (e.target.id === "modal") window.closeModal();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") window.closeModal();
});

window.openQuiz = function() {
  document.getElementById("catalog").classList.add("hidden");
  document.getElementById("quizWrap").classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  quizIndex = 0;
  score = 0;
  answered = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.backToCatalog = function(scroll = true) {
  document.getElementById("catalog").classList.remove("hidden");
  document.getElementById("quizWrap").classList.remove("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.key === currentPlatform));
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  answered = false;
  const item = quiz[quizIndex];
  document.getElementById("quizCounter").textContent = `Pergunta ${quizIndex + 1} de ${quiz.length}`;
  document.getElementById("progressBar").style.width = `${(quizIndex / quiz.length) * 100}%`;

  const content = document.getElementById("quizContent");
  content.innerHTML = `
    <h2 class="question">${item.q}</h2>
    <div class="answers">
      ${item.a.map((x, i) => `<button class="answer" onclick="chooseAnswer(${i}, this)">${x}</button>`).join("")}
    </div>
    <button class="primary quiz-next" id="nextBtn" onclick="nextQuestion()">Próxima pergunta</button>
  `;
}

window.chooseAnswer = function(index, btn) {
  if (answered) return;
  answered = true;
  const item = quiz[quizIndex];
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === item.c) b.classList.add("correct");
  });
  if (index === item.c) score++;
  else btn.classList.add("wrong");
  document.getElementById("nextBtn").style.display = "inline-block";
}

window.nextQuestion = function() {
  quizIndex++;
  if (quizIndex >= quiz.length) showResult();
  else renderQuestion();
}

function showResult() {
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("quizCounter").textContent = "Quiz concluído";
  const pct = Math.round((score / quiz.length) * 100);
  let msg = pct >= 85 ? "Excelente! Você conhece muito bem o catálogo." :
            pct >= 60 ? "Muito bom! Você prestou atenção em boa parte do site." :
            "Boa tentativa! Explore o catálogo novamente e tente outra vez.";
  document.getElementById("quizContent").innerHTML = `
    <div class="result">
      <div class="eyebrow">Resultado final</div>
      <div class="score">${score}/${quiz.length}</div>
      <h2>${pct}% de acertos</h2>
      <p style="color:var(--muted);line-height:1.7">${msg}</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:22px">
        <button class="primary" onclick="openQuiz()">Refazer quiz</button>
        <button class="secondary" onclick="backToCatalog()">Voltar ao catálogo</button>
      </div>
    </div>`;
}

// Inicia com PlayStation
switchPlatform("playstation");

// Puxa do backend se estiver ativo
document.addEventListener("DOMContentLoaded", () => {
  carregarDatasetFigurinhas();
});
