# ぽこりん — 紹介ページ

ぽこりん（iPhone 向けの連鎖パズルゲーム）の紹介ページ。HTML / CSS / Vanilla JS だけの静的サイトで、GitHub Pages 等にそのままデプロイできる。

パズルちゃんの紹介ページ（`tsudatech/puzzle_chan_web`）の構成を踏襲し、配色をアプリの `Palette`（`pocorin/Core/Theme.swift`）に合わせてある。
あちらは淡い青、こちらはアプリと同じ淡いピンクの地で、カードやボタンはアプリと同じく濃紺のふち取り。
スクリーンショットの節は置いていない。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | セマンティック HTML。各テキストは `data-i18n-key` で多言語化対応 |
| `styles.css` | 配色・レイアウト・レスポンシブ。地は `#FFF0F6`、文字は `#2E2A48`、アクセントは `#E0456F` |
| `script.js` | 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax |
| `images/app-icon.png` | hero と favicon に使うアプリアイコン（1024×1024 を 512 に縮小） |
| `images/logo-ja.png` / `logo-en.png` | hero のタイトルロゴ。アプリの `logo_title` / `logo_title-en` と同じもの。言語で差しかわる |
| `images/modes/poko_*.png` | ぽこりん4色。アプリの `Sprites.spriteatlas` のものを 160×160 に縮小 |

文字はアプリと同じ M PLUS Rounded 1c を Google Fonts から読む。

## 文言

- 日本語は `index.html` に直接書いてあり、`script.js` の `translations.ja` にも同じものを持っている（言語を切りかえて戻すため）。
  文言を変えたら両方を直すこと。
- 英語の呼び名（Challenge / Free Play / Chain Puzzles / Fever など）は、アプリの `en.lproj/Localizable.strings` に合わせてある。
- App Store のリンク（`#download` の「App Store でダウンロード」）は、公開後に実際の URL に差しかえる。

## 手元で見る

```bash
cd web
python3 -m http.server 8765
# http://localhost:8765/ を開く。?lang=en で英語
```
