# ==============================================================================
# API RESTful - Álbum de Figurinhas de Jogos & Consoles 🎮
# Desenvolvida com Python e FastAPI
# ==============================================================================

import os
from typing import List, Optional
from fastapi import FastAPI, HTTPException, status, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

# 1. Cria a aplicação FastAPI
app = FastAPI(
    title="API Álbum de Figurinhas de Jogos & Consoles",
    description="Servidor Backend para disponibilizar as figurinhas do Álbum de Jogos (SNES, PS2, PS3, Xbox Classic, Xbox 360, PS4).",
    version="2.0.0"
)

# 2. Configura o Middleware de CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Servir imagens locais da pasta 'static' se ela existir
if os.path.exists("static"):
    app.mount("/static", StaticFiles(directory="static"), name="static")

# Helper para checar arquivos de imagens locais em static/capas/ (upload) e static/figurinhas/
def obter_imagem_url_local(id_num: int, default_url: str) -> str:
    # 1. Verifica primeiro na pasta de capas customizadas
    pasta_capas = "static/capas"
    if os.path.exists(pasta_capas):
        # Tenta os formatos de nome: #1.ext, 1.ext, 01.ext
        nomes_possiveis = [f"#{id_num}", f"{id_num}", f"{id_num:02d}"]
        for nome in nomes_possiveis:
            for ext in [".jpg", ".png", ".jpeg", ".webp"]:
                path_file = os.path.join(pasta_capas, f"{nome}{ext}")
                if os.path.exists(path_file):
                    return f"/static/capas/{nome}{ext}"

    # 2. Se não encontrar, tenta na pasta original de figurinhas
    num_str = f"{id_num:02d}"
    pasta_figurinhas = "static/figurinhas"
    if os.path.exists(pasta_figurinhas):
        for ext in [".jpg", ".png", ".jpeg", ".webp"]:
            path_file = os.path.join(pasta_figurinhas, f"{num_str}{ext}")
            if os.path.exists(path_file):
                return f"/static/figurinhas/{num_str}{ext}"
    return default_url

# 3. Modelo de dados Pydantic para validação das figurinhas
class Figurinha(BaseModel):
    id: int = Field(..., example=1, description="Número/ID do jogo")
    nome: str = Field(..., example="God of War Ragnarök", description="Nome do jogo")
    categoria: str = Field(..., example="playstation", description="Plataforma do jogo (playstation, xbox, nintendo, pc)")
    ano: int = Field(..., example=2022, description="Ano de lançamento")
    genero: str = Field(..., example="Ação / Aventura", description="Gênero do jogo")
    desenvolvedora: str = Field(..., example="Santa Monica Studio", description="Desenvolvedora do jogo")
    descricao: str = Field(..., example="Kratos e Atreus encaram...", description="Breve descrição do jogo")
    imagem_url: str = Field(..., example="", description="URL da capa do jogo")

