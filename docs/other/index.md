## 内网穿透

ngrok 和 frp

- ngrok 提供域名,免费提供一个域名,一个域名指定一个端口,子域名需要付费
- frp 开源,但是服务器费用需要自己提供

ngrok

```sh
ngrok http 端口
```

```
ngrok http --domain=域名 端口
```

虽然 ngrok 一个域名指定一个端口,子域名需要付费,但是可以通过 nginx 转发
比如 域名/a 域名/b 可以通过 解析 a、b 去实现
