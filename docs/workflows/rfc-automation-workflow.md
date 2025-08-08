# RFC自動生成ワークフロー完全ガイド

## 概要

このドキュメントは、Claude Codeの機能を活用してRFC（Request for Comments）文書を自動生成するための完全なワークフローを説明します。

## システム構成

```
.claude/agents/
└── research-specialist.md     # RFC自動生成専用エージェント

docs/
├── architecture/
│   ├── _templates/
│   │   ├── rfc.md           # RFCテンプレート
│   │   └── adr.md           # ADRテンプレート
│   ├── _scripts/
│   │   └── generate-rfc.md  # RFC生成コマンドテンプレート
│   ├── rfc
│   │   ├── index.yaml       # RFCメタデータ管理
│   │   └── *.md             # 生成されたRFC文書
│   └── adr/
│       └── *.md              # ADR文書
└── rfc-automation-workflow.md # このファイル
```

## 使用方法

### 1. 基本的なRFC生成

最もシンプルな使用方法：

```bash
# Claude Codeに対して直接リクエスト
"IPC通信の型安全性を実現する方法についてRFCを作成してください"
```

Claude Codeは自動的に：

1. research-specialistエージェントを起動
2. 並列で情報収集（WebSearch、Context7、DeepWiki）
3. RFCテンプレートに基づいて文書生成
4. `docs/architecture/rfc/YYYY-MM-DD-{topic}.md`に保存
5. `index.yaml`を更新

### 2. 詳細な要件を指定したRFC生成

より具体的な要件がある場合：

```bash
@research-specialist 以下の要件でRFCを作成してください：
トピック: Electronアプリのステート管理
現在の問題:
- プロセス間でのステート同期が複雑
- TypeScriptの型推論が効かない
- デバッグが困難
要件:
- React 19対応
- Electron v32以降対応
- バンドルサイズ50KB以下
- DevTools対応必須
比較対象: Zustand, Jotai, Valtio, Redux Toolkit
```

### 3. 並列での複数RFC生成

関連する複数の技術調査を同時実行：

```bash
以下の3つのRFCを並列で生成してください：
1. ステート管理ライブラリの選定
2. E2Eテストフレームワークの選定
3. ビルド最適化戦略
```

## 実行例

### 例1: IPC型安全性のRFC生成

#### 入力コマンド

```bash
@research-specialist ElectronのIPC通信を型安全にする方法についてRFCを作成
要件:
- 完全なTypeScript型推論
- 最小限のボイラープレート
- ストリーミングデータ対応
比較: typed-ipc, electron-trpc, electron-better-ipc
```

#### 自動実行される処理

1. **並列情報収集**（約5-10分）

```typescript
// Claude Codeが内部的に実行
Task.parallel([
  WebSearch('Electron IPC type safety 2025'),
  WebSearch('typed-ipc vs electron-trpc comparison'),
  Context7.getLibraryDocs('typed-ipc'),
  Context7.getLibraryDocs('electron-trpc'),
  DeepWiki.analyze('electron/electron'),
  Grep('ipc', currentProject)
])
```

2. **RFC文書生成**

- ファイル作成: `docs/architecture/rfc/2025-01-08-ipc-type-safety.md`
- 含まれる内容:
  - 問題の背景と要件
  - 3つ以上のオプション詳細分析
  - 実装例（各オプション）
  - 比較マトリックス
  - 意思決定フローチャート
  - 推奨事項

3. **メタデータ更新**

```yaml
# index.yamlに自動追加
- id: '2025-01-08-ipc-type-safety'
  title: 'Type-Safe IPC Communication in Electron'
  status: 'completed'
  tags: [ipc-communication, electron, type-safety]
  recommendation: 'typed-ipc'
```

### 例2: パフォーマンス最適化戦略のRFC

#### 入力コマンド

```bash
@research-specialist Electronアプリの起動時間最適化戦略をRFCで文書化
現在の問題:
- 起動に5秒以上かかる
- 初期レンダリングが遅い
目標:
- 起動時間を2秒以下に
- First Contentful Paint < 1秒
```

#### 生成される分析内容

