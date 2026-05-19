
const translations = {
  en: { dir:'ltr', langTitle:'🌍 Select Language', tagline:'Crypto PvP battle prototype', balance:'Balance', rank:'Rank', level:'Level', play:'⚔️ Play Play', rating:'📊 Rating', inventory:'🎒 Inventory', shop:'🛒 Shop', language:'🌍 Language', profile:'👤 Profile', back:'← Back', battle:'Pump Battle', long:'🟢 LONG', short:'🔴 SHORT', whale:'💥 Whale Push', shield:'🛡 Shield', close:'❌ Close Position', player:'You', bot:'Bot', result:'Result', win:'Victory! Bot was liquidated.', lose:'Defeat! Your deposit was liquidated.', draw:'Battle finished.', time:'Time', position:'Position', next:'Next Tick', reward:'Reward', daily:'🎁 Daily Bonus', claim:'Claim', already:'Already claimed today', profileStats:'Profile stats', matches:'Matches', wins:'Wins', owned:'Owned', buy:'Buy', equip:'Equip', equipped:'Equipped', rarity:'Rarity', effect:'Effect', frame:'Frame', theme:'Theme', empty:'Inventory is empty', notEnough:'Not enough Credits', duplicate:'You already own this item', reset:'Reset progress', confirmReset:'Reset all progress?', selectItem:'Select item', achievements:'Achievements', winRate:'Win rate', activeEffects:'Active cosmetics', quests:'🎯 Quests', battlePass:'🎫 Season Pass', xp:'XP', season:'Season', dailyQuest:'Daily quest', completed:'Completed', progress:'Progress', claimReward:'Claim Reward', achievementUnlocked:'Achievement unlocked', noRewards:'No rewards ready', seasonProgress:'Season progress', rewards:'Rewards', market:'Market', volatility:'Volatility', funding:'Funding', event:'Market event', news:'News', squeeze:'Short Squeeze', whaleBuy:'Whale Buy', panicSell:'Panic Sell', liqCascade:'Liquidation Cascade', neutral:'Neutral', bullish:'Bullish', bearish:'Bearish', vip:'👑 VIP', vipClub:'VIP Club', vipXp:'VIP XP', vipBonus:'Reward bonus', vipDaily:'Daily VIP reward', vipClaim:'Claim VIP bonus', vipBoost:'Get +120 VIP XP', vipLevels:'VIP Levels', vipCurrent:'Current VIP', vipReward:'Reward', vipNeed:'Required VIP XP' },
  ru: { dir:'ltr', langTitle:'🌍 Выберите язык', tagline:'Прототип crypto PvP-битвы', balance:'Баланс', rank:'Ранг', level:'Уровень', play:'⚔️ Играть', rating:'📊 Рейтинг', inventory:'🎒 Инвентарь', shop:'🛒 Магазин', language:'🌍 Язык', profile:'👤 Профиль', back:'← Назад', battle:'Pump Battle', long:'🟢 ЛОНГ', short:'🔴 ШОРТ', whale:'💥 Whale Push', shield:'🛡 Защита', close:'❌ Закрыть позицию', player:'Ты', bot:'Бот', result:'Результат', win:'Победа! Бот ликвидирован.', lose:'Поражение! Твой депозит ликвидирован.', draw:'Бой завершен.', time:'Время', position:'Позиция', next:'Следующий тик', reward:'Награда', daily:'🎁 Ежедневный бонус', claim:'Забрать', already:'Сегодня бонус уже получен', profileStats:'Статистика профиля', matches:'Матчи', wins:'Победы', owned:'Куплено', buy:'Купить', equip:'Надеть', equipped:'Надето', rarity:'Редкость', effect:'Эффект', frame:'Рамка', theme:'Тема', empty:'Инвентарь пустой', notEnough:'Недостаточно Credits', duplicate:'Этот предмет уже куплен', reset:'Сбросить прогресс', confirmReset:'Сбросить весь прогресс?', selectItem:'Выбрать предмет', achievements:'Достижения', winRate:'Винрейт', activeEffects:'Активная косметика', quests:'🎯 Задания', battlePass:'🎫 Сезон', xp:'Опыт', season:'Сезон', dailyQuest:'Ежедневное задание', completed:'Выполнено', progress:'Прогресс', claimReward:'Забрать награду', achievementUnlocked:'Достижение открыто', noRewards:'Нет готовых наград', seasonProgress:'Прогресс сезона', rewards:'Награды', market:'Рынок', volatility:'Волатильность', funding:'Фандинг', event:'Событие рынка', news:'Новости', squeeze:'Шорт-сквиз', whaleBuy:'Покупка кита', panicSell:'Паническая продажа', liqCascade:'Каскад ликвидаций', neutral:'Нейтрально', bullish:'Бычий', bearish:'Медвежий', vip:'👑 VIP', vipClub:'VIP Клуб', vipXp:'VIP XP', vipBonus:'Бонус к наградам', vipDaily:'Ежедневная VIP-награда', vipClaim:'Получить VIP бонус', vipBoost:'Получить +120 VIP XP', vipLevels:'VIP уровни', vipCurrent:'Текущий VIP', vipReward:'Награда', vipNeed:'Нужно VIP XP' },
  zh: { dir:'ltr', langTitle:'🌍 选择语言', tagline:'加密 PvP 战斗原型', balance:'余额', rank:'等级', level:'级别', play:'⚔️ 开始演示战斗', rating:'📊 排行榜', inventory:'🎒 库存', shop:'🛒 商店', language:'🌍 语言', profile:'👤 个人资料', back:'← 返回', battle:'Pump Battle', long:'🟢 做多', short:'🔴 做空', whale:'💥 鲸鱼推动', shield:'🛡 防御', close:'❌ 平仓', player:'你', bot:'机器人', result:'结果', win:'胜利！机器人被清算。', lose:'失败！你的保证金被清算。', draw:'战斗结束。', time:'时间', position:'仓位', next:'下一跳', reward:'奖励', daily:'🎁 每日奖励', claim:'领取', already:'今天已领取', profileStats:'资料统计', matches:'比赛', wins:'胜利', owned:'已拥有', buy:'购买', equip:'装备', equipped:'已装备', rarity:'稀有度', effect:'效果', frame:'边框', theme:'主题', empty:'库存为空', notEnough:'Credits 不足', duplicate:'你已拥有此物品', reset:'重置进度', confirmReset:'重置所有进度？', selectItem:'选择物品', achievements:'成就', winRate:'胜率', activeEffects:'当前外观', quests:'🎯 任务', battlePass:'🎫 赛季通行证', xp:'经验', season:'赛季', dailyQuest:'每日任务', completed:'已完成', progress:'进度', claimReward:'领取奖励', achievementUnlocked:'成就已解锁', noRewards:'暂无可领取奖励', seasonProgress:'赛季进度', rewards:'奖励', market:'市场', volatility:'波动率', funding:'资金费率', event:'市场事件', news:'新闻', squeeze:'空头挤压', whaleBuy:'鲸鱼买入', panicSell:'恐慌抛售', liqCascade:'清算瀑布', neutral:'中性', bullish:'看涨', bearish:'看跌', vip:'👑 VIP', vipClub:'VIP俱乐部', vipXp:'VIP XP', vipBonus:'奖励加成', vipDaily:'每日VIP奖励', vipClaim:'领取VIP奖励', vipBoost:'获得 +120 VIP XP', vipLevels:'VIP等级', vipCurrent:'当前VIP', vipReward:'奖励', vipNeed:'所需VIP XP' },
  ar: { dir:'rtl', langTitle:'🌍 اختر اللغة', tagline:'نموذج أولي لمعركة كريبتو PvP', balance:'الرصيد', rank:'الرتبة', level:'المستوى', play:'⚔️ ابدأ معركة تجريبية', rating:'📊 التصنيف', inventory:'🎒 المخزون', shop:'🛒 المتجر', language:'🌍 اللغة', profile:'👤 الملف الشخصي', back:'→ رجوع', battle:'Pump Battle', long:'🟢 شراء', short:'🔴 بيع', whale:'💥 دفع الحوت', shield:'🛡 حماية', close:'❌ إغلاق الصفقة', player:'أنت', bot:'الروبوت', result:'النتيجة', win:'انتصار! تمت تصفية الروبوت.', lose:'هزيمة! تمت تصفية رصيدك.', draw:'انتهت المعركة.', time:'الوقت', position:'الصفقة', next:'الحركة التالية', reward:'المكافأة', daily:'🎁 مكافأة يومية', claim:'استلام', already:'تم الاستلام اليوم', profileStats:'إحصائيات الملف', matches:'المباريات', wins:'الفوز', owned:'مملوك', buy:'شراء', equip:'تفعيل', equipped:'مفعل', rarity:'الندرة', effect:'تأثير', frame:'إطار', theme:'ثيم', empty:'المخزون فارغ', notEnough:'رصيد Credits غير كافٍ', duplicate:'هذا العنصر لديك بالفعل', reset:'إعادة التقدم', confirmReset:'هل تريد حذف كل التقدم؟', selectItem:'اختر العنصر', achievements:'الإنجازات', winRate:'نسبة الفوز', activeEffects:'العناصر النشطة', quests:'🎯 المهام', battlePass:'🎫 الموسم', xp:'XP', season:'الموسم', dailyQuest:'المهمة اليومية', completed:'مكتمل', progress:'التقدم', claimReward:'استلام المكافأة', achievementUnlocked:'تم فتح إنجاز', noRewards:'لا توجد مكافآت جاهزة', seasonProgress:'تقدم الموسم', rewards:'المكافآت', market:'السوق', volatility:'التقلب', funding:'التمويل', event:'حدث السوق', news:'الأخبار', squeeze:'ضغط الشورت', whaleBuy:'شراء الحوت', panicSell:'بيع ذعر', liqCascade:'سلسلة تصفيات', neutral:'محايد', bullish:'صعودي', bearish:'هبوطي', vip:'👑 VIP', vipClub:'نادي VIP', vipXp:'VIP XP', vipBonus:'مكافأة إضافية', vipDaily:'مكافأة VIP اليومية', vipClaim:'احصل على مكافأة VIP', vipBoost:'احصل على +120 VIP XP', vipLevels:'مستويات VIP', vipCurrent:'VIP الحالي', vipReward:'المكافأة', vipNeed:'VIP XP المطلوب' }
};

