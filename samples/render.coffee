
# pahntomjs で web ページのスクリーンショットを撮る。

page = require('webpage').create()

url = 'http://qiita.com/search?utf8=%E2%9C%93&q=katoy'
output = 'render.png'
page.open url, (status) ->
  console.log(status)
  page.render(output)
  phantom.exit()