- コード分割戦略の比較
- プリロード最適化手法
- レイジーローディングパターン
- 具体的な実装例
- パフォーマンス測定方法

## ベストプラクティス

### 1. 効果的なプロンプトの書き方

**良い例** ✅

```bash
@research-specialist リアルタイム同期機能の実装方法をRFC化
要件:
- 10人以上の同時編集対応
- 競合解決メカニズム必須
- オフライン対応
比較: Yjs, OT.js, Automerge
```

**避けるべき例** ❌

```bash
"同期機能について調べて"  # 曖昧すぎる
```

### 2. 研究の深さを調整

```bash
# 簡易調査（15分）
@research-specialist [リクエスト]
Research depth: shallow

# 標準調査（30分）- デフォルト
@research-specialist [リクエスト]

# 詳細調査（1時間）
@research-specialist [リクエスト]
Research depth: deep
```

### 3. 既存RFCの更新

```bash
# 追加調査
"RFC docs/architecture/rfc/2025-01-08-realtime-sync.md のセキュリティセクションを拡充"

# 最新情報で更新
"RFC docs/architecture/rfc/2025-01-08-state-management.md を2025年の最新情報で更新"
```

## トラブルシューティング

### 問題: 情報が不完全

**解決策:**

```bash
"RFC docs/architecture/rfc/[ファイル名] に以下を追加調査:
- [不足している観点]
- [追加で比較したいライブラリ]"
```

### 問題: 推奨事項が不明確

**解決策:**

```bash
"RFC docs/architecture/rfc/[ファイル名] の推奨事項を明確化
エッジケース: [具体的なシナリオ]も考慮"
```

### 問題: 生成が途中で止まった

**解決策:**

```bash
"RFC docs/architecture/rfc/[ファイル名] の生成を継続
最後に処理した箇所: [セクション名]"
```

## パフォーマンス最適化

### 1. バッチ処理

関連する調査はまとめて実行：

```bash
"ステート管理とデータフェッチングのRFCを同時生成"
```

### 2. キャッシュ活用

```bash
"前回のWebSearch結果を使用してRFC更新"
```

### 3. 段階的生成

```bash
# Step 1: 基本調査
"[トピック]の基本的なRFC作成"

# Step 2: 詳細追加
"生成されたRFCに実装詳細を追加"
```

## ADRへの変換

RFCが完成し、意思決定が確定したら：

```bash
"RFC docs/architecture/rfc/2025-01-08-ipc-type-safety.md を基にADR作成
決定: typed-ipcを採用"
```

これにより：

1. ADR文書が`docs/architecture/adr/`に生成
2. RFCとADRがメタデータで関連付け
3. 実装チェックリストも自動生成

## 成功指標

- **時間短縮**: 手動調査4-8時間 → 自動生成30分
- **網羅性**: 最低3つの代替案を必ず評価
- **一貫性**: すべてのRFCが同じ構造・品質
- **追跡可能性**: すべての技術的決定が文書化

## よくある質問

### Q: 生成にどれくらい時間がかかる？

A: 標準的なRFCは15-30分。複雑なトピックは最大1時間。

### Q: 同時に何個のRFC生成が可能？

A: 最大5個まで並列実行可能（`parallel_research_limit: 5`）

### Q: 生成されたRFCの品質をどう確保？

A: テンプレート準拠、必須セクションのチェック、メトリクス自動収集

### Q: 既存のRFCをベースに新規作成は可能？

A: 可能。`"RFC [既存ファイル] を参考に [新トピック] のRFC作成"`

## 次のステップ

1. **実践**: まず簡単なトピックでRFC生成を試す
2. **カスタマイズ**: research-specialistエージェントを調整
3. **自動化拡張**: CI/CDとの統合を検討
4. **レポート生成**: 月次でRFC/ADRサマリーを自動生成

## 参考資料

- RFC生成コマンド集: @docs/architecture/\_scripts/generate-rfc.md
- RFCテンプレート: @docs/architecture/\_templates/rfc.md
- Research Agent設定: @.claude/agents/research-specialist.md
- メタデータ管理: @docs/architecture/rfc/index.yaml
- 全体設計書: @docs/research-adr-system-design.md