const SHOP_ITEMS = [
  {id:'neon_frame', name:'Neon Trader Frame', emoji:'🟣', type:'frame', rarity:'Rare', price:150, desc:'Purple neon profile frame'},
  {id:'whale_fx', name:'Whale Push FX', emoji:'🐋', type:'effect', rarity:'Epic', price:250, desc:'Special battle text effect for Whale Push'},
  {id:'red_liq_fx', name:'Red Liquidation FX', emoji:'💥', type:'effect', rarity:'Epic', price:300, desc:'Red liquidation finish effect'},
  {id:'gold_profile', name:'Arabic Gold Profile', emoji:'👑', type:'frame', rarity:'Legendary', price:450, desc:'Luxury gold profile style'},
  {id:'cyber_theme', name:'Cyber Blue Theme', emoji:'🔷', type:'theme', rarity:'Rare', price:220, desc:'Blue cyberpunk battle glow'},
  {id:'mythic_squeeze', name:'Mythic Squeeze Aura', emoji:'⚡', type:'effect', rarity:'Mythic', price:800, desc:'Rare squeeze aura for future PvP'}
];

let lang = localStorage.getItem('pump_lang') || null;
let player = JSON.parse(localStorage.getItem('pump_player') || 'null') || null;
function defaultPlayer(){ return { balance: 1000, rank: 'Retail', level: 1, xp: 0, seasonXp: 0, vipXp: 0, vipLevel: 0, vipDaily: '', wins: 0, games: 0, whaleUses: 0, inventory: [], equipped: {frame:null,effect:null,theme:null}, lastDaily: '', claimedQuests: [], claimedSeason: [] }; }
if(!player) player = defaultPlayer();
if(!player.equipped) player.equipped = {frame:null,effect:null,theme:null};
if(!Array.isArray(player.inventory)) player.inventory = [];
if(!Array.isArray(player.claimedQuests)) player.claimedQuests = [];
if(!Array.isArray(player.claimedSeason)) player.claimedSeason = [];
if(typeof player.xp !== 'number') player.xp = 0;
if(typeof player.seasonXp !== 'number') player.seasonXp = 0;
if(typeof player.vipXp !== 'number') player.vipXp = 0;
if(typeof player.vipLevel !== 'number') player.vipLevel = 0;
if(typeof player.vipDaily !== 'string') player.vipDaily = '';
if(typeof player.whaleUses !== 'number') player.whaleUses = 0;
function savePlayer(){ localStorage.setItem('pump_player', JSON.stringify(player)); }
let battle = null;
const app = document.getElementById('app');
function t(k){ return translations[lang || 'en'][k] || k; }
function itemById(id){ return SHOP_ITEMS.find(x=>x.id===id); }
function owned(id){ return player.inventory.includes(id); }
function rarityClass(r){ return 'rarity-' + r.toLowerCase(); }
function activeThemeClass(){ return player.equipped.theme === 'cyber_theme' ? ' theme-cyber' : ''; }
function setLang(l){ lang=l; localStorage.setItem('pump_lang',l); document.documentElement.lang=l; document.documentElement.dir=translations[l].dir; renderHome(); }
function shell(content, heroExtra=''){ app.innerHTML = `<main class="app-shell${activeThemeClass()}"><section class="hero"><div class="hero-main"><h1 class="logo">Pump Arena</h1><div class="subtitle">${lang ? t('tagline') : 'Crypto PvP battle prototype'}</div></div>${heroExtra || ''}</section>${content}<div class="footer-note">MVP v7 · real battle · no install</div></main>`; if(typeof window.refreshPumpArenaUiChrome === 'function') setTimeout(window.refreshPumpArenaUiChrome, 0); }
function renderLanguage(){ shell(`<div class="card"><h2>${translations.en.langTitle} / ${translations.ru.langTitle}</h2><div class="grid"><button class="lang-btn" onclick="setLang('en')">🇺🇸 English</button><button class="lang-btn" onclick="setLang('ru')">🇷🇺 Русский</button><button class="lang-btn" onclick="setLang('zh')">🇨🇳 中文</button><button class="lang-btn" onclick="setLang('ar')">🇸🇦 العربية</button></div></div>`); }

