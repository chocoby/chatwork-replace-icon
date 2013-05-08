# chatwork-replace-icon.user.js

ChatWork のユーザーアイコンを、指定した画像で置き換える UserScript です。

複数ユーザーのアイコンを置き換えたい場合は、 [chatwork-replace-icons-extension](https://github.com/chocoby/chatwork-replace-icons-extension) を使用することをお勧めします。

## インストール

1. [chatwork-replace-icon.user.js](https://github.com/chocoby/chatwork-replace-icon/raw/master/chatwork-replace-icon.user.js) を右クリックして「リンク先を別名で保存」で適当な場所に保存します。

2. Vim やメモ帳などのテキストエディタで保存した `chatwork-replace-icon.user.js` を開き、スクリプト上部に記述されている、以下の項目を設定します。

    ```js
    // EDIT BEGIN
    var userId = ""; // ex. "XXXXXX" (data-aid="123456")
    var newIconUrl = ""; // ex. "http://example.com/path/to/image.jpg"
    // EDIT END
    ```

    **userId**: 置換したいユーザー ID
      アイコンの `img` タグに `data-aid` という属性がありますので、その中の値(ex. `123456`) を指定してください。
      Google Chrome であれば、アイコンを右クリックして「要素を検証」で見つけることができます。

    **newIconUrl**: 新しいアイコンの URL
      新しく表示したいアイコンの URL を指定します。アイコンは localStorage にキャッシュされます。
      **注意**: アイコンのサイズは 20KB 以内のものを指定してください。

3. Google Chrome で「ツール」-「拡張機能」を開き、編集した `chatwork-replace-icon.user.js` をウィンドウ内にドラッグアンドドロップします。

## アップデート

「インストール」と同じ手順でアップデートを行なってください。

## バージョンごとの互換性

ChatWork の仕様変更による対応で、バージョンごとの互換性が失われる場合があります。
バージョンごとの対応を以下の表に記します。お使いの ChatWork に対応したバージョンを使用してください。

|日付|バージョン|変更内容|
|----|----------|--------|
|最新版|master 、またはそれ以降のタグ||
|2013/05/08|[v0.0.3](https://github.com/chocoby/chatwork-replace-icon/tree/v0.0.3)|全体的に変更された|
|～2013/05/07|[v0.0.2](https://github.com/chocoby/chatwork-replace-icon/tree/v0.0.2)||

## 注意事項

* Google Chrome の最新バージョンにて確認を行なっています。
* ChatWork 側の変更により、動作しなくなる可能性があります。
* アイコンを取得するためのクロスドメイン通信に [chatwork-allow-origin-proxy](https://github.com/chocoby/chatwork-allow-origin-proxy) を使用しています。
  サービスの停止により、アイコンが取得できなくなる可能性があります。
* ご利用は自己責任でお願いします。

## 変更履歴

### [v0.0.3](https://github.com/chocoby/chatwork-replace-icon/tree/v0.0.3) (2013/05/08)

* ChatWork の仕様変更に対応

### [v0.0.2](https://github.com/chocoby/chatwork-replace-icon/tree/v0.0.2) (2013/04/11)

* クロスドメイン通信に自前の API を使用するようにした
* アイコンキャッシュ処理の変更
* アイコン変換処理の最適化

### [v0.0.1](https://github.com/chocoby/chatwork-replace-icon/tree/v0.0.1) (2013/04/06)

* 初期リリース

## GitHub

https://github.com/chocoby/chatwork-replace-icon
