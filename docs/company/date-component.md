## 基础用法

```html
<custom-date-picker
  v-model="dialogShow"
  @onSure="onSure"
  ref="dateComponentInstance"
/>
<button @click="last">上一天</button>
<button @click="next">下一天</button>
```

```js
export default {
  data() {
    return {
      dialogShow: false,
    };
  },
  methods: {
    onSure({ startDate, endDate, type, desc }) {
      // YYYY-MM-DD
      // type 1 天  2 周  3 月  4 年 5自定义
      // desc 今日 昨日 本周 本月 或者空字符串
    },
    last() {
     const  { startDate, endDate, type, desc } =  this.$refs.dateComponentInstance.prevRange('2023-09-13', '2023-09-13', 1)
     // 2023-09-12 2023-09-12 1  '昨日'
     console.log(startDate, endDate, type, desc)
    }
    next() {
      const  { startDate, endDate, type, desc } = this.$refs.dateComponentInstance.nextRange('2023-09-13', '2023-09-13', 1)
       // 2023-09-14 2023-09-14 1  ''
      console.log(startDate, endDate, type, desc)
    }
  },
};
```

## props

| 参数    | 说明             | 类型    | 默认值                            |
| ------- | ---------------- | ------- | --------------------------------- |
| v-model | 是否显示组件弹框 | boolean | -                                 |
| maxDate | 最大日期         | string  | 今天(YYYY-MM-DD),比如`2023-09-12` |

## events

| 事件名 | 说明         | 回掉参数                                                            |
| ------ | ------------ | ------------------------------------------------------------------- |
| onSure | 确认日期回调 | `{ startDate: string, endDate: string, type: number, desc: string}` |

## 方法

通过 ref 获取组件实例方法

| 方法名    | 说明                     | 参数                                             | 返回值                                                              |
| --------- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------- |
| prevRange | 获取上一(天，周，月，年) | startDate: string, endDate: string, type: number | `{ startDate: string, endDate: string, type: number, desc: string}` |
| nextRange | 获取下一(天，周，月，年) | startDate: string, endDate: string, type: number | `{ startDate: string, endDate: string, type: number, desc: string}` |
