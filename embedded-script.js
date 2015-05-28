/**
課題：
画面上の画像をすべて自分の好きな画像に置換するChrome拡張をつくろう！！！！！！

ヒント的なもの：
- jsのfor文はちょっときもいんだけど、オブジェクト自体でなくプロパティーがfor文で回る。だからdocument.images[i]で順に画像オブジェクトが取れる。
- image.src = "image_url.jpg";とかで画像をセットできる。
- console.log('hoge');でdeveloper consoleに吐き出せる。Dumperみたいな。
- 一行でできる
- 画像: http://jigokuno.com/とか好きなやつ。

答えあわせ:
https://gist.github.com/kmagai/fcfe966be0f79b3377e3
*/

for(var i in document.images) {
  // ここになにかがはいります
}