const VIP_LEVELS = [
  {level:0, name:'Free', xp:0, bonus:0, daily:25, reward:'Retail Trader'},
  {level:1, name:'VIP Bronze', xp:100, bonus:5, daily:50, reward:'Bronze Shark + Profile Frame'},
  {level:2, name:'VIP Silver', xp:300, bonus:10, daily:100, reward:'Silver Whale + Trade Effect'},
  {level:3, name:'VIP Gold', xp:700, bonus:15, daily:180, reward:'Gold Market Maker + Title'},
  {level:4, name:'VIP Platinum', xp:1300, bonus:20, daily:300, reward:'Platinum Liquidator + Rare Theme'},
  {level:5, name:'VIP Diamond', xp:2200, bonus:30, daily:500, reward:'Diamond King + Mythic Effect'}
];
function vipLevelByXp(xp){ let cur=VIP_LEVELS[0]; VIP_LEVELS.forEach(v=>{ if(xp>=v.xp) cur=v; }); return cur; }
function syncVip(){ const v=vipLevelByXp(player.vipXp||0); player.vipLevel=v.level; return v; }
function addVipXp(amount){ const before=syncVip().level; player.vipXp=(player.vipXp||0)+amount; const after=syncVip(); savePlayer(); if(after.level>before){ alert('🏆 '+t('vip')+': '+after.name+'\\n'+t('vipReward')+': '+after.reward); } }
function claimVipDaily(){ const d=today(); if(player.vipDaily===d){ alert(t('already')); return; } const v=syncVip(); player.vipDaily=d; player.balance += v.daily; savePlayer(); alert('🎁 +'+v.daily+' Credits'); renderVip(); }
function renderVip(){ const v=syncVip(); const next=VIP_LEVELS.find(x=>x.level===v.level+1); const max=next?(next.xp-v.xp):1; const now=next?Math.max(0,(player.vipXp||0)-v.xp):1; const pct=next?Math.min(100,Math.round(now/max*100)):100;
 shell(`<div class="card vip-main"><h2>${t('vipClub')}</h2><div class="stats"><div class="stat"><div class="label">${t('vipCurrent')}</div><div class="value">${v.name}</div></div><div class="stat"><div class="label">${t('vipXp')}</div><div class="value">${player.vipXp||0}${next?' / '+next.xp:' / MAX'}</div></div><div class="stat"><div class="label">${t('vipBonus')}</div><div class="value">+${v.bonus}%</div></div><div class="stat"><div class="label">${t('vipDaily')}</div><div class="value">${v.daily} Credits</div></div></div><div class="progress"><span style="width:${pct}%"></span></div><div class="grid"><button class="menu-btn" onclick="claimVipDaily()">${t('vipClaim')}</button><button class="menu-btn" onclick="addVipXp(120);renderVip()">${t('vipBoost')}</button><button class="menu-btn" onclick="renderHome()">${t('back')}</button></div></div><div class="card"><h2>${t('vipLevels')}</h2><div class="vip-grid">${VIP_LEVELS.map(x=>`<div class="vip-card ${x.level===v.level?'active':''}"><h3>${x.level?'👑':'🆓'} ${x.name}</h3><p>${t('vipNeed')}: ${x.xp}</p><p>${t('vipBonus')}: +${x.bonus}%</p><p>${t('vipDaily')}: ${x.daily} Credits</p><p><b>${t('vipReward')}:</b> ${x.reward}</p></div>`).join('')}</div></div>`);
}


function simpleClanStatusHtml(){
  let clan = {};
  try { clan = JSON.parse(localStorage.getItem("pump_clan_v11") || "{}"); } catch(e){}
  if(!clan.name){
    return `<div class="equipped-line">🛡 Клан: нет | Создай клан в разделе Клан</div>`;
  }
  const xp = Number(clan.xp || 0);
  const level = Math.max(1, Math.floor(xp / 350) + 1);
  const score = xp + Number(clan.treasury || 0);
  const leader = clan.leader || 'Ты';
  return `<div class="equipped-line">🛡 Рейтинг клана: <b>${score}</b> | ⭐ Уровень клана: <b>${level}</b> | 👑 Глава клана: <b>${leader}</b></div>`;
}

