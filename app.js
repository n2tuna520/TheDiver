const modules = [
  { id: "home", title: "總覽", text: "查看數位潛水證、平台功能與會員資訊。", cta: "回到總覽" },
  { id: "forecast", title: "潛水預報", text: "依日期查看溫度、雨量、風、浪與潮汐。", cta: "查看預報" },
  { id: "trips", title: "揪潛", text: "活動開團、推薦與報名狀態整合。", cta: "找團" },
  { id: "essentials", title: "缺一不可", text: "預約裝備、氣瓶配送與查詢停車資訊。", cta: "開始使用" },
  { id: "logbook", title: "潛水日誌", text: "紀錄潛點、深度、潛伴與共同回憶。", cta: "新增紀錄" },
  { id: "map", title: "潛咩 Diving Map", text: "潛點地形、建議路線與適合等級。", cta: "打開地圖" },
  { id: "forum", title: "潛伴聊聊", text: "潛點、裝備、活動與課程討論。", cta: "加入討論" },
  { id: "courses", title: "你的潛水課", text: "氮醉鮪魚課程梯次與報名入口。", cta: "看課程" },
  { id: "gear", title: "裝備庫", text: "裝備用途、分類與購買連結。", cta: "看裝備" },
  { id: "passport", title: "潛水護照維護", text: "會員、教練、證照與安全資料集中管理。", cta: "維護資料" }
];

const diveSites = [
  {
    name: "龍洞四季灣",
    area: "東北角",
    level: "初階至進階",
    depth: "6-22m",
    terrain: "岩岸、礁岩斜坡、沙地",
    entry: "岸潛",
    route: "由灣內緩降，沿礁岩外緣前進，再以沙地與岸線方向折返。",
    risk: "東北季風、長浪、濕滑岩面與船隻動線。",
    facility: "鄰近停車與盥洗設施，實際開放狀態需行前確認。",
    season: "春末至秋季較常安排，冬季需留意東北季風。",
    x: 58,
    y: 48
  },
  {
    name: "龍洞和美",
    area: "東北角",
    level: "初階至進階",
    depth: "5-24m",
    terrain: "岩岸、巨石、礁岩平台",
    entry: "岸潛",
    route: "由和美側岸線入水，沿巨石與礁岩平台巡航，依氣量原路折返。",
    risk: "出入水浪況、岩面落差、流況與釣客活動。",
    facility: "停車與補給需依實際入口確認。",
    season: "夏季與風浪穩定時較適合。",
    x: 48,
    y: 61
  },
  {
    name: "鼻頭角",
    area: "東北角",
    level: "進階建議",
    depth: "8-28m",
    terrain: "岬角、巨石、礁壁",
    entry: "岸潛",
    route: "依岬角內側下水，沿礁壁前進，避免超出事前設定折返點。",
    risk: "岬角流、浪況快速變化、深度與耗氣控制。",
    facility: "周邊有步道及停車區，裝備搬運距離需評估。",
    season: "海況穩定日限定。",
    x: 72,
    y: 32
  },
  {
    name: "潮境公園",
    area: "東北角",
    level: "初階友善",
    depth: "4-18m",
    terrain: "礁岩、沙地、人工復育區",
    entry: "岸潛",
    route: "由緩坡入水，沿沙地與礁區邊界移動，避開保育限制區域。",
    risk: "遊客與漁業活動、能見度變化、區域使用規範。",
    facility: "鄰近停車與公共設施。",
    season: "全年仍需依風浪判斷。",
    x: 22,
    y: 74
  },
  {
    name: "墾丁合界",
    area: "南部",
    level: "初階至進階",
    depth: "5-22m",
    terrain: "珊瑚礁、沙地、緩坡",
    entry: "岸潛",
    route: "由岸邊緩降，沿珊瑚礁外緣巡航，以沙地作為回程定位。",
    risk: "潮流、浪況、珊瑚保護與旺季人流。",
    facility: "周邊有潛店與停車資源。",
    season: "多數季節可安排，仍需留意颱風與長浪。",
    x: 32,
    y: 46
  },
  {
    name: "後壁湖",
    area: "南部",
    level: "依船潛點而定",
    depth: "8-35m",
    terrain: "珊瑚礁、礁壁、沙地",
    entry: "船潛為主",
    route: "依船長與導潛簡報執行，使用潛降繩或水面集合程序。",
    risk: "船隻、流速、深度與水面程序。",
    facility: "港區、潛店、裝備與船潛服務集中。",
    season: "全年視海況安排。",
    x: 68,
    y: 58
  },
  {
    name: "萬里桐",
    area: "南部",
    level: "初階友善",
    depth: "4-18m",
    terrain: "珊瑚礁、沙地、淺礁",
    entry: "岸潛",
    route: "沿岸礁與沙地交界巡航，保持與珊瑚距離。",
    risk: "淺水浪湧、浮潛人流與珊瑚碰觸。",
    facility: "周邊停車與簡易補給。",
    season: "海況平穩時適合技巧練習。",
    x: 48,
    y: 74
  },
  {
    name: "小琉球杉福",
    area: "離島",
    level: "初階至進階",
    depth: "5-24m",
    terrain: "珊瑚礁、沙地、緩坡",
    entry: "岸潛或船潛",
    route: "由沙地集合，沿珊瑚礁外緣移動，依潮流調整方向。",
    risk: "船隻、潮流、海龜觀察距離與保育規範。",
    facility: "島上潛店、交通與裝備服務完整。",
    season: "多數季節可安排。",
    x: 23,
    y: 55
  },
  {
    name: "綠島石朗",
    area: "離島",
    level: "初階至進階",
    depth: "6-30m",
    terrain: "珊瑚平台、礁坡、沙地",
    entry: "岸潛",
    route: "由平台緩降至礁坡，依深度與流況設定折返點。",
    risk: "深度、流速、空氣消耗與岸邊浪況。",
    facility: "鄰近潛店與裝備服務。",
    season: "夏季常見，冬季留意季風與船班。",
    x: 49,
    y: 34
  },
  {
    name: "蘭嶼八代灣",
    area: "離島",
    level: "進階建議",
    depth: "8-32m",
    terrain: "礁岩、礁壁、開放海域",
    entry: "岸潛或船潛",
    route: "依當地導潛與流況規劃，不建議自行依示意圖下水。",
    risk: "強流、浪況、偏遠環境與交通後援。",
    facility: "需依當地潛店安排。",
    season: "以風浪與船班穩定期為主。",
    x: 74,
    y: 58
  },
  {
    name: "澎湖東吉",
    area: "離島",
    level: "進階建議",
    depth: "10-35m",
    terrain: "玄武岩、礁壁、流區",
    entry: "船潛",
    route: "依船潛計畫、潮汐與流向安排漂流或定點潛水。",
    risk: "強流、船程、離島後援與水面回收。",
    facility: "需透過船家與潛水業者安排。",
    season: "受季風與船班影響明顯。",
    x: 42,
    y: 74
  }
];

let trips = [
  { title: "龍洞中性浮力練習團", type: "初階", date: "2026-07-04", slots: "4/8", place: "東北角", price: "NT$ 2,400" },
  { title: "小琉球海龜觀察團", type: "初階", date: "2026-07-11", slots: "6/10", place: "小琉球", price: "NT$ 3,200" },
  { title: "綠島深度與流況訓練", type: "進階", date: "2026-07-18", slots: "3/6", place: "綠島", price: "NT$ 5,800" },
  { title: "東北角水下攝影晨潛", type: "攝影", date: "2026-07-25", slots: "2/5", place: "龍洞", price: "NT$ 2,900" }
].map((trip, index) => ({
  ...trip,
  id: `demo-trip-${index + 1}`,
  host: "氮醉鮪魚潛水俱樂部",
  ownerId: "",
  messages: []
})).concat(getMemberTrips());

const courseStages = [
  {
    stage: "初階",
    title: "CMAS 初階潛水員",
    image: "assets/course-beginner.jpg",
    summary: "建立裝備操作、壓力平衡、浮力控制、潛伴制度與基礎水下安全觀念。",
    focus: ["裝備組裝與檢查", "面鏡與調節器技巧", "中性浮力", "潛伴與手勢"]
  },
  {
    stage: "進階",
    title: "CMAS 進階潛水員",
    image: "assets/course-advanced.jpg",
    summary: "累積不同環境經驗，強化導航、深度管理、夜潛與潛水計畫能力。",
    focus: ["水下導航", "深度與耗氣管理", "夜潛程序", "環境判讀"]
  },
  {
    stage: "救援",
    title: "CMAS 救援能力訓練",
    image: "assets/course-rescue.jpg",
    summary: "從事故預防、壓力辨識、自救到協助潛伴，建立冷靜且有系統的反應能力。",
    focus: ["壓力辨識", "自救程序", "疲憊與失去反應潛水員", "事故情境演練"]
  },
  {
    stage: "潛水長",
    title: "CMAS 潛水領導培訓",
    image: "assets/course-divemaster.jpg",
    summary: "培養活動簡報、帶隊、風險管理與協助教學能力，朝專業潛水角色發展。",
    focus: ["潛水簡報", "帶隊與導航", "風險管理", "教學協助"]
  }
];

const courseStorageKey = "thediver-course-sessions-v1";
let courses = JSON.parse(localStorage.getItem(courseStorageKey) || "null") || [
  {
    id: "course-demo-1",
    title: "CMAS 初階潛水員週末班",
    stage: "初階",
    startDate: "2026-07-04",
    endDate: "2026-07-12",
    location: "東北角龍洞",
    seats: 6,
    price: 18000,
    instructor: "氮醉鮪魚教練團隊",
    description: "泳池技巧、開放水域訓練與基礎安全知識。",
    requirements: "健康聲明、基本水性與個人輕裝。"
  }
];

const gear = [
  {
    title: "面鏡與呼吸管",
    type: "輕裝",
    image: "assets/gear-mask-snorkel.jpg",
    use: "面鏡提供水下清晰視野；呼吸管可在水面等待或游動時節省氣瓶空氣。",
    scene: "水面集合、岸潛進出與浮潛練習。",
    tip: "優先確認面鏡貼合臉型且不漏水，呼吸管固定位置不可妨礙調節器。"
  },
  {
    title: "防寒衣",
    type: "輕裝",
    image: "assets/gear-wetsuit.jpg",
    use: "降低水中熱量流失，減少礁岩或水母等環境接觸造成的不適。",
    scene: "岸潛、船潛、訓練課程與水溫較低的季節。",
    tip: "尺寸需貼身但不壓迫呼吸；過鬆會進水降溫，過緊會影響活動與舒適度。"
  },
  {
    title: "套鞋",
    type: "輕裝",
    image: "assets/gear-boots.jpg",
    use: "保護腳底並提升岩岸、潮間帶與船梯移動時的穩定度。",
    scene: "東北角岩岸、岸潛進出、水面等待與穿著調整式蛙鞋時。",
    tip: "鞋底抓地力與厚度很重要，尺寸需與蛙鞋口袋一起試穿確認。"
  },
  {
    title: "蛙鞋",
    type: "輕裝",
    image: "assets/gear-fins.jpg",
    use: "提高水下推進效率，協助維持姿態、節省體力與氣體消耗。",
    scene: "所有水肺潛水活動，尤其是有流、長距離移動或岸潛出入水。",
    tip: "依腿力、潛點流況與鞋套搭配選擇硬度；太硬容易疲勞，太軟可能推進不足。"
  },
  {
    title: "BCD 浮力背心",
    type: "重裝",
    image: "assets/gear-bcd.jpg",
    use: "固定氣瓶並透過充排氣調整水面浮力與水下中性浮力。",
    scene: "所有水肺潛水活動。",
    tip: "尺寸需能穩定包覆身體，充氣管、洩氣閥及扣具應在下水前逐項檢查。"
  },
  {
    title: "調節器組",
    type: "重裝",
    image: "assets/gear-regulator.jpg",
    use: "將氣瓶高壓空氣降壓後供潛水員呼吸，通常包含主用、備用二級頭與壓力錶。",
    scene: "所有水肺潛水活動與潛伴備援供氣。",
    tip: "確認呼吸順暢、無漏氣、備用氣源可取用，並依原廠週期保養。"
  },
  {
    title: "SMB 與線輪",
    type: "安全",
    image: "assets/gear-smb-reel.jpg",
    use: "在水下或安全停留時標示位置，讓船隻與水面支援人員掌握潛水員動線。",
    scene: "船潛、漂流潛水、離岸較遠或需水面回收時。",
    tip: "放流前需受過操作訓練，線輪應遠離身體與裝備，避免纏繞或快速上升。"
  },
  {
    title: "潛水電腦錶",
    type: "安全",
    image: "assets/gear-dive-computer.jpg",
    use: "持續顯示深度、時間、上升速度與免減壓資訊，協助執行潛水計畫。",
    scene: "休閒潛水、訓練、重複潛水與旅行。",
    tip: "下水前確認電量、氣體設定與單位；電腦錶是輔助工具，不能取代潛水計畫。"
  }
];

const memberStorageKey = "thediver-member-profile-v2";
const authStorageKey = "thediver-auth-state-v1";
const registeredMembersKey = "thediver-registered-members-v1";
const logbookStorageKey = "thediver-logbook-records-v1";
const pendingLogStorageKey = "thediver-pending-logbook-v1";
const tripStorageKey = "thediver-member-trips-v1";
const memberSequenceKey = "thediver-member-sequence-v1";
const dailyLoginStorageKey = "thediver-daily-login-v1";
const dailyPostStorageKey = "thediver-daily-post-count-v1";
const dailyTripStorageKey = "thediver-daily-trip-count-v1";
const reservationStorageKey = "thediver-reservations-v2";
const photoShareStorageKey = "thediver-photo-shares-v1";
const courseAdminEmail = "n2.tuna520@gmail.com";
const courseAdminMemberId = "VI-00001";
const blockedWords = [
  "幹", "靠北", "靠杯", "白癡", "智障", "王八", "垃圾", "媽的", "他媽", "去死",
  "fuck", "shit", "bitch", "asshole", "damn", "idiot", "stupid", "fucker"
];
const defaultMemberProfile = {
  memberId: "",
  realName: "",
  nickname: "",
  gender: "",
  email: "",
  password: "",
  role: "",
  system: "",
  otherSystem: "",
  level: "",
  certNo: "",
  dives: "",
  emailVerified: false
};

let reservations = JSON.parse(localStorage.getItem(reservationStorageKey) || "[]");
let activeReservationType = "潛水裝備";

let logs = JSON.parse(localStorage.getItem(logbookStorageKey) || "null") || [
  { site: "龍洞四季灣", date: "2026-06-10", depth: 18, minutes: 42, buddy: "阿哲、Mina", note: "能見度約 8m，流小，適合練習中性浮力。" },
  { site: "小琉球花瓶岩", date: "2026-05-28", depth: 14, minutes: 48, buddy: "Kevin", note: "沙地集合容易，適合新手複習導航。" }
];

