// ==========================================
// 1. DADOS DOS SINAIS E ALFABETO EM LIBRAS
// ==========================================
const dictionary = [
    {
      word: "Olá / Tudo Bem?",
      description: "Acene levemente com a mão aberta e em seguida levante o polegar em sinal de positivo.",
      svg: `<svg class="w-24 h-24 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
        <path d="M40 70 L40 40 A5 5 0 0 1 50 40 L50 70 A5 5 0 0 1 60 70 L60 45 A5 5 0 0 1 70 45 L70 75" />
        <path d="M30 60 Q 20 40 35 25" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4" />
        <circle cx="35" cy="25" r="3" fill="#f59e0b" />
      </svg>`
    },
    {
      word: "Obrigado(a)",
      description: "Toque a ponta dos dedos na testa e mova a mão para frente em direção à outra pessoa.",
      svg: `<svg class="w-24 h-24 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
        <circle cx="50" cy="30" r="15" stroke-width="3" />
        <path d="M45 30 L70 45" />
        <path d="M60 35 L75 45 L65 55" stroke="#f59e0b" stroke-width="3" />
      </svg>`
    },
    {
      word: "Por Favor",
      description: "Junte as palmas das mãos em frente ao peito e faça um leve movimento vertical para baixo.",
      svg: `<svg class="w-24 h-24 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round">
        <path d="M40 30 L40 70 M60 30 L60 70" />
        <path d="M50 40 L50 75" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3" />
        <path d="M45 70 L50 78 L55 70" fill="#f59e0b" />
      </svg>`
    },
    {
      word: "Aprender",
      description: "Posicione a mão aberta na testa e feche-a repetidamente, simbolizando guardar conhecimento.",
      svg: `<svg class="w-24 h-24 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3">
        <circle cx="50" cy="40" r="22" />
        <path d="M68 30 Q 80 40 68 50" stroke="#f59e0b" stroke-width="4" />
        <circle cx="50" cy="40" r="8" fill="#f59e0b" />
      </svg>`
    },
    {
      word: "Ajuda / Ajudar",
      description: "Apoie uma mão fechada com o polegar elevado sobre a palma da outra mão aberta e eleve ambas.",
      svg: `<svg class="w-24 h-24 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
        <path d="M25 65 L75 65" stroke-width="5" />
        <path d="M50 60 L50 35 M42 43 L50 35 L58 43" stroke="#f59e0b" stroke-width="4" />
      </svg>`
    },
    {
      word: "Letra A (Dactilologia)",
      description: "Mão fechada com todos os dedos dobrados e o polegar encostado na lateral do indicador.",
      svg: `<svg class="w-24 h-24 text-purple-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
        <rect x="35" y="40" width="30" height="35" rx="8" />
        <path d="M65 50 L75 55 L65 70" stroke="#f59e0b" stroke-width="4" />
      </svg>`
    },
    {
      word: "Letra B (Dactilologia)",
      description: "Mão aberta com os quatro dedos esticados para cima e o polegar dobrado sobre a palma.",
      svg: `<svg class="w-24 h-24 text-purple-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
        <path d="M40 75 L40 25 M50 75 L50 25 M60 75 L60 25 M70 75 L70 30" />
        <path d="M35 55 L50 60" stroke="#f59e0b" stroke-width="4" />
      </svg>`
    },
    {
      word: "Letra C (Dactilologia)",
      description: "Mão em formato da letra C, curvando todos os dedos e o polegar para frente.",
      svg: `<svg class="w-24 h-24 text-purple-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
        <path d="M65 30 C35 30 35 70 65 70" />
      </svg>`
    }
  ];
  
  function renderDictionary(filter = "") {
    const container = document.getElementById("dictionary-grid");
    container.innerHTML = "";
  
    const items = dictionary.filter(item => 
      item.word.toLowerCase().includes(filter.toLowerCase()) || 
      item.description.toLowerCase().includes(filter.toLowerCase())
    );
  
    if (items.length === 0) {
      container.innerHTML = `<p class="col-span-full text-center text-slate-500 py-4">Nenhum sinal encontrado para "${filter}".</p>`;
      return;
    }
  
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition";
      card.innerHTML = `
        <div class="w-full bg-slate-50 rounded-lg py-4 flex justify-center items-center mb-4 border border-slate-100">
          ${item.svg}
        </div>
        <h4 class="text-lg font-bold text-blue-700 mb-2">${item.word}</h4>
        <p class="text-sm text-slate-600 leading-relaxed">${item.description}</p>
      `;
      container.appendChild(card);
    });
  }
  
  document.getElementById("search-input").addEventListener("input", (e) => {
    renderDictionary(e.target.value);
  });
  
  
  // ==========================================
  // 2. TEXTOS DETALHADOS DE PROGRAMAÇÃO
  // ==========================================
  const techTopics = {
    html: {
      title: "HTML - A Estrutura da Página",
      analogy: "O HTML (HyperText Markup Language) é a linguagem de marcação que funciona como o esqueleto de um corpo humano ou a estrutura de uma casa. Ele define o que estará presente no site.",
      details: "Você utiliza 'tags' (etiquetas) para criar elementos como títulos (h1), parágrafos de texto (p), imagens (img) e botões (button).",
      code: `<h1>Meu Primeiro Título</h1>\n<p>Este é um parágrafo explicativo em texto.</p>\n<button>Clique no Botão</button>`,
      librasTip: "Em LIBRAS, o termo 'HTML' costuma ser soletrado com a dactilologia (H-T-M-L) acompanhado do gesto de 'construção/estrutura'."
    },
    css: {
      title: "CSS - O Estilo Visual e Design",
      analogy: "O CSS (Cascading Style Sheets) é a linguagem de estilização. Se o HTML é o esqueleto, o CSS são as roupas, as cores, a maquiagem e o design visual do site.",
      details: "Com o CSS você altera a cor de fundo, o tamanho da fonte, os alinhamentos e garante que o site fique bonito no computador e no celular.",
      code: `body {\n  background-color: #f4f6f9;\n  color: #0056b3;\n}\nbutton {\n  background: #10b981;\n  color: white;\n  border-radius: 8px;\n}`,
      librasTip: "O sinal de 'CSS' é soletrado (C-S-S) seguido do sinal visual de 'design/pintura/estilizar'."
    },
    js: {
      title: "JavaScript - A Interatividade e Lógica",
      analogy: "O JavaScript é a linguagem de programação que funciona como os músculos e o cérebro. Ele torna o site vivo e reativo ao clique do usuário.",
      details: "O JS é responsável por ações como abrir janelas, enviar formulários e até ativar o avatar 3D do VLibras quando você clica na tela.",
      code: `function darBoasVindas() {\n  alert('Olá! Seja bem-vindo ao mundo da programação!');\n}`,
      librasTip: "O sinal de 'JavaScript' é indicado pelas letras J-S seguidas do gesto de 'ação/movimento'."
    }
  };
  
  function switchTab(tabKey) {
    const data = techTopics[tabKey];
    const container = document.getElementById("tab-content");
  
    document.querySelectorAll(".tech-tab").forEach(btn => {
      btn.className = "tech-tab font-bold px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition";
    });
    
    const activeBtn = document.getElementById(`tab-${tabKey}`);
    activeBtn.className = "tech-tab active font-bold px-4 py-2 rounded-lg bg-indigo-600 text-white transition";
  
    container.innerHTML = `
      <h4 class="text-xl font-bold text-slate-900 mb-2">${data.title}</h4>
      <p class="text-slate-600 text-sm mb-3">${data.analogy}</p>
      <p class="text-slate-600 text-sm mb-4 leading-relaxed">${data.details}</p>
      
      <div class="mb-4">
        <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Exemplo de código:</span>
        <pre class="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto"><code>${data.code}</code></pre>
      </div>
  
      <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-xs text-indigo-900 flex items-start gap-2">
        <i class="fa-solid fa-lightbulb text-indigo-600 text-base mt-0.5"></i>
        <div><strong>Dica em LIBRAS:</strong> ${data.librasTip}</div>
      </div>
    `;
  }
  
  
  // ==========================================
  // 3. EDITOR DE CÓDIGO INTERATIVO (PLAYGROUND)
  // ==========================================
  const defaultCode = `<style>
    body { font-family: sans-serif; padding: 20px; text-align: center; }
    h1 { color: #2563eb; }
    button { background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }
    button:hover { background: #059669; }
  </style>
  
  <h1>Olá, Mundo da Programação!</h1>
  <p>Edite este código no painel ao lado para ver as alterações em tempo real.</p>
  <button onclick="alert('Parabéns! Você executou seu primeiro código JavaScript!')">Clique em mim!</button>`;
  
  function updatePlayground() {
    const code = document.getElementById("code-input").value;
    const iframe = document.getElementById("code-output");
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  }
  
  document.getElementById("code-input").addEventListener("input", updatePlayground);
  document.getElementById("btn-run-code").addEventListener("click", updatePlayground);
  
  
  // ==========================================
  // 4. QUIZ INTERATIVO
  // ==========================================
  const questions = [
    {
      q: "O que significa a sigla LIBRAS?",
      opts: [
        "Língua Brasileira de Sinais",
        "Linguagem Brasileira de Surdos",
        "Linguagem dos Brasileiros de Sinais",
        "Livro Brasileiro de Sinais"
      ],
      answer: 0,
      exp: "LIBRAS é reconhecida por lei (Lei nº 10.436/2002) como a Língua Brasileira de Sinais."
    },
    {
      q: "Quais são os elementos essenciais de um sinal em LIBRAS?",
      opts: [
        "Apenas o movimento das mãos",
        "Os 5 Parâmetros: Configuração, Ponto de Articulação, Movimento, Orientação e Expressão Facial",
        "Apenas a fala sem som",
        "Qualquer gesto aleatório feito com os braços"
      ],
      answer: 1,
      exp: "Os 5 parâmetros são a base gramatical para a construção correta dos sinais em LIBRAS."
    },
    {
      q: "A LIBRAS é universal (igual em todo o mundo)?",
      opts: [
        "Sim, todos os países utilizam os mesmos gestos",
        "Não, cada país tem sua própria língua de sinais",
        "Sim, baseada no alfabeto inglês",
        "Não, mas é idêntica à de Portugal"
      ],
      answer: 1,
      exp: "Cada país possui sua própria língua de sinais adaptada à sua cultura."
    }
  ];
  
  let currentQ = 0;
  let score = 0;
  
  function loadQuiz() {
    const item = questions[currentQ];
    document.getElementById("quiz-question").textContent = `${currentQ + 1}. ${item.q}`;
    
    const optsContainer = document.getElementById("quiz-options");
    optsContainer.innerHTML = "";
    
    const feedback = document.getElementById("quiz-feedback");
    feedback.className = "hidden p-4 rounded-lg font-medium text-sm border";
    
    document.getElementById("btn-next").classList.add("hidden");
  
    item.opts.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "w-full text-left p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 font-medium text-sm transition";
      btn.textContent = opt;
      btn.onclick = () => answerQuiz(idx);
      optsContainer.appendChild(btn);
    });
  }
  
  function answerQuiz(selected) {
    const item = questions[currentQ];
    const btns = document.querySelectorAll("#quiz-options button");
    const feedback = document.getElementById("quiz-feedback");
  
    btns.forEach(b => b.disabled = true);
  
    if (selected === item.answer) {
      btns[selected].className = "w-full text-left p-3 rounded-lg border border-emerald-500 bg-emerald-500 text-white font-medium text-sm";
      score += 10;
      document.getElementById("quiz-score").textContent = score;
      feedback.className = "p-4 rounded-lg font-medium text-sm bg-emerald-50 text-emerald-800 border-emerald-200 block";
      feedback.textContent = `Resposta Correta! ${item.exp}`;
    } else {
      btns[selected].className = "w-full text-left p-3 rounded-lg border border-red-500 bg-red-500 text-white font-medium text-sm";
      btns[item.answer].className = "w-full text-left p-3 rounded-lg border border-emerald-500 bg-emerald-500 text-white font-medium text-sm";
      feedback.className = "p-4 rounded-lg font-medium text-sm bg-red-50 text-red-800 border-red-200 block";
      feedback.textContent = `Incorreto. ${item.exp}`;
    }
  
    if (currentQ < questions.length - 1) {
      const btnNext = document.getElementById("btn-next");
      btnNext.classList.remove("hidden");
      btnNext.classList.add("flex");
    }
  }
  
  document.getElementById("btn-next").onclick = () => {
    currentQ++;
    loadQuiz();
  };
  
  
  // ==========================================
  // 5. MURAL COM LOCAL STORAGE
  // ==========================================
  let posts = [
    { author: "Maria Souza", message: "Que iniciativa fantástica para a acessibilidade!", date: "10/11/2026" },
    { author: "Carlos Lima", message: "O VLibras funcionando perfeitamente no portal.", date: "09/11/2026" }
  ];
  
  function renderPosts() {
    const feed = document.getElementById("mural-feed");
    feed.innerHTML = "";
    
    const saved = localStorage.getItem("inclua_posts");
    if (saved) posts = JSON.parse(saved);
  
    posts.forEach(p => {
      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded-xl border-l-4 border-l-blue-600 border-y border-r border-slate-200 shadow-sm";
      div.innerHTML = `
        <div class="flex justify-between items-center mb-1">
          <span class="font-bold text-slate-800 text-sm">${p.author}</span>
          <span class="text-xs text-slate-400">${p.date}</span>
        </div>
        <p class="text-sm text-slate-600">${p.message}</p>
      `;
      feed.appendChild(div);
    });
  }
  
  document.getElementById("mural-form").onsubmit = (e) => {
    e.preventDefault();
    const author = document.getElementById("author");
    const message = document.getElementById("message");
  
    posts.unshift({
      author: author.value,
      message: message.value,
      date: new Date().toLocaleDateString("pt-BR")
    });
  
    localStorage.setItem("inclua_posts", JSON.stringify(posts));
    renderPosts();
  
    author.value = "";
    message.value = "";
  };
  
  
  // ==========================================
  // 6. CONTROLE DE ACESSIBILIDADE & INICIALIZAÇÃO
  // ==========================================
  let zoom = 100;
  
  document.getElementById("btn-increase").onclick = () => {
    if (zoom < 130) {
      zoom += 10;
      document.body.style.zoom = `${zoom}%`;
    }
  };
  
  document.getElementById("btn-decrease").onclick = () => {
    if (zoom > 80) {
      zoom -= 10;
      document.body.style.zoom = `${zoom}%`;
    }
  };
  
  document.getElementById("btn-reset").onclick = () => {
    zoom = 100;
    document.body.style.zoom = "100%";
  };
  
  document.getElementById("btn-contrast").onclick = () => {
    document.body.classList.toggle("high-contrast");
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    renderDictionary();
    switchTab('html');
    loadQuiz();
    renderPosts();
  
    // Inicializa o Editor Interativo
    document.getElementById("code-input").value = defaultCode;
    updatePlayground();
  
    // Inicializa o VLibras
    if (window.VLibras) {
      new window.VLibras.Widget('https://vlibras.gov.br/app' );
    }
  });
  