function renderHome(){ if(!lang) return renderLanguage(); document.documentElement.dir=translations[lang].dir; shell(`<div class="card home-card ${player.equipped.frame==='gold_profile'?'gold-frame':player.equipped.frame==='neon_frame'?'neon-frame':''}" data-pa-screen="home"><div class="stats"><div class="stat"><div class="label">💰 ${t('balance')}</div><div class="value">${player.balance} Credits</div></div><div class="stat"><div class="label">🏆 ${t('rank')}</div><div class="value">${player.rank}</div></div><div class="stat"><div class="label">⭐ ${t('level')}</div><div class="value">${player.level}</div></div><div class="stat"><div class="label">⚡ ${t('xp')}</div><div class="value">${player.xp}</div></div></div>${simpleClanStatusHtml()}<div class="equipped-line">${t('activeEffects')}: ${equippedText()}</div><div class="grid"><button class="menu-btn primary-play" onclick="startBattle()">${t('play')}</button><button class="menu-btn" onclick="renderRating()">${t('rating')}</button><button class="menu-btn" onclick="renderQuests()">${t('quests')}</button><button class="menu-btn" onclick="renderSeason()">${t('battlePass')}</button><button class="menu-btn" onclick="renderInventory()">${t('inventory')}</button><button class="menu-btn" onclick="renderShop()">${t('shop')}</button><button class="menu-btn" onclick="renderProfile()">${t('profile')}</button><button class="menu-btn" onclick="renderSettings()">⚙️ ${lang==='ru'?'Настройки':'Settings'}</button></div></div>`, `<button class="daily-inline-btn" onclick="openDailyLogin && openDailyLogin()">📅 Daily</button>`); }
function equippedText(){ const vals=Object.values(player.equipped||{}).filter(Boolean).map(id=>itemById(id)?.emoji+' '+itemById(id)?.name); return vals.length ? vals.join(' · ') : '-'; }
function today(){ return new Date().toISOString().slice(0,10); }
function claimDaily(){ if(player.lastDaily===today()){ alert(t('already')); return; } player.lastDaily=today(); player.balance+=100; savePlayer(); renderHome(); }

function renderSettings(){
  if(!lang) return renderLanguage();
  const mode = (window.PUMP_ARENA_CONFIG && window.PUMP_ARENA_CONFIG.mode) || localStorage.getItem('pump_env_mode') || 'DEV';
  const api = localStorage.getItem('pump_api_base') || 'https://pump-arena-backend.onrender.com';
  shell(`<div class="card settings-card" data-pa-screen="settings">
    <h2>⚙️ ${lang==='ru'?'Настройки':'Settings'}</h2>
    <div class="settings-list">
      <button class="menu-btn settings-row" onclick="setPumpArenaMode && setPumpArenaMode('DEV')"><span>🧪 ${lang==='ru'?'Режим':'Mode'}</span><b>${mode}</b></button>
      <button class="menu-btn settings-row" onclick="openAdminPanel && openAdminPanel()"><span>🛡 Admin</span><b>›</b></button>
      <button class="menu-btn settings-row" onclick="openCloudSave && openCloudSave()"><span>☁️ Cloud Save</span><b>›</b></button>
      <button class="menu-btn settings-row" onclick="renderLanguage()"><span>🌍 ${t('language')}</span><b>${lang.toUpperCase()}</b></button>
      <button class="menu-btn settings-row" onclick="localStorage.setItem('pump_api_base','https://pump-arena-backend.onrender.com'); alert('Backend URL saved')"><span>🔗 API</span><b>${api.replace('https://','')}</b></button>
    </div>
    <div class="grid" style="margin-top:14px">
      <button class="menu-btn" onclick="setPumpArenaMode && setPumpArenaMode('DEV')">DEV</button>
      <button class="menu-btn" onclick="setPumpArenaMode && setPumpArenaMode('PROD')">PROD</button>
      <button class="menu-btn" onclick="renderHome()">${t('back')}</button>
    </div>
  </div>`);
}

function resetProgress(){ if(confirm(t('confirmReset'))){ player=defaultPlayer(); savePlayer(); renderHome(); } }
function renderProfile(){ const wr = player.games ? Math.round((player.wins/player.games)*100) : 0; shell(`<div class="card ${player.equipped.frame==='gold_profile'?'gold-frame':player.equipped.frame==='neon_frame'?'neon-frame':''}"><h2>${t('profile')}</h2><div class="stats"><div class="stat"><div class="label">💰 ${t('balance')}</div><div class="value">${player.balance} Credits</div></div><div class="stat"><div class="label">🏆 ${t('rank')}</div><div class="value">${player.rank}</div></div><div class="stat"><div class="label">⭐ ${t('level')}</div><div class="value">${player.level}</div></div><div class="stat"><div class="label">⚡ ${t('xp')}</div><div class="value">${player.xp}</div></div><div class="stat"><div class="label">👑 ${t('vip')}</div><div class="value">${syncVip().name}</div></div><div class="stat"><div class="label">${t('vipXp')}</div><div class="value">${player.vipXp||0}</div></div><div class="stat"><div class="label">${t('wins')}</div><div class="value">${player.wins || 0}</div></div><div class="stat"><div class="label">${t('matches')}</div><div class="value">${player.games || 0}</div></div><div class="stat"><div class="label">${t('winRate')}</div><div class="value">${wr}%</div></div></div><div class="list-row"><span>${t('activeEffects')}</span><b>${equippedText()}</b></div><div class="grid"><button class="menu-btn" onclick="renderHome()">${t('back')}</button><button class="menu-btn danger" onclick="resetProgress()">${t('reset')}</button></div></div>`); }