let posts = [
  { topic: "潛點情報", title: "東北角近期能見度回報", body: "早上浪較小，下午風變明顯。建議出發前再次確認浪況。", author: "海晴(VD-00001)", createdAt: "2026-06-18T10:25:00", replies: [] },
  { topic: "裝備討論", title: "新手第一支電腦錶怎麼選", body: "先看是否容易讀取、電池維修與保固，再比較進階功能。", author: "阿哲(VI-00001)", createdAt: "2026-06-17T18:10:00", replies: [] }
];

let photoShares = JSON.parse(localStorage.getItem(photoShareStorageKey) || "null") || [
  {
    id: "photo-demo-1",
    title: "綠島晨光下的海龜",
    body: "示範水攝分享：可記錄拍攝地點、海況、器材設定與觀察重點。",
    author: "阿哲(VI-00001)",
    ownerId: "VI-00001",
    createdAt: "2026-06-19T09:18:00",
    photos: [{ name: "示範照片", dataUrl: "assets/forecast-good.jpg" }],
    comments: [],
    ratings: {}
  }
];

const parkingLots = [
  {
    name: "貢寮龍洞灣第一停車場",
    area: "東北角／龍洞灣",
    address: "新北市貢寮區龍洞灣周邊",
    fee: "以 YouParking 場站公告為準",
    note: "適合前往龍洞灣、龍洞灣岬步道及周邊潛點前先查詢剩餘車位與費率。",
    link: "https://www.youparking.com.tw/parking-detail.php?id=732"
  },
  {
    name: "蝙蝠洞公園停車場",
    area: "東北角／瑞芳海濱",
    address: "新北市瑞芳區海濱里蝙蝠洞公園周邊",
    fee: "以現場公告為準",
    note: "可作為蝙蝠洞周邊活動與氣瓶配送集合點參考，出發前仍需確認現場管制及車位。",
    link: "https://www.google.com/maps/search/?api=1&query=%E8%9D%99%E8%9D%A0%E6%B4%9E%E5%85%AC%E5%9C%92%E5%81%9C%E8%BB%8A%E5%A0%B4"
  }
];

let activeForumTopic = "全部";
let activeForumMode = "posts";
let editingTripId = "";
let editingReservationId = "";
let activeMapRegion = "東北角";
let passwordRecoveryMode = false;
let forumUsesSupabase = false;

function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function getMemberProfile() {
  try {
    return { ...defaultMemberProfile, ...JSON.parse(localStorage.getItem(memberStorageKey)) };
  } catch {
    return { ...defaultMemberProfile };
  }
}

function setMemberProfile(profile) {
  localStorage.setItem(memberStorageKey, JSON.stringify(profile));
}

function getAuthState() {
  try {
    return { loggedIn: false, email: "", guest: false, ...JSON.parse(localStorage.getItem(authStorageKey)) };
  } catch {
    return { loggedIn: false, email: "", guest: false };
  }
}

function setAuthState(state) {
  localStorage.setItem(authStorageKey, JSON.stringify(state));
}

function todayKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const get = (type) => parts.find((part) => part.type === type)?.value || "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function getTaipeiHour() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Taipei",
    hour: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  return Number(parts.find((part) => part.type === "hour")?.value || 0);
}

function addDaysToDateKey(dateKey, days) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

function isNextDayReservationLocked(dateKey) {
  if (!dateKey) return false;
  return dateKey === addDaysToDateKey(todayKey(), 1) && getTaipeiHour() >= 18;
}

function canEditReservation(item, profile = getMemberProfile()) {
  if (!item || item.ownerId !== profile.memberId) return false;
  if (item.status === "店家已確認") return false;
  return !isNextDayReservationLocked(item.date);
}

function getDailyLoginStats() {
  try {
    return JSON.parse(localStorage.getItem(dailyLoginStorageKey)) || {};
  } catch {
    return {};
  }
}

function recordDailyLogin(memberId) {
  if (!memberId) return;
  const stats = getDailyLoginStats();
  const key = todayKey();
  stats[key] = stats[key] || [];
  if (!stats[key].includes(memberId)) {
    stats[key].push(memberId);
  }
  localStorage.setItem(dailyLoginStorageKey, JSON.stringify(stats));
}

function getTodayLoginCount() {
  return (getDailyLoginStats()[todayKey()] || []).length;
}

function getDailyPostStats() {
  try {
    return JSON.parse(localStorage.getItem(dailyPostStorageKey)) || {};
  } catch {
    return {};
  }
}

function getTodayPostCount(memberId) {
  const stats = getDailyPostStats();
  return Number(stats[todayKey()]?.[memberId] || 0);
}

function incrementTodayPostCount(memberId) {
  const stats = getDailyPostStats();
  const key = todayKey();
  stats[key] = stats[key] || {};
  stats[key][memberId] = Number(stats[key][memberId] || 0) + 1;
  localStorage.setItem(dailyPostStorageKey, JSON.stringify(stats));
}

function getDailyTripStats() {
  try {
    return JSON.parse(localStorage.getItem(dailyTripStorageKey)) || {};
  } catch {
    return {};
  }
}

function getTodayTripCount(memberId) {
  return Number(getDailyTripStats()[todayKey()]?.[memberId] || 0);
}

function incrementTodayTripCount(memberId) {
  const stats = getDailyTripStats();
  const key = todayKey();
  stats[key] = stats[key] || {};
  stats[key][memberId] = Number(stats[key][memberId] || 0) + 1;
  localStorage.setItem(dailyTripStorageKey, JSON.stringify(stats));
}

function isTripEditable(item, profile = getMemberProfile()) {
  return Boolean(item.ownerId && item.ownerId === profile.memberId);
}

function getTripMinutesRemaining(item) {
  const remaining = 15 * 60 * 1000 - (Date.now() - new Date(item.createdAt).getTime());
  return Math.max(0, Math.ceil(remaining / 60000));
}

function saveVisibleMemberTrips() {
  saveMemberTrips(trips.filter((item) => item.ownerId));
}

function containsBlockedWords(text) {
  const normalized = String(text || "").toLowerCase().replace(/\s+/g, "");
  return blockedWords.some((word) => normalized.includes(word.toLowerCase()));
}

function getRegisteredMembers() {
  try {
    return JSON.parse(localStorage.getItem(registeredMembersKey)) || {};
  } catch {
    return {};
  }
}

function setRegisteredMembers(members) {
  localStorage.setItem(registeredMembersKey, JSON.stringify(members));
}

function getMembersByEmail() {
  const members = getRegisteredMembers();
  return Object.fromEntries(Object.entries(members).filter(([key]) => key.includes("@")));
}

function saveLogs() {
  localStorage.setItem(logbookStorageKey, JSON.stringify(logs));
}

function getPendingLogs() {
  try {
    return JSON.parse(localStorage.getItem(pendingLogStorageKey)) || [];
  } catch {
    return [];
  }
}

function savePendingLogs(items) {
  localStorage.setItem(pendingLogStorageKey, JSON.stringify(items));
}

