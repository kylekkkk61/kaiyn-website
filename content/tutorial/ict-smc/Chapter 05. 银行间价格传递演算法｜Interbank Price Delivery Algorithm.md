# 银行间价格传递演算法 / IPDA

## 前言

>   前面的章节所讲解的都是 ICT/SMC 中最基础的元素。从这个章节开始，我们将进入更核心、更着重于观念上的理论。这些理论描述的部分内容可能很难在图表上有一个标准化的形式，但对你的读图思维框架会起到非常重要的影响。如果你还没将前面的内容搞懂，请务必先好好复习，循序渐进地学习。



价格的移动不依赖于支撑与阻力，所谓支撑与阻力只是市场的假象。市场中价格的所有行为都由一只看不见的手在背后进行操纵，而这只「手」被称为 ***银行间价格传递算法（Interbank Price Delivery Algorithm, IPDA）***。



价格在传递时存在四种状态，分别为：

-   **Expansion（扩张）**
-   **Retracement（回撤）**
-   **Consolidation（整理）**
-   **Reversal（反转）**

价格在传递时有且仅有这四种状态，且会在这四种状态间转移，每种状态有其各自的特征，且状态转移时通常伴随着对关键价位或区间的接触。



![IPDA State](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/IPDA%20State.png)

>   附图为四种状态的转换关系。

 

## Consolidation / 整理

-   **Consolidation 是指价格在明确的交易区间（通道、箱体、三角等）内波动。**
-   **表明价格没有大幅上涨或下跌的意愿。**
-   **所有的行情都从震荡开启。**
-   **关注震荡区间的 EQ。**
-   **在价格抵达 Discount 或者 SSL 被掠夺时寻找多单机会，并在价格抵达 Premium 或者 BSL被掠夺时寻找空单机会。**



![Consolidation](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Consolidation.png)

>   附图为标准的 Consolidation。



-   我们可以在 Premium（EQ上方）或 BSL 被掠夺时寻找空单机会，在 Discount（EQ下方）或 SSL 被掠夺时寻找多单机会，跟随做市商 Accumulation 的行为进行获利。

-   同时也可以发现 Consolidation range 被跌破时价格出现了大幅度的 Displacement，可以视为一个典型的 Expansion。

 

## Expansion / 扩张

-   **Expansion 指的是价格快速移动。**
-   **当价格出现扩张时，代表做市商期望将该标的重新进行定价。**
-   **Expansion 是 Price Delivery 最主要的部分。**
-   **我们会期望 MSS 和 FVG 伴随 Expansion 一同出现。**
-   **留意 EQ 或 EQ 附近的 OB 做进场。**



![Consolidation](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Expansion.png)

>   附图和前一张图是同一张，为标准的 Consolidation 接续 Expansion。



-   当价格接触到 EQ ，或者尊重 EQ 附近的 OB 时，我们可以利用 EQ 附近的 OB 进场
-   参与 Expansion 实际上是跟随做市商进行 Price Delivery 的行为进行获利。

 

## Retracement / 回撤

-   **Retracement 指是价格回到最近创建的价格区间内。**
-   **当价格回到近期价格区间时，表明做市商期望将价格重新定价至无法有效交易的公允价值缺口（FVG）。**
-   **关注 FVG 进行进场。**
-   **当价格回填 FVG 时，我们可以利用行情对 FVG 的填补程度判断当前行情的强势程度。**



![Retracement](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Retracement.png)

>   附图和前两张图是同一张，是一个典型的 Retracement。这里可以看到价格在经历扩张后展开低位震荡，随即回撤至 FVG。



-   我们可以在尊重 FVG 时，利用 FVG 进场。
-   在 Retracement 结束时参与市场实际上是跟随做市商延续 Price Delivery 的行为进行获利。

 

## Reversal / 反转

-   **反转是指当前趋势结束并且开始往反方向移动。**
-   **当价格出现反转时，表明做市商已经取得足够的流动性，期望将价格往反方向移动寻求新的套利空间。**
-   **关注 HTF POI 和 MSS/CISD。**



![image-20240803055020917](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/Reversal.png)

>   附图和前三张图是同一张，为标准的 Reversal 结构。价格在掠夺低点的 BSL （同时触及日线图上的 Rejection）后向上进行拉升出现 MSS，后续完全否定前方的下跌趋势，展开新一轮的上涨。



-   我们可以利用结构的变化判断 Reversal 是否发生。
-   在确认 Reversal 出现时参与市场实际上是在跟随期望 Price Delivery 的价格反转。
-   不要在价格未抵达 HTF POI 时赌行情的反转。

 

## 回顾



![image-20240803055020917](/tutorial/ict-smc/img/05.%20Interbank%20Price%20Delivery%20Algorithm/IPDA-example.png)

这里我们回顾一下整张图，观察 IPDA 在进行 Price Delivery 时的细节。

1.   首先价格在区间开启 Consolidation，在区间内来回进行波动进行吸筹。
2.   价格在最后一次触及 EQ 处的 OB 后开始 Expansion。
3.   随即再一次开始 Consolidation。
4.   触及 EQ 后开始 Retracement。
5.   Retracement 至 Expansion 时产生的 FVG，随即再次下跌并进入再一次的 Consolidation。
6.   最后将掠夺 H4 流动性并将价格传递至日线 POI。
7.   进行 Reversal并产生 MSS。
8.   开启新一轮传递。

