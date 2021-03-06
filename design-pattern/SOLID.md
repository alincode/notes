# SOLID

### SRP:Single Responsibility Principle (單一職責原則)

定義：一個模組應該只對為一個角色負責
白話：把因不同因素產生的變化分別開來

症狀
  * 意外重複
  * 合併

角色
* CFO
* COO
* CTO

### OCP:Open-Closed Principle (開放封閉原則)

定義：一個軟體製品應該對於擴展是開放的，但對於修改是封閉的。
白話：組織原始碼的依賴關係，要確保對於其中一個職責的變更，不會導致另一個職責的變更，以外，新的組織應該確保行為可以被擴展而不需要經過修改。

### LSP:Liskov Responsibility Principle (替換原則)

### ISP:Interface Segregation Principle (介面隔離原則)

如果你所依賴的模組包含了超過你所需要的東西，那就是有害的。

### DIP:Dependency Inversion Principle (依賴反向原則)

* 不要參考易變的具體類別
* 不要從易變的具體類別衍生
* 不要改寫具體函式
* 永遠不要提到任何具體和易變的名稱