function getMemberTrips() {
  try {
    return JSON.parse(localStorage.getItem(tripStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveMemberTrips(items) {
  localStorage.setItem(tripStorageKey, JSON.stringify(items));
}

function getMemberPrefix(role) {
  if (role === "潛水員") return "VD";
  if (role === "潛水教練") return "VI";
  if (role === "潛店管理者") return "VS";
  return "VN";
}

function generateMemberId(role) {
  const prefix = getMemberPrefix(role);
  const sequence = JSON.parse(localStorage.getItem(memberSequenceKey) || "{}");
  const next = Number(sequence[prefix] || 0) + 1;
  sequence[prefix] = next;
  localStorage.setItem(memberSequenceKey, JSON.stringify(sequence));
  return `${prefix}-${String(next).padStart(5, "0")}`;
}

function findMemberById(memberId) {
  const members = Object.values(getRegisteredMembers());
  return members.find((member) => member.profile?.memberId === memberId)?.profile || null;
}

function getMemberDisplay(profile = getMemberProfile()) {
  return `${profile.nickname || "會員"}(${profile.memberId || "未核發"})`;
}

function formatTwd(value) {
  const number = Number(String(value || "").replace(/[^\d]/g, ""));
  if (!number) return "費用待定";
  return `NT$ ${number.toLocaleString("zh-TW")}`;
}

function formatDateTime(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "時間未記錄";
  const parts = new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value || "";
  return `${get("year")}/${get("month")}/${get("day")} ${get("hour")}:${get("minute")}`;
}

function getOwnLogs(profile = getMemberProfile()) {
  if (!profile.memberId) return [];
  return logs.filter((log) => log.ownerId === profile.memberId || (log.sharedWith || []).includes(profile.memberId));
}

function getLastDiveDate(profile = getMemberProfile()) {
  return [...getOwnLogs(profile)]
    .filter((log) => log.date)
    .sort((a, b) => b.date.localeCompare(a.date))[0]?.date || "";
}

function getInitial(text) {
  return (text || "潛").trim().slice(0, 1);
}

function syncSelectValue(selector, value) {
  const field = qs(selector);
  if ([...field.options].some((option) => option.value === value || option.textContent === value)) {
    field.value = value;
  }
}

function calculateProfileScore(profile) {
  const needsDiveCert = ["潛水員", "潛水教練"].includes(profile.role);
  const required = ["realName", "nickname", "gender", "email", "password", "role"];
  const diveRequired = needsDiveCert ? ["system", "level", "certNo", "dives"] : [];
  const filled = [...required, ...diveRequired].filter((key) => String(profile[key] ?? "").trim()).length;
  const total = required.length + diveRequired.length;
  const base = Math.round((filled / total) * 86);
  return Math.min(100, base + (profile.emailVerified ? 14 : 0));
}

function getEarnedBadges(profile) {
  const ownLogs = getOwnLogs(profile);
  const dives = Number(profile.dives || 0) + ownLogs.length;
  return [
    { title: "數位潛水證", note: "完成會員資料建檔", earned: Boolean(profile.realName && profile.email), icon: "ID" },
    { title: "信箱驗證", note: "完成電子郵件驗證", earned: profile.emailVerified, icon: "@" },
    { title: "初階航線", note: "潛水經驗達 25 支", earned: dives >= 25, icon: "25" },
    { title: "海況筆記", note: "新增至少 3 筆潛水日誌", earned: ownLogs.length >= 3, icon: "LOG" },
    { title: "進階旅程", note: "潛水經驗達 50 支", earned: dives >= 50, icon: "50" },
    { title: "深度旅人", note: "潛水經驗達 100 支", earned: dives >= 100, icon: "100" }
  ];
}

function getBadgeIcon(label) {
  return `
    <svg viewBox="0 0 72 90" aria-hidden="true">
      <path class="medal-ribbon" d="M20 4h13l3 18L22 35 14 20Z"></path>
      <path class="medal-ribbon" d="M52 4H39l-3 18 14 13 8-15Z"></path>
      <circle class="medal-body" cx="36" cy="52" r="24"></circle>
      <circle class="medal-inner" cx="36" cy="52" r="15"></circle>
      <text x="36" y="57" text-anchor="middle">${label}</text>
    </svg>
  `;
}

function renderOverviewBadges(profile = getMemberProfile()) {
  qs("#overviewBadges").innerHTML = getEarnedBadges(profile).map((badge) => `
    <article class="overview-badge ${badge.earned ? "is-earned" : ""}" title="${badge.title}：${badge.earned ? "已取得" : badge.note}">
      <span class="badge-icon">${getBadgeIcon(badge.icon)}</span>
    </article>
  `).join("");
}

function getAvatarPath(gender) {
  const avatarMap = {
    男: "assets/avatar-male.jpg",
    女: "assets/avatar-female.jpg",
    非二元: "assets/avatar-nonbinary.jpg",
    不公開: "assets/avatar-private.jpg"
  };
  return avatarMap[gender] || "assets/avatar-private.jpg";
}

function getGreeting(profile, isLoggedIn) {
  if (!isLoggedIn) {
    return "加入 TheDiver，建立你的數位潛水證，讓每一次下水都有清楚紀錄。";
  }

  const name = profile.nickname || profile.realName || "潛水人";
  const greetings = [
    `Hi, ${name}，祝你今天有愉快且安全的潛水體驗。`,
    `Hi, ${name}，出發前記得確認海況、氣瓶與潛伴狀態。`,
    `Hi, ${name}，今天也用穩定節奏享受水下時間。`,
    `Hi, ${name}，保持保守判斷，讓每一支潛水都安心收尾。`,
    `Hi, ${name}，願你今天看見清楚的海，也留下清楚的紀錄。`
  ];

  const index = new Date().getSeconds() % greetings.length;
  return greetings[index];
}

function getIdentityText(profile) {
  const systemText = profile.system === "其他" ? profile.otherSystem : profile.system;
  if (!["潛水員", "潛水教練"].includes(profile.role)) {
    return profile.role || "尚未登入";
  }

  return [profile.role, [systemText, profile.level].filter(Boolean).join(" ")].filter(Boolean).join("｜") || "尚未填寫";
}

function renderMemberProfile(profile = getMemberProfile()) {
  const auth = getAuthState();
  const isLoggedIn = auth.loggedIn;
  const displayProfile = isLoggedIn ? profile : { ...defaultMemberProfile };
  const score = calculateProfileScore(displayProfile);
  const initial = isLoggedIn ? getInitial(displayProfile.nickname || displayProfile.realName) : "潛";
  const identity = getIdentityText(displayProfile);
  const lastDive = getLastDiveDate(displayProfile);
  const platformLogCount = isLoggedIn ? getOwnLogs(displayProfile).length : 0;
  const totalDiveExperience = Number(displayProfile.dives || 0) + platformLogCount;

  qs("#accountInitial").textContent = initial;
  qs("#accountNickname").textContent = isLoggedIn ? (displayProfile.nickname || displayProfile.realName || "會員") : "登入";
  qs("#accountStatus").textContent = isLoggedIn ? "已登入" : "註冊";
  qs("#logoutButton").classList.toggle("is-hidden-field", !isLoggedIn);
  qs("#memberGreeting").textContent = getGreeting(displayProfile, isLoggedIn);
  qs("#licenseMemberId").textContent = displayProfile.memberId || "尚未核發";
  qs("#licenseName").textContent = isLoggedIn && displayProfile.realName ? displayProfile.realName : "尚未登入";
  qs("#licenseIdentity").textContent = identity;
  qs("#licenseAvatar").src = getAvatarPath(displayProfile.gender);
  qs("#licenseCert").textContent = displayProfile.certNo || "尚未填寫";
  qs("#licenseExperience").textContent = `${totalDiveExperience} 支`;
  qs("#licenseLastDive").textContent = isLoggedIn && lastDive ? lastDive : "尚無紀錄";
  qs("#passportScore").textContent = `${score}%`;
  qs("#passportProgress").value = score;

  qs("#memberId").value = displayProfile.memberId || "";
  qs("#memberRealName").value = displayProfile.realName;
  qs("#memberNicknameInput").value = displayProfile.nickname;
  syncSelectValue("#memberGender", displayProfile.gender);
  qs("#memberEmail").value = displayProfile.email;
  qs("#memberPassword").value = displayProfile.password;
  syncSelectValue("#memberRole", displayProfile.role);
  syncSelectValue("#memberSystem", displayProfile.system);
  qs("#memberOtherSystem").value = displayProfile.otherSystem || "";
  syncSelectValue("#memberLevel", displayProfile.level);
  qs("#memberCertNo").value = displayProfile.certNo;
  qs("#memberDives").value = displayProfile.dives || "";
  renderOverviewBadges(displayProfile);
  renderCourseManagement();
  renderReservations();
  updateDiveCertFields();
  setPassportLocked(isLoggedIn);
}

function updateDiveCertFields() {
  const role = qs("#memberRole").value;
  const shouldShowCert = ["潛水員", "潛水教練"].includes(role);
  qsa(".dive-cert-field").forEach((field) => field.classList.toggle("is-hidden-field", !shouldShowCert));
  qsa(".dive-only-field").forEach((field) => field.classList.toggle("is-hidden-field", !shouldShowCert));
  qs("#otherSystemField").classList.toggle("is-hidden-field", !shouldShowCert || qs("#memberSystem").value !== "其他");
}

function updateQuickDiveFields() {
  const role = qs("#quickRegisterRole").value;
  const shouldShowCert = ["潛水員", "潛水教練"].includes(role);
  qsa(".quick-dive-cert-field").forEach((field) => field.classList.toggle("is-hidden-field", !shouldShowCert));
  qsa(".quick-dive-only-field").forEach((field) => field.classList.toggle("is-hidden-field", !shouldShowCert));
  qs("#quickOtherSystemField").classList.toggle("is-hidden-field", !shouldShowCert || qs("#quickRegisterSystem").value !== "其他");
}

function setPassportLocked(locked) {
  const usesSupabase = Boolean(getSupabaseService());
  qsa("#passportForm input, #passportForm select").forEach((field) => {
    if (field.id === "memberId") {
      field.readOnly = true;
      field.disabled = false;
      return;
    }
    if (field.id === "memberPassword") {
      field.value = "";
    }
    field.disabled = locked;
  });
  qs("#passportPasswordField").classList.toggle("is-hidden-field", locked || usesSupabase);
  qs("#editPassportButton").classList.toggle("is-hidden-field", !locked);
  qs("#savePassportButton").classList.toggle("is-hidden-field", locked);
}

function switchLoginTab(tab) {
  qsa(".login-tab").forEach((button) => button.classList.toggle("is-active", button.dataset.loginTab === tab));
  qsa(".login-panel").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.loginPanel === tab));
  const titleMap = {
    login: "潛水護照登入",
    register: "潛水護照註冊",
    forgot: "忘記密碼"
  };
  qs(".login-head h2").textContent = titleMap[tab] || "潛水護照登入";
}

function openLoginModal(tab = "login") {
  qs("#loginModal").classList.remove("is-hidden");
  switchLoginTab(tab);
}

function closeLoginModal() {
  qs("#loginModal").classList.add("is-hidden");
}

function saveRegisteredMember(profile) {
  const members = getRegisteredMembers();
  members[profile.email] = {
    password: profile.password,
    profile
  };
  if (profile.memberId) {
    members[profile.memberId] = {
      password: profile.password,
      profile
    };
  }
  setRegisteredMembers(members);
}

function getSupabaseService() {
  return window.TheDiverSupabase?.isReady ? window.TheDiverSupabase : null;
}

function getSupabaseProfileFromForm() {
  const role = qs("#quickRegisterRole").value;
  const isDiveRole = ["潛水員", "潛水教練"].includes(role);

  return {
    ...defaultMemberProfile,
    memberId: "",
    realName: qs("#quickRegisterRealName").value.trim(),
    nickname: qs("#quickRegisterNickname").value.trim(),
    gender: qs("#quickRegisterGender").value,
    email: qs("#quickRegisterEmail").value.trim(),
    password: "",
    role,
    system: isDiveRole ? qs("#quickRegisterSystem").value : "",
    otherSystem: isDiveRole ? qs("#quickRegisterOtherSystem").value.trim() : "",
    level: isDiveRole ? qs("#quickRegisterLevel").value : "",
    certNo: isDiveRole ? qs("#quickRegisterCertNo").value.trim() : "",
    dives: isDiveRole ? Number(qs("#quickRegisterDives").value || 0) : 0,
    emailVerified: false
  };
}

function ensureAdminMemberId(profile) {
  if (profile.email.toLowerCase() === courseAdminEmail) {
    return { ...profile, memberId: courseAdminMemberId, role: profile.role || "潛水教練" };
  }
  return profile;
}

function validateRegisterProfile(profile, password) {
  if (!profile.realName || !profile.nickname || !profile.email || !password || !profile.role) {
    return "請完整填寫真實姓名、暱稱、電子郵件、密碼與身份。";
  }

  if (password.length < 8) {
    return "密碼至少需要 8 碼。";
  }

  if (["潛水員", "潛水教練"].includes(profile.role) && (!profile.system || !profile.level || !profile.certNo)) {
    return "潛水員或潛水教練需填寫潛水系統、證照等級與證照號碼。";
  }

  if (profile.system === "其他" && !profile.otherSystem) {
    return "選擇其他潛水系統時，請填寫系統名稱。";
  }

  return "";
}

function showSupabaseError(error, fallback = "連線資料庫時發生錯誤，請稍後再試。") {
  const message = String(error?.message || fallback);
  if (message.toLowerCase().includes("failed to fetch") || message.toLowerCase().includes("networkerror")) {
    showToast("無法連線 Supabase。請確認 GitHub Pages 已更新、Supabase URL 為專案根網址，且網路可連線。");
    return;
  }
  if (message.toLowerCase().includes("invalid login credentials")) {
    showToast("電子郵件或密碼不正確。");
    return;
  }
  if (message.toLowerCase().includes("email not confirmed")) {
    showToast("電子郵件尚未完成驗證，請先到信箱確認。");
    return;
  }
  if (message.toLowerCase().includes("already registered") || message.toLowerCase().includes("already been registered")) {
    showToast("此電子郵件已被註冊，請改用登入或更換電子郵件。");
    return;
  }
  showToast(message || fallback);
}

async function activateSupabaseProfile(user, profileOverride = null) {
  const service = getSupabaseService();
  if (!service || !user) return null;

  let profile = await service.getProfile(user.id);
  if (!profile) {
    profile = profileOverride || service.profileFromUser(user);
    if (!profile.memberId) {
      profile.memberId = generateMemberId(profile.role);
    }
    profile = ensureAdminMemberId(profile);
    profile.emailVerified = Boolean(user.email_confirmed_at) || profile.emailVerified;
    profile = await service.upsertProfile(user.id, profile);
  }

  setMemberProfile(profile);
  setAuthState({ loggedIn: true, email: profile.email, guest: false });
  recordDailyLogin(profile.memberId);
  closeLoginModal();
  renderMemberProfile(profile);
  animateMetrics();
  return profile;
}

async function loadSupabaseSessionProfile() {
  const service = getSupabaseService();
  if (!service) return false;

  try {
    const session = await service.getSession();
    if (!session?.user) return false;
    await activateSupabaseProfile(session.user);
    return true;
  } catch (error) {
    console.warn("Supabase session load failed", error);
    return false;
  }
}

async function getSupabaseUserId() {
  const service = getSupabaseService();
  if (!service) return "";
  const session = await service.getSession();
  return session?.user?.id || "";
}

function mapForumPostRow(row, replies = []) {
  return {
    id: row.id,
    topic: row.topic || "潛點情報",
    title: row.title || "",
    body: row.body || "",
    author: row.author_display || row.owner_member_id || "TheDiver 會員",
    ownerId: row.owner_member_id || "",
    createdAt: row.created_at,
    replies
  };
}

function mapReplyRow(row) {
  return {
    id: row.id,
    targetId: row.target_id,
    author: row.author_display || row.owner_member_id || "TheDiver 會員",
    ownerId: row.owner_member_id || "",
    text: row.body || "",
    createdAt: row.created_at
  };
}

function mapPhotoShareRow(row, comments = [], ratings = {}) {
  const urls = row.photo_urls || [];
  return {
    id: row.id,
    title: row.title || "",
    body: row.body || "",
    author: row.author_display || row.owner_member_id || "TheDiver 會員",
    ownerId: row.owner_member_id || "",
    createdAt: row.created_at,
    photos: urls.map((url, index) => ({ name: `照片 ${index + 1}`, dataUrl: url })),
    comments,
    ratings
  };
}

async function loadPublicForumData() {
  const service = getSupabaseService();
  if (!service) {
    forumUsesSupabase = false;
    return;
  }

  try {
    const [postRows, photoRows] = await Promise.all([
      service.listForumPosts(),
      service.listPhotoShares()
    ]);
    const postReplies = await service.listForumReplies("forum_post", postRows.map((row) => row.id));
    const photoReplies = await service.listForumReplies("photo_share", photoRows.map((row) => row.id));
    const photoRatings = await service.listPhotoRatings(photoRows.map((row) => row.id));
    const repliesByPost = postReplies.reduce((groups, row) => {
      groups[row.target_id] = groups[row.target_id] || [];
      groups[row.target_id].push(mapReplyRow(row));
      return groups;
    }, {});
    const repliesByPhoto = photoReplies.reduce((groups, row) => {
      groups[row.target_id] = groups[row.target_id] || [];
      groups[row.target_id].push(mapReplyRow(row));
      return groups;
    }, {});
    const ratingsByPhoto = photoRatings.reduce((groups, row) => {
      groups[row.photo_share_id] = groups[row.photo_share_id] || {};
      groups[row.photo_share_id][row.profile_id] = Number(row.score);
      return groups;
    }, {});

    posts = postRows.map((row) => mapForumPostRow(row, repliesByPost[row.id] || []));
    photoShares = photoRows.map((row) => mapPhotoShareRow(row, repliesByPhoto[row.id] || [], ratingsByPhoto[row.id] || {}));
    forumUsesSupabase = true;
    renderPosts();
    renderPhotoShares();
  } catch (error) {
    forumUsesSupabase = false;
    console.warn("Public forum load failed", error);
    showSupabaseError(error, "公開討論資料讀取失敗，暫時顯示本機資料。");
  }
}

function initLogin() {
  const auth = getAuthState();
  let pendingProfile = null;

  if (!auth.loggedIn && !auth.guest) {
    openLoginModal("login");
  } else {
    closeLoginModal();
  }

  loadSupabaseSessionProfile().then((loaded) => {
    if (!loaded && !getAuthState().loggedIn && !getAuthState().guest) {
      openLoginModal("login");
    }
  });

  const service = getSupabaseService();
  service?.onAuthStateChange?.((eventName, session) => {
    if (eventName !== "PASSWORD_RECOVERY" || !session?.user) return;
    passwordRecoveryMode = true;
    activateSupabaseProfile(session.user)
      .then(() => {
        switchView("passport");
        qs("#changePasswordForm").classList.remove("is-hidden-field");
        qs("#currentPassword").closest("label").classList.add("is-hidden-field");
        qs("#newPassword").focus();
        showToast("請設定新密碼，完成後即可用新密碼登入。");
      })
      .catch((error) => showSupabaseError(error, "密碼重設連線已失效，請重新申請。"));
  });

  qsa("[data-login-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      switchLoginTab(button.dataset.loginTab);
      qs("#emailVerifyGuide")?.classList.add("is-hidden-field");
      if (button.dataset.loginTab === "register") qs("#quickRegisterForm").reset();
      if (button.dataset.loginTab === "forgot") qs("#loginRecoveryForm").reset();
      updateQuickDiveFields();
    });
  });

  qs("#quickRegisterRole").addEventListener("change", updateQuickDiveFields);
  qs("#quickRegisterSystem").addEventListener("change", updateQuickDiveFields);
  updateQuickDiveFields();

  qsa("[data-password-toggle]").forEach((button) => {
    button.addEventListener("change", () => {
      const input = qs(`#${button.dataset.passwordToggle}`);
      input.type = button.checked ? "text" : "password";
    });
  });

  qs("#guestContinue").addEventListener("click", () => {
    setAuthState({ loggedIn: false, email: "", guest: true });
    closeLoginModal();
    renderMemberProfile();
  });

  qs("#browseAsGuest")?.addEventListener("click", () => {
    setAuthState({ loggedIn: false, email: "", guest: true });
    closeLoginModal();
    renderMemberProfile();
  });

  qs("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = qs("#loginEmail").value.trim();
    const password = qs("#loginPassword").value;
    const service = getSupabaseService();

    if (service) {
      try {
        const { user } = await service.signIn(email, password);
        await activateSupabaseProfile(user);
        switchView("home");
        showToast("潛水護照登入成功。");
      } catch (error) {
        showSupabaseError(error, "登入失敗，請確認電子郵件與密碼。");
      }
      return;
    }

    const member = getMembersByEmail()[email];

    if (!member || member.password !== password) {
      showToast("電子郵件或密碼不正確。");
      return;
    }

    setMemberProfile(member.profile);
    setAuthState({ loggedIn: true, email, guest: false });
    recordDailyLogin(member.profile.memberId);
    closeLoginModal();
    renderMemberProfile(member.profile);
    animateMetrics();
    showToast("登入成功。");
  });

  qs("#quickRegisterForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (pendingProfile) return;
    const email = qs("#quickRegisterEmail").value.trim();
    const password = qs("#quickRegisterPassword").value;
    const members = getMembersByEmail();
    const service = getSupabaseService();
    let profile = ensureAdminMemberId(getSupabaseProfileFromForm());
    const validationMessage = validateRegisterProfile(profile, password);

    if (validationMessage) {
      showToast(validationMessage);
      return;
    }

    if (!profile.memberId) {
      profile = { ...profile, memberId: generateMemberId(profile.role) };
    }

    if (!service && members[email]) {
      showToast("此電子郵件已被註冊，請更換電子郵件。");
      return;
    }

    if (service) {
      try {
        const data = await service.signUp(email, password, profile);
        qs("#quickRegisterForm").reset();
        updateQuickDiveFields();

        if (data.session?.user) {
          const loggedInProfile = await activateSupabaseProfile(data.session.user, { ...profile, emailVerified: true });
          switchView("home");
          showToast(`註冊完成，已登入 ${loggedInProfile.nickname || "會員"} 的潛水護照。`);
          return;
        }

        qs("#emailVerifyGuide")?.classList.remove("is-hidden-field");
        showToast("驗證信已寄出，請依照畫面教學完成信箱確認。");
      } catch (error) {
        showSupabaseError(error, "註冊失敗，請確認電子郵件格式與密碼。");
      }
      return;
    }

    pendingProfile = { ...profile, password };
    const localProfile = { ...pendingProfile, emailVerified: true };
    saveRegisteredMember(localProfile);
    setMemberProfile(localProfile);
    setAuthState({ loggedIn: true, email: localProfile.email, guest: false });
    recordDailyLogin(localProfile.memberId);
    pendingProfile = null;
    closeLoginModal();
    renderMemberProfile(localProfile);
    animateMetrics();
    switchView("home");
    showToast("示範模式註冊完成，已登入並返回首頁。");
  });

  qs("#loginRecoveryForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = qs("#loginRecoveryEmail").value.trim();
    const realName = qs("#loginRecoveryName").value.trim();
    const service = getSupabaseService();

    if (!email || !realName) {
      showToast("請完整填寫真實姓名與電子郵件。");
      return;
    }

    if (service) {
      try {
        const verified = await service.verifyRecoveryIdentity(email, realName);
        if (!verified) {
          showToast("輸入資料錯誤，請確認真實姓名與電子郵件。");
          return;
        }
        await service.resetPassword(email);
        qs("#loginRecoveryForm").reset();
        switchLoginTab("login");
        showToast("重設密碼信已寄出；若帳號存在，請到信箱完成重設。");
      } catch (error) {
        showSupabaseError(error, "無法寄送重設密碼信，請稍後再試。");
      }
      return;
    }

    const member = getMembersByEmail()[email];
    if (!member || member.profile.realName !== realName) {
      showToast("輸入資料錯誤，請確認真實姓名與電子郵件。");
      return;
    }

    showToast("密碼已寄至會員電子郵件，請去信箱收信。");
  });

  qs("#logoutButton").addEventListener("click", async () => {
    const service = getSupabaseService();
    if (service) {
      try {
        await service.signOut();
      } catch (error) {
        showSupabaseError(error, "登出時發生錯誤。");
      }
    }
    setAuthState({ loggedIn: false, email: "", guest: true });
    switchView("home");
    renderMemberProfile(defaultMemberProfile);
    showToast("已登出，歡迎再次建立你的潛水紀錄。");
  });
}

