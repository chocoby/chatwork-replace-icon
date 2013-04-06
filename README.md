chatwork-replace-icon.user.js
=============================

ChatWork のユーザーアイコンを、指定した画像で置き換える UserScript です。
Google Chrome で確認を行なっています。

GitHub: https://github.com/chocoby/chatwork-replace-icon

インストール
----------

* [chatwork-replace-icon.user.js](https://github.com/chocoby/chatwork-replace-icon/raw/master/chatwork-replace-icon.user.js) を右クリックして「リンク先を別名で保存」で適当な場所に保存してください。

* vim などのテキストエディタで chatwork-replace-icon.user.js を開き、スクリプト上部に記述されている、以下の箇所を設定してください。

  * `iconClass`: 置換したいアイコンのクラス名  
    アイコンの `img` タグに `cw_a123456` といったクラスが振られていますので、そのクラス名を指定してください。

  * `newIconUrl`: 新しいアイコンの URL  
     新しく表示したいアイコンの URL を指定してください。アイコンは localStorage にキャッシュされます。

  * `newIconImageType`: 新しいアイコンの content type  
    `image/jpeg` や `image/png` など、適当に設定してください。

* 「ツール」-「拡張機能」を開き、 chatwork-replace-icon.user.js をドラッグアンドドロップします。

その他
------

* ChatWork 側の変更により、正しく動作しなくなる可能性があります。
* 画像を取得するためのクロスドメイン通信に [allow-any-origin.appspot.com](http://allow-any-origin.appspot.com/) を使用させて頂いています。サービスの停止により、画像が取得できなくなる可能性があります。
* issue、pull request 歓迎です。
* ご利用は自己責任でお願いします。

ライセンス
---------

MIT: http://chocoby.mit-license.org/