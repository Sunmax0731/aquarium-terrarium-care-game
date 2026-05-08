# アクアリウム・テラリウム育成ゲーム

aquarium-terrarium-care-game は、NON PICKUP 優先リスト Rank 69 / Game No.8 から昇格した closed alpha プロダクトです。水槽とテラリウムの水質、光、温度、生体相性を日々のケアで整える。

## Quick Start

```powershell
cd D:\AI\Game\aquarium-terrarium-care-game
npm test
npm run cli
```

## Closed Alpha Scope

- 公開想定: GitHub Pages / BOOTH
- 対象ユーザー: 小さな育成シムをブラウザで継続したいプレイヤー
- 手動テスト: Codex側では未実施。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記載

## Architecture

- `src/core`: プロダクト定義と代表シナリオ評価
- `src/validators`: representative suite と期待結果の検証
- `src/report`: validation result、web smoke、QCDS metrics、deterministic docs ZIP の生成
- `src/review-model`: QCDS 評価モデル
- `src/cli`: CLI 検証入口
- `src/web`: 静的Web表示と主要操作
- `src/game`: game loop と balancing の境界

## Release Artifacts

- `dist/aquarium-terrarium-care-game-docs.zip`
- `dist/validation-result.json`
- `dist/web-smoke-result.json`
- `docs/release-evidence.json`