# 4. Base de dados em memória contendo as 40 figurinhas de Jogos & Consoles
figurinhas_db: List[dict] = [
    # PlayStation
    {"id": 1, "nome": "God of War Ragnarök", "categoria": "playstation", "ano": 2022, "genero": "Ação / Aventura", "desenvolvedora": "Santa Monica Studio", "descricao": "Kratos e Atreus encaram as consequências do Ragnarök em uma jornada épica pelos Nove Reinos.", "imagem_url": ""},
    {"id": 2, "nome": "The Last of Us Part II", "categoria": "playstation", "ano": 2020, "genero": "Ação / Drama", "desenvolvedora": "Naughty Dog", "descricao": "Uma história intensa sobre perda, vingança e consequências em um mundo pós-apocalíptico.", "imagem_url": ""},
    {"id": 3, "nome": "Ghost of Tsushima", "categoria": "playstation", "ano": 2020, "genero": "Ação / Mundo aberto", "desenvolvedora": "Sucker Punch", "descricao": "Jin Sakai luta para proteger Tsushima enquanto precisa escolher entre tradição samurai e novas táticas.", "imagem_url": ""},
    {"id": 4, "nome": "Marvel's Spider-Man 2", "categoria": "playstation", "ano": 2023, "genero": "Ação / Aventura", "desenvolvedora": "Insomniac Games", "descricao": "Peter Parker e Miles Morales enfrentam novas ameaças em uma Nova York ainda mais dinâmica.", "imagem_url": ""},
    {"id": 5, "nome": "Horizon Forbidden West", "categoria": "playstation", "ano": 2022, "genero": "RPG / Ação", "desenvolvedora": "Guerrilla Games", "descricao": "Aloy parte para o Oeste Proibido em busca de respostas para salvar o futuro do planeta.", "imagem_url": ""},
    {"id": 6, "nome": "Bloodborne", "categoria": "playstation", "ano": 2015, "genero": "RPG / Soulslike", "desenvolvedora": "FromSoftware", "descricao": "Uma jornada sombria pela cidade amaldiçoada de Yharnam, marcada por horror gótico e combate desafiador.", "imagem_url": ""},
    {"id": 7, "nome": "Uncharted 4", "categoria": "playstation", "ano": 2016, "genero": "Ação / Aventura", "desenvolvedora": "Naughty Dog", "descricao": "Nathan Drake retorna para uma última aventura atrás de um lendário tesouro pirata.", "imagem_url": ""},
    {"id": 8, "nome": "Demon's Souls", "categoria": "playstation", "ano": 2020, "genero": "RPG / Soulslike", "desenvolvedora": "Bluepoint Games", "descricao": "Um remake visualmente impressionante do clássico que ajudou a definir o gênero soulslike.", "imagem_url": ""},
    {"id": 9, "nome": "Gran Turismo 7", "categoria": "playstation", "ano": 2022, "genero": "Corrida / Simulação", "desenvolvedora": "Polyphony Digital", "descricao": "Experiência automobilística com centenas de carros, pistas e foco em realismo.", "imagem_url": ""},
    {"id": 10, "nome": "Ratchet & Clank: Rift Apart", "categoria": "playstation", "ano": 2021, "genero": "Ação / Plataforma", "desenvolvedora": "Insomniac Games", "descricao": "Uma aventura veloz por dimensões diferentes, aproveitando transições quase instantâneas.", "imagem_url": ""},

    # Xbox
    {"id": 11, "nome": "Halo Infinite", "categoria": "xbox", "ano": 2021, "genero": "FPS / Ficção científica", "desenvolvedora": "343 Industries", "descricao": "Master Chief retorna para enfrentar uma nova ameaça em um vasto anel Halo.", "imagem_url": ""},
    {"id": 12, "nome": "Forza Horizon 5", "categoria": "xbox", "ano": 2021, "genero": "Corrida / Mundo aberto", "desenvolvedora": "Playground Games", "descricao": "Explore o México em um festival automobilístico cheio de desafios, carros e eventos.", "imagem_url": ""},
    {"id": 13, "nome": "Gears 5", "categoria": "xbox", "ano": 2019, "genero": "Ação / Tiro", "desenvolvedora": "The Coalition", "descricao": "Kait Diaz investiga segredos ligados à origem dos Locust enquanto uma nova ameaça cresce.", "imagem_url": ""},
    {"id": 14, "nome": "Starfield", "categoria": "xbox", "ano": 2023, "genero": "RPG / Ficção científica", "desenvolvedora": "Bethesda Game Studios", "descricao": "Um RPG espacial focado em exploração, criação de personagem e centenas de mundos.", "imagem_url": ""},
    {"id": 15, "nome": "Hi-Fi Rush", "categoria": "xbox", "ano": 2023, "genero": "Ação / Ritmo", "desenvolvedora": "Tango Gameworks", "descricao": "Combate estiloso sincronizado com a música em uma aventura cheia de personalidade.", "imagem_url": ""},
    {"id": 16, "nome": "Ori and the Will of the Wisps", "categoria": "xbox", "ano": 2020, "genero": "Metroidvania", "desenvolvedora": "Moon Studios", "descricao": "Uma aventura emocional com exploração fluida, plataformas e belíssima direção de arte.", "imagem_url": ""},
    {"id": 17, "nome": "Sea of Thieves", "categoria": "xbox", "ano": 2018, "genero": "Aventura / Multiplayer", "desenvolvedora": "Rare", "descricao": "Navegue, explore ilhas e viva aventuras piratas em um mundo compartilhado.", "imagem_url": ""},
    {"id": 18, "nome": "Microsoft Flight Simulator", "categoria": "xbox", "ano": 2020, "genero": "Simulação", "desenvolvedora": "Asobo Studio", "descricao": "Uma simulação de voo em escala global com alto nível de detalhe e realismo.", "imagem_url": ""},
    {"id": 19, "nome": "Grounded", "categoria": "xbox", "ano": 2022, "genero": "Sobrevivência", "desenvolvedora": "Obsidian Entertainment", "descricao": "Encolhido ao tamanho de um inseto, o jogador precisa sobreviver em um quintal gigantesco.", "imagem_url": ""},
    {"id": 20, "nome": "State of Decay 2", "categoria": "xbox", "ano": 2018, "genero": "Sobrevivência / Zumbis", "desenvolvedora": "Undead Labs", "descricao": "Administre uma comunidade e sobreviva a um mundo dominado por zumbis.", "imagem_url": ""},

    # Nintendo
    {"id": 21, "nome": "The Legend of Zelda: Tears of the Kingdom", "categoria": "nintendo", "ano": 2023, "genero": "Aventura / Mundo aberto", "desenvolvedora": "Nintendo", "descricao": "Link explora Hyrule, os céus e as profundezas usando habilidades criativas para resolver desafios.", "imagem_url": ""},
    {"id": 22, "nome": "Super Mario Odyssey", "categoria": "nintendo", "ano": 2017, "genero": "Plataforma / Aventura", "desenvolvedora": "Nintendo", "descricao": "Mario viaja por reinos variados acompanhado de Cappy em busca de Peach.", "imagem_url": ""},
    {"id": 23, "nome": "Mario Kart 8 Deluxe", "categoria": "nintendo", "ano": 2017, "genero": "Corrida", "desenvolvedora": "Nintendo", "descricao": "Corridas caóticas com personagens, itens e pistas inspiradas em várias franquias Nintendo.", "imagem_url": ""},
    {"id": 24, "nome": "Super Smash Bros. Ultimate", "categoria": "nintendo", "ano": 2018, "genero": "Luta", "desenvolvedora": "Bandai Namco / Sora", "descricao": "Um enorme crossover que reúne dezenas de personagens históricos dos videogames.", "imagem_url": ""},
    {"id": 25, "nome": "Metroid Dread", "categoria": "nintendo", "ano": 2021, "genero": "Ação / Metroidvania", "desenvolvedora": "MercurySteam", "descricao": "Samus explora o planeta ZDR enquanto enfrenta criaturas e máquinas perseguidoras.", "imagem_url": ""},
    {"id": 26, "nome": "Animal Crossing: New Horizons", "categoria": "nintendo", "ano": 2020, "genero": "Simulação social", "desenvolvedora": "Nintendo", "descricao": "Construa e personalize sua própria ilha enquanto interage com moradores e visitantes.", "imagem_url": ""},
    {"id": 27, "nome": "Splatoon 3", "categoria": "nintendo", "ano": 2022, "genero": "Tiro / Multiplayer", "desenvolvedora": "Nintendo", "descricao": "Combates coloridos nos quais equipes disputam território usando tinta.", "imagem_url": ""},
    {"id": 28, "nome": "Fire Emblem: Three Houses", "categoria": "nintendo", "ano": 2019, "genero": "RPG / Estratégia", "desenvolvedora": "Intelligent Systems", "descricao": "Estratégia por turnos com relações entre personagens e escolhas que alteram a história.", "imagem_url": ""},
    {"id": 29, "nome": "Luigi's Mansion 3", "categoria": "nintendo", "ano": 2019, "genero": "Aventura", "desenvolvedora": "Next Level Games", "descricao": "Luigi explora um hotel assombrado e captura fantasmas com equipamentos especiais.", "imagem_url": ""},
    {"id": 30, "nome": "Kirby and the Forgotten Land", "categoria": "nintendo", "ano": 2022, "genero": "Plataforma / Aventura", "desenvolvedora": "HAL Laboratory", "descricao": "Kirby explora ambientes tridimensionais e absorve habilidades em um mundo misterioso.", "imagem_url": ""},

    # PC
    {"id": 31, "nome": "Cyberpunk 2077", "categoria": "pc", "ano": 2020, "genero": "RPG / Ação", "desenvolvedora": "CD Projekt Red", "descricao": "Um RPG futurista ambientado em Night City, com narrativa, exploração e grande liberdade de construção.", "imagem_url": ""},
    {"id": 32, "nome": "Baldur's Gate 3", "categoria": "pc", "ano": 2023, "genero": "RPG", "desenvolvedora": "Larian Studios", "descricao": "Um RPG baseado em escolhas, combate tático e liberdade para resolver situações de inúmeras maneiras.", "imagem_url": ""},
    {"id": 33, "nome": "Minecraft", "categoria": "pc", "ano": 2011, "genero": "Sandbox / Sobrevivência", "desenvolvedora": "Mojang", "descricao": "Construa, explore e sobreviva em mundos gerados proceduralmente usando blocos.", "imagem_url": ""},
    {"id": 34, "nome": "Counter-Strike 2", "categoria": "pc", "ano": 2023, "genero": "FPS competitivo", "desenvolvedora": "Valve", "descricao": "Tiro competitivo tático baseado em equipes, economia e domínio de mapas.", "imagem_url": ""},
    {"id": 35, "nome": "League of Legends", "categoria": "pc", "ano": 2009, "genero": "MOBA", "desenvolvedora": "Riot Games", "descricao": "Duas equipes competem para destruir a base adversária utilizando campeões com habilidades únicas.", "imagem_url": ""},
    {"id": 36, "nome": "Dota 2", "categoria": "pc", "ano": 2013, "genero": "MOBA", "desenvolvedora": "Valve", "descricao": "MOBA estratégico conhecido por sua profundidade, variedade de heróis e alto nível competitivo.", "imagem_url": ""},
    {"id": 37, "nome": "Cities: Skylines", "categoria": "pc", "ano": 2015, "genero": "Simulação / Gestão", "desenvolvedora": "Colossal Order", "descricao": "Construa e administre uma cidade cuidando de trânsito, serviços, economia e expansão urbana.", "imagem_url": ""},
    {"id": 38, "nome": "Stardew Valley", "categoria": "pc", "ano": 2016, "genero": "Simulação / RPG", "desenvolvedora": "ConcernedApe", "descricao": "Cuide de uma fazenda, conheça moradores e explore minas em uma experiência relaxante.", "imagem_url": ""},
    {"id": 39, "nome": "Hades", "categoria": "pc", "ano": 2020, "genero": "Roguelike / Ação", "desenvolvedora": "Supergiant Games", "descricao": "Zagreus tenta escapar do submundo em combates rápidos e uma narrativa que evolui a cada tentativa.", "imagem_url": ""},
    {"id": 40, "nome": "Terraria", "categoria": "pc", "ano": 2011, "genero": "Sandbox / Aventura", "desenvolvedora": "Re-Logic", "descricao": "Explore, construa e enfrente criaturas em um vasto mundo 2D cheio de progressão e descobertas.", "imagem_url": ""}
]