const QUESTS = [
  {id:'q_play_3', title:{en:'Play 3 battles',ru:'Сыграй 3 боя',zh:'完成 3 场战斗',ar:'العب 3 مباريات'}, need:p=>p.games||0, target:3, reward:120, xp:40},
  {id:'q_win_2', title:{en:'Win 2 battles',ru:'Победи 2 раза',zh:'赢得 2 场',ar:'انتصر مرتين'}, need:p=>p.wins||0, target:2, reward:160, xp:60},
  {id:'q_whale_5', title:{en:'Use Whale Push 5 times',ru:'Используй Whale Push 5 раз',zh:'使用鲸鱼推动 5 次',ar:'استخدم دفع الحوت 5 مرات'}, need:p=>p.whaleUses||0, target:5, reward:100, xp:50},
  {id:'q_buy_1', title:{en:'Buy 1 cosmetic item',ru:'Купи 1 предмет',zh:'购买 1 个外观',ar:'اشترِ عنصرًا واحدًا'}, need:p=>p.inventory.length, target:1, reward:80, xp:30}
];
const SEASON_REWARDS = [
  {level:1, xp:100, credits:100, label:'Starter Chest'},
  {level:2, xp:250, credits:180, label:'Rare Credits'},
  {level:3, xp:450, credits:300, label:'Epic Bonus'},
  {level:4, xp:700, credits:500, label:'Legendary Bonus'}
];
function titleObj(o){ return o[lang] || o.en; }
function addXp(amount){ player.xp += amount; player.seasonXp += amount; player.level = Math.max(player.level, Math.floor(player.xp / 150) + 1); }
function claimQuest(id){ const q=QUESTS.find(x=>x.id===id); if(!q || player.claimedQuests.includes(id)) return; if(q.need(player) < q.target) return; player.balance += q.reward; addXp(q.xp); player.claimedQuests.push(id); player.rank=rankByBalance(); savePlayer(); renderQuests(); }
function renderQuests(){ shell(`<div class="card"><h2>${t('quests')}</h2>${QUESTS.map(q=>{ const val=Math.min(q.need(player), q.target); const done=val>=q.target; const claimed=player.claimedQuests.includes(q.id); const pct=Math.round(val/q.target*100); return `<div class="shop-item"><div class="item-main"><div class="item-emoji">🎯</div><div><b>${titleObj(q.title)}</b><div class="muted">${t('progress')}: ${val}/${q.target}</div><div class="bar small"><span style="width:${pct}%"></span></div><div class="muted">${t('rewards')}: +${q.reward} Credits · +${q.xp} XP</div></div></div>${claimed?`<button class="small-btn disabled">${t('completed')}</button>`:done?`<button class="small-btn" onclick="claimQuest('${q.id}')">${t('claimReward')}</button>`:`<button class="small-btn disabled">${pct}%</button>`}</div>` }).join('')}<button class="menu-btn" onclick="renderHome()">${t('back')}</button></div>`); }
function claimSeason(level){ const r=SEASON_REWARDS.find(x=>x.level===level); if(!r || player.claimedSeason.includes(level)) return; if(player.seasonXp < r.xp) return; player.balance += r.credits; player.claimedSeason.push(level); player.rank=rankByBalance(); savePlayer(); renderSeason(); }
function renderSeason(){ const max=SEASON_REWARDS[SEASON_REWARDS.length-1].xp; const pct=Math.min(100, Math.round(player.seasonXp/max*100)); shell(`<div class="card"><h2>${t('battlePass')}</h2><div class="stat"><div class="label">${t('seasonProgress')}</div><div class="value">${player.seasonXp}/${max} XP</div>${bar(player.seasonXp/max*1000)}</div>${SEASON_REWARDS.map(r=>{ const ready=player.seasonXp>=r.xp; const claimed=player.claimedSeason.includes(r.level); return `<div class="list-row"><span>🎫 Lv.${r.level} · ${r.label}<br><small>${r.xp} XP · +${r.credits} Credits</small></span>${claimed?`<b>${t('completed')}</b>`:ready?`<button class="small-btn" onclick="claimSeason(${r.level})">${t('claimReward')}</button>`:`<b>${Math.min(100,Math.round(player.seasonXp/r.xp*100))}%</b>`}</div>` }).join('')}<button class="menu-btn" onclick="renderHome()">${t('back')}</button></div>`); }

function renderRating(){ const rows=[['🥇 WhaleMaster',3400],['🥈 Liquidator',2800],['🥉 PumpKing',2400],['4. You',player.balance],['5. Bot Alpha',980]]; shell(`<div class="card"><h2>${t('rating')}</h2>${rows.map(r=>`<div class="list-row"><span>${r[0]}</span><b>${r[1]} Credits</b></div>`).join('')}<button class="menu-btn" onclick="renderHome()">${t('back')}</button></div>`); }
function renderInventory(){ const items = player.inventory.map(itemById).filter(Boolean); shell(`<div class="card"><h2>${t('inventory')}</h2>${items.length ? items.map(renderInventoryItem).join('') : `<p class="big">${t('empty')}</p>`}<button class="menu-btn" onclick="renderHome()">${t('back')}</button></div>`); }
function renderInventoryItem(i){ const isEq = player.equipped[i.type]===i.id; return `<div class="shop-item"><div class="item-main"><div class="item-emoji">${i.emoji}</div><div><b>${i.name}</b><div class="muted">${t('rarity')}: <span class="${rarityClass(i.rarity)}">${i.rarity}</span> · ${t(i.type) || i.type}</div><div class="muted">${i.desc}</div></div></div><button class="small-btn" onclick="equipItem('${i.id}')">${isEq?t('equipped'):t('equip')}</button></div>`; }
function buy(id){ const i=itemById(id); if(!i) return; if(owned(id)){ alert(t('duplicate')); return; } if(player.balance < i.price){ alert(t('notEnough')); return; } player.balance -= i.price; player.inventory.push(id); addXp(15); savePlayer(); renderShop(); }
function equipItem(id){ const i=itemById(id); if(!i || !owned(id)) return; player.equipped[i.type]=id; savePlayer(); renderInventory(); }
function renderShop(){ shell(`<div class="card"><h2>${t('shop')}</h2>${SHOP_ITEMS.map(i=>`<div class="shop-item"><div class="item-main"><div class="item-emoji">${i.emoji}</div><div><b>${i.name}</b><div class="muted">${t('rarity')}: <span class="${rarityClass(i.rarity)}">${i.rarity}</span> · ${t(i.type) || i.type}</div><div class="muted">${i.desc}</div></div></div>${owned(i.id)?`<button class="small-btn disabled">${t('owned')}</button>`:`<button class="small-btn" onclick="buy('${i.id}')">${t('buy')} · ${i.price}</button>`}</div>`).join('')}<button class="menu-btn" onclick="renderHome()">${t('back')}</button></div>`); }
function rankByBalance(){ if(player.balance>=3000) return 'Whale'; if(player.balance>=2000) return 'Shark'; if(player.balance>=1400) return 'Scalper'; return 'Retail'; }
function finishBattle(message, reward){ let fx = player.equipped.effect ? itemById(player.equipped.effect)?.emoji + ' ' : ''; player.balance=Math.max(0, player.balance + reward); player.games=(player.games||0)+1; if(reward>0) player.wins=(player.wins||0)+1; addXp(reward>0 ? 35 : 15); addVipXp(reward>0 ? 35 : 10); const vb=syncVip().bonus; if(reward>0 && vb>0){ player.balance += Math.round(reward*vb/100); } player.rank=rankByBalance(); savePlayer(); battle.ended=true; battle.msg=fx + message; battle.reward=reward; renderBattle(); }

