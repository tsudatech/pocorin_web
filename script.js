// ぽこりん 紹介ページ
// 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax
// （パズルちゃんの紹介ページ tsudatech/puzzle_chan_web の script.js を踏襲）
//
// 訳文は、アプリの en.lproj/Localizable.strings にあるものはそれに合わせてある
// （Challenge / Free Play / Chain Puzzles / Fever など）。ここで訳し直すと、アプリと呼び名が食い違う。

const translations = {
  ja: {
    page_title: "ぽこりん - そろえて消して、フィーバーで一気に！",
    app_name: "ぽこりん",
    nav_modes: "モード",
    nav_features: "機能",
    nav_download: "ダウンロード",
    nav_privacy: "プライバシー",
    nav_contact: "お問い合わせ",
    hero_title_line1: "そろえて消して、",
    hero_title_line2: "フィーバーで一気に！",
    hero_description: "ぽこりんを押したまま、となりへスライドして入れかえ。3つ以上そろうと消えて、落ちてきたぽこりんがまたそろえば連鎖！消すほどたまるゲージが満タンになると、タップだけでまとめて消せるフィーバーに入ります。",
    hero_cta_download: "ダウンロード",
    hero_cta_modes: "モードを見る",
    modes_title: "3つのモード",
    modes_lead: "CPU とのスコア勝負、ハイスコアへの挑戦、じっくり考えるお題。気分に合わせて選べます。",
    mode_challenge_title: "チャレンジ",
    mode_challenge_text: "CPU とスコア勝負。さきに 12000 点とったほうが勝ちです。4つ以上まとめて消すか2連鎖以上で、相手の盤面におじゃまの岩を送れます。レベル1〜10を順にのぼり、レベル10に勝つとレベル30まで好きな強さで遊べます。",
    mode_free_title: "フリープレイ",
    mode_free_text: "好きなルールでハイスコアをめざします。60秒アタック、30手チャレンジ、フィーバーで時間がのびるモード、終わりのない「のんびり」の4種類。",
    mode_puzzle_title: "れんさパズル",
    mode_puzzle_text: "「X手以内でY連鎖」のお題を14問。消えたマスは補充されないので、落ちかたを読んで手を組み立てます。どの問題もかならず解ける盤面だけを出題します。",
    features_title: "主な機能",
    feature_chain_title: "連鎖するほど高得点",
    feature_chain_text: "消えたあとに落ちてきたぽこりんがそろうと連鎖。つながるほど点数の倍率が上がります。",
    feature_fever_title: "フィーバー",
    feature_fever_text: "消すほどゲージがたまり、満タンで7秒間のフィーバー。タップだけで同じ色のかたまりをまとめて消せます。",
    feature_cpu_title: "強さを選べる CPU",
    feature_cpu_text: "レベルが上がるほど、CPU の手は正確に、送ってくる岩は多くなります。勝つと次のレベルがひらきます。",
    feature_puzzle_title: "かならず解けるお題",
    feature_puzzle_text: "れんさパズルの盤面は、お題の手数で解けて、それより少ない手数では解けないことを確かめてから出題します。",
    feature_achievement_title: "実績を集める",
    feature_achievement_text: "はじめての連鎖、フィーバー、CPU への勝利など、15の実績があります。達成するとお祝いの演出が出ます。",
    feature_record_title: "遊んだ記録が残る",
    feature_record_text: "プレイ回数、さいだい連鎖、フリープレイの自己ベスト、チャレンジの勝敗、プレイ時間を見られます。",
    feature_icloud_title: "iCloud に預けられる",
    feature_icloud_text: "記録を iCloud に置いておけば、機種を変えても続きから遊べます。使うかどうかは選べます。",
    feature_lang_title: "日本語と英語",
    feature_lang_text: "端末の言語に合わせて、日本語と英語で表示します。はじめての人向けの案内とあそびかたもあります。",
    feature_privacy_title: "ログインも広告もなし",
    feature_privacy_text: "アカウントの登録はいりません。広告も表示しません。遊んだ記録は端末の中に保存されます。",
    download_title: "ダウンロード",
    download_heading: "App Store で今すぐダウンロード",
    download_subheading: "iOS 26.0 以降に対応しています。",
    download_button: "App Store でダウンロード",
    download_requirements_title: "システム要件",
    download_requirements_ios: "iOS 26.0 以降",
    download_requirements_devices: "iPhone／縦向き",
    download_requirements_language: "日本語・英語",
    download_requirements_iap: "App内課金なし・広告なし",
    privacy_title: "プライバシーポリシー",
    privacy_handling_heading: "個人情報の取り扱いについて",
    privacy_handling_text: "ぽこりん（以下「本アプリ」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本アプリはアカウント登録を必要とせず、開発者のサーバーを持ちません。",
    privacy_collect_heading: "収集する情報",
    privacy_collect_text: "本アプリが扱うのは、遊んだ記録（プレイ回数、さいだい連鎖、フィーバーの回数、フリープレイの自己ベスト、チャレンジの勝敗、といたれんさパズル）、アプリを開いていた時間、実績の達成状況、および各種設定だけで、これらはすべて端末の中に留まります。氏名・メールアドレス・位置情報は収集しません。利用状況の解析（アナリティクス）も行いません。",
    privacy_storage_heading: "情報の保存",
    privacy_storage_text: "遊んだ記録と設定（フィーバーのあり・なし、音のあり・なしなど）は、端末内（UserDefaults）に保存されます。",
    privacy_icloud_heading: "iCloud について",
    privacy_icloud_text: "設定で iCloud バックアップを有効にした場合に限り、遊んだ記録が iCloud のキーバリューストアに保存され、同じ Apple アカウントの端末間で同期されます。この同期は Apple の iCloud 上で完結し、開発者がその内容を参照することはできません。設定は同期されず、その端末にだけ残ります。",
    privacy_ads_heading: "広告について",
    privacy_ads_text: "本アプリは広告を表示しません。広告のための識別子（IDFA）も使いません。",
    privacy_network_heading: "外部との通信",
    privacy_network_text: "本アプリは、開発者のサーバーへ利用者の記録を送信しません。開発者はサーバーを持っていません。ネットワークを使うのは、利用者が iCloud バックアップを有効にした場合の Apple のサービスとの通信だけです。",
    privacy_delete_heading: "データの削除",
    privacy_delete_text: "アプリを削除すると、端末内に保存された記録と設定も一緒に削除されます。iCloud バックアップを使っている場合は、iOS の設定から iCloud 上のデータを削除できます。",
    privacy_children_heading: "お子さまの利用について",
    privacy_children_text: "本アプリは年齢を問わず利用できます。開発者は個人情報を収集せず、アプリ内購入や広告もありません。",
    privacy_contact_heading: "お問い合わせ",
    privacy_contact_text_before: "プライバシーポリシーに関するご質問は、",
    privacy_contact_link: "お問い合わせ",
    privacy_contact_text_after: "までご連絡ください。",
    privacy_update: "最終更新: 2026 年 9 月",
    contact_title: "お問い合わせ",
    contact_intro: "アプリに関するご質問、バグ報告、機能要望などがございましたら、お気軽にお問い合わせください。",
    contact_email_heading: "📧メール",
    contact_bug_heading: "🐛バグ報告",
    contact_bug_text: "解けないお題が出た、動きがおかしいといった不具合を見つけたら、上記メールアドレスまで詳細をお送りください。",
    contact_feature_heading: "💡機能要望",
    contact_feature_text: "こんなモードやお題がほしい、といったご要望もお待ちしています。",
    footer_copyright: "© 2026 ぽこりん. All rights reserved.",
    meta_description: "ぽこりんは、4色のぽこりんを入れかえて3つそろえて消す、iPhone 向けの連鎖パズルゲームです。CPU とスコアで勝負するチャレンジ、好きなルールでハイスコアをめざすフリープレイ、「X手以内でY連鎖」のお題をとくれんさパズルの3つのモードで遊べます。ログインは不要で、広告もありません。",
  },
  en: {
    page_title: "Pocorin - Match, clear, and go wild in Fever!",
    meta_description: "Pocorin is a chain puzzle game for iPhone: swap four colors of Pocorins and match three to clear them. Race the CPU in Challenge, chase a high score in Free Play, or solve \"Make a Y chain in X moves\" goals in Chain Puzzles. No login, no ads.",
    app_name: "Pocorin",
    nav_modes: "Modes",
    nav_features: "Features",
    nav_download: "Download",
    nav_privacy: "Privacy",
    nav_contact: "Contact",
    hero_title_line1: "Match, clear,",
    hero_title_line2: "and go wild in Fever!",
    hero_description: "Hold a Pocorin and slide it to swap with a neighbor. Line up three or more to clear them, and if the falling Pocorins match again, that's a chain! Fill the gauge by clearing, and Fever begins: just tap to clear whole groups at once.",
    hero_cta_download: "Download",
    hero_cta_modes: "See the Modes",
    modes_title: "Three Modes",
    modes_lead: "Race the CPU, chase a high score, or think through a puzzle. Pick whatever fits your mood.",
    mode_challenge_title: "Challenge",
    mode_challenge_text: "Race the CPU for points. First to 12000 wins. Clear four or more at once, or make a 2+ chain, to send rocks to your rival's board. Climb Levels 1–10, and beat Level 10 to play any strength up to Level 30.",
    mode_free_title: "Free Play",
    mode_free_text: "Go for a high score with the rule you like: 60-Sec Attack, 30-Move Challenge, Fever Extend (Fever adds time), or Relaxed with no end.",
    mode_puzzle_title: "Chain Puzzles",
    mode_puzzle_text: "14 goals like \"Make a Y chain in X moves.\" Cleared spaces aren't refilled, so read how the pieces fall and plan your moves. Every puzzle is guaranteed solvable.",
    features_title: "Features",
    feature_chain_title: "Chains Score Big",
    feature_chain_text: "When falling Pocorins line up again, it's a chain. The longer the chain, the bigger the score multiplier.",
    feature_fever_title: "Fever",
    feature_fever_text: "Clearing fills the gauge. When it's full, you get 7 seconds of Fever: just tap to clear a whole group of one color.",
    feature_cpu_title: "CPU at Your Level",
    feature_cpu_text: "The higher the level, the sharper the CPU's moves and the more rocks it sends. Win to unlock the next level.",
    feature_puzzle_title: "Always Solvable",
    feature_puzzle_text: "Every Chain Puzzle is checked to be solvable in the given number of moves, and not in fewer.",
    feature_achievement_title: "Collect Achievements",
    feature_achievement_text: "15 achievements, from your first chain and Fever to beating the CPU. Each one comes with a little celebration.",
    feature_record_title: "Your Play Records",
    feature_record_text: "See games played, best chain, Free Play best scores, Challenge wins and losses, and total play time.",
    feature_icloud_title: "Back Up to iCloud",
    feature_icloud_text: "Keep your records in iCloud and pick up where you left off on a new phone. Backup is optional.",
    feature_lang_title: "Japanese & English",
    feature_lang_text: "Shown in Japanese or English to match your device, with a first-time guide and a How to Play screen.",
    feature_privacy_title: "No Login, No Ads",
    feature_privacy_text: "No account needed and no ads. Your play records are saved on your device.",
    download_title: "Download",
    download_heading: "Download on the App Store",
    download_subheading: "Requires iOS 26.0 or later.",
    download_button: "Download on the App Store",
    download_requirements_title: "Requirements",
    download_requirements_ios: "iOS 26.0 or later",
    download_requirements_devices: "iPhone / portrait",
    download_requirements_language: "Japanese, English",
    download_requirements_iap: "No in-app purchases, no ads",
    privacy_title: "Privacy Policy",
    privacy_handling_heading: "How We Handle Personal Information",
    privacy_handling_text: "Pocorin (\"the App\") respects your privacy and is committed to protecting personal information. The App requires no account, and the developer operates no servers.",
    privacy_collect_heading: "Information We Handle",
    privacy_collect_text: "The App only handles your play records (games played, best chain, number of Fevers, Free Play best scores, Challenge wins and losses, and solved Chain Puzzles), the time the App was open, achievement progress, and your settings. All of this stays on your device. We do not collect names, email addresses, or location, and we do not perform usage analytics.",
    privacy_storage_heading: "Where Information Is Stored",
    privacy_storage_text: "Play records and settings (such as Fever on/off and sound on/off) are stored on your device (UserDefaults).",
    privacy_icloud_heading: "About iCloud",
    privacy_icloud_text: "Only if you turn on iCloud backup in Settings, your play records are stored in iCloud key-value storage and synced across devices using the same Apple Account. This sync happens entirely within Apple's iCloud, and the developer cannot see its contents. Settings are not synced and stay on each device.",
    privacy_ads_heading: "About Ads",
    privacy_ads_text: "The App shows no ads and does not use the advertising identifier (IDFA).",
    privacy_network_heading: "Network Communication",
    privacy_network_text: "The App does not send your records to any developer server; the developer has no servers. The only network communication is with Apple's services when you turn on iCloud backup.",
    privacy_delete_heading: "Deleting Your Data",
    privacy_delete_text: "Deleting the App also deletes the records and settings stored on your device. If you use iCloud backup, you can delete the data in iCloud from the iOS Settings app.",
    privacy_children_heading: "Use by Children",
    privacy_children_text: "The App can be used by people of any age. The developer collects no personal information, and the App has no in-app purchases or ads.",
    privacy_contact_heading: "Contact",
    privacy_contact_text_before: "For questions about this Privacy Policy, please reach us via ",
    privacy_contact_link: "Contact",
    privacy_contact_text_after: ".",
    privacy_update: "Last updated: September 2026",
    contact_title: "Contact",
    contact_intro: "If you have questions about the App, bug reports, or feature requests, please feel free to get in touch.",
    contact_email_heading: "📧 Email",
    contact_bug_heading: "🐛 Bug Reports",
    contact_bug_text: "If you find a problem, such as a puzzle that can't be solved or something behaving oddly, please send the details to the email address above.",
    contact_feature_heading: "💡 Feature Requests",
    contact_feature_text: "We'd love to hear ideas for new modes or puzzles, too.",
    footer_copyright: "© 2026 Pocorin. All rights reserved.",
  },
};

