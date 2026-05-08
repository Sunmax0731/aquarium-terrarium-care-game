# 厳格手動テスト追補

対象: アクアリウム・テラリウム育成ゲーム (Rank 69, Game No.8)

Codex側では手動テスト未実施です。

作業ディレクトリ: `D:\AI\Game\aquarium-terrarium-care-game`

```powershell
npm test
npm run cli
```


## 手順

1. `index.html` を静的サーバーで開き、タイトルと概要を確認する。
2. 4つの代表シナリオを順に選び、Canvasがblankでなく、Status / Accepted / Warnings / Score が変わることを確認する。
3. missing-required が error、warning と mixed-batch が warning、happy-path が pass になることを確認する。
4. 静的Webまたはローカルサーバーで確認できる browser game として、非blank表示、主要要素、主要操作を検証します。
5. release asset 3件をダウンロードし、docs ZIP内に必要docsが含まれることを確認する。
