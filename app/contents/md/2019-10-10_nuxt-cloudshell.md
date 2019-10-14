---
created_at: "2019-10-10 23:10:00"
updated_at: "2019-10-10 23:10:00"
title: "cloud shell でのNuxt.jsの環境を作る"
tags : [ "Nuxt.js", "GCP" ]
category: programming
---
デフォルトではGCPのcloud shell環境にNuxt.js環境がないみたいなので、
cloud shellのDockerfileに必要事項追記し、プロジェクト作成する

# cloud shellの環境の編集方法
[この記事](https://qiita.com/ptpt-free/items/92e8e8c446183ca314d2)を参照

# Dockerfileへの追記
以下をcloud shell環境用のDockerfileに追加し、
コミット、SourceRepositoriesへpush

```
RUN npm install -g vue-cli
```

# プロジェクトの作成
任意のディレクトリで以下実行

```
$ vue init nuxt/starter
```

以下のように色々聞かれるので設定していくと必要なファイル類一式が作成される

```
? Generate project in current directory? 
? Project name 
? Project description
? Author 

   vue-cli · Generated "test".
```

# 関連パッケージのインストール
プロジェクトディレクトリで以下実行

```
npm install
```

# ローカル開発機の立ち上げ
プロジェクトディレクトリで以下実行

```
npm run dev
```

ポート3000でサーバが立ち上がる

