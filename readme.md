## learn moonrepo with pnpm workspace

モノレポ（monorepo）ツールであるmoonrepoのデモリポジトリです。パッケージ管理にはpnpm workspaceを使用しています。

```
learn-moonrepo
├── app
│   └── web
│       ├── moon.yml        # 'web'用のタスク設定（開発、ビルド、テストなど）
│       ├── package.json    # @app/web パッケージの設定
│       └── src
├── makefile                # よく使うコマンドをまとめたMakefile
├── package.json
├── packages
│   ├── eslint-config       # ESLint(FlatConfig)の共通設定（@packages/eslint-config）
│   │   └── package.json
│   ├── ts-config           # TypeScriptの共通設定（@packages/ts-config）
│   │   └── package.json
│   └── ui                  # UIコンポーネントライブラリ（@packages/ui）
│       └── package.json
├── pnpm-workspace.yaml     # モノレポ内のパッケージ管理設定
└── readme.md
```

## 動作環境

このプロジェクトでは以下のバージョンを `.moon/toolchain.yml` で指定しています。

以下をバージョンを使用するか、`toolchain.yml` を書き換えてください。

- Node.js 22.1.0
- pnpm 9.4.0

## Moonの設定

### .moon/workspace.yml

プロジェクトのパスやバージョン管理の設定を定義しています。

ここでは、Next.jsアプリケーションである `app/web` を `web` プロジェクトとして登録しています。

```yaml
projects:
  web: "app/web"  # 'web'という名前で'app/web'フォルダをプロジェクトとして登録

runner:
  autoCleanCache: false  # 自動キャッシュクリーニングを無効化

vcs:
  defaultBranch: "master"  # デフォルトブランチを'master'に設定
  manager: "git"           # バージョン管理システムをGitに指定
  provider: "github"       # リモートプロバイダーをGitHubに指定
```

### .moon/toolchain.yml

Node.jsやpnpmのバージョンなど、プロジェクトのツールチェーンに関する設定を行います。これにより、各開発者が同じ環境で作業できるようにバージョンを統一しています。

```yaml
node:
  version: "22.1.0"         # Node.jsのバージョン
  packageManager: "pnpm"    # パッケージマネージャーにpnpmを指定
  pnpm:
    version: "9.4.0"        # pnpmのバージョン
```

### app/web/moon.yml

`app/web/moon.yml` に `web` プロジェクト用のタスクを定義しています。

```yaml
tasks:
  dev:
    command: "pnpm dev"
    inputs: ["packages/ui/**"] # uiパッケージの変更を検知し、キャッシュを無効化
    ...
```

`inputs` でパスを設定することで、その箇所での変更が開発サーバーに反映されるようにしています。

#### 実行例

```sh
# 開発サーバーを起動
pnpm moon run web:dev

# 本番用にビルド
pnpm moon run web:build

# コードのリンティング
pnpm moon run web:lint

# テストの実行
pnpm moon run web:test
```

## pnpm workspace

pnpm workspace は、複数のパッケージやプロジェクトを統合し、依存関係の共有や一括インストールを可能にする仕組みです。このリポジトリでは `app/*` と `packages/*` に含まれるプロジェクトが対象です。

```yaml
packages:
  - "app/*"       # app以下のすべてのディレクトリを対象
  - "packages/*"  # packages以下のすべてのディレクトリを対象
```

## コマンド一覧

Makefileを使用して、pnpmとMoonで定義したタスクを簡単に実行できるようにしています。

```makefile
install:
	@pnpm i  # 全パッケージの依存関係をインストール

web-dev:
	@pnpm moon run web:dev  # 開発サーバーの起動

web-build:
	@pnpm moon run web:build  # ビルド

web-lint:
	@pnpm moon run web:lint  # コードのリンティング

web-test:
	@pnpm moon run web:test  # テストの実行
```
