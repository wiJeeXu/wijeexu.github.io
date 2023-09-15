## create-vue

npm create vue@latest

在`create-vue` package.json

```json
{
  "bin": {
    "create-vue": "outfile.cjs"
  }
}
```

`npm create vue` 实际是`npm init vue` 等同于 `npx create-vue`

- 如果不存在 create-vue 下载并执行 create-vue
- 如果全局存在 直接执行本地 create-vue

outfile.cjs 文件需要设置 `#!/usr/bin/env node`

## 发布脚手架

- npm
- github devops

### npm

```bin
npm login
npm publish
```

### github devops

npm 生成 token
github 仓库配置 token

```yml
name: Publish Package to npmjs

on:
  push:
    branches: [main]
    # paths:
    #   - 'src/'
    tags:
      - "**"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      # Setup .npmrc file to publish to npm
      - uses: actions/setup-node@v3
        with:
          node-version: "16.x"
          registry-url: "https://registry.npmjs.org"
      # - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
