import type { Media } from './site';

export type ProjectRecord = {
  slug: string;
  title: string;
  category: string;
  status: string;
  role: string;
  stage: string;
  description: string;
  descriptionZh: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedLinks?: { label: string; href: string }[];
  heroMedia: Media[];
  context: string;
  problem: string;
  solution: string;
  delivered: string[];
  approach: { name: string; description: string }[];
  evidence: Media[];
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: 'simulation-led-development',
    title: 'Simulation-Led Process Development',
    category: 'Thermal-Fluid Intelligence',
    status: 'APPLIED ENGINEERING CASE',
    role: 'Thermal modeling and parameter studies',
    stage: 'Engineering development support',
    description: 'Thermal studies for high-frequency heating equipment and laser-wafer process development.',
    descriptionZh: '以熱模型比較高周波鋼材加熱與晶圓雷射製程的參數、溫度分布及影響範圍',
    seoTitle: '高周波與雷射熱模擬 | Thermal Simulation Case | Grashof',
    seoDescription: 'Grashof 熱模擬工程案例：比較高周波加熱頻率、加熱時間、晶圓雷射功率與焦深，提供溫度分布、時間歷程與製程試驗參數建議。Thermal simulation for process development.',
    relatedLinks: [
      { label: '熱流工程解決方案', href: '/solutions/thermal-fluid-solutions/' },
      { label: '數位孿生熱管理 · 開發中', href: '/solutions/thermal-digital-twin/' },
    ],
    heroMedia: [
      { type: 'image', src: '/media/induction-heat.gif', alt: 'Animated induction-heating temperature field' },
      { type: 'image', src: '/media/laser-wafer-heating.gif', alt: 'Animated laser-wafer heating temperature field' },
    ],
    context: 'This page records two studies that use the same workflow: high-frequency heating of carbon-steel wire and laser processing of power-device wafers. Both required a parameter study before repeated equipment trials.',
    problem: 'For induction heating, frequency and heating time change penetration depth, heating rate, and uniformity. For laser processing, power and focal depth change the temperature field, gradient, and affected region.',
    solution: 'We built electromagnetic and thermal models, changed one parameter set at a time, and reviewed temperature fields and time histories. The results were used to define settings for the next equipment or process trial.',
    delivered: [
      'Model assumptions and boundary conditions',
      'Frequency, power, focal-depth, and time studies',
      'Temperature fields, histories, and gradients',
      'Suggested ranges for the next physical trial',
      'Equipment and process review material',
      'Engineering report and exported plots',
    ],
    approach: [
      { name: 'Inputs', description: 'Set the geometry, material data, and target temperature' },
      { name: 'Model', description: 'Represent electromagnetic heating and heat transfer' },
      { name: 'Parameter Runs', description: 'Change frequency, power, focal depth, and time' },
      { name: 'Result Review', description: 'Compare fields, histories, gradients, and uniformity' },
      { name: 'Working Range', description: 'Select settings for the next physical trial' },
      { name: 'Engineering Use', description: 'Use the results in equipment and process discussions' },
    ],
    evidence: [
      { type: 'image', src: '/media/induction-heat.gif', alt: 'Induction-heating temperature distribution over time', caption: 'Induction heating: simulated temperature distribution around the workpiece and coil.' },
      { type: 'image', src: '/media/induction-temperature-history.png', alt: 'Induction-heating temperature history and thermal gradient', caption: 'Induction heating: temperature history used to compare heating time and uniformity.' },
      { type: 'image', src: '/media/induction-equipment.jpg', alt: 'Physical high-frequency induction-heating equipment and coil', caption: 'Induction heating: equipment and coil used for physical development work.' },
      { type: 'image', src: '/media/laser-wafer-heating.gif', alt: 'Laser-wafer heating simulation over time', caption: 'Laser process: simulated heat input and temperature spread through the wafer.' },
      { type: 'image', src: '/media/laser-temperature-history.png', alt: 'Laser process temperature history and depth-direction thermal gradient', caption: 'Laser process: temperature history and depth-direction gradient.' },
    ],
  },
  {
    slug: 'market-pulse',
    title: 'Market Pulse',
    category: 'AI Workflow & Decision Systems',
    status: 'INTERNAL AI PRODUCT PROTOTYPE',
    role: 'Data pipeline and Web prototype',
    stage: 'Internal prototype / Active development',
    description: 'An internal dashboard for market, news, event, and portfolio data.',
    descriptionZh: '將市場、新聞、事件與持股資料集中在同一個內部工具，並產生每日摘要',
    heroMedia: [
      { type: 'video', src: '/media/market-pulse-demo.mp4', poster: '/media/market-portfolio.png', alt: 'Market Pulse interactive Web prototype' },
    ],
    context: 'Price data, news, economic events, technical indicators, and portfolio records come from different sources. Market Pulse is an internal prototype for reviewing them in one place.',
    problem: 'Collecting the sources by hand takes time, and a conventional dashboard still leaves the user to connect each event with current holdings.',
    solution: 'The prototype fetches data from multiple APIs, converts it into a common structure, displays it in a Web dashboard, and produces an AI-assisted daily summary. It does not execute trades or present forecasts as guaranteed results.',
    delivered: [
      'API connections for market and event data',
      'Scheduled updates and normalized records',
      'Internal Web dashboard',
      'News and portfolio cross-reference',
      'AI-assisted daily summary',
      'Scenario notes for manual review',
    ],
    approach: [
      { name: 'Sources', description: 'Read market, news, event, and portfolio inputs' },
      { name: 'Updates', description: 'Fetch each source on a defined schedule' },
      { name: 'Common Format', description: 'Convert source data into consistent records' },
      { name: 'Dashboard', description: 'Display prices, events, news, and holdings' },
      { name: 'Daily Summary', description: 'Generate a short AI-assisted review' },
      { name: 'Manual Review', description: 'Let the user check the source data and notes' },
    ],
    evidence: [
      { type: 'image', src: '/media/market-portfolio.png', alt: 'Market Pulse portfolio decision panel', caption: 'Portfolio view combining holdings, price changes, and review notes.' },
      { type: 'image', src: '/media/market-news-events.png', alt: 'Market Pulse news and event intelligence view', caption: 'News and event view linked to the instruments being reviewed.' },
      { type: 'video', src: '/media/market-pulse-demo.mp4', poster: '/media/market-portfolio.png', alt: 'Market Pulse interactive prototype demonstration', caption: 'Recorded walkthrough of the internal Web prototype.' },
    ],
  },
];

export const getProject = (slug: string) => projectRecords.find((project) => project.slug === slug);
