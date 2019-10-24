---
created_at: "2019-10-24 22:10:00"
updated_at: "2019-10-24 22:10:00"
title: "Nuxt.jsでfirebaseを使えるように設定する"
tags : [ "Nuxt.js", "Firebase" ]
category: programming
---

Nuxt.jsでfirebaseを使えるように設定する。

# 諸々インストール

firebase

```
npm install --save firebase
```


firebase CLI

```
npm install --save firebase-tools
```

環境変数使用ツール

```
npm install --save @nuxtjs/dotenv
```


#  firebaseにログイン

```
firebase login
```


# firebaseの初期化
Nuxtプロジェクトのトップで以下実行

```
firebase init
```

色々聞かれるので選択していく


# firebaseへの接続情報を.envで管理する

[参考ページ](https://chaika.hatenablog.com/entry/2019/01/21/113000)

上記の参考ページに従っていけばできる


## 注意点
.env ファイルはソースディレクトリに作成する！
