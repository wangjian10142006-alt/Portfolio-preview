export const profile = {
  firstName: '王健',
  lastName: '内容创作者',
  tagline: 'CONTENT CREATOR · CINEMATOGRAPHER',
  subtitle:
    '内容创作者，擅长从内容策划、脚本分镜到拍摄制作的全流程，也擅长 AIGC 内容生产。',
  // 英文规格牌：不做逐字翻译，改成「标签 / 参数」的工业写法
  specs: [
    { label: 'Role', value: 'Content Creator · Cinematographer' },
    { label: 'Scope', value: 'Planning · Script · Storyboard · Shoot · Post' },
    { label: 'Practice', value: 'AIGC Content Production' },
  ],
  email: 'wangjian52088@icloud.com',
  phone: '139 5843 2093',
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  linkedin: '',
  github: '',
};

export const projects = [
  {
    name: '情绪短片',
    kind: '情绪短片',
    description: '用镜头讲述故事，以画面传递情感。',
    stack: ['DaVinci Resolve', '调色'],
    videos: [
      { title: '短片一', role: '策划·拍摄·剪辑', src: '/videos/works/emotion-1.mp4', poster: '/videos/works/emotion-1-poster.jpg' },
      { title: '短片二', role: '策划·拍摄·剪辑', src: '/videos/works/emotion-2.mp4', poster: '/videos/works/emotion-2-poster.jpg' },
    ],
    tint: ['#ff8a3d', '#5b1e3a'],
  },
  {
    name: '商业片',
    kind: '商业片',
    description: '精准传达品牌价值，创造商业影响力。',
    stack: ['索尼 FX3', 'DaVinci Resolve'],
    videos: [
      { title: 'Eliot Jackson · Drop The Mic', role: '摄影助理', src: '/videos/works/commercial-1.mp4', poster: '/videos/works/commercial-1-poster.jpg' },
      { title: '起亚车友故事', role: '拍摄兼剪辑', src: '/videos/works/commercial-2.mp4', poster: '/videos/works/commercial-2-poster.jpg' },
      { title: '君澜宣传片', role: '策划·拍摄·剪辑', src: '/videos/works/commercial-3.mp4', poster: '/videos/works/commercial-3-poster.jpg' },
    ],
    tint: ['#ffb36b', '#1f4b63'],
  },
  {
    name: 'AI 时尚短片',
    kind: 'AIGC 探索',
    description: 'AIGC 前沿探索，创意无限可能。',
    stack: ['Seedance', 'Nano Banana', 'Kling'],
    videos: [
      { title: '时尚短片', src: '/videos/works/ai-short-film.mp4', poster: '/videos/works/ai-short-film-poster.jpg' },
      { title: '潮玩短片', src: '/videos/works/ai-short-film-2.mp4', poster: '/videos/works/ai-short-film-2-poster.jpg' },
    ],
    tint: ['#5ec8ff', '#3a1f5b'],
  },
  {
    name: '调色 Demo',
    kind: '调色展示',
    description: '调色前后对比，展示色彩塑造能力。',
    stack: ['DaVinci Resolve', '调色'],
    videos: [
      { title: '调色 Demo', src: '/videos/works/color-demo-1.mp4', poster: '/videos/works/color-demo-1-poster.jpg' },
    ],
    tint: ['#a78bfa', '#1f4b63'],
  },
];

export const nav = [
  { label: '关于我', id: 'about' },
  { label: '技能', id: 'skills' },
  { label: '经历', id: 'experience' },
  { label: '作品', id: 'work' },
  { label: '联系', id: 'contact' },
];

export const about = {
  paragraphs: [
    '内容创作者，4 年从业经验，覆盖品牌宣传片、电商内容、传统拍摄与 AIGC 创新，擅长把项目需求转化为可执行的内容方案。',
    '熟悉视听语言与叙事方法，注重用镜头讲故事，形成自己的内容审美。',
    '拥有 AIGC 商业化工作流（Seedance、Nano Banana、Kling），能基于项目从 0 到 1 搭建并迭代 SOP，高效产出内容。',
  ],
  stats: [
    { value: '4', label: '年行业经验' },
    { value: '200W+', label: '单月线下消费转化' },
    { value: '40%', label: 'AIGC 工作流提效' },
    { value: '300W+', label: '内容累计曝光' },
  ],
};

export const skills = [
  { group: '视听语言', items: ['镜头叙事', '画面构图', '节奏把控', '光影表达'] },
  { group: '内容策划', items: ['创作 Brief', '分镜脚本', '内容 SOP', '选题策划'] },
  { group: '摄影器材', items: ['各类旗舰级摄影机', '电影级设备', '专业摄影机操作', '设备维护与校准'] },
  { group: '后期制作', items: ['DaVinci Resolve 调色', 'DaVinci Resolve 剪辑', '粗剪到成片统筹'] },
  { group: 'AIGC 工作流', items: ['Seedance', 'Nano Banana', 'Kling'] },
  { group: '业务类型', items: ['品牌宣传片', '电商内容', '情绪短片', '商业片', 'AIGC 创新'] },
  { group: '工作流程', items: ['前期概念', '视觉预演', '拍摄执行', '后期统筹'] },
];

export const coreValues = [
  { title: '视听语言', desc: '注重镜头叙事与视听表达，能把抽象需求转化为有感染力的画面。' },
  { title: 'SOP 搭建', desc: '能基于项目从 0 到 1 搭建内容生产 SOP，并持续迭代、沉淀为可复用的方法。' },
  { title: '产品敏感', desc: '对内容与产品保持敏感，让每一条内容都服务于品牌与商业目标。' },
];

export const experience = [
  {
    role: '高级视频制作人',
    org: 'EVALAB',
    period: '2025 – 至今',
    note: '',
    points: [
      '负责品牌商业视频的策划、拍摄与后期统筹，把控项目全流程。',
      '把控项目前后期规划与进度，确保按时按质交付。',
      '主导 AIGC 商业化工作流建设，利用 AI 工具进行视觉预演，提效 40%。',
      '制作品牌内容并分发至私域社群，引流用户到线下消费，累计带来 200W+ 业绩转化。',
    ],
  },
  {
    role: '独立制作人 · 摄影师 / 剪辑师',
    org: '自由职业',
    period: '2024.03 – 2024.12',
    note: '',
    points: [
      '独立承接品牌视频项目，完成策划、拍摄、剪辑、调色全流程。',
      '负责产品宣传片、电商内容的拍摄执行与后期包装。',
      '为品牌客户提供从脚本到成片的完整视频制作服务。',
      '建立个人商业视频制作工作室，积累全流程制作经验。',
    ],
  },
  {
    role: '视频内容负责人',
    org: '金华君澜大饭店',
    period: '2023.10 – 2024.03',
    note: '',
    points: [
      '负责酒店官方账号的视频内容策划与拍摄执行。',
      '统筹视频前后期制作，完成剪辑、调色与成片输出。',
      '运营官方账号，策划内容方向，提升品牌曝光与客流转化。',
      '产出内容累计曝光超过 300W。',
    ],
  },
];

export const education = {
  degree: '视听（大专）',
  school: '上海工商职业技术学院',
  period: '',
  score: '',
};

export const certifications = [];

export const location = '上海';
