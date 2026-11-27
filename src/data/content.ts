// Todo o texto do site fica aqui, para editar sem mexer nos componentes.

const img = (path: string) => `${import.meta.env.BASE_URL}images/${path}`

export const profile = {
  name: 'Taynan Pereira',
  role: 'Engenharia de software full stack',
  tagline: 'Construo plataformas web, APIs e integrações com IA que levam dados reais até as pessoas.',
  email: 'taynan28112003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/taynan-pereira/',
  github: 'https://github.com/yRizer',
  location: 'Espírito Santo do Pinhal, SP',
  availability: 'aberto a vagas presenciais, híbridas e remotas',
}

export const stack = [
  { group: 'Web', items: ['React', 'TypeScript', 'Vite', 'PHP', 'Vue 3'] },
  { group: 'Back-end e dados', items: ['Node.js', 'Fastify', 'MySQL', 'PostgreSQL', 'Docker'] },
  { group: 'IA', items: ['Python', 'RAG', 'LangChain', 'LlamaIndex', 'TrOCR', 'YOLO'] },
]

export const ahp = {
  url: 'https://arquivohistoricopinhalense.com.br',
  host: 'arquivohistoricopinhalense.com.br',
  screenshot: img('ahp/inicio.webp'),
  figures: [
    { value: '5 mil+', label: 'documentos abertos ao público' },
    { value: 'Diário', label: 'acesso de alunos e pesquisadores' },
    { value: 'TCCs', label: 'e pesquisas do curso de História feitos com o acervo' },
  ],
  specs: [
    { k: 'papel', v: 'Engenheiro full stack e gestor da plataforma' },
    { k: 'stack', v: 'PHP, MySQL, HTML, CSS e JavaScript' },
    { k: 'recursos', v: 'Acervo por categorias, visualizador de documentos, galeria de fotos com carrossel' },
    { k: 'uso', v: 'Fonte de pesquisa dos alunos e base de TCCs e trabalhos acadêmicos de História' },
    { k: 'extensões', v: 'Três projetos de IA para ler e pesquisar o acervo' },
  ],
}

export const detector = {
  document: img('detector/documento.webp'),
  detection: img('detector/deteccao.webp'),
  line: img('detector/linha.webp'),
}

export type Project = {
  kicker: string
  metric?: string
  title: string
  text: string
  tech: string
  link?: { label: string; href: string }
  half?: boolean
}

export const projects: Project[] = [
  {
    kicker: 'Web + IA · 2026',
    metric: '~92% de acerto',
    title: 'Plataforma de Transcrição Assistida',
    text: 'Modelo HTR baseado em TrOCR lê cada linha do manuscrito. Uma aplicação web mostra o documento com as linhas destacadas e o rascunho da IA, para a equipe só revisar. As correções voltam para o re-treino.',
    tech: 'React · Node.js · TypeScript · Python · Docker',
  },
  {
    kicker: 'IA · 2026',
    metric: 'RAG',
    title: 'Busca Semântica em Acervos Históricos',
    text: 'Pesquisadores fazem perguntas em linguagem natural e recebem respostas embasadas nas atas e inquéritos transcritos, recuperados de um banco vetorial.',
    tech: 'Python · LangChain · LlamaIndex · banco vetorial · Docker',
  },
  {
    kicker: 'Visão computacional · 2026',
    metric: '95–97% de acerto',
    title: 'Detector de Linhas Manuscritas',
    text: 'Modelo YOLO treinado com mais de 150 mil linhas de manuscritos de 1600 a 1950 e ajustado com páginas do acervo. Recorta as linhas que a transcrição vai ler.',
    tech: 'Python · YOLO · Docker',
  },
  {
    kicker: 'API · TCC',
    title: 'API da Vinícola',
    text: 'Back-end do TCC: cadastro de itens com QR code e imagens, com banco MySQL.',
    tech: 'Node.js · Fastify · MySQL',
    link: { label: 'Código', href: 'https://github.com/yRizer/TestesTccVinicola' },
    half: true,
  },
  {
    kicker: 'Full stack · 2025',
    title: 'Cadastro e Login de Usuários',
    text: 'Teste técnico para vaga de back-end: autenticação, edição de perfil e upload de foto com limpeza dos arquivos antigos. Responsivo do desktop ao celular.',
    tech: 'PHP · MySQL · JavaScript',
    link: { label: 'Código', href: 'https://github.com/yRizer/Sistema-Basico-de-Usuarios' },
    half: true,
  },
]

export const pinhalTour = {
  repo: 'https://github.com/yRizer/PinhalTour',
  screens: [
    { src: img('pinhaltour/inicio.webp'), caption: 'Tela inicial com rotas, categorias e eventos' },
    { src: img('pinhaltour/eventos.webp'), caption: 'Calendário de eventos da cidade' },
    { src: img('pinhaltour/igreja.webp'), caption: 'Página de um ponto turístico' },
    { src: img('pinhaltour/mapa.webp'), caption: 'Mapa com os pontos por categoria' },
    { src: img('pinhaltour/rota.webp'), caption: 'Rota traçada até o local' },
  ],
  dashboard: img('pinhaltour/dashboard.webp'),
}

export const timeline = [
  {
    when: 'abr 2022 — hoje',
    title: 'Engenheiro de Software Full Stack e Gestor de Plataforma Digital',
    org: 'Arquivo Histórico Pinhalense',
    bullets: [
      'Desenvolvimento e manutenção da plataforma pública do acervo em PHP e MySQL.',
      'Detector de linhas manuscritas com YOLO, de 95% a 97% de acerto.',
      'Plataforma web de transcrição assistida em React e Node.js com modelo HTR de cerca de 92% de acerto.',
      'Busca semântica com RAG sobre as transcrições, em Python e Docker.',
    ],
  },
  {
    when: '2022 — 2025',
    title: 'Graduação em Engenharia de Computação',
    org: 'Unipinhal',
    bullets: ['TCC: sistema com QR code para vinícola, com API em Fastify e MySQL.'],
  },
]
