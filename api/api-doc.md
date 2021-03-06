# API Document

## 從 Swagger 2.0 API 轉換到 OpenAPI 3.0

### OpenAPI 3.0 新增的部分
* 增加支援 multiple root URLs
* 增加支援 content type negotiation
* 擴充支援 JSON Schema 的 oneOf, anyOf, not 的語法
* 增加 callback 機制與 Webhooks 整合

### 線上工具協助轉換 2.0 到 3.0

* [Mermade Swagger 2.0 to OpenAPI 3.0.0 converter](https://openapi-converter.herokuapp.com/)
	* [取得 runscope-swagger-v2.json - GitHub](https://github.com/Runscope/runscope-api-examples/blob/master/schemas/runscope-swagger-v2.json)
	* [取得 runscope-swagger-v3.json - GitHub](https://github.com/Runscope/runscope-api-examples/blob/master/schemas/runscope-openapi-v3.json)

### 參考資源

* [A Visual Guide to What’s New in Swagger 3.0 - ReadMe.io](https://blog.readme.io/an-example-filled-guide-to-swagger-3-2/)
* [What to expect in v3 of the OpenAPI Spec - OpenAPI Initiative](https://www.openapis.org/specification/v3insights)
* [比較 2.0 跟 3.0 by Mike Ralphson - DEV Community](https://dev.to/mikeralphson/comparing-openapiswagger-20-and-300-rc1)
* [OpenAPI 3.0 官方手冊 - Github](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md)
* [基於 OpenAPI 的工具清單](https://github.com/OAI/OpenAPI-Specification/blob/master/IMPLEMENTATIONS.md)

### 其他工具

* CORS
	* [test-cors.org](http://www.test-cors.org/)
	* [enable cross-origin resource sharing](https://enable-cors.org/server.html)
* Middleware
	- [ ] [GitHub - exegesis-js/exegesis](https://github.com/exegesis-js/exegesis): Tools for implementing server-side OpenAPI 3.0.0

```
We broke down this guide into the following topics:

Writing Spec / Design
Documentation
Generators
Servers
Clients
Testing & Monitoring
Gateways / Management
Public Specifications
Other Resources
```