function switchView(viewId) {
  qsa(".view").forEach((view) => view.classList.toggle("is-visible", view.id === viewId));
  qsa(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewId));
  qs("#mobileNav").classList.remove("is-open");
  qs(".menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function animateMetrics() {
  const registeredCount = Object.keys(getMembersByEmail()).length;
  const displayedRegistered = 150 + registeredCount;
  qs("#registeredMetric").dataset.count = String(displayedRegistered);
  const todayLogins = getTodayLoginCount();
  qs("#dailyLoginMetric").dataset.count = String(todayLogins);

  qsa(".metric-number").forEach((node) => {
    const target = Number(node.dataset.count || 0);
    const duration = 900;
    const start = performance.now();

    function step(now) {
      const progress = Math.min(1, (now - start) / duration);
      const value = Math.round(target * progress);
      node.textContent = value.toLocaleString("zh-TW");

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  });
}

function renderModules() {
  qs("#moduleGrid").innerHTML = modules.map((item) => `
    <article class="module-card">
      <div>
        <p class="eyebrow">${item.id}</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <div class="module-actions">
        <button type="button" data-view="${item.id}">${item.cta}</button>
      </div>
    </article>
  `).join("");
}

function renderBadges() {
  return null;
}

function renderLogs() {
  const auth = getAuthState();
  const profile = getMemberProfile();
  const pendingLogs = auth.loggedIn
    ? getPendingLogs().filter((item) => item.targetId === profile.memberId)
    : [];
  const ownLogs = auth.loggedIn
    ? logs.filter((log) => log.ownerId === profile.memberId || (log.sharedWith || []).includes(profile.memberId))
    : [];

  const pendingMarkup = pendingLogs.length ? `
    <section class="pending-log-section">
      <h3>待確認潛水日誌</h3>
      <p class="muted-text">以下日誌由導潛或潛伴輸入你的潛水 ID 後送出。確認後會加入你的潛水日誌。</p>
      ${pendingLogs.map((item) => `
        <article class="log-card pending-log-card">
          <p class="eyebrow">待確認｜${item.fromName}</p>
          <h3>${item.log.date || "未填日期"}｜${item.log.site}</h3>
          <p><strong>導潛 / 潛伴：</strong>${item.log.buddyNames || item.log.buddyIds || "未填寫"}</p>
          <p>${item.log.note || "無紀錄內容"}</p>
          <div class="trip-manage-actions">
            <button class="primary-action compact-action" type="button" data-confirm-log="${item.id}">確認加入日誌</button>
            <button class="text-link danger-link" type="button" data-reject-log="${item.id}">拒絕</button>
          </div>
        </article>
      `).join("")}
    </section>
  ` : "";

  const logMarkup = ownLogs.length ? ownLogs.map((log, index) => `
    <article class="log-card">
      <p class="eyebrow">Log #${String(index + 1).padStart(3, "0")}</p>
      <h3>${log.date || "未填日期"}｜${log.site}</h3>
      <div class="meta-row">
        <span class="pill">${log.activity || "Fun-Dive"}</span>
        <span class="pill">${log.method || "岸潛"}</span>
        <span class="pill">${log.night === "是" ? "夜潛" : "日潛"}</span>
        <span class="pill">${log.depth || "-"}m</span>
        <span class="pill">${log.minutes || "-"}min</span>
        <span class="pill">${"★".repeat(Number(log.rating || 0))}</span>
      </div>
      <p><strong>環境：</strong>${log.siteType || "-"}｜${log.gas || "-"}｜${log.weather || "-"}｜${log.wave || "-"}</p>
      <p><strong>數據：</strong>水溫 ${log.waterTemp || "-"}°C，能見度 ${log.visibility || "-"}m，剩餘氣壓 ${log.pressure || "-"}bar，減壓：${log.deco || "否"}</p>
      <p><strong>導潛 / 潛伴：</strong>${log.buddyNames || log.buddyIds || "未填寫"}</p>
      <p>${log.note}</p>
      ${log.photos?.length ? `<div class="log-photo-grid">${log.photos.map((photo) => `
        <figure>
          ${photo.dataUrl ? `<img src="${photo.dataUrl}" alt="${photo.name || "潛水日誌照片"}">` : `<span>照片</span>`}
          <figcaption>${photo.name || photo}</figcaption>
        </figure>
      `).join("")}</div>` : ""}
    </article>
  `).join("") : `<p class="empty-state">${auth.loggedIn ? "目前尚無自己的潛水日誌。" : "登入後即可查看自己的潛水日誌。"}</p>`;

  qs("#logList").innerHTML = `${pendingMarkup}${logMarkup}`;
}

function renderForecast() {
  const site = qs("#forecastSite").value;
  const date = qs("#forecastDate").value || new Date().toISOString().slice(0, 10);
  const seed = [...`${site}${date}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const rain = seed % 48;
  const wind = 8 + (seed % 14);
  const wave = (0.4 + (seed % 12) / 10).toFixed(1);
  const score = Math.max(42, 92 - rain - Math.round(wind * 1.2) - Math.round(Number(wave) * 7));
  const direction = ["東北", "東", "東南", "南", "西南"][seed % 5];
  const tideHour = 5 + (seed % 7);
  const waterTemp = 24 + (seed % 7);
  const tide = `${String(tideHour).padStart(2, "0")}:20 滿潮`;
  const gust = wind + 5 + (seed % 8);
  const period = 5 + (seed % 7);
  const alertLevel = score < 50 ? "注意" : "無模擬警報";
  const scoreClass = score >= 70 ? "score-good" : score >= 50 ? "score-mid" : "score-low";
  const bg = score >= 70 ? "assets/forecast-good.jpg" : score >= 50 ? "assets/forecast-moderate.jpg" : "assets/forecast-poor.jpg";
  const recommendation = score >= 70
    ? "建議：條件較舒適，仍需出發前複查海況。"
    : score >= 50
      ? "建議：保守評估，留意風浪與能見度變化。"
      : "建議：不建議安排，請優先考量潛水安全。";

  qs("#forecastDate").value = date;
  qs("#forecastResult").innerHTML = `
    <article class="forecast-poster" style="--forecast-bg: url('${bg}')">
      <div class="poster-head">
        <div>
          <p class="eyebrow">Dive Forecast Poster</p>
          <h3>${site}</h3>
          <span>${date}</span>
        </div>
        <div class="poster-score ${scoreClass}">
          <strong>${score}<span>/100</span></strong>
          <p>${recommendation}</p>
        </div>
      </div>
      <div class="poster-grid">
        <div><span>風力（風向）</span><strong>${wind} km/h ${direction}</strong></div>
        <div><span>雨量</span><strong>${rain} mm</strong></div>
        <div><span>潮汐時間</span><strong>${tide}</strong></div>
        <div><span>水溫</span><strong>${waterTemp} °C</strong></div>
        <div><span>浪高</span><strong>${wave} m</strong></div>
      </div>
      <div class="forecast-model-row">
        <span>CWA 模擬：潮汐 ${tide}｜雨量 ${rain} mm｜警特報 ${alertLevel}</span>
        <span>Windy 模擬：平均風 ${wind} km/h｜陣風 ${gust} km/h｜浪週期 ${period} 秒</span>
        <span>模擬更新：${formatDateTime(new Date())}</span>
      </div>
    </article>
  `;
}

function renderSites(activeName) {
  const regionalSites = diveSites.filter((site) => site.area === activeMapRegion);
  const selectedName = activeName && regionalSites.some((site) => site.name === activeName)
    ? activeName
    : regionalSites[0]?.name;
  const site = regionalSites.find((item) => item.name === selectedName) || regionalSites[0];

  qs("#mapRegionTitle").textContent = `${activeMapRegion}潛點示意圖`;
  qs("#siteButtons").innerHTML = regionalSites.map((item) => `
    <button class="site-list-button ${item.name === selectedName ? "is-active" : ""}" data-site="${item.name}" type="button">
      <strong>${item.name}</strong>
      <span>${item.entry}｜${item.depth}</span>
    </button>
  `).join("");

  qs("#originalDiveMap").innerHTML = `
    <span class="map-sea-label">TAIWAN SEA</span>
    <span class="coastline-line coastline-one"></span>
    <span class="coastline-line coastline-two"></span>
    <span class="coastline-line coastline-three"></span>
    ${regionalSites.map((item, index) => `
      <button
        class="original-map-pin ${item.name === selectedName ? "is-active" : ""}"
        style="left:${item.x}%;top:${item.y}%"
        data-site="${item.name}"
        type="button"
        aria-label="${item.name}"
      >
        <span>${index + 1}</span>
        <small>${item.name}</small>
      </button>
    `).join("")}
  `;

  if (!site) {
    qs("#siteDetail").innerHTML = "<p>此區域尚未建立潛點資料。</p>";
    return;
  }

  qs("#siteDetail").innerHTML = `
    <p class="eyebrow">${site.area}</p>
    <h3>${site.name}</h3>
    <div class="meta-row">
      <span class="pill">${site.level}</span>
      <span class="pill">${site.depth}</span>
      <span class="pill">${site.entry}</span>
    </div>
    <p><strong>地形：</strong>${site.terrain}</p>
    <p><strong>建議路線：</strong>${site.route}</p>
    <p><strong>風險提示：</strong>${site.risk}</p>
    <p><strong>周邊設施：</strong>${site.facility}</p>
    <p><strong>季節參考：</strong>${site.season}</p>
    <p class="data-caption">TheDiver 原創規劃示意，非水下導航圖。實際路線必須依當日海況、地方規範及當地導潛簡報調整。</p>
    <a class="map-reference-link" href="https://josephlkc.pixnet.net/albums/218570428" target="_blank" rel="noreferrer">查看使用者提供的外部參考相簿</a>
  `;
}

function renderCourseStages() {
  qs("#courseStageList").innerHTML = courseStages.map((course) => `
    <article class="course-stage-card">
      <img src="${course.image}" alt="${course.title}訓練情境">
      <div class="course-stage-copy">
        <p class="eyebrow">${course.stage}</p>
        <h3>${course.title}</h3>
        <p>${course.summary}</p>
        <ul>${course.focus.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function saveCourses() {
  localStorage.setItem(courseStorageKey, JSON.stringify(courses));
}

function isCourseAdmin(profile = getMemberProfile()) {
  const auth = getAuthState();
  return auth.loggedIn
    && profile.email.toLowerCase() === courseAdminEmail;
}

function renderCourseManagement() {
  const management = qs("#courseManagement");
  if (!management) return;
  management.classList.toggle("is-hidden-field", !isCourseAdmin());
  if (!isCourseAdmin()) {
    qs("#courseForm").classList.add("is-hidden-field");
  }
}

function renderCourseSessions() {
  const sorted = [...courses].sort((a, b) => a.startDate.localeCompare(b.startDate));
  qs("#courseList").innerHTML = sorted.map((course) => `
    <article class="course-session-card">
      <div class="course-session-head">
        <span class="pill">${course.stage}</span>
        <span>${course.startDate} 至 ${course.endDate}</span>
      </div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <dl>
        <div><dt>上課地點</dt><dd>${course.location}</dd></div>
        <div><dt>名額</dt><dd>${course.seats} 位</dd></div>
        <div><dt>費用</dt><dd>${formatTwd(course.price)}</dd></div>
        <div><dt>教練</dt><dd>${course.instructor}</dd></div>
      </dl>
      ${course.requirements ? `<p class="course-requirements"><strong>條件與裝備：</strong>${course.requirements}</p>` : ""}
      <a class="primary-action course-line-link" href="https://lin.ee/wYkWSjF" target="_blank" rel="noreferrer">預約諮詢</a>
    </article>
  `).join("");
}

function renderGearCards(items = gear) {
  qs("#gearList").innerHTML = items.map((item) => `
    <article class="gear-card">
      <figure>
        <img src="${item.image}" alt="潛水員正在使用${item.title}">
        <figcaption>${item.title}｜實際使用情境</figcaption>
      </figure>
      <div class="gear-card-copy">
        <p class="eyebrow">${item.type}</p>
        <h3>${item.title}</h3>
        <p><strong>用途：</strong>${item.use}</p>
        <button class="text-link gear-more-button" type="button" data-gear-more="${item.title}">更多介紹</button>
        <div class="gear-more-panel is-hidden-field" data-gear-more-panel="${item.title}">
          <p><strong>適用情境：</strong>${item.scene}</p>
          <p class="gear-tip"><strong>選擇提醒：</strong>${item.tip}</p>
        </div>
        <a class="primary-action gear-line-link" href="https://lin.ee/wYkWSjF" target="_blank" rel="noreferrer">點我諮詢</a>
      </div>
    </article>
  `).join("");
}

function saveReservations() {
  localStorage.setItem(reservationStorageKey, JSON.stringify(reservations));
}

function savePhotoShares() {
  localStorage.setItem(photoShareStorageKey, JSON.stringify(photoShares));
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function getPhotoShareRating(item) {
  const scores = Object.values(item.ratings || {}).map(Number).filter(Boolean);
  if (!scores.length) return "尚無評分";
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return `${average.toFixed(1)} / 5（${scores.length} 人）`;
}

function renderForumMode() {
  qsa("[data-forum-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.forumMode === activeForumMode);
  });
  const isPhotoMode = activeForumMode === "photos";
  qs("#openPostForm").classList.toggle("is-hidden-field", isPhotoMode);
  qs("#openPhotoShareForm").classList.toggle("is-hidden-field", !isPhotoMode);
  qs("#postForm").classList.add("is-hidden-field");
  qs("#photoShareForm").classList.add("is-hidden-field");
  qs("#forumTopicPanel").classList.toggle("is-hidden-field", isPhotoMode);
  qs("#postList").classList.toggle("is-hidden-field", isPhotoMode);
  qs("#photoShareList").classList.toggle("is-hidden-field", !isPhotoMode);
}

function renderPhotoShares() {
  const list = qs("#photoShareList");
  if (!list) return;
  const sorted = [...photoShares].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  list.innerHTML = sorted.map((item) => {
    const index = photoShares.indexOf(item);
    const comments = [...(item.comments || [])].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    return `
      <article class="post-card photo-share-card">
        <p class="eyebrow">水攝分享</p>
        <h3>${item.title}</h3>
        <div class="thread-meta">
          <strong>${item.author || "水攝會員"}</strong>
          <time>${formatDateTime(item.createdAt)}</time>
        </div>
        <p>${item.body}</p>
        <div class="photo-share-grid">
          ${(item.photos || []).map((photo) => `
            <figure>
              <img src="${photo.dataUrl}" alt="${item.title}｜${photo.name}">
              <figcaption>${photo.name}</figcaption>
            </figure>
          `).join("")}
        </div>
        <div class="photo-rating-row">
          <strong>評分：${getPhotoShareRating(item)}</strong>
          <label>給分
            <select data-photo-rating="${index}">
              <option value="">選擇分數</option>
              <option value="5">5 星</option>
              <option value="4">4 星</option>
              <option value="3">3 星</option>
              <option value="2">2 星</option>
              <option value="1">1 星</option>
            </select>
          </label>
        </div>
        <button class="text-link" type="button" data-photo-comment-index="${index}">回應水攝分享</button>
        <form class="reply-form" data-photo-comment-form="${index}" hidden>
          <textarea placeholder="輸入回應內容"></textarea>
          <button class="primary-action" type="submit">送出回應</button>
        </form>
        <div class="reply-list">
          ${comments.map((comment) => `
            <article class="reply-item">
              <div class="thread-meta">
                <strong>${comment.author}</strong>
                <time>${formatDateTime(comment.createdAt)}</time>
              </div>
              <p>${comment.text}</p>
            </article>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function getReservationDetails(item) {
  if (item.type === "潛水裝備") {
    const gearLines = Object.entries(item.equipment || {})
      .map(([, gearItem]) => {
        if (!gearItem || gearItem.rent !== "租借") return "";
        const details = Object.entries(gearItem)
          .filter(([key, value]) => !["label", "rent"].includes(key) && value)
          .map(([, value]) => value)
          .join(" / ");
        return details ? `${gearItem.label}：租借（${details}）` : `${gearItem.label}：租借`;
      })
      .filter(Boolean);
    return gearLines.length ? gearLines.join("｜") : "未選擇租借裝備";
  }
  if (item.type === "氣瓶預約配送") {
    const air = item.air || { largeCount: 0, smallCount: 0, subtotal: 0 };
    const nitrox = item.nitrox || { largeCount: 0, smallCount: 0, subtotal: 0 };
    return `空氣 ${air.largeCount + air.smallCount} 支（大 ${air.largeCount}／小 ${air.smallCount}）${formatTwd(air.subtotal)}｜高氧 ${nitrox.largeCount + nitrox.smallCount} 支（大 ${nitrox.largeCount}／小 ${nitrox.smallCount}）${formatTwd(nitrox.subtotal)}｜${item.deliveryPlace}｜總計 ${formatTwd(item.totalFee)}`;
  }
  return item.details || `${item.vehicle || "停車資訊"}｜${item.plate || "查詢"}｜${item.arrival || "--:--"} 至 ${item.departure || "--:--"}`;
}

function calculateGasTotal() {
  const airLarge = Number(qs("#airLargeCount")?.value || 0);
  const airSmall = Number(qs("#airSmallCount")?.value || 0);
  const nitroxLarge = Number(qs("#nitroxLargeCount")?.value || 0);
  const nitroxSmall = Number(qs("#nitroxSmallCount")?.value || 0);
  const airCount = airLarge + airSmall;
  const nitroxCount = nitroxLarge + nitroxSmall;
  const airSubtotal = airCount * 200;
  const nitroxSubtotal = nitroxCount * 400;
  const total = airSubtotal + nitroxSubtotal;
  const target = qs("#gasTotalFee");
  const breakdown = qs("#gasTotalBreakdown");
  if (breakdown) breakdown.textContent = `空氣 ${airCount} 支 ${formatTwd(airSubtotal)}｜高氧 ${nitroxCount} 支 ${formatTwd(nitroxSubtotal)}`;
  if (target) target.textContent = formatTwd(total);
  return {
    air: { largeCount: airLarge, smallCount: airSmall, count: airCount, unitPrice: 200, subtotal: airSubtotal },
    nitrox: { largeCount: nitroxLarge, smallCount: nitroxSmall, count: nitroxCount, unitPrice: 400, subtotal: nitroxSubtotal },
    total
  };
}

function updateEquipmentConditionalFields() {
  const selected = {
    mask: qs("#rentGearMask")?.checked,
    wetsuit: qs("#rentGearWetsuit")?.checked,
    boots: qs("#rentGearBoots")?.checked,
    fins: qs("#rentGearFins")?.checked,
    bcd: qs("#rentGearBcd")?.checked,
    regulator: qs("#rentGearRegulator")?.checked,
    weights: qs("#rentGearWeights")?.checked
  };
  qsa("[data-gear-detail]").forEach((field) => {
    const gearKey = field.dataset.gearDetail;
    field.classList.toggle("is-hidden-field", activeReservationType !== "潛水裝備" || !selected[gearKey]);
  });
  const maskNeedsDegree = selected.mask && qs("#gearMaskPrescription")?.value === "是";
  qs("#maskDegreeField")?.classList.toggle("is-hidden-field", !maskNeedsDegree || activeReservationType !== "潛水裝備");
}

function renderReservationFields() {
  qsa(".reservation-service").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.reservationType === activeReservationType);
  });
  qsa(".reservation-field").forEach((field) => {
    const types = field.dataset.types.split(",");
    field.classList.toggle("is-hidden-field", !types.includes(activeReservationType));
  });
  updateEquipmentConditionalFields();
  calculateGasTotal();
  const isParkingInfo = activeReservationType === "停車資訊";
  qs("#reservationForm").classList.toggle("is-hidden-field", isParkingInfo);
  qs("#parkingInfoPanel").classList.toggle("is-hidden-field", !isParkingInfo);
  if (isParkingInfo) renderParkingInfo();
}

function renderParkingInfo() {
  const panel = qs("#parkingInfoPanel");
  if (!panel) return;
  panel.innerHTML = parkingLots.map((lot) => `
    <article class="parking-info-card">
      <p class="eyebrow">${lot.area}</p>
      <h3>${lot.name}</h3>
      <dl>
        <div><dt>地址</dt><dd>${lot.address}</dd></div>
        <div><dt>收費標準</dt><dd>${lot.fee}</dd></div>
      </dl>
      <p>${lot.note}</p>
      <a class="primary-action gear-line-link" href="${lot.link}" target="_blank" rel="noreferrer">查看停車資訊</a>
    </article>
  `).join("");
}

function renderReservations() {
  const list = qs("#reservationList");
  if (!list) return;
  const profile = getMemberProfile();
  const auth = getAuthState();
  const isAdmin = isCourseAdmin(profile);
  qs("#reservationMember").value = auth.loggedIn ? getMemberDisplay(profile) : "登入後自動帶入";
  qs("#emailReservationSummary")?.classList.toggle("is-hidden-field", !isAdmin);
  const visibleReservations = auth.loggedIn
    ? (isAdmin ? reservations : reservations.filter((item) => item.ownerId === profile.memberId))
    : [];
  list.innerHTML = visibleReservations.length ? visibleReservations.map((item) => `
    <article class="reservation-card">
      <div class="reservation-card-head">
        <div><p class="eyebrow">${item.code}</p><h3>${item.type}</h3></div>
        <span class="reservation-status">${item.status}</span>
      </div>
      <dl>
        <div><dt>服務日期</dt><dd>${item.date}</dd></div>
        <div><dt>合作店家 / 配送地點</dt><dd>${item.vendor || item.deliveryPlace || "待確認"}</dd></div>
        <div><dt>預計時間</dt><dd>${item.time || "未填寫"}</dd></div>
        <div><dt>準備內容</dt><dd>${getReservationDetails(item)}</dd></div>
        <div><dt>建立時間</dt><dd>${formatDateTime(item.createdAt)}</dd></div>
      </dl>
      ${item.note ? `<p>${item.note}</p>` : ""}
      ${canEditReservation(item, profile) ? `
        <div class="reservation-card-actions">
          <button class="secondary-action compact-action" type="button" data-edit-reservation="${item.id}">更正預約</button>
        </div>
      ` : item.ownerId === profile.memberId && isNextDayReservationLocked(item.date) ? `<p class="edit-deadline">已超過前一日 18:00，隔日預約不可再修改。</p>` : ""}
      ${isAdmin && item.status !== "店家已確認" ? `
        <div class="reservation-card-actions">
          <button class="primary-action compact-action" type="button" data-confirm-reservation="${item.id}">店家已確認</button>
        </div>
      ` : ""}
    </article>
  `).join("") : `<p class="empty-state">${auth.loggedIn ? "目前尚無預約紀錄。" : "登入潛水護照後即可建立及查看預約。"}</p>`;
}

function getReservationSummary() {
  const profile = getMemberProfile();
  const items = isCourseAdmin(profile) ? reservations : reservations.filter((item) => item.ownerId === profile.memberId);
  return items.map((item) => [
    `預約編號：${item.code}`,
    `會員：${item.member}`,
    `服務：${item.type}`,
    `日期：${item.date}`,
    `時間：${item.time || "未填寫"}`,
    `店家/地點：${item.vendor || item.deliveryPlace || "待確認"}`,
    `準備內容：${getReservationDetails(item)}`,
    `備註：${item.note || "無"}`,
    `狀態：${item.status}`
  ].join("\n")).join("\n\n");
}

function getTomorrowReservationSummary() {
  const tomorrow = addDaysToDateKey(todayKey(), 1);
  const items = reservations.filter((item) => item.date === tomorrow && ["潛水裝備", "氣瓶預約配送"].includes(item.type));
  if (!items.length) return "";
  return items.map((item) => [
    `預約編號：${item.code}`,
    `會員：${item.member}`,
    `服務：${item.type}`,
    `日期：${item.date}`,
    `時間：${item.time || "未填寫"}`,
    `店家/地點：${item.vendor || item.deliveryPlace || "待確認"}`,
    `準備內容：${getReservationDetails(item)}`,
    `備註：${item.note || "無"}`,
    `狀態：${item.status}`
  ].join("\n")).join("\n\n");
}

function getEquipmentPayload() {
  return {
    mask: {
      label: "面鏡",
      rent: qs("#rentGearMask").checked ? "租借" : "無需租借",
      prescription: qs("#gearMaskPrescription").value,
      degree: qs("#gearMaskDegree").value ? `${qs("#gearMaskDegree").value} 度` : ""
    },
    wetsuit: {
      label: "防寒衣",
      rent: qs("#rentGearWetsuit").checked ? "租借" : "無需租借",
      style: qs("#gearWetsuitStyle").value,
      size: qs("#gearWetsuitSize").value
    },
    boots: {
      label: "套鞋",
      rent: qs("#rentGearBoots").checked ? "租借" : "無需租借",
      size: qs("#gearBootsSize").value ? `${qs("#gearBootsSize").value} cm` : ""
    },
    fins: {
      label: "蛙鞋",
      rent: qs("#rentGearFins").checked ? "租借" : "無需租借",
      size: qs("#gearFinsSize").value
    },
    bcd: {
      label: "BCD",
      rent: qs("#rentGearBcd").checked ? "租借" : "無需租借",
      size: qs("#gearBcdSize").value
    },
    regulator: {
      label: "調節器",
      rent: qs("#rentGearRegulator").checked ? "租借" : "無需租借",
      quantity: qs("#rentGearRegulator").checked ? "1 組" : ""
    },
    weights: {
      label: "配重",
      rent: qs("#rentGearWeights").checked ? "租借" : "無需租借",
      weight: qs("#gearWeightsKg").value ? `${qs("#gearWeightsKg").value} 公斤` : ""
    }
  };
}

function hasRentedEquipment(equipment) {
  return Object.values(equipment).some((item) => item.rent === "租借");
}

function resetReservationEditing() {
  editingReservationId = "";
  qs("#reservationSubmitButton").textContent = "確認送出預約";
}

function fillReservationForm(item) {
  editingReservationId = item.id;
  activeReservationType = item.type;
  renderReservationFields();
  qs("#reservationMember").value = item.member;
  qs("#reservationNote").value = item.note || "";
  qs("#reservationSubmitButton").textContent = "儲存預約更正";

  if (item.type === "潛水裝備") {
    qs("#equipmentDate").value = item.date || "";
    qs("#equipmentTime").value = item.time || "";
    syncSelectValue("#equipmentVendor", item.vendor || "東北角坤成潛水");
    const equipment = item.equipment || {};
    qs("#rentGearMask").checked = equipment.mask?.rent === "租借";
    qs("#rentGearWetsuit").checked = equipment.wetsuit?.rent === "租借";
    qs("#rentGearBoots").checked = equipment.boots?.rent === "租借";
    qs("#rentGearFins").checked = equipment.fins?.rent === "租借";
    qs("#rentGearBcd").checked = equipment.bcd?.rent === "租借";
    qs("#rentGearRegulator").checked = equipment.regulator?.rent === "租借";
    qs("#rentGearWeights").checked = equipment.weights?.rent === "租借";
    syncSelectValue("#gearMaskPrescription", equipment.mask?.prescription || "否");
    qs("#gearMaskDegree").value = String(equipment.mask?.degree || "").replace(/[^\d]/g, "");
    syncSelectValue("#gearWetsuitStyle", equipment.wetsuit?.style || "男款");
    syncSelectValue("#gearWetsuitSize", equipment.wetsuit?.size || "");
    qs("#gearBootsSize").value = String(equipment.boots?.size || "").replace(/[^\d]/g, "");
    syncSelectValue("#gearFinsSize", equipment.fins?.size || "");
    syncSelectValue("#gearBcdSize", equipment.bcd?.size || "");
    qs("#gearWeightsKg").value = String(equipment.weights?.weight || "").replace(/[^\d]/g, "");
    qs("#renterHeight").value = item.backup?.height || "";
    qs("#renterWeight").value = item.backup?.weight || "";
    updateEquipmentConditionalFields();
  }

  if (item.type === "氣瓶預約配送") {
    qs("#gasDeliveryDate").value = item.date || "";
    qs("#gasUseTime").value = item.time || "";
    syncSelectValue("#gasDeliveryPlace", item.deliveryPlace || "蝙蝠洞");
    qs("#airLargeCount").value = item.air?.largeCount || 0;
    qs("#airSmallCount").value = item.air?.smallCount || 0;
    qs("#nitroxLargeCount").value = item.nitrox?.largeCount || 0;
    qs("#nitroxSmallCount").value = item.nitrox?.smallCount || 0;
    calculateGasTotal();
  }

  qs("#reservationForm").classList.remove("is-hidden-field");
  qs("#reservationForm").scrollIntoView({ behavior: "smooth", block: "start" });
}

function exportReservationJson() {
  const profile = getMemberProfile();
  const items = reservations.filter((item) => item.ownerId === profile.memberId);
  if (!items.length) {
    showToast("目前沒有可匯出的預約資料。");
    return;
  }
  const json = JSON.stringify(items, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `thediver-reservations-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("預約 JSON 已匯出。");
}

function renderCards(items, targetId, actionLabel) {
  qs(targetId).innerHTML = items.map((item) => `
    <article class="content-card">
      <div>
        <p class="eyebrow">${item.type || item.place || item.area || "Course"}</p>
        <h3>${item.title}</h3>
        <div class="meta-row">
          ${Object.entries(item)
            .filter(([key]) => !["title", "note"].includes(key))
            .map(([, value]) => `<span class="pill">${value}</span>`)
            .join("")}
        </div>
        ${item.note ? `<p>${item.note}</p>` : ""}
      </div>
      <button type="button" data-action="${actionLabel}" data-title="${item.title}">${actionLabel}</button>
    </article>
  `).join("");
}

function renderTrips(items) {
  const profile = getMemberProfile();
  qs("#tripList").innerHTML = items.map((item) => `
    <article class="content-card trip-card">
      <div>
        <p class="eyebrow">${item.title}</p>
        <h3>開團資訊</h3>
        <dl class="trip-details">
          <div><dt>開團人</dt><dd>${item.host || "氮醉鮪魚潛水俱樂部"}</dd></div>
          <div><dt>活動類型</dt><dd>${item.type || "未填寫"}</dd></div>
          <div><dt>活動日期</dt><dd>${item.date || "日期待定"}</dd></div>
          <div><dt>潛點 / 地點</dt><dd>${item.place || "地點待定"}</dd></div>
          <div><dt>名額</dt><dd>${item.slots || "名額待定"}</dd></div>
          <div><dt>費用</dt><dd>${item.price || "費用待定"}</dd></div>
        </dl>
        ${item.note ? `<p>${item.note}</p>` : ""}
        ${isTripEditable(item, profile) ? `
          <p class="edit-deadline">你是此團開團者，可修改內容；刪除前系統會再次確認。</p>
          <div class="trip-manage-actions">
            <button class="text-link" type="button" data-edit-trip="${item.id}">編輯</button>
            <button class="text-link danger-link" type="button" data-delete-trip="${item.id}">刪除</button>
          </div>
        ` : ""}
        <div class="trip-contact-actions">
          <button class="secondary-action compact-action" type="button" data-trip-contact="${item.id}">我要報名 / 聯繫開團者</button>
          <button class="secondary-action compact-action" type="button" data-trip-chat-toggle="${item.id}">即時聊聊</button>
        </div>
        <div class="trip-chat-panel is-hidden-field" data-trip-chat-panel="${item.id}">
          <div class="reply-list">
            ${(item.messages || []).length ? item.messages.map((message) => `
              <article class="reply-item">
                <div class="thread-meta">
                  <strong>${message.author}</strong>
                  <time>${formatDateTime(message.createdAt)}</time>
                </div>
                <p>${message.text}</p>
              </article>
            `).join("") : `<p class="muted-text">目前尚無聯繫訊息。</p>`}
          </div>
          <form class="reply-form" data-trip-chat-form="${item.id}">
            <textarea placeholder="輸入想詢問開團者的內容，例如：我想報名，請問集合時間？"></textarea>
            <button class="primary-action" type="submit">送出訊息</button>
          </form>
        </div>
      </div>
    </article>
  `).join("");
}

function renderPosts() {
  const filteredPosts = activeForumTopic === "全部"
    ? posts
    : posts.filter((post) => post.topic === activeForumTopic);
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  qs("#postList").innerHTML = sortedPosts.map((post) => {
    const index = posts.indexOf(post);
    const sortedReplies = [...(post.replies || [])].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    return `
    <article class="post-card">
      <p class="eyebrow">${post.topic}</p>
      <h3>${post.title}</h3>
      <div class="thread-meta">
        <strong>${post.author || "系統示範留言"}</strong>
        <time>${formatDateTime(post.createdAt)}</time>
      </div>
      <p>${post.body}</p>
      <button class="text-link" type="button" data-reply-index="${index}">回應留言</button>
      <form class="reply-form" data-reply-form="${index}" hidden>
        <textarea placeholder="輸入回應內容"></textarea>
        <button class="primary-action" type="submit">送出回應</button>
      </form>
      <div class="reply-list">
        ${sortedReplies.map((reply) => `
          <article class="reply-item">
            <div class="thread-meta">
              <strong>${reply.author}</strong>
              <time>${formatDateTime(reply.createdAt)}</time>
            </div>
            <p>${reply.text}</p>
          </article>
        `).join("")}
      </div>
    </article>
  `;
  }).join("");
}

function setFilter(buttonSelector, dataKey, items, targetId, actionLabel) {
  qsa(buttonSelector).forEach((button) => {
    button.addEventListener("click", () => {
      qsa(buttonSelector).forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const filterValue = button.dataset[dataKey];
      if (targetId === "#tripList") {
        const filtered = filterValue === "全部" ? trips : trips.filter((item) => item.type === filterValue);
        renderTrips(filtered);
      } else if (targetId === "#gearList") {
        const filtered = filterValue === "全部" ? items : items.filter((item) => item.type === filterValue);
        renderGearCards(filtered);
      } else {
        const filtered = filterValue === "全部" ? items : items.filter((item) => item.type === filterValue);
        renderCards(filtered, targetId, actionLabel);
      }
    });
  });
}

const reviewStorageKey = "thediver-review-notes-v1";

function getReviewNotes() {
  try {
    return JSON.parse(localStorage.getItem(reviewStorageKey)) || [];
  } catch {
    return [];
  }
}

function setReviewNotes(notes) {
  localStorage.setItem(reviewStorageKey, JSON.stringify(notes));
}

function getCurrentViewId() {
  return qs(".view.is-visible")?.id || "home";
}

function getModuleTitle(moduleId) {
  if (moduleId === "home") return "總覽";
  return modules.find((item) => item.id === moduleId)?.title || moduleId;
}

function renderReviewOptions() {
  qs("#reviewModule").innerHTML = modules.map((item) => `
    <option value="${item.id}">${item.title}</option>
  `).join("");
}

function renderReviewList() {
  const selectedModule = qs("#reviewModule").value;
  const notes = getReviewNotes().filter((note) => note.moduleId === selectedModule);

  qs("#reviewList").innerHTML = notes.length
    ? notes.map((note) => `
        <article class="review-note">
          <div class="meta-row">
            <span class="pill">${note.priority}</span>
            <span class="pill">${getModuleTitle(note.moduleId)}</span>
          </div>
          <p>${note.text}</p>
          <footer>
            <span>${note.createdAt}</span>
            <button class="text-link" type="button" data-delete-review="${note.id}">刪除</button>
          </footer>
        </article>
      `).join("")
    : `<p class="muted-text">這個功能目前還沒有註解。</p>`;
}

function openReviewPanel(moduleId = getCurrentViewId()) {
  qs("#reviewModule").value = moduleId;
  qs("#reviewPanel").classList.add("is-open");
  qs("#reviewPanel").setAttribute("aria-hidden", "false");
  qs("#reviewBackdrop").hidden = false;
  renderReviewList();
  qs("#reviewText").focus();
}

function closeReviewPanel() {
  qs("#reviewPanel").classList.remove("is-open");
  qs("#reviewPanel").setAttribute("aria-hidden", "true");
  qs("#reviewBackdrop").hidden = true;
}

function exportReviewNotes() {
  const notes = getReviewNotes();
  if (!notes.length) {
    showToast("目前沒有可匯出的註解。");
    return;
  }

  const text = notes.map((note, index) => [
    `#${index + 1} ${getModuleTitle(note.moduleId)}｜${note.priority}`,
    `時間：${note.createdAt}`,
    `修改方案：${note.text}`
  ].join("\n")).join("\n\n");

  navigator.clipboard?.writeText(text)
    .then(() => showToast("已複製全部註解。"))
    .catch(() => {
      window.prompt("請複製以下註解內容：", text);
    });
}

function initReviewPanel() {
  renderReviewOptions();
  renderReviewList();

  qs("#reviewToggle").addEventListener("click", () => openReviewPanel());
  qs("#reviewClose").addEventListener("click", closeReviewPanel);
  qs("#reviewBackdrop").addEventListener("click", closeReviewPanel);
  qs("#reviewExport").addEventListener("click", exportReviewNotes);
  qs("#reviewModule").addEventListener("change", renderReviewList);

  qs("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const text = qs("#reviewText").value.trim();

    if (!text) {
      showToast("請先輸入修改方案註解。");
      return;
    }

    const notes = getReviewNotes();
    notes.unshift({
      id: String(Date.now()),
      moduleId: qs("#reviewModule").value,
      priority: qs("#reviewPriority").value,
      text,
      createdAt: new Date().toLocaleString("zh-TW", { hour12: false })
    });

    setReviewNotes(notes);
    qs("#reviewText").value = "";
    renderReviewList();
    showToast("註解已儲存。");
  });

  document.addEventListener("click", (event) => {
    const reviewButton = event.target.closest("[data-review-module]");
    if (reviewButton) {
      openReviewPanel(reviewButton.dataset.reviewModule);
    }

    const deleteButton = event.target.closest("[data-delete-review]");
    if (deleteButton) {
      setReviewNotes(getReviewNotes().filter((note) => note.id !== deleteButton.dataset.deleteReview));
      renderReviewList();
      showToast("註解已刪除。");
    }
  });
}

function initPassport() {
  qs("#memberRole").addEventListener("change", updateDiveCertFields);
  qs("#memberSystem").addEventListener("change", updateDiveCertFields);

  qs("#editPassportButton").addEventListener("click", () => {
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入潛水護照。");
      return;
    }
    setPassportLocked(false);
    showToast(getSupabaseService() ? "已開啟資料修改；密碼請使用修改密碼按鈕。" : "已開啟資料修改，儲存前請輸入目前密碼。");
  });

  qs("#passportForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const previous = getMemberProfile();
    const email = qs("#memberEmail").value.trim();
    const registered = getRegisteredMembers();
    const auth = getAuthState();
    const service = getSupabaseService();
    const profile = {
      memberId: previous.memberId || generateMemberId(qs("#memberRole").value),
      realName: qs("#memberRealName").value.trim(),
      nickname: qs("#memberNicknameInput").value.trim(),
      gender: qs("#memberGender").value,
      email,
      password: previous.password,
      role: qs("#memberRole").value,
      system: qs("#memberSystem").value,
      otherSystem: qs("#memberOtherSystem").value.trim(),
      level: qs("#memberLevel").value,
      certNo: qs("#memberCertNo").value.trim(),
      dives: Number(qs("#memberDives").value || 0),
      emailVerified: previous.email === email ? previous.emailVerified : false
    };

    if (!["潛水員", "潛水教練"].includes(profile.role)) {
      profile.system = "";
      profile.otherSystem = "";
      profile.level = "";
      profile.certNo = "";
      profile.dives = 0;
    }

    if (profile.system === "其他" && !profile.otherSystem) {
      showToast("選擇其他潛水系統時，請填寫系統名稱。");
      return;
    }

    if (service) {
      if (email !== previous.email) {
        showToast("登入電子郵件不可在潛水護照維護中修改。");
        return;
      }

      service.getSession()
        .then((session) => {
          if (!session?.user) {
            openLoginModal("login");
            throw new Error("請重新登入後再更新潛水護照。");
          }
          return service.upsertProfile(session.user.id, { ...profile, password: "" });
        })
        .then((savedProfile) => {
          setMemberProfile(savedProfile);
          setAuthState({ loggedIn: true, email: savedProfile.email, guest: false });
          renderMemberProfile(savedProfile);
          showToast("潛水護照資料已更新至會員資料庫。");
        })
        .catch((error) => showSupabaseError(error, "潛水護照資料更新失敗。"));
      return;
    }

    if (registered[email] && registered[email].profile.email !== previous.email && auth.email !== email) {
      showToast("此電子郵件已被註冊，請更換電子郵件。");
      return;
    }

    if (qs("#memberPassword").value !== previous.password) {
      showToast("目前密碼不正確，無法儲存資料。");
      return;
    }

    setMemberProfile(profile);
    saveRegisteredMember(profile);
    setAuthState({ loggedIn: true, email: profile.email, guest: false });
    renderMemberProfile(profile);
    showToast("潛水護照資訊已更新。");
  });

  qs("#changePasswordToggle").addEventListener("click", () => {
    if (!passwordRecoveryMode) {
      qs("#currentPassword").closest("label").classList.remove("is-hidden-field");
    }
    qs("#changePasswordForm").classList.toggle("is-hidden-field");
  });

  qs("#changePasswordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = getMemberProfile();
    const current = qs("#currentPassword").value;
    const next = qs("#newPassword").value;
    const confirm = qs("#confirmNewPassword").value;
    const service = getSupabaseService();

    if (!next || next !== confirm) {
      showToast("兩次新密碼不一致。");
      return;
    }

    if (next.length < 8) {
      showToast("新密碼至少需要 8 碼。");
      return;
    }

    if (service) {
      if (passwordRecoveryMode) {
        service.updatePassword(next)
          .then(() => {
            passwordRecoveryMode = false;
            qs("#currentPassword").closest("label").classList.remove("is-hidden-field");
            qs("#changePasswordForm").reset();
            qs("#changePasswordForm").classList.add("is-hidden-field");
            showToast("密碼已重設完成，以後請以新密碼登入。");
          })
          .catch((error) => showSupabaseError(error, "密碼重設失敗，請重新申請。"));
        return;
      }

      service.signIn(profile.email, current)
        .then(() => service.updatePassword(next))
        .then(() => {
          qs("#changePasswordForm").reset();
          qs("#changePasswordForm").classList.add("is-hidden-field");
          showToast("密碼已修改，以後請以新密碼登入。");
        })
        .catch((error) => showSupabaseError(error, "密碼修改失敗，請確認目前密碼。"));
      return;
    }

    if (current !== profile.password) {
      showToast("目前密碼不正確。");
      return;
    }

    const updated = { ...profile, password: next };
    setMemberProfile(updated);
    saveRegisteredMember(updated);
    qs("#changePasswordForm").reset();
    qs("#changePasswordForm").classList.add("is-hidden-field");
    showToast("密碼已修改，以後請以新密碼登入。");
  });
}

