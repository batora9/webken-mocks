# Go言語を使ったバックエンド入門

## 開発環境の構築
`$ go version`
Goがインストールされているか確認する。

`$ go mod init <module-name>`
`<module-name>`は別に何を書いてもいいが、なるべくプロジェクトのURLにしておいたほうがいい

`main.go`を作成して以下のコードを書く
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello World")
}

```

`$ go run main.go`
`main.go`を実行する