function L(key){
  const dict = {
    botStyle:{ru:'Стиль бота',en:'Bot style',zh:'机器人风格',ar:'أسلوب البوت'},
    liqRisk:{ru:'Риск ликвидации',en:'Liquidation risk',zh:'清算风险',ar:'خطر التصفية'},
    pnl:{ru:'PnL позиции',en:'Position PnL',zh:'仓位盈亏',ar:'ربح/خسارة الصفقة'},
    stopHunt:{ru:'🧨 Охота за стопами',en:'🧨 Stop Hunt',zh:'🧨 止损猎杀',ar:'🧨 صيد الوقف'},
    defense:{ru:'🛡 Защита',en:'🛡 Defense',zh:'🛡 防御',ar:'🛡 دفاع'},
    autoTick:{ru:'⏱ Авто-тик рынка',en:'⏱ Auto Market Tick',zh:'⏱ 自动市场跳动',ar:'⏱ حركة السوق التلقائية'},
    battleLog:{ru:'Журнал боя',en:'Battle log',zh:'战斗日志',ar:'سجل المعركة'},
    marketPressure:{ru:'Давление рынка',en:'Market pressure',zh:'市场压力',ar:'ضغط السوق'},
    high:{ru:'Высокий',en:'High',zh:'高',ar:'مرتفع'},
    medium:{ru:'Средний',en:'Medium',zh:'中',ar:'متوسط'},
    low:{ru:'Низкий',en:'Low',zh:'低',ar:'منخفض'},
    none:{ru:'Нет',en:'None',zh:'无',ar:'لا يوجد'},
    longOpened:{ru:'🟢 Открыт LONG',en:'🟢 LONG opened',zh:'🟢 开多',ar:'🟢 فتح شراء'},
    shortOpened:{ru:'🔴 Открыт SHORT',en:'🔴 SHORT opened',zh:'🔴 开空',ar:'🔴 فتح بيع'},
    closePos:{ru:'❌ Позиция закрыта',en:'❌ Position closed',zh:'❌ 平仓',ar:'❌ تم إغلاق الصفقة'},
    defenseOn:{ru:'🛡 Защита включена на 1 тик',en:'🛡 Defense enabled for 1 tick',zh:'🛡 防御持续1跳',ar:'🛡 الدفاع مفعل لحركة واحدة'},
    noPosition:{ru:'Сначала открой LONG или SHORT',en:'Open LONG or SHORT first',zh:'先开多或开空',ar:'افتح شراء أو بيع أولاً'},
    botAgg:{ru:'Агрессивный кит',en:'Aggressive Whale',zh:'激进鲸鱼',ar:'حوت هجومي'},
    botSniper:{ru:'Снайпер',en:'Sniper',zh:'狙击手',ar:'قناص'},
    botPanic:{ru:'Паник-трейдер',en:'Panic Trader',zh:'恐慌交易者',ar:'متداول مذعور'},
    botScalper:{ru:'Умный скальпер',en:'Smart Scalper',zh:'智能剥头皮',ar:'مضارب ذكي'}
  };
  return (dict[key] && (dict[key][lang] || dict[key].en)) || key;
}

function startBattle(){
  const bots = ['botAgg','botSniper','botPanic','botScalper'];
  battle = {
    price:100,
    entry:null,
    player:1000,
    bot:1000,
    pos:null,
    botPos: Math.random()>.5?'LONG':'SHORT',
    botStyle: bots[Math.floor(Math.random()*bots.length)],
    shield:false,
    ticks:0,
    maxTicks:24,
    msg:'',
    reward:0,
    volatility: Math.floor(35 + Math.random()*35),
    funding: ['bullish','neutral','bearish'][Math.floor(Math.random()*3)],
    event: 'neutral',
    news: t('neutral'),
    log:[t('battle')+': '+(lang==='ru'?'выбери LONG или SHORT':'choose LONG or SHORT')],
    history:[100],
    pnl:0,
    auto:false
  };
  renderBattle();
}

function marketEvent(){
  const roll = Math.random();
  if(roll < 0.14) return {key:'squeeze', emoji:'🚀', impact: 7 + Math.random()*8, vol:14, text:t('squeeze')};
  if(roll < 0.28) return {key:'whaleBuy', emoji:'🐋', impact: 5 + Math.random()*7, vol:9, text:t('whaleBuy')};
  if(roll < 0.42) return {key:'panicSell', emoji:'📉', impact: -(5 + Math.random()*8), vol:11, text:t('panicSell')};
  if(roll < 0.54) return {key:'liqCascade', emoji:'💥', impact: (Math.random()>.5?1:-1)*(9+Math.random()*10), vol:18, text:t('liqCascade')};
  return null;
}

function fundingBias(){
  if(!battle) return 0;
  if(battle.funding === 'bullish') return 0.8;
  if(battle.funding === 'bearish') return -0.8;
  return 0;
}

function botBias(){
  if(!battle) return 0;
  const base = battle.botPos==='LONG'?1:-1;
  if(battle.botStyle==='botAgg') return base*1.6;
  if(battle.botStyle==='botSniper') return battle.ticks%3===0 ? base*2.4 : base*.2;
  if(battle.botStyle==='botPanic') return (Math.random()>.5?1:-1)*1.7;
  return base*.9;
}