function initForms() {
  qs("#logSite").addEventListener("change", () => {
    qs("#logOtherSiteField").classList.toggle("is-hidden-field", qs("#logSite").value !== "其他");
  });

  qs("#logForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      if (!getAuthState().loggedIn) {
        openLoginModal("login");
        showToast("請先登入潛水護照再新增潛水日誌。");
        return;
      }
      if (!qs("#logDate").value) {
        showToast("請先選擇活動日期。");
        return;
      }
      const files = [...qs("#logPhotos").files];
      if (files.length > 5) {
        showToast("潛水日誌照片最多上傳 5 張。");
        return;
      }
      if (files.some((file) => file.size > 2 * 1024 * 1024)) {
        showToast("單張照片請控制在 2MB 以內，避免手機瀏覽器儲存失敗。");
        return;
      }

      const profile = getMemberProfile();
      const buddyIds = qs("#logBuddyIds").value.trim();
      const buddyIdList = buddyIds
        .split(/[,，、\s]+/)
        .map((id) => id.trim())
        .filter(Boolean);
      const buddyNames = buddyIdList
        .map((id) => {
          const member = findMemberById(id);
          return member ? `${member.nickname}(${member.memberId})` : id;
        })
        .join("、");
      const photos = await Promise.all(files.map(async (file) => ({
        name: file.name,
        dataUrl: await readFileAsDataUrl(file)
      })));

      const newLog = {
        id: `log-${Date.now()}`,
        ownerId: profile.memberId,
        ownerName: getMemberDisplay(profile),
        sharedWith: [],
        site: qs("#logSite").value === "其他" ? (qs("#logOtherSite").value.trim() || "其他潛點") : qs("#logSite").value,
        date: qs("#logDate").value,
        activity: qs("#logActivity").value,
        method: qs("#logMethod").value,
        night: qs("#logNight").value,
        siteType: qs("#logSiteType").value,
        gas: qs("#logGas").value,
        weather: qs("#logWeather").value,
        wave: qs("#logWave").value,
        depth: Number(qs("#logDepth").value),
        minutes: Number(qs("#logMinutes").value),
        waterTemp: Number(qs("#logWaterTemp").value),
        visibility: Number(qs("#logVisibility").value),
        pressure: Number(qs("#logPressure").value),
        deco: qs("#logDeco").value,
        buddyIds,
        buddyNames,
        rating: qs("#logRating").value,
        note: qs("#logNote").value,
        photos,
        createdAt: new Date().toISOString()
      };

      const pendingTargets = buddyIdList.filter((id) => id && id !== profile.memberId);
      if (pendingTargets.length) {
        const pendingLogs = getPendingLogs();
        pendingTargets.forEach((targetId) => {
          pendingLogs.unshift({
            id: `pending-log-${Date.now()}-${targetId}`,
            targetId,
            fromId: profile.memberId,
            fromName: getMemberDisplay(profile),
            log: newLog,
            createdAt: new Date().toISOString()
          });
        });
        savePendingLogs(pendingLogs);
      }

      logs = [newLog, ...logs];
      try {
        saveLogs();
      } catch (storageError) {
        newLog.photos = [];
        saveLogs();
        showToast("日誌已儲存，但照片因瀏覽器容量限制未能保存。");
        renderLogs();
        renderMemberProfile();
        return;
      }
      renderLogs();
      renderMemberProfile();
      qs("#logForm").reset();
      qs("#logDate").value = new Date().toISOString().slice(0, 10);
      showToast(pendingTargets.length ? "已新增日誌，並送出潛伴確認通知。" : "已新增一筆潛水日誌。");
    } catch (error) {
      console.warn("Log submit failed", error);
      showToast("潛水日誌新增失敗，請確認欄位與照片大小後再試。");
    }
  });

  qs("#postForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再發布留言。");
      return;
    }
    const profile = getMemberProfile();
    const combinedText = `${qs("#postTitle").value} ${qs("#postBody").value}`;
    if (getTodayPostCount(profile.memberId) >= 5) {
      showToast("每個帳號每天最多發布 5 則留言。");
      return;
    }
    if (containsBlockedWords(combinedText)) {
      showToast("留言含有不適當用語，請修改後再發布。");
      return;
    }
    const newPost = {
      topic: qs("#postTopic").value,
      title: qs("#postTitle").value,
      body: qs("#postBody").value,
      author: getMemberDisplay(profile),
      createdAt: new Date().toISOString(),
      replies: []
    };

    const service = getSupabaseService();
    if (service) {
      try {
        const userId = await getSupabaseUserId();
        if (!userId) throw new Error("請重新登入後再發布留言。");
        await service.createForumPost(userId, profile, newPost);
        await loadPublicForumData();
      } catch (error) {
        showSupabaseError(error, "留言發布失敗。");
        return;
      }
    } else {
      posts = [newPost, ...posts];
      renderPosts();
    }
    incrementTodayPostCount(profile.memberId);
    qs("#postForm").reset();
    qs("#postForm").classList.add("is-hidden-field");
    showToast("留言已發布到潛伴聊聊。");
  });

  qs("#photoShareForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再發布水攝分享。");
      return;
    }
    const profile = getMemberProfile();
    const title = qs("#photoShareTitle").value.trim();
    const body = qs("#photoShareBody").value.trim();
    const files = [...qs("#photoShareFiles").files];
    if (!title || !body || !files.length) {
      showToast("請填寫標題、內容並上傳至少 1 張照片。");
      return;
    }
    if (getTodayPostCount(profile.memberId) >= 5) {
      showToast("每個帳號每天最多發布 5 則貼文，水攝分享也計入發布數。");
      return;
    }
    if (containsBlockedWords(`${title} ${body}`)) {
      showToast("水攝分享含有不適當用語，請修改後再發布。");
      return;
    }
    if (files.length > 5 || files.some((file) => file.size > 8 * 1024 * 1024 || !["image/jpeg", "image/png", "image/webp"].includes(file.type))) {
      showToast("照片最多 5 張，且每張需為 JPG、PNG 或 WebP、8MB 以內。");
      return;
    }
    const photos = await Promise.all(files.map(async (file) => ({
      name: file.name,
      dataUrl: await readFileAsDataUrl(file)
    })));
    const newShare = {
      id: `photo-${Date.now()}`,
      title,
      body,
      author: getMemberDisplay(profile),
      ownerId: profile.memberId,
      createdAt: new Date().toISOString(),
      photos,
      comments: [],
      ratings: {}
    };

    const service = getSupabaseService();
    if (service) {
      try {
        const userId = await getSupabaseUserId();
        if (!userId) throw new Error("請重新登入後再發布水攝分享。");
        await service.createPhotoShare(userId, profile, {
          title,
          body,
          author: getMemberDisplay(profile),
          photoUrls: photos.map((photo) => photo.dataUrl)
        });
        await loadPublicForumData();
      } catch (error) {
        showSupabaseError(error, "水攝分享發布失敗。");
        return;
      }
    } else {
      photoShares = [newShare, ...photoShares];
      savePhotoShares();
      renderPhotoShares();
    }
    incrementTodayPostCount(profile.memberId);
    qs("#photoShareForm").reset();
    qs("#photoShareForm").classList.add("is-hidden-field");
    showToast("水攝分享已發布。");
  });

  qs("#tripForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再發布開團。");
      return;
    }
    const profile = getMemberProfile();
    const requiredValues = [
      qs("#tripTitle").value.trim(),
      qs("#tripDate").value,
      qs("#tripPlace").value.trim(),
      qs("#tripSlots").value.trim(),
      qs("#tripPrice").value.trim(),
      qs("#tripNote").value.trim()
    ];
    if (requiredValues.some((value) => !value)) {
      showToast("請完整填寫所有開團資訊後再發布。");
      return;
    }

    if (!editingTripId && getTodayTripCount(profile.memberId) >= 3) {
      showToast("每個帳號每天最多發布 3 則開團資訊。");
      return;
    }
    const existingTrip = editingTripId ? trips.find((item) => item.id === editingTripId) : null;

    const newTrip = {
      id: editingTripId || `trip-${Date.now()}`,
      title: qs("#tripTitle").value.trim(),
      type: qs("#tripType").value,
      date: qs("#tripDate").value,
      slots: qs("#tripSlots").value.trim(),
      place: qs("#tripPlace").value.trim(),
      price: formatTwd(qs("#tripPrice").value),
      note: qs("#tripNote").value.trim(),
      host: getMemberDisplay(profile),
      ownerId: profile.memberId,
      messages: existingTrip?.messages || [],
      createdAt: editingTripId
        ? existingTrip?.createdAt
        : new Date().toISOString()
    };

    const wasEditing = Boolean(editingTripId);
    let memberTrips = getMemberTrips();
    if (editingTripId) {
      memberTrips = memberTrips.map((item) => item.id === editingTripId ? newTrip : item);
      trips = trips.map((item) => item.id === editingTripId ? newTrip : item);
    } else {
      memberTrips = [newTrip, ...memberTrips];
      trips = [newTrip, ...trips];
      incrementTodayTripCount(profile.memberId);
    }
    saveMemberTrips(memberTrips);
    renderTrips(trips);
    qs("#tripForm").reset();
    qs("#tripForm").classList.add("is-hidden-field");
    qs("#tripSubmitButton").textContent = "發布開團";
    editingTripId = "";
    showToast(wasEditing ? "開團資訊已更新。" : "開團資訊已發布；每日最多 3 則。");
  });

  qs("#courseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isCourseAdmin()) {
      qs("#courseForm").classList.add("is-hidden-field");
      showToast("此帳號沒有課程管理權限。");
      return;
    }
    const startDate = qs("#courseStartDate").value;
    const endDate = qs("#courseEndDate").value;

    if (endDate < startDate) {
      showToast("結束日期不可早於開始日期。");
      return;
    }

    const course = {
      id: `course-${Date.now()}`,
      title: qs("#courseTitle").value.trim(),
      stage: qs("#courseStage").value,
      startDate,
      endDate,
      location: qs("#courseLocation").value.trim(),
      seats: Number(qs("#courseSeats").value),
      price: Number(qs("#coursePrice").value),
      instructor: qs("#courseInstructor").value.trim(),
      description: qs("#courseDescription").value.trim(),
      requirements: qs("#courseRequirements").value.trim()
    };

    courses = [course, ...courses];
    saveCourses();
    renderCourseSessions();
    qs("#courseForm").reset();
    qs("#courseForm").classList.add("is-hidden-field");
    showToast("課程已發布。");
  });

  qs("#reservationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入潛水護照再送出預約。");
      return;
    }

    const profile = getMemberProfile();
    const existingReservation = editingReservationId
      ? reservations.find((item) => item.id === editingReservationId)
      : null;
    const wasEditingReservation = Boolean(editingReservationId);
    if (existingReservation && !canEditReservation(existingReservation, profile)) {
      showToast("此預約已不可更正；若為隔日預約，前一日 18:00 後即鎖定。");
      resetReservationEditing();
      return;
    }
    const baseReservation = {
      id: existingReservation?.id || `reservation-${Date.now()}`,
      code: existingReservation?.code || `RS-${todayKey().replaceAll("-", "")}-${String(reservations.length + 1).padStart(3, "0")}`,
      ownerId: profile.memberId,
      member: getMemberDisplay(profile),
      type: activeReservationType,
      note: qs("#reservationNote").value.trim(),
      status: existingReservation?.status || "待店家確認",
      createdAt: existingReservation?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    let reservation;

    if (activeReservationType === "潛水裝備") {
      const equipment = getEquipmentPayload();
      if (!qs("#equipmentDate").value || !qs("#equipmentTime").value) {
        showToast("請填寫裝備使用日期與預計使用時間。");
        return;
      }
      if (isNextDayReservationLocked(qs("#equipmentDate").value)) {
        showToast("已超過前一日 18:00，隔天裝備預約不可新增或修改。");
        return;
      }
      if (!hasRentedEquipment(equipment)) {
        showToast("請至少選擇 1 項需要租借的裝備。");
        return;
      }
      if (equipment.mask.rent === "租借" && equipment.mask.prescription === "是" && !equipment.mask.degree) {
        showToast("需要度數面鏡時，請填寫度數需求。");
        return;
      }
      if (equipment.boots.rent === "租借" && (!qs("#gearBootsSize").value || !Number.isInteger(Number(qs("#gearBootsSize").value)))) {
        showToast("租借套鞋時，請填寫整數公分鞋號。");
        return;
      }
      if (equipment.weights.rent === "租借" && !qs("#gearWeightsKg").value) {
        showToast("租借配重時，請填寫需要幾公斤。");
        return;
      }
      reservation = {
        ...baseReservation,
        date: qs("#equipmentDate").value,
        time: qs("#equipmentTime").value,
        vendor: qs("#equipmentVendor").value,
        equipment,
        backup: {
          height: qs("#renterHeight").value,
          weight: qs("#renterWeight").value
        }
      };
    } else if (activeReservationType === "氣瓶預約配送") {
      const gasTotals = calculateGasTotal();
      if (!qs("#gasDeliveryDate").value || !qs("#gasUseTime").value) {
        showToast("請填寫配送日期與預計使用時段。");
        return;
      }
      if (isNextDayReservationLocked(qs("#gasDeliveryDate").value)) {
        showToast("已超過前一日 18:00，隔天氣瓶預約配送不可新增或修改。");
        return;
      }
      if (gasTotals.air.count + gasTotals.nitrox.count <= 0) {
        showToast("請至少選擇 1 支氣瓶。");
        return;
      }
      reservation = {
        ...baseReservation,
        date: qs("#gasDeliveryDate").value,
        time: qs("#gasUseTime").value,
        deliveryPlace: qs("#gasDeliveryPlace").value,
        air: gasTotals.air,
        nitrox: gasTotals.nitrox,
        totalFee: gasTotals.total
      };
    } else {
      showToast("停車資訊目前為查詢功能，無需送出預約。");
      return;
    }

    reservations = editingReservationId
      ? reservations.map((item) => item.id === editingReservationId ? reservation : item)
      : [reservation, ...reservations];
    saveReservations();
    renderReservations();
    qs("#reservationForm").reset();
    resetReservationEditing();
    activeReservationType = "潛水裝備";
    qs("#equipmentDate").value = new Date().toISOString().slice(0, 10);
    qs("#gasDeliveryDate").value = new Date().toISOString().slice(0, 10);
    renderReservationFields();
    renderReservations();
    showToast(wasEditingReservation ? "預約資料已更新。" : "預約資料已建立，並已存入 MVP 預約資料庫。");
  });
}

