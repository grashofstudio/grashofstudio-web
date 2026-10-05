export const siteTitle = 'Grashof 格拉索工業 | 熱流工程、數位孿生與 AI 落地應用';
export const siteDescription = '格拉索工業提供熱流工程解決方案、數位孿生熱管理，協助客戶建置工業視覺與客製 AI、API 落地應用。未來研發聚焦衛星熱管理系統與太空電磁干擾防護。';
export const contactEmail = 'skyoz2131@gmail.com';

export type Media = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  caption?: string;
};

export type Solution = {
  id: string;
  eyebrow: string;
  title: string;
  titleZh: string;
  statement: string;
  statementZh: string;
  capabilities: string[];
  outcome: string;
  projectHref: string;
  media: Media;
};

export type ProjectSummary = {
  slug: 'simulation-led-development' | 'market-pulse';
  index: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  summaryZh: string;
  media: Media;
};

export const solutions: Solution[] = [
  {
    id: 'thermal-fluid',
    eyebrow: 'Thermal / Simulation',
    title: 'Thermal-Fluid Engineering Solutions',
    titleZh: '熱流工程解決方案',
    statement: 'Develop thermal-fluid solutions from problem definition and modeling to design recommendations, process optimization, and implementation support.',
    statementZh: '從問題定義與熱流建模，到設計改善、製程優化與導入支援',
    capabilities: ['Heat transfer', 'Fluid flow', 'Multiphysics simulation', 'Thermal management', 'Process optimization'],
    outcome: 'Thermal models, design comparisons, process parameters, and implementation recommendations.',
    projectHref: '/projects/simulation-led-development/',
    media: { type: 'image', src: '/media/induction-heat.gif', alt: 'Thermal simulation of high-frequency induction heating' },
  },
  {
    id: 'ai-workflow',
    eyebrow: 'Data / Software',
    title: 'Custom AI & API Solutions',
    titleZh: '客製 AI 與 API 解決方案',
    statement: 'Design and implement client-specific applications that connect data sources, APIs, AI models, and operational workflows.',
    statementZh: '依客戶需求設計與導入應用系統，串接資料來源、API、AI 模型與作業流程',
    capabilities: ['System design', 'API integration', 'AI applications', 'Workflow automation', 'Deployment'],
    outcome: 'Solution design, data and API integration, application development, and deployment support.',
    projectHref: '/projects/market-pulse/',
    media: { type: 'image', src: '/media/market-portfolio.png', alt: 'Market Pulse AI decision-support dashboard' },
  },
];

export const projects: ProjectSummary[] = [
  {
    slug: 'simulation-led-development',
    index: '01',
    title: 'Simulation-Led Process Development',
    category: 'Thermal-Fluid Intelligence',
    status: 'APPLIED ENGINEERING CASE',
    summary: 'Two thermal studies used to compare induction-heating and laser-process parameters before physical trials.',
    summaryZh: '在實驗前比較高周波加熱與雷射製程的溫度分布及參數範圍',
    media: { type: 'image', src: '/media/induction-heat.gif', alt: 'Induction heating simulation used for process development' },
  },
  {
    slug: 'market-pulse',
    index: '02',
    title: 'Market Pulse',
    category: 'AI Workflow & Decision Systems',
    status: 'INTERNAL AI PRODUCT PROTOTYPE',
    summary: 'An internal dashboard that combines market, news, event, and portfolio data.',
    summaryZh: '將市場、新聞、事件與持股資料集中在同一個內部工具',
    media: { type: 'image', src: '/media/market-news-events.png', alt: 'Market Pulse news and event intelligence dashboard' },
  },
];