# ==============================================================================
# ENDPOINTS / ROTAS DA API
# ==============================================================================

@app.get("/")
def home():
    """Retorna uma mensagem de boas-vindas da API do Álbum de Jogos."""
    return {
        "mensagem": "Bem-vindo à API do Álbum de Jogos & Consoles! 🎮🕹️",
        "documentacao": "/docs",
        "endpoint_figurinhas": "/figurinhas"
    }

@app.get("/figurinhas", response_model=List[Figurinha])
def listar_figurinhas():
    """Retorna a lista completa de todas as capas de jogos do álbum."""
    resultado = []
    for item in figurinhas_db:
        copia = dict(item)
        copia["imagem_url"] = obter_imagem_url_local(item["id"], item["imagem_url"])
        resultado.append(copia)
    return resultado

@app.get("/figurinhas/{figurinha_id}", response_model=Figurinha)
def buscar_figurinha(figurinha_id: int):
    """Busca uma figurinha de jogo específica pelo seu ID (número do slot)."""
    for figurinha in figurinhas_db:
        if figurinha["id"] == figurinha_id:
            copia = dict(figurinha)
            copia["imagem_url"] = obter_imagem_url_local(figurinha["id"], figurinha["imagem_url"])
            return copia
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Figurinha #{figurinha_id} não foi encontrada."
    )

