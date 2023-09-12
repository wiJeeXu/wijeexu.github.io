## 基础用法

```html
<custom-date-picker v-model="dialogShow" @onSure="onSure" /> }
```

```js
export default {
  data() {
    return {
      dialogShow: false,
    };
  },
  methods: {
    onSure({ startDate, endDate }) {
      // YYYY-MM-DD
    },
  },
};
```

## props

| 参数    | 说明             | 类型    | 默认值                            |
| ------- | ---------------- | ------- | --------------------------------- |
| v-model | 是否显示组件弹框 | boolean | -                                 |
| maxDate | 最大日期         | string  | 今天(YYYY-MM-DD),比如`2023-09-12` |

## events

| 事件名 | 说明         | 回掉参数                                |
| ------ | ------------ | --------------------------------------- |
| onSure | 确认日期回调 | `{ startDate: string, endDate: string}` |
