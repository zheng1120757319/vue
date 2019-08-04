# 2019.5.8第一天

## 项目初始化

```
清空hello world模板
安装
    fastclick
	vue-awesome-swiper@2.6.7
	sass-loader node-sass
	mint-ui
```

## 解决手机端延迟

```
//fastclick解决手机端300ms的延迟  在main.js使用
import fastClick from "fastclick"
fastClick.attach(document.body)
```