@app.post("/figurinhas/{figurinha_id}/upload")
async def upload_capa(figurinha_id: int, file: UploadFile = File(...)):
    """Recebe um upload de arquivo de imagem para associar como capa do ID especificado."""
    # Valida se o ID da figurinha existe no banco
    figurinha_existe = False
    for f in figurinhas_db:
        if f["id"] == figurinha_id:
            figurinha_existe = True
            break
    if not figurinha_existe:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Figurinha #{figurinha_id} não encontrada."
        )

    # Garante que a pasta de capas existe
    pasta_capas = "static/capas"
    os.makedirs(pasta_capas, exist_ok=True)

    # Valida formato de imagem
    _, ext = os.path.splitext(file.filename)
    if not ext:
        ext = ".png"
    ext = ext.lower()
    if ext not in [".jpg", ".jpeg", ".png", ".webp"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Formato de arquivo inválido. Apenas JPG, JPEG, PNG e WEBP são suportados."
        )

    # Limpa arquivos antigos para este ID com outras extensões
    for e in [".jpg", ".jpeg", ".png", ".webp"]:
        for prefix in [f"#{figurinha_id}", f"{figurinha_id}", f"{figurinha_id:02d}"]:
            old_file = os.path.join(pasta_capas, f"{prefix}{e}")
            if os.path.exists(old_file):
                try:
                    os.remove(old_file)
                except Exception:
                    pass

    # Define o nome do arquivo no formato associativo com # (ex: #1.png)
    filename = f"#{figurinha_id}{ext}"
    filepath = os.path.join(pasta_capas, filename)

    try:
        conteudo = await file.read()
        with open(filepath, "wb") as buffer:
            buffer.write(conteudo)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao salvar arquivo de capa: {str(e)}"
        )

    return {
        "mensagem": f"Capa do jogo #{figurinha_id} salva com sucesso!",
        "filename": filename,
        "url": f"/static/capas/{filename}"
    }
