export const profile = {
  firstName: '王健',
  lastName: '视频制作人',
  tagline: 'VIDEO PRODUCER · CINEMATOGRAPHER',
  subtitle:
    '用镜头讲述商业价值。专注高端影视制作、AIGC 工作流与后期统筹，3 年服务 50+ 品牌客户。',
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
    video: '',
    poster: '',
    tint: ['#ff8a3d', '#5b1e3a'],
  },
  {
    name: '商业片',
    kind: '商业片',
    description: '精准传达品牌价值，创造商业影响力。',
    stack: ['索尼 FX3', 'DaVinci Resolve'],
    video: '',
    poster: '',
    tint: ['#ffb36b', '#1f4b63'],
  },
  {
    name: 'AI 时尚短片',
    kind: 'AIGC 探索',
    description: 'AIGC 前沿探索，创意无限可能。',
    stack: ['Midjourney', 'Runway', 'HeyGen'],
    video: '/videos/works/ai-short-film.mp4',
    poster: '',
    tint: ['#5ec8ff', '#3a1f5b'],
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
    '商业视频内容创作者，3 年来服务 50+ 品牌客户，业务覆盖品牌宣传片、电商内容、传统拍摄与 AIGC 创新。',
    '熟练使用索尼 FX3、佳能 C50、佳能 C80 等电影级设备，把控画面质感与光影；精通 DaVinci Resolve 调色与剪辑，统筹从粗剪到成片的完整流程。',
    '拥有 AIGC 商业化工作流，使用 Midjourney、Runway、HeyGen 等工具进行前期概念与视觉预演。理念：视频既要视觉精美，也要传达品牌价值、打动目标受众、实现商业转化。',
  ],
  stats: [
    { value: '3', label: '年行业经验' },
    { value: '200W+', label: '累计业绩转化' },
    { value: '98%', label: '项目按时交付率' },
    { value: '50+', label: '服务品牌客户' },
  ],
};

export const skills = [
  { group: '摄影器材', items: ['索尼 FX3', '佳能 C50', '佳能 C80', '电影级设备'] },
  { group: '后期制作', items: ['DaVinci Resolve 调色', 'DaVinci Resolve 剪辑', '粗剪到成片统筹'] },
  { group: 'AIGC 工作流', items: ['Midjourney', 'Runway', 'HeyGen', 'Nano Banana', 'Seedanse 2.0'] },
  { group: '业务类型', items: ['品牌宣传片', '电商内容', '情绪短片', '商业片', 'AIGC 创新'] },
  { group: '工作流程', items: ['前期概念', '视觉预演', '拍摄执行', '后期统筹'] },
];

export const experience = [
  {
    role: '高级视频制作人',
    org: 'EVALAB',
    period: '2025 – 至今',
    note: '团队 10+ 人',
    points: [
      '主导品牌商业视频项目，累计带来 200W+ 业绩转化。',
      '建立 AIGC 商业化工作流，提效 40%。',
      '管理 10+ 人制作团队，项目交付率 98%。',
    ],
  },
  {
    role: '视频内容负责人',
    org: '金华君澜大饭店',
    period: '2024.03 – 2024.12',
    note: '',
    points: [
      '负责账号视频内容策划与拍摄。',
      '运营官方账号，提升品牌知名度与客流转化。',
      '品质内容累计获赞超过 100W+。',
    ],
  },
  {
    role: '独立制作人 · 摄影师 / 剪辑师',
    org: '自由职业',
    period: '2023.10 – 2024.03',
    note: '',
    points: [
      '服务 50+ 品牌客户。',
      '精通 DaVinci Resolve 调色系统。',
      '建立个人商业视频制作工作室。',
    ],
  },
];

export const education = {
  degree: '视听（大专）',
  school: '上海工商职业技术学院',
  period: '2023 – 2026',
  score: '',
};

export const certifications = [];

export const location = '上海';
