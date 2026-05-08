# 要件定義

対象: アクアリウム・テラリウム育成ゲーム (Rank 69, Game No.8)

## 目的

水槽とテラリウムの水質、光、温度、生体相性を日々のケアで整える。

## 課題

育成シミュレーションは魅力があるが、長期バランスとコンテンツ量が必要。

## 要件

- 必須入力 `tankId`、`waterQuality`、`speciesNeeds`、`careAction` を検証する。
- happy-path / missing-required / warning / mixed-batch を代表シナリオとして保持する。
- CLI、静的Web UI、自動テスト、docs ZIP、release evidence を同一repoで完結させる。
- 正式docsはNON PICKUP行、ZIP metadata、ドメインdocsを根拠に正常な日本語で再構成する。

静的Webまたはローカルサーバーで確認できる browser game として、非blank表示、主要要素、主要操作を検証します。
