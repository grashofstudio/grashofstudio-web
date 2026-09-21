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
    role: 'Vision workflow and prototype development',
    stage: 'Prototype / Internal development',
    description: 'A camera-based prototype for extracting biological features and estimating species from live video.',
    descriptionZh: '以一般攝影機影像為輸入，完成影格篩選、影像強化、生物特徵擷取與物種推估原型',
    heroMedia: [
      { type: 'video', src: '/media/bio-vision-demo.mp4', poster: '/media/bio-vision-poster.jpg', alt: 'Bio Vision AI prototype processing a live aquarium camera feed' },
    ],
    context: 'Bio Vision AI is an internal prototype built around a standard aquarium camera feed. It tests whether usable biological features can be recovered before species estimation without requiring high-end inference hardware.',
    problem: 'Fish change pose continuously and are often obscured by reflections, blur, uneven lighting, and water conditions. A simple object detector can locate an animal, but it does not provide enough detail for a species estimate.',
    solution: 'The prototype rejects unclear frames, adjusts resolution and contrast, extracts visible traits, and compares those traits with candidate species through a lightweight model and an AI API.',
    delivered: [
      'Camera capture and usable-frame selection',
      'Resolution and contrast adjustment',
      'Shape, color, texture, fin, and motion features',
      'Lightweight model and AI API connection',
      'Structured species-estimate output',
      'Live prototype for internal testing',
    ],
    approach: [
      { name: 'Video Input', description: 'Read a continuous feed from a standard camera' },
      { name: 'Frame Filter', description: 'Reject frames with poor visibility or focus' },
      { name: 'Image Adjustment', description: 'Adjust scale, contrast, and visible detail' },
      { name: 'Feature Review', description: 'Read shape, color, texture, fins, and movement' },
      { name: 'Species Estimate', description: 'Compare the visible traits with candidate species' },
      { name: 'Prototype Output', description: 'Return the estimate and the supporting traits' },
    ],
    evidence: [
      { type: 'video', src: '/media/bio-vision-demo.mp4', poster: '/media/bio-vision-poster.jpg', alt: 'Recorded demonstration of Bio Vision AI identifying biological features', caption: 'Live prototype showing the camera frame, visible traits, and species estimate.' },
      { type: 'image', src: '/media/bio-vision-poster.jpg', alt: 'Representative camera frame used by the Bio Vision AI prototype', caption: 'Representative aquarium frame used during prototype testing.' },
    ],
  },
  {
    slug: 'simulation-led-development',
    title: 'Simulation-Led Process Development',
    category: 'Thermal-Fluid Intelligence',
    status: 'APPLIED ENGINEERING CASE',
    role: 'Thermal modeling and parameter studies',
    stage: 'Engineering development support',
    description: 'Thermal studies for high-frequency heating equipment and laser-wafer process development.',
    descriptionZh: '以熱模型比較高周波鋼材加熱與晶圓雷射製程的參數、溫度分布及影響範圍',
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
