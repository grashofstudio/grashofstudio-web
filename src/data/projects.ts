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
    slug: 'bio-vision-ai',
    title: 'Bio Vision AI',
    category: 'Vision AI & Perception Systems',
    status: 'APPLIED AI PROTOTYPE',
    role: 'AI vision workflow and prototype development',
    stage: 'Prototype / Internal development',
    description: 'A lightweight real-time vision workflow for biological feature and species recognition.',
    descriptionZh: '以中階處理器、影像前處理、AI API 與輕量化模型，從動態影像擷取生物特徵並推估物種',
    heroMedia: [
      { type: 'video', src: '/media/bio-vision-demo.mp4', poster: '/media/bio-vision-poster.jpg', alt: 'Bio Vision AI prototype processing a live aquarium camera feed' },
    ],
    context: 'The project explored whether a practical biological-recognition workflow could run from an ordinary camera feed without relying on high-end inference hardware. Unlike license plates or human silhouettes, biological targets change pose continuously and are affected by reflections, blur, lighting, and water conditions.',
    problem: 'Conventional object detection could confirm that an animal was present, but it did not provide enough evidence to distinguish species-level traits. The workflow needed to recover usable frames, improve image readability, and reason from body shape, color, fin geometry, texture, and movement characteristics.',
    solution: 'Grashof designed a staged workflow that selects usable camera frames, improves image resolution and contrast, extracts biological features, and then combines a lightweight model with an AI API for species reasoning. The system keeps the local processing load moderate while preserving a path to more specialized models later.',
    delivered: [
      'Camera capture and frame-selection workflow',
      'Image enhancement and resolution-correction pipeline',
      'Biological feature extraction logic',
      'AI API and lightweight-model integration',
      'Species-reasoning output structure',
      'Working real-time prototype',
    ],
    approach: [
      { name: 'Camera Stream', description: 'Capture continuous video from a standard camera' },
      { name: 'Frame Selection', description: 'Select frames with sufficient visibility and focus' },
      { name: 'Enhancement', description: 'Improve contrast, scale, and feature readability' },
      { name: 'Feature Extraction', description: 'Analyze shape, color, texture, fins, and motion' },
      { name: 'AI Reasoning', description: 'Compare evidence with candidate species' },
      { name: 'Deployment', description: 'Run the prototype with moderate computing resources' },
    ],
    evidence: [
      { type: 'video', src: '/media/bio-vision-demo.mp4', poster: '/media/bio-vision-poster.jpg', alt: 'Recorded demonstration of Bio Vision AI identifying biological features' },
      { type: 'image', src: '/media/bio-vision-poster.jpg', alt: 'Representative camera frame used by the Bio Vision AI prototype' },
    ],
  },
  {
    slug: 'simulation-led-development',
    title: 'Simulation-Led Process Development',
    category: 'Thermal-Fluid Intelligence',
    status: 'APPLIED ENGINEERING CASE',
    role: 'Thermal modeling and process-development support',
    stage: 'Completed development support',
    description: 'Physics-based thermal analysis for high-frequency heating equipment and laser-wafering process development.',
    descriptionZh: '整合高周波鋼材加熱設備與高功率元件晶圓雷射製程，透過模型縮小參數範圍並支援實際開發',
    heroMedia: [
      { type: 'image', src: '/media/induction-heat.gif', alt: 'Animated induction-heating temperature field' },
      { type: 'image', src: '/media/laser-wafer-heating.gif', alt: 'Animated laser-wafer heating temperature field' },
    ],
    context: 'This case combines two applied development projects with the same engineering pattern: high-frequency heating of carbon-steel wire and laser processing for high-power-device wafers. In both projects, physical parameters interacted strongly and direct experimental iteration would have consumed substantial equipment time and materials.',
    problem: 'The teams needed to identify practical operating ranges before committing to repeated physical trials. For induction heating, frequency and heating time affected penetration depth, heating rate, and uniformity. For laser wafering, laser power and focal depth shaped the thermal field, gradient, and affected region.',
    solution: 'Grashof built electromagnetic and thermal models, performed structured parameter studies, and converted temperature fields and time histories into process-development evidence. The analysis narrowed the operating window and provided a common technical basis for equipment configuration, experiments, and customer review.',
    delivered: [
      'Documented physics models and assumptions',
      'Frequency, power, focus-depth, and time parameter studies',
      'Temperature-history and thermal-gradient analysis',
      'Recommended process windows and risk boundaries',
      'Equipment and process-development support',
      'Engineering report and visual evidence',
    ],
    approach: [
      { name: 'Requirement', description: 'Define target temperature, geometry, and process constraints' },
      { name: 'Physics Model', description: 'Represent electromagnetic, heat-transfer, and energy-deposition behavior' },
      { name: 'Parameter Study', description: 'Sweep frequency, power, focal depth, and heating time' },
      { name: 'Thermal Evidence', description: 'Review fields, histories, gradients, and nonuniformity' },
      { name: 'Process Window', description: 'Identify feasible settings and risk boundaries' },
      { name: 'Development Support', description: 'Translate results into equipment and process decisions' },
    ],
    evidence: [
      { type: 'image', src: '/media/induction-heat.gif', alt: 'Induction-heating temperature distribution over time' },
      { type: 'image', src: '/media/induction-temperature-history.png', alt: 'Induction-heating temperature history and thermal gradient' },
      { type: 'image', src: '/media/induction-equipment.jpg', alt: 'Physical high-frequency induction-heating equipment and coil' },
      { type: 'image', src: '/media/laser-wafer-heating.gif', alt: 'Laser-wafer heating simulation over time' },
      { type: 'image', src: '/media/laser-temperature-history.png', alt: 'Laser process temperature history and depth-direction thermal gradient' },
    ],
  },
  {
    slug: 'market-pulse',
    title: 'Market Pulse',
    category: 'AI Workflow & Decision Systems',
    status: 'INTERNAL AI PRODUCT PROTOTYPE',
    role: 'AI data-product architecture and Web prototype',
    stage: 'Internal prototype / Active development',
    description: 'A multi-source market-intelligence dashboard that turns fragmented information into key answers.',
    descriptionZh: '將市場、新聞、事件與持股資料集中到同一個工具，再由 AI 統整焦點、風險與情境',
    heroMedia: [
      { type: 'video', src: '/media/market-pulse-demo.mp4', poster: '/media/market-portfolio.png', alt: 'Market Pulse interactive Web prototype' },
    ],
    context: 'Market information is distributed across pricing feeds, news sources, macroeconomic events, technical indicators, and portfolio records. The prototype explores how an applied AI workflow can reduce the effort required to collect and interpret those separate inputs.',
    problem: 'Traditional dashboards present large amounts of data but often leave the user to reconstruct the decision context manually. The system needed to answer a more practical set of questions: what matters today, which events affect current holdings, and what conditions deserve attention next.',
    solution: 'Grashof created a multi-source API pipeline, normalized incoming data, presented it in an interactive Web interface, and added an AI summary layer. The AI workflow organizes market focus, event risks, portfolio relevance, and scenario conditions without presenting the output as guaranteed investment advice.',
    delivered: [
      'Multi-source API data pipeline',
      'Data normalization and update workflow',
      'Interactive Web dashboard',
      'News and event integration',
      'AI summary and scenario workflow',
      'Portfolio decision-support interface',
    ],
    approach: [
      { name: 'Data Sources', description: 'Collect market, news, event, and portfolio inputs' },
      { name: 'Fetching Layer', description: 'Retrieve and schedule source updates' },
      { name: 'Normalization', description: 'Convert different formats into consistent structures' },
      { name: 'Visualization', description: 'Present the information through an interactive dashboard' },
      { name: 'AI Summary', description: 'Organize focus, risk, and scenario signals' },
      { name: 'Key Answer', description: 'Surface concise answers for the user to review' },
    ],
    evidence: [
      { type: 'image', src: '/media/market-portfolio.png', alt: 'Market Pulse portfolio decision panel' },
      { type: 'image', src: '/media/market-news-events.png', alt: 'Market Pulse news and event intelligence view' },
      { type: 'video', src: '/media/market-pulse-demo.mp4', poster: '/media/market-portfolio.png', alt: 'Market Pulse interactive prototype demonstration' },
    ],
  },
];

export const getProject = (slug: string) => projectRecords.find((project) => project.slug === slug);