function initInteractions() {
  qsa("[data-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  qs(".menu-toggle").addEventListener("click", () => {
    const nav = qs("#mobileNav");
    const willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    qs(".menu-toggle").setAttribute("aria-expanded", String(willOpen));
  });

  qs("#forecastButton").addEventListener("click", () => {
    renderForecast();
    showToast("潛水預報已更新。");
  });

  qs("#openTripForm").addEventListener("click", () => {
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再發布開團。");
      return;
    }
    if (qs("#tripForm").classList.contains("is-hidden-field")) {
      editingTripId = "";
      qs("#tripForm").reset();
      qs("#tripSubmitButton").textContent = "發布開團";
    }
    qs("#tripForm").classList.toggle("is-hidden-field");
    qs("#tripHost").value = getMemberDisplay(getMemberProfile());
  });

  qs("#openPostForm").addEventListener("click", () => {
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再發布留言。");
      return;
    }
    qs("#postForm").classList.toggle("is-hidden-field");
  });

  qs("#openPhotoShareForm").addEventListener("click", () => {
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再發布水攝分享。");
      return;
    }
    qs("#photoShareForm").classList.toggle("is-hidden-field");
  });

  qs("#openCourseForm").addEventListener("click", () => {
    if (!isCourseAdmin()) {
      showToast("只有指定管理者可以發布課程。");
      return;
    }
    qs("#courseForm").classList.toggle("is-hidden-field");
  });

  qsa("[data-reservation-type]").forEach((button) => {
    button.addEventListener("click", () => {
      activeReservationType = button.dataset.reservationType;
      renderReservationFields();
    });
  });

  ["#airLargeCount", "#airSmallCount", "#nitroxLargeCount", "#nitroxSmallCount"].forEach((selector) => {
    qs(selector)?.addEventListener("input", calculateGasTotal);
    qs(selector)?.addEventListener("change", calculateGasTotal);
  });

  ["#rentGearMask", "#rentGearWetsuit", "#rentGearBoots", "#rentGearFins", "#rentGearBcd", "#rentGearRegulator", "#rentGearWeights", "#gearMaskPrescription"].forEach((selector) => {
    qs(selector)?.addEventListener("change", updateEquipmentConditionalFields);
  });

  qsa("[data-forum-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      activeForumMode = button.dataset.forumMode;
      renderForumMode();
    });
  });

  qs("#copyReservationSummary").addEventListener("click", () => {
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入潛水護照。");
      return;
    }
    const summary = getReservationSummary();
    if (!summary) {
      showToast("目前沒有可複製的預約資料。");
      return;
    }
    navigator.clipboard?.writeText(summary)
      .then(() => showToast("已複製店家備貨摘要。"))
      .catch(() => window.prompt("請複製以下備貨摘要：", summary));
  });

  qs("#emailReservationSummary").addEventListener("click", () => {
    if (!isCourseAdmin()) {
      showToast("只有管理者可以寄出備貨清單。");
      return;
    }
    const summary = getTomorrowReservationSummary();
    if (!summary) {
      showToast("明日目前沒有裝備或氣瓶預約。");
      return;
    }
    const subject = encodeURIComponent(`TheDiver 明日租借清單 ${addDaysToDateKey(todayKey(), 1)}`);
    const body = encodeURIComponent(`${summary}\n\n提醒：靜態網站無法自動背景寄信；正式自動寄送需接 Supabase Edge Function 排程。`);
    window.location.href = `mailto:${courseAdminEmail}?subject=${subject}&body=${body}`;
  });

  qs("#exportReservationJson").addEventListener("click", exportReservationJson);

  qs("#forumTopicFilter").addEventListener("change", () => {
    activeForumTopic = qs("#forumTopicFilter").value;
    renderPosts();
  });

  qs("#accountShortcut").addEventListener("click", () => {
    if (getAuthState().loggedIn) {
      switchView("passport");
      return;
    }

    openLoginModal("login");
  });

  qs("#heroPassportAction").addEventListener("click", () => {
    if (getAuthState().loggedIn) {
      switchView("passport");
      return;
    }
    openLoginModal("register");
  });

  document.addEventListener("click", (event) => {
    const siteButton = event.target.closest("[data-site]");
    if (siteButton) {
      renderSites(siteButton.dataset.site);
    }

    const regionButton = event.target.closest("[data-map-region]");
    if (regionButton) {
      activeMapRegion = regionButton.dataset.mapRegion;
      qsa("[data-map-region]").forEach((button) => button.classList.toggle("is-active", button === regionButton));
      renderSites();
    }

    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      showToast(`${actionButton.dataset.title}：已加入待處理清單。`);
    }

    const gearMoreButton = event.target.closest("[data-gear-more]");
    if (gearMoreButton) {
      const panel = qs(`[data-gear-more-panel="${gearMoreButton.dataset.gearMore}"]`);
      const willShow = panel.classList.contains("is-hidden-field");
      panel.classList.toggle("is-hidden-field", !willShow);
      gearMoreButton.textContent = willShow ? "收合介紹" : "更多介紹";
    }

    const editTripButton = event.target.closest("[data-edit-trip]");
    if (editTripButton) {
      const item = trips.find((trip) => trip.id === editTripButton.dataset.editTrip);
      if (!item || !isTripEditable(item)) {
        showToast("只有開團者本人可以修改此開團資訊。");
        renderTrips(trips);
        return;
      }
      editingTripId = item.id;
      qs("#tripForm").classList.remove("is-hidden-field");
      qs("#tripHost").value = item.host;
      qs("#tripTitle").value = item.title;
      qs("#tripType").value = item.type;
      qs("#tripDate").value = item.date;
      qs("#tripPlace").value = item.place;
      qs("#tripSlots").value = item.slots;
      qs("#tripPrice").value = String(item.price).replace(/[^\d]/g, "");
      qs("#tripNote").value = item.note || "";
      qs("#tripSubmitButton").textContent = "儲存修改";
      qs("#tripForm").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const deleteTripButton = event.target.closest("[data-delete-trip]");
    if (deleteTripButton) {
      const item = trips.find((trip) => trip.id === deleteTripButton.dataset.deleteTrip);
      if (!item || !isTripEditable(item)) {
        showToast("只有開團者本人可以刪除此開團資訊。");
        renderTrips(trips);
        return;
      }
      if (!window.confirm(`確認刪除「${item.title}」這筆開團資訊？刪除後無法還原。`)) {
        return;
      }
      trips = trips.filter((trip) => trip.id !== item.id);
      saveVisibleMemberTrips();
      renderTrips(trips);
      showToast("開團資訊已刪除。");
    }

    const tripContactButton = event.target.closest("[data-trip-contact]");
    if (tripContactButton) {
      if (!getAuthState().loggedIn) {
        openLoginModal("login");
        showToast("請先登入後再聯繫開團者。");
        return;
      }
      const item = trips.find((trip) => trip.id === tripContactButton.dataset.tripContact);
      if (!item) return;
      const profile = getMemberProfile();
      item.messages = item.messages || [];
      item.messages.unshift({
        author: getMemberDisplay(profile),
        text: `我想報名「${item.title}」，請開團者回覆我後續聯繫方式與集合資訊。`,
        createdAt: new Date().toISOString()
      });
      saveVisibleMemberTrips();
      renderTrips(trips);
      showToast("已送出報名聯繫訊息，可在即時聊聊查看。");
    }

    const tripChatToggle = event.target.closest("[data-trip-chat-toggle]");
    if (tripChatToggle) {
      const panel = qs(`[data-trip-chat-panel="${tripChatToggle.dataset.tripChatToggle}"]`);
      panel?.classList.toggle("is-hidden-field");
    }

    const editReservationButton = event.target.closest("[data-edit-reservation]");
    if (editReservationButton) {
      const item = reservations.find((reservation) => reservation.id === editReservationButton.dataset.editReservation);
      if (!canEditReservation(item)) {
        showToast("此預約已不可更正；隔日預約在前一日 18:00 後會鎖定。");
        renderReservations();
        return;
      }
      fillReservationForm(item);
      showToast("已載入預約資料，可進行更正。");
    }

    const confirmReservationButton = event.target.closest("[data-confirm-reservation]");
    if (confirmReservationButton) {
      if (!isCourseAdmin()) {
        showToast("只有管理者可以確認店家狀態。");
        return;
      }
      reservations = reservations.map((item) => item.id === confirmReservationButton.dataset.confirmReservation
        ? { ...item, status: "店家已確認", confirmedAt: new Date().toISOString() }
        : item);
      saveReservations();
      renderReservations();
      showToast("已標記為店家已確認。");
    }

    const confirmLogButton = event.target.closest("[data-confirm-log]");
    if (confirmLogButton) {
      const profile = getMemberProfile();
      const pendingLogs = getPendingLogs();
      const item = pendingLogs.find((pending) => pending.id === confirmLogButton.dataset.confirmLog);
      if (!item || item.targetId !== profile.memberId) {
        showToast("找不到可確認的潛水日誌。");
        return;
      }
      const sharedLog = {
        ...item.log,
        id: `log-${Date.now()}-${profile.memberId}`,
        ownerId: profile.memberId,
        ownerName: getMemberDisplay(profile),
        sharedFrom: item.fromName,
        sharedWith: []
      };
      logs = [sharedLog, ...logs];
      saveLogs();
      savePendingLogs(pendingLogs.filter((pending) => pending.id !== item.id));
      renderLogs();
      renderMemberProfile();
      showToast("已確認並加入你的潛水日誌。");
    }

    const rejectLogButton = event.target.closest("[data-reject-log]");
    if (rejectLogButton) {
      savePendingLogs(getPendingLogs().filter((pending) => pending.id !== rejectLogButton.dataset.rejectLog));
      renderLogs();
      showToast("已拒絕這筆待確認日誌。");
    }

    const replyButton = event.target.closest("[data-reply-index]");
    if (replyButton) {
      const form = qs(`[data-reply-form="${replyButton.dataset.replyIndex}"]`);
      form.hidden = !form.hidden;
    }

    const photoCommentButton = event.target.closest("[data-photo-comment-index]");
    if (photoCommentButton) {
      const form = qs(`[data-photo-comment-form="${photoCommentButton.dataset.photoCommentIndex}"]`);
      form.hidden = !form.hidden;
    }
  });

  document.addEventListener("change", async (event) => {
    const ratingSelect = event.target.closest("[data-photo-rating]");
    if (!ratingSelect || !ratingSelect.value) return;
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再評分。");
      ratingSelect.value = "";
      return;
    }
    const index = Number(ratingSelect.dataset.photoRating);
    const profile = getMemberProfile();
    const item = photoShares[index];
    const service = getSupabaseService();
    if (service && forumUsesSupabase) {
      try {
        const userId = await getSupabaseUserId();
        if (!userId) throw new Error("請重新登入後再評分。");
        await service.upsertPhotoRating(userId, item.id, ratingSelect.value);
        await loadPublicForumData();
      } catch (error) {
        showSupabaseError(error, "水攝評分送出失敗。");
        return;
      }
    } else {
      photoShares[index].ratings = photoShares[index].ratings || {};
      photoShares[index].ratings[profile.memberId] = Number(ratingSelect.value);
      savePhotoShares();
      renderPhotoShares();
    }
    showToast("水攝評分已送出。");
  });

  document.addEventListener("submit", async (event) => {
    const replyForm = event.target.closest("[data-reply-form]");
    const photoCommentForm = event.target.closest("[data-photo-comment-form]");
    const tripChatForm = event.target.closest("[data-trip-chat-form]");
    if (!replyForm && !photoCommentForm && !tripChatForm) return;
    event.preventDefault();
    if (!getAuthState().loggedIn) {
      openLoginModal("login");
      showToast("請先登入後再回應留言。");
      return;
    }
    const form = replyForm || photoCommentForm || tripChatForm;
    const index = replyForm || photoCommentForm
      ? Number(replyForm ? replyForm.dataset.replyForm : photoCommentForm.dataset.photoCommentForm)
      : -1;
    const textarea = qs("textarea", form);
    const text = textarea.value.trim();
    if (!text) {
      showToast("請先輸入回應內容。");
      return;
    }
    const profile = getMemberProfile();
    if (containsBlockedWords(text)) {
      showToast("回應含有不適當用語，請修改後再送出。");
      return;
    }
    const service = getSupabaseService();
    if (replyForm) {
      if (service && forumUsesSupabase) {
        try {
          const userId = await getSupabaseUserId();
          if (!userId) throw new Error("請重新登入後再回應留言。");
          await service.createForumReply(userId, profile, {
            targetType: "forum_post",
            targetId: posts[index].id,
            body: text,
            author: getMemberDisplay(profile)
          });
          await loadPublicForumData();
        } catch (error) {
          showSupabaseError(error, "回應送出失敗。");
          return;
        }
      } else {
        posts[index].replies = posts[index].replies || [];
        posts[index].replies.unshift({ author: getMemberDisplay(profile), text, createdAt: new Date().toISOString() });
        renderPosts();
      }
    } else if (photoCommentForm) {
      if (service && forumUsesSupabase) {
        try {
          const userId = await getSupabaseUserId();
          if (!userId) throw new Error("請重新登入後再回應水攝分享。");
          await service.createForumReply(userId, profile, {
            targetType: "photo_share",
            targetId: photoShares[index].id,
            body: text,
            author: getMemberDisplay(profile)
          });
          await loadPublicForumData();
        } catch (error) {
          showSupabaseError(error, "水攝回應送出失敗。");
          return;
        }
      } else {
        photoShares[index].comments = photoShares[index].comments || [];
        photoShares[index].comments.unshift({ author: getMemberDisplay(profile), text, createdAt: new Date().toISOString() });
        savePhotoShares();
        renderPhotoShares();
      }
    } else {
      const item = trips.find((trip) => trip.id === tripChatForm.dataset.tripChatForm);
      if (!item) return;
      item.messages = item.messages || [];
      item.messages.unshift({ author: getMemberDisplay(profile), text, createdAt: new Date().toISOString() });
      saveVisibleMemberTrips();
      renderTrips(trips);
    }
    showToast("已新增回應。");
  });
}

function init() {
  renderModules();
  qs("#logDate").value = new Date().toISOString().slice(0, 10);
  renderLogs();
  renderForecast();
  renderSites();
  renderTrips(trips);
  renderCourseStages();
  renderCourseSessions();
  renderGearCards();
  renderCourseManagement();
  qs("#equipmentDate").value = new Date().toISOString().slice(0, 10);
  qs("#gasDeliveryDate").value = new Date().toISOString().slice(0, 10);
  renderReservationFields();
  renderReservations();
  renderPosts();
  renderPhotoShares();
  loadPublicForumData();
  renderForumMode();
  renderMemberProfile();
  animateMetrics();
  initLogin();
  initReviewPanel();
  initPassport();
  initForms();
  initInteractions();
  setFilter("[data-trip-filter]", "tripFilter", trips, "#tripList", "我要報名");
  setFilter("[data-gear-filter]", "gearFilter", gear, "#gearList", "查看連結");
}

document.addEventListener("DOMContentLoaded", init);
