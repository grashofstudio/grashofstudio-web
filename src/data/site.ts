export type Media = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
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
  slug: 'bio-vision-ai' | 'simulation-led-development' | 'market-pulse';
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
    id: 'vision-ai',
    eyebrow: 'Applied AI / Perception',
    title: 'Vision AI & Perception Systems',
    titleZh: '視覺 AI 與感知系統',
    statement: 'Turn live visual data into recognition, classification, and actionable signals.',
    statementZh: '將即時影像轉化為可使用的辨識、分類與警示結果',
    capabilities: ['Camera integration', 'Image enhancement', 'AI API', 'Lightweight models', 'Edge deployment'],
    outcome: 'Deployable recognition workflows for real operating environments.',
    projectHref: '/projects/bio-vision-ai/',
    media: { type: 'video', src: '/media/bio-vision-demo.mp4', poster: '/media/bio-vision-poster.jpg', alt: 'Bio Vision AI prototype recognizing biological features from a live camera feed' },
  },
  {
    id: 'thermal-fluid',
    eyebrow: 'Physics / Engineering Intelligence',
    title: 'Thermal-Fluid Intelligence',
    titleZh: '熱流工程與智慧分析',
    statement: 'Reduce physical trial and error through physics-based engineering analysis.',
    statementZh: '以物理模型與工程分析降低實驗與設備開發的試誤成本',
    capabilities: ['Heat transfer', 'Fluid flow', 'Multiphysics simulation', 'Thermal management', 'Process optimization'],
    outcome: 'Validated parameter windows and engineering evidence for development decisions.',
    projectHref: '/projects/simulation-led-development/',
    media: { type: 'image', src: '/media/induction-heat.gif', alt: 'Thermal simulation of high-frequency induction heating' },
  },
  {
    id: 'ai-workflow',
    eyebrow: 'Applied AI / Intelligent Operations',
    title: 'AI Workflow & Decision Systems',
    titleZh: 'AI 工作流與決策系統',
    statement: 'Turn fragmented data and manual workflows into usable intelligent systems.',
    statementZh: '將分散資料與人工流程轉化為可操作、可持續擴充的智慧系統',
    capabilities: ['Multi-source APIs', 'Data normalization', 'AI summarization', 'Dashboards', 'Scenario analysis'],
    outcome: 'Integrated tools that surface the information users need to act.',
    projectHref: '/projects/market-pulse/',
    media: { type: 'image', src: '/media/market-portfolio.png', alt: 'Market Pulse AI decision-support dashboard' },
  },
];

export const projects: ProjectSummary[] = [
  {
    slug: 'bio-vision-ai',
    index: '01',
    title: 'Bio Vision AI',
    category: 'Vision AI & Perception Systems',
    status: 'APPLIED AI PROTOTYPE',
    summary: 'Lightweight biological feature and species recognition from live camera streams.',
    summaryZh: '從動態影像擷取生物特徵，並以輕量化 AI 流程推估物種',
    media: { type: 'video', src: '/media/bio-vision-demo.mp4', poster: '/media/bio-vision-poster.jpg', alt: 'Bio Vision AI live camera prototype' },
  },
  {
    slug: 'simulation-led-development',
    index: '02',
    title: 'Simulation-Led Process Development',
    category: 'Thermal-Fluid Intelligence',
    status: 'APPLIED ENGINEERING CASE',
    summary: 'Physics-based thermal analysis for equipment and process development.',
    summaryZh: '以熱流模型、參數分析與製程視窗支援設備及製程開發',
    media: { type: 'image', src: '/media/induction-heat.gif', alt: 'Induction heating simulation used for process development' },
  },
  {
    slug: 'market-pulse',
    index: '03',
    title: 'Market Pulse',
    category: 'AI Workflow & Decision Systems',
    status: 'INTERNAL AI PRODUCT PROTOTYPE',
    summary: 'Multi-source data and AI workflow for market intelligence and decision support.',
    summaryZh: '整合多來源 API、事件與持股資料，再由 AI 產出重點與情境',
    media: { type: 'image', src: '/media/market-news-events.png', alt: 'Market Pulse news and event intelligence dashboard' },
  },
];