// ── Language ─────────────────────────────────────────────────────────────────

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) return params.get("lang");
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const browser = navigator.language || navigator.userLanguage || "ja";
  return browser.startsWith("ja") ? "ja" : "en";
}

function applyLanguage(lang) {
  const t = translations[lang] || translations["ja"];

  document.title = t["page_title"] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t["meta_description"] || "");

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("img[data-src-ja]").forEach((img) => {
    const src = lang === "ja" ? img.dataset.srcJa : img.dataset.srcEn;
    if (src) img.src = src;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

// ── Scroll & Header ───────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  header.style.transition = "transform 0.3s ease";
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector(".header")?.offsetHeight ?? 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Intersection Observer (fade-in) ──────────────────────────────────────────

function initFadeIn() {
  const targets = document.querySelectorAll(
    ".mode-card, .feature-card, .download-info, .download-requirements, .privacy-content, .contact-method",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // 最初から見えている範囲は隠さない。
  // 隠してしまうと、監視が働かない場面（プレビュー、拡張機能、古い環境）で
  // 画面の先頭から真っ白になってしまう。
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    observer.observe(el);
  });

  document.addEventListener("animationstart", (e) => {
    if (e.animationName === "fadeInUp") {
      e.target.style.opacity = "";
    }
  });

  // 保険。何らかの理由で監視が働かなくても、必ず見える状態に戻す
  setTimeout(() => {
    targets.forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "";
    });
  }, 4000);
}

// ── Ripple on buttons ─────────────────────────────────────────────────────────

function initRipple() {
  document.querySelectorAll(".btn, .app-store-placeholder").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.35);border-radius:50%;
        transform:scale(0);animation:ripple 0.5s linear;pointer-events:none;
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(style);
}

// ── Lazy images ───────────────────────────────────────────────────────────────

function initLazyImages() {
  const images = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => observer.observe(img));
  }
}

// ── Parallax (hero) ───────────────────────────────────────────────────────────

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.3;
      hero.style.backgroundPositionY = `${offset}px`;
    },
    { passive: true },
  );
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  initHeader();
  initSmoothScroll();
  initFadeIn();
  initRipple();
  initLazyImages();
  initParallax();
});
