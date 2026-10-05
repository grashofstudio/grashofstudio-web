import type { Media } from './site';

export type Topic = {
  path: string;
  section: 'Solutions' | 'In Development' | 'Future R&D';
  title: string;
  titleZh: string;
  description: string;
  lead: string;
  leadEn: string;
  status?: string;
  scopeNote: string;
  overview: { title: string; paragraphs: string[] };
  workTitle: string;
  work: { title: string; description: string }[];
  inputs: string[];
  outputs: string[];
  evidence: { title: string; description: string; href?: string; linkLabel?: string; media?: Media & { width: number; height: number } };
  progress?: { completed: string[]; pending: string[] };
  questions: { question: string; answer: string }[];
  reference?: { label: string; href: string };
};

export const topics: Topic[] = [
  {
    path: '/solutions/thermal-fluid-solutions/',
    section: 'Solutions',
    title: 'Thermal-Fluid Engineering Solutions',
    titleZh: '熱流工程解決方案',
    description: 'Grashof 格拉索工業提供 Thermal Solutions 熱流工程解決方案：熱傳與流動建模、熱管理設計、製程參數比較及導入支援。查看高周波加熱與晶圓雷射製程案例。',
    lead: '從熱流問題、設備設計到製程導入。',
    leadEn: 'Thermal solutions for equipment design, heat management, and process development. Based in Taiwan.',
    scopeNote: '服務範圍與驗證方式依設備、資料與專案需求確認。',
    overview: {
      title: '先釐清熱從哪裡來、往哪裡去',
      paragraphs: [
        '設備溫度超出限制、加熱不均或製程參數難以選定，需要先找出熱源、熱路徑與邊界條件。格拉索以熱傳、流動及多物理模型比較設計方案，並協助把結果用於設備與製程改善。',
        '完整熱流解決方案不只是一份模擬圖。工作從需求定義開始，涵蓋建模、設計比較、參數選擇與導入支援；需要哪些實測或試驗，會在專案範圍中一併確認。',
      ],
    },
    workTitle: '可討論的工程工作',
    work: [
      { title: 'Heat transfer · 熱傳與熱管理', description: '比較溫度分布、熱路徑與散熱配置，找出影響溫度的設計條件。' },
      { title: 'Fluid flow · 流動與冷卻', description: '依幾何、材料與流動條件建立模型，評估流動對熱管理的影響。' },
      { title: 'Multiphysics · 多物理耦合', description: '針對高周波或雷射加熱，將熱源與材料的溫度響應一起分析。' },
      { title: 'Process development · 製程導入', description: '比較頻率、功率、時間或焦深，整理下一輪實驗與設備調整的參數範圍。' },
    ],
    inputs: ['設備或產品幾何、材料資料', '熱源、功率與操作條件', '目標溫度、容許梯度與限制', '可提供的溫度紀錄或試驗資料'],
    outputs: ['模型假設與邊界條件', '溫度場、時間歷程與參數比較', '設計改善與製程參數建議', '工程報告、結果圖與導入討論資料'],
    evidence: {
      title: '高周波加熱與晶圓雷射製程',
      description: '公開案例包含兩個熱模型研究：比較高周波加熱的頻率與加熱時間，以及雷射製程的功率與焦深。案例頁提供溫度分布、時間歷程與設備照片。',
      href: '/projects/simulation-led-development/',
      linkLabel: '查看熱模擬工程案例',
      media: { type: 'image', src: '/media/induction-temperature-history.png', alt: 'High-frequency induction-heating simulation: temperature history and thermal gradient', caption: '既有工程案例：高周波加熱溫度歷程。', width: 891, height: 578 },
    },
    questions: [
      { question: '熱流方案與單次模擬有什麼不同？', answer: '單次模擬回答特定條件下的結果；熱流方案還需要確認設計目標、比較不同條件，並安排如何將結果用於設備或製程。交付範圍依專案約定。' },
      { question: '還沒有完整圖面或量測資料，可以先討論嗎？', answer: '可以先提供問題、操作條件與現有資料。資料不足時，先界定可分析的範圍、必要假設與待補資料，不把缺少驗證的結果當作定論。' },
    ],
  },
  {
    path: '/solutions/thermal-digital-twin/',
    section: 'In Development',
    title: 'Thermal Digital Twin',
    titleZh: '數位孿生熱管理',
    description: 'Grashof 格拉索工業的 Thermal Digital Twin 數位孿生熱管理開發進度：軌道熱負載、熱模型與資料工作流程。Under Development，尚未作為成熟產品供應。',
    lead: '開發連接熱模型、工程資料與應用介面的工作流程。',
    leadEn: 'Thermal digital twin development: orbital heat-load data, thermal modeling, and engineering workflows. Not a released product.',
    status: 'UNDER DEVELOPMENT · 開發中',
    scopeNote: '數位孿生熱管理仍在開發。軟體檢查不等於熱模型驗收，也不代表已完成即時資料串接或硬體驗證。',
    overview: {
      title: '模型需要對應實際設備',
      paragraphs: [
        '在熱管理應用中，數位孿生用模型描述實際設備的溫度與熱行為，並依量測資料檢查或更新模型。它不等於一張三維模型或離線模擬圖。',
        '格拉索以熱流工程與客製 AI、API 應用作為開發基礎。目前衛星專案先建立熱負載資料與模型驗證工作流程；量測串接、模型更新與客戶端應用仍需後續開發。',
      ],
    },
    workTitle: '建置時需要確認的四件事',
    work: [
      { title: 'Thermal model · 熱模型', description: '定義熱源、材料與邊界條件，確認模型要描述哪些設備狀態。' },
      { title: 'Data connection · 資料串接', description: '整理溫度、功率與操作紀錄；確認感測位置、時間戳記與 API 或檔案格式。' },
      { title: 'Model update · 模型更新', description: '用量測檢查模型偏差，依需求規劃更新方式與頻率；不是每個專案都需要即時運算。' },
      { title: 'Application · 應用導入', description: '依客戶作業流程設計介面，呈現溫度、模型偏差與比較結果，並約定驗收方式。' },
    ],
    inputs: ['設備幾何、材料與熱源資料', '量測位置、溫度與操作紀錄', '資料存取方式、格式與更新頻率', '使用情境、誤差要求與部署環境'],
    outputs: ['熱模型與資料欄位對照', '資料串接與應用介面設計', '模型檢查、更新與驗證計畫', '後續 API 與應用系統開發規劃'],
    progress: {
      completed: ['軌道日照、反照與地球紅外熱負載的資料工作流程', '離線 Python 資料產生與跨平台軟體重現檢查'],
      pending: ['整合熱模型的數值驗收與收斂檢查', '實測資料串接、模型更新與硬體測試比對', '客戶端應用與產品交付驗證'],
    },
    evidence: {
      title: '從既有熱模型出發',
      description: '高周波加熱與雷射製程案例呈現目前可公開的熱建模工作。這些案例可作為模型建置的參考，不代表已交付即時數位孿生系統或閉迴路控制產品。',
      href: '/projects/simulation-led-development/',
      linkLabel: '查看熱建模案例與結果',
    },
    questions: [
      { question: '只有模擬，能稱作 Thermal Digital Twin 嗎？', answer: '本頁所指的數位孿生需對應實際設備，並有資料連結與模型檢查或更新的規劃。單次離線分析仍稱為熱模擬，不混用兩者。' },
      { question: 'Digital twin 一定需要 AI 或即時控制嗎？', answer: '不一定。先確認熱管理問題與資料條件，再判斷是否需要 AI、即時更新或控制介面。沒有實測與驗證資料時，不承諾預測精度或控制效果。' },
    ],
    reference: { label: 'NIST — Digital twins（技術背景）', href: 'https://www.nist.gov/digital-twins' },
  },
  {
    path: '/rd/satellite-thermal-management/',
    section: 'Future R&D',
    title: 'Satellite Thermal Management R&D',
    titleZh: '衛星熱管理研發',
    description: 'Grashof 格拉索工業的 Satellite Thermal Management 衛星熱管理研發方向：軌道熱負載、電子設備熱路徑與散熱器配置。R&D Roadmap，Under Development。',
    lead: '研究衛星電子設備的熱路徑與軌道溫度變化。',
    leadEn: 'A research roadmap for satellite thermal control, heat-transfer paths, and radiator design. Under development in Taiwan.',
    status: 'R&D ROADMAP · UNDER DEVELOPMENT',
    scopeNote: '尚未作為量產產品或商用衛星系統供應；本頁不宣稱已完成飛行驗證或太空環境認證。',
    overview: {
      title: '太空熱管理的條件不同',
      paragraphs: [
        '在真空環境中，不能依靠外部空氣對流散熱。電子設備的熱需經由結構與熱傳元件傳遞，再透過輻射與外部環境交換；日照、地球反照、紅外輻射與設備功耗都會影響溫度。',
        'Grashof 的衛星熱管理研發聚焦電子設備熱路徑、散熱器配置與軌道溫度變化。以下為研發範圍與待驗證問題，不是已完成產品的規格。',
      ],
    },
    workTitle: '研發重點與待驗證問題',
    work: [
      { title: 'Orbital heat loads · 軌道熱負載', description: '規劃日照與遮蔽工況，建立外部熱負載與設備功耗條件。' },
      { title: 'Heat paths · 電子模組熱路徑', description: '研究模組、封裝、結構及接觸界面的傳熱，以及熱管與熱帶配置。' },
      { title: 'Radiators · 散熱器配置', description: '比較面積、配置與表面熱性質對溫度分布的影響。' },
      { title: 'Verification · 溫度與模型驗證', description: '規劃溫度監測、模型比對與環境試驗需求；驗證完成前不宣稱符合任務使用要求。' },
    ],
    inputs: ['任務軌道、姿態與日照條件', '電子設備功耗與工作週期', '結構、材料與表面熱性質', '元件溫度限制與可用試驗資料'],
    outputs: ['軌道與設備熱工況定義', '熱路徑與散熱配置比較', '溫度監測與驗證規劃', '依研發進度建立的模型與研究紀錄'],
    evidence: {
      title: '研發方向示意，非驗證成果',
      description: '此圖為生成式研發概念示意，呈現電子模組至散熱器的熱路徑。它不是 Grashof 求解器輸出的數值結果，也不是已交付衛星產品或試驗證據。',
      media: { type: 'image', src: '/media/future-satellite-thermal-simulation.png', alt: 'Generated satellite thermal-management R&D concept: electronics package and heat-transfer path to a radiator, not a validated simulation result', caption: 'R&D 概念示意 · 非實際數值模擬或驗證結果。', width: 1672, height: 941 },
    },
    questions: [
      { question: '現在可購買衛星熱管理系統嗎？', answer: '目前仍為研發方向，尚未作為量產產品或商用服務供應。現有熱流工程工作與衛星產品研發分開說明。' },
      { question: '太空電磁干擾防護與衛星熱管理如何銜接？', answer: '兩者都涉及電子模組與封裝結構。EMI 研發另聚焦屏蔽、接地、濾波與封裝界面，不等於完整衛星通訊抗干擾系統。' },
    ],
    reference: { label: 'NASA — Small Spacecraft Thermal Control（技術背景）', href: 'https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/' },
  },
];
