## 谷歌浏览器插件开发

### 插件实现逻辑
	通过插件获取支付宝账单列表数据并存入数据库，如果数据库里已存在该数据则定时刷新页面获取最新数据。

### 使用前准备：
- 下载仓库到本地
- 安装插件
![导入插件](https://raw.githubusercontent.com/Sofar777/Alipay-plugin/master/server/public/images/1.png);
![安装成功](https://raw.githubusercontent.com/Sofar777/Alipay-plugin/master/server/public/images/2.png);
- 在 server/routes/index.js 内修改数据库配置
![配置修改](https://raw.githubusercontent.com/Sofar777/Alipay-plugin/master/server/public/images/3.png);

### 使用插件：
- 进入 server 启动服务
```
node ./bin/www
```
- 访问 [支付宝账单页面](https://consumeprod.alipay.com/record/standard.htm)，打开控制台查看实时数据
![使用页面截图](https://raw.githubusercontent.com/Sofar777/Alipay-plugin/master/server/public/images/4.png);
> Autor: [Mr.Sofar](http://sofar.top)