function positionPnl(){
  if(!battle || !battle.pos || battle.entry===null) return 0;
  const diff = battle.price - battle.entry;
  return battle.pos==='LONG' ? diff*8 : -diff*8;
}

function liqRisk(){
  if(!battle) return L('none');
  if(battle.player < 350) return L('high');
  if(battle.player < 650) return L('medium');
  return L('low');
}

function act(type){
  if(!battle || battle.ended) return;
  if(type==='LONG'||type==='SHORT'){
    battle.pos=type;
    battle.entry=battle.price;
    battle.log.unshift(type==='LONG'?L('longOpened'):L('shortOpened'));
  }
  if(type==='WHALE'){
    if(!battle.pos){ battle.log.unshift('⚠️ '+L('noPosition')); return renderBattle(); }
    player.whaleUses=(player.whaleUses||0)+1;
    const boost = battle.pos==='SHORT' ? -10 : 10;
    battle.price += boost;
    battle.volatility = Math.min(100, battle.volatility + 8);
    const whalePrefix = player.equipped.effect==='whale_fx' ? '🐋 EPIC ' : '';
    battle.log.unshift(whalePrefix+'💥 Whale Push: '+(boost>0?'+':'')+boost.toFixed(1));
    tick(false);
  }
  if(type==='STOP'){
    if(!battle.pos){ battle.log.unshift('⚠️ '+L('noPosition')); return renderBattle(); }
    const impact = battle.pos==='LONG' ? -7 : 7;
    battle.price += impact;
    battle.bot -= 65;
    battle.volatility = Math.min(100, battle.volatility + 12);
    battle.log.unshift(L('stopHunt')+`: ${impact>=0?'+':''}${impact.toFixed(1)} | Bot -65`);
    tick(false);
  }
  if(type==='SHIELD'){
    battle.shield=true;
    battle.log.unshift(L('defenseOn'));
    renderBattle();
  }
  if(type==='CLOSE'){
    const pnl = Math.round(positionPnl());
    battle.player += pnl;
    battle.log.unshift(`${L('closePos')} | PnL ${pnl>=0?'+':''}${pnl}`);
    battle.pos=null;
    battle.entry=null;
    battle.pnl=0;
    renderBattle();
  }
}

function tick(manual=true){
  if(!battle || battle.ended) return;

  const playerBias = battle.pos==='LONG'?1.4:battle.pos==='SHORT'?-1.4:0;
  const themeBonus = player.equipped.theme==='cyber_theme' ? 0.3 : 0;
  const volScale = 0.65 + battle.volatility/55;
  let eventImpact = 0;

  const ev = marketEvent();
  if(ev){
    eventImpact = ev.impact;
    battle.event = ev.key;
    battle.volatility = Math.min(100, battle.volatility + ev.vol);
    battle.news = ev.emoji + ' ' + ev.text;
    battle.log.unshift(`${ev.emoji} ${ev.text}: ${eventImpact>=0?'+':''}${eventImpact.toFixed(2)}`);
  } else {
    battle.event = 'neutral';
    battle.news = lang==='ru' ? 'Без важных событий' : 'No major event';
    battle.volatility = Math.max(10, battle.volatility - 2);
  }

  if(Math.random()<0.18){
    battle.funding = ['bullish','neutral','bearish'][Math.floor(Math.random()*3)];
  }

  const move=((Math.random()*8-4) * volScale) + playerBias + themeBonus + botBias()*0.35 + fundingBias() + eventImpact;
  battle.price=Math.max(45, Math.min(170, battle.price+move));
  battle.history.push(battle.price);
  battle.history = battle.history.slice(-28);

  battle.pnl = Math.round(positionPnl());
  const pChange = battle.pos==='LONG'?move*8:battle.pos==='SHORT'?-move*8:0;
  const bChange = battle.botPos==='LONG'?move*5.5:-move*5.5;

  battle.player += battle.shield ? pChange*0.18 : pChange;
  battle.bot += bChange;
  battle.shield=false;
  battle.ticks++;
  battle.log.unshift(`Tick ${battle.ticks}: price ${move>=0?'+':''}${move.toFixed(2)} | ${t('player')} ${pChange>=0?'+':''}${pChange.toFixed(0)} | ${t('bot')} ${bChange>=0?'+':''}${bChange.toFixed(0)}`);
  battle.log=battle.log.slice(0,10);

  if(battle.player < 250) battle.log.unshift('⚠️ '+t('liqCascade')+' / '+L('liqRisk')+': '+L('high'));
  if(battle.bot<=0) return finishBattle(t('win'), 170);
  if(battle.player<=0) return finishBattle(t('lose'), -120);
  if(battle.ticks>=battle.maxTicks){
    const reward = battle.player>battle.bot ? 100 : battle.player< battle.bot ? -50 : 25;
    return finishBattle(t('draw'), reward);
  }
  renderBattle();
}

function bar(value){
  const pct=Math.max(0, Math.min(100, value/1000*100));
  return `<div class="bar"><span style="width:${pct}%"></span></div>`;
}

function miniChart(){
  if(!battle || !battle.history) return '';
  const min = Math.min(...battle.history);
  const max = Math.max(...battle.history);
  const points = battle.history.map((p,i)=>{
    const x = battle.history.length<=1 ? 0 : (i/(battle.history.length-1))*100;
    const y = max===min ? 50 : 85 - ((p-min)/(max-min))*70;
    return `${x},${y}`;
  }).join(' ');
  return `<svg class="mini-chart" viewBox="0 0 100 100" preserveAspectRatio="none"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke"/></svg>`;
}

function fundingText(){
  if(!battle) return '-';
  return battle.funding==='bullish' ? t('bullish') : battle.funding==='bearish' ? t('bearish') : t('neutral');
}

function renderBattle(){
  const top = 85 - ((battle.price-45)/125)*70;
  const ended = !!battle.ended;
  const pnl = Math.round(positionPnl());
  const pressure = battle.pos ? (battle.pos==='LONG' ? '🟢 LONG' : '🔴 SHORT') : L('none');
  shell(`<div class="card">
    <div class="row">
      <div><div class="muted">${t('battle')}</div><div class="big">BTC-PUMP · $${battle.price.toFixed(2)}</div></div>
      <button class="menu-btn" onclick="renderHome()">${t('back')}</button>
    </div>

    <div class="market-panel">
      <div class="market-chip">📊 ${t('volatility')}: <b>${battle.volatility}%</b></div>
      <div class="market-chip">💸 ${t('funding')}: <b>${fundingText()}</b></div>
      <div class="market-chip">📰 ${t('news')}: <b>${battle.news}</b></div>
      <div class="market-chip">🤖 ${L('botStyle')}: <b>${L(battle.botStyle)}</b></div>
      <div class="market-chip">💀 ${L('liqRisk')}: <b>${liqRisk()}</b></div>
      <div class="market-chip">⚔️ ${L('marketPressure')}: <b>${pressure}</b></div>
    </div>

    <div class="chart">
      <div class="price-label">$${battle.price.toFixed(2)}</div>
      <div class="price-line" style="top:${top}%"></div>
      ${miniChart()}
    </div>

    <div class="stats">
      <div class="stat"><div class="label">${t('player')}</div><div class="value ${battle.player>=500?'green':'red'}">$${Math.max(0,battle.player).toFixed(0)}</div>${bar(battle.player)}</div>
      <div class="stat"><div class="label">${t('bot')}</div><div class="value ${battle.bot>=500?'green':'red'}">$${Math.max(0,battle.bot).toFixed(0)}</div>${bar(battle.bot)}</div>
      <div class="stat"><div class="label">${t('time')}</div><div class="value">${battle.maxTicks-battle.ticks}</div></div>
      <div class="stat"><div class="label">${t('position')}</div><div class="value">${battle.pos || '-'}</div></div>
      <div class="stat"><div class="label">${L('pnl')}</div><div class="value ${pnl>=0?'green':'red'}">${pnl>=0?'+':''}${pnl}</div></div>
      <div class="stat"><div class="label">Entry</div><div class="value">${battle.entry ? '$'+battle.entry.toFixed(2) : '-'}</div></div>
    </div>

    ${ended?`<h2>${t('result')}: ${battle.msg}</h2><p class="big">${t('reward')}: ${battle.reward>0?'+':''}${battle.reward} Credits</p><button class="action-btn" onclick="startBattle()">${t('play')}</button>`:
    `<div class="grid">
      <button class="action-btn" onclick="act('LONG')">${t('long')}</button>
      <button class="action-btn" onclick="act('SHORT')">${t('short')}</button>
      <button class="action-btn" onclick="act('WHALE')">${t('whale')}</button>
      <button class="action-btn" onclick="act('STOP')">${L('stopHunt')}</button>
      <button class="action-btn" onclick="act('SHIELD')">${L('defense')}</button>
      <button class="action-btn" onclick="act('CLOSE')">${t('close')}</button>
      <button class="action-btn" onclick="tick()">${t('next')}</button>
    </div>`}
    <h3>${L('battleLog')}</h3>
    <div class="log">${battle.log.map(x=>`<div>${x}</div>`).join('')}</div>
  </div>`);
}

renderHome();


/* V33_FINISH_BATTLE_VISIBLE_START */
window.finishBattleManualV33 = function(){
  const isRu = (typeof lang !== "undefined" && lang === "ru");
  const ok = confirm(isRu ? "Закончить текущий бой и выйти на главный экран?" : "Finish current battle and return to home?");
  if(!ok) return;

  try{
    if(typeof battle !== "undefined"){
      battle = null;
    }
  }catch(e){}

  try{
    localStorage.removeItem("pump_active_battle");
  }catch(e){}

  if(typeof renderHome === "function"){
    renderHome();
  }else{
    location.reload();
  }
};

(function(){
  function battleIsVisible(){
    const bodyText = (document.body && document.body.innerText || "").toLowerCase();
    const hasBattleWords =
      bodyText.includes("pump battle") ||
      bodyText.includes("long") ||
      bodyText.includes("short") ||
      bodyText.includes("лонг") ||
      bodyText.includes("шорт") ||
      bodyText.includes("следующий тик") ||
      bodyText.includes("next tick") ||
      bodyText.includes("whale push");

    const hasBattleObject = (typeof battle !== "undefined" && battle && !battle.ended);
    return hasBattleObject || hasBattleWords;
  }

  function removeFinishBtn(){
    const btn = document.getElementById("finishBattleFloatingBtnV33");
    if(btn) btn.remove();
  }

  function injectFinishBtn(){
    if(!document.body) return;

    if(!battleIsVisible()){
      removeFinishBtn();
      return;
    }

    if(document.getElementById("finishBattleFloatingBtnV33")) return;

    const btn = document.createElement("button");
    btn.id = "finishBattleFloatingBtnV33";
    btn.type = "button";
    btn.textContent = (typeof lang !== "undefined" && lang === "ru") ? "🏁 Закончить бой" : "🏁 Finish Battle";
    btn.onclick = window.finishBattleManualV33;
    document.body.appendChild(btn);
  }

  const originalRenderBattle = (typeof renderBattle === "function") ? renderBattle : null;
  if(originalRenderBattle && !originalRenderBattle.__v33FinishPatched){
    const patchedRenderBattle = function(){
      const result = originalRenderBattle.apply(this, arguments);
      setTimeout(injectFinishBtn, 0);
      setTimeout(injectFinishBtn, 250);
      return result;
    };
    patchedRenderBattle.__v33FinishPatched = true;
    renderBattle = patchedRenderBattle;
  }

  const originalRenderHome = (typeof renderHome === "function") ? renderHome : null;
  if(originalRenderHome && !originalRenderHome.__v33FinishPatched){
    const patchedRenderHome = function(){
      removeFinishBtn();
      return originalRenderHome.apply(this, arguments);
    };
    patchedRenderHome.__v33FinishPatched = true;
    renderHome = patchedRenderHome;
  }

  document.addEventListener("DOMContentLoaded", function(){
    setInterval(injectFinishBtn, 500);
  });
})();
/* V33_FINISH_BATTLE_VISIBLE_END */
