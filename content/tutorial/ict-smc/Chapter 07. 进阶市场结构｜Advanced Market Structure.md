# 进阶市场结构 / Advanced Market Structure

这个章节的内容可能比较硬核，当中提到的所有概念都没有一个图表上的定式，但请务必努力尝试理解，这个章节的内容是我认为的 ICT/SMC 精髓所在。当你完全理解这个章节的内容，你会对市场结构和价格传递有非常深刻的理解。



## 由上至下的分析 / Top-Down Analysis

当我们专注于日内交易时，我们很常会将经历专注在十五分钟级别图表（M15）上，但如果我们此时想要获得更宏观的价格行为，仅仅关注于 M15 图表上肯定是不够的，我们会往更大级别的图表（例如四小时级别图表）上去做分析；而如果我们此时想解读更细节的价格行为，显然 M15 图表也无法满足我们，我们会去查看更小级别的图表（例如一分钟级别图表）。 ICT/SMC 对各种时间级别的图表关系做了定义，规范化了每一个时间级别所对应的高时框图表及低时框图表，以及在不同时框下你应该专注于做什么。

>   名词解释：
>
>   -   M15：這裡的 "M" 指的是 "Minute"，加上"15"所指代的就是十五分鐘級別圖表。我們在簡寫時間級別時會以 "字母＋數字"來指代該時間級別。例如"H4"指的就是四小時（Hour-4），"W1"指的就是週線圖（Week-1）。
>   -   LTF/MTF/LTF：低时框（Low Time Frame）／中时框（Middle Time Frame）／高时框（High Time Frame）



**Time Frame Alignment**

|                              |   HTF   | MTF  | LTF  |
| :--------------------------: | :-----: | :--: | :--: |
|  现货交易（Position Trade）  | Monthly |  W1  |  D1  |
|   波段交易（Swing Trade）    |   W1    |  D1  |  H4  |
|  日内交易（Intraday Trade）  |   D1    |  H4  | M15  |
| 剥头皮交易（Scalping Trade） |   H4    | M15  |  M1  |

-   **HTF**：你应该在此检视市场结构，透过 ERL/IRL 寻找你的 DOL，建立你的 Bias。
-   **MTF**：你应该在此寻找交易机会。
-   **LTF**：你应该在此细化你的进场。



>   其实所谓的高中低时框关系并没有定义的如此严格，只要你喜欢，你也可以在 H1 找交易机会并且在 M3 进场，但这必须建立在你对不同时框间的关系足够了解的前提下。如果你对时空级别没有一个清晰的认知，那就乖乖按上面的表格来，不要干出在月线图找Bias然后直接跳到一分线进场这种傻事。



## Power of Three (PO3)

### 结构

PO3 是 ICT/SMC 中十分核心的理念，本质上你依靠 ICT/SMC 作出的所有交易都是 PO3。如果你问我 ICT/SMC 中最重要的概念是什么，那我想我的答案就是 PO3。PO3 指的是价格的特定波动模式，主要分为以下三个阶段：



1.   **积累阶段（Accumulation Phase）**：市场进入一个偏向 Consolidation 的阶段，聪明钱开始在特定的价格（不一定是区间）附近积累筹码。此时的价格行为会偏向稳定，有时可能会创造出清晰的 Swing Point / Liquidity。
2.   **操纵阶段（Manipulation Phase）**：当Accumulation Phase 结束后，聪明钱会将市场往反方向操纵（假动作），掠夺掉Accumulation Phase 时建立的Swing Point / Liquidity，其概念与第一章提到的**流动性掠夺**相同。这个阶段的价格传递目的是为了诱骗投机钱追随行情从而完成 Order Paring。
3.   **派发阶段（Distribution Phase）**：当市场完成掠夺后，价格会迅速往真实的传递方向进行价格传递，此时通常会出现明确的 Liquidity Run / Expansion，最终将价格传递到 DOL。



![PO3](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/PO3.png)



-   任何存在流动性掠夺的地方本质上都算是 PO3，只要你的交易和流动性掠夺有关，那你就是在对一个 PO3 做交易（或者说你的交易就是在期望市场形成一个完整的PO3 ）。
-   你会期望在市场完成 Manipulation 后进场，并在 Distribution 完成时出场。
-   对一个level 做出流动性掠夺（假突破）后收回该level 之上的行为也称为**海龟汤（Turtle Soup）**，在流动性掠夺并收回后直接进场交易的行为称为**海龟汤进场（Turtle Soup Entry）**。
-   负责消化流动性的波段称为**操纵脚（Manipulation Leg）**。
-   **在交易 PO3 时，你会希望当前时框上的 Manipulation 进入了 HTF DOL；或者换个角度也可以理解成当前时框 Liquidity Sweep 进入 DOL 的行为在 LTF 是个 PO3（这是你在进场前最重要的 checkpoint，任何进场都需要搭配 DOL）。**



### 标准差 / Standard Deviation (STDV)

-   标准差（Standard Deviation, STDV）是 ICT 中一种常见的辅助进场工具。他不能单独使用，必须搭配前面提及的概念和元素。
-   STDV 也可以帮助你寻找你的出场目标位，当然，这一切都必须搭配 PO3、 DOL、PDA 和前面提及的各种概念。
-   **最后，切记不要在脱离其他概念的场景下使用 STDV，他只是一个辅助工具。**



在 Manipulation Leg 上使用 STDV 可以帮助我们找出 PO3 的目标价位。以下是使用 STDV 辅助交易 PO3 的示意图。

![STDV](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/STDV.png)

***Manipulation Leg***

-   **0**：Manipulation Leg 的起點。

-   **0.5**：Manipulation Leg 的 EQ 。

-   **1**：Manipulation Leg 的終點。

    一段合格的 Manipulation Leg 應該要消化你在 HTF 的 DOL。當你判斷 Manipulation 結束且演算法正要開始執行 Distribution 時，你要在此時去尋找 Manipulation Phase 創造的 PDA 嘗試進行 Turtle Soup。

    正如我們在講解 IPDA 時所提到的，當價格從 Consolidation 轉向 Expansion 時，你會希望在 Consolidation 的 EQ 作進場。因此在做 PO3 進場時最完美的情況會是在 Manipulation Leg 的 EQ 處尋找 PDA 進場。不過當 PO3 完成 Manipulation 時，通常價格會擴張的非常迅速，因此也不一定要強求自己在 0.5 進場。

***Distribution Phase***

-   **-1**：Manipulation Leg 的 1:1 。
-   **-2 ~ -2.5（Retracement Range）**：价格传递的**回撤区间**。当价格传递到这个区间时，有很大的概率会发生回撤，当价格传递不够强势时也有可能在此处直接反转。因此当你在交易 PO3 时，你应该考虑在此处寻找 PDA 进行部分止盈（或至少设置保护止损/套保）。如果价格没有在这个区间反转，那说明此时价格传递非常强势。

-   **-3.5 ~ -4（Reversal Range）**：价格传递的**反转区间**。当价格传递到这个区间时，有很大的概率会发生反转，你应该考虑在此处寻找 PDA 出场所有仓位。如果价格突破此处区间，那后面的涨/跌幅也跟你找到的 PO3 没关系了（有可能是更高时框上的 Distribution 导致价格传递方向没有在此处反转）。

***STDV 进场步骤***

1.   找出 Manipulation Leg，收回时做进场（turtle soup）或者找 Manipulation 创造的 PDA 进场，最好是進在 EQ，但沒有的話也不用強求。
2.   拉出 STDV，去 **-2 ~ -2.5** 的找 PDA 部分止盈 or 全出。
3.   如果价格有到 **-3.5 ~ -4** 的 PDA 那最好全出。

***交易实例***

![PO3 + STDV](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/PO3%20%2B%20STDV.png)



### OHLC & OLHC

实际上每一根 K 线在 LTF 都是一个完整的 PO3 结构（但不一定会提供你良好的交易机会），这也是所谓分型（Fractal）的概念。

-   当一根 K 线先向开盘价（Open）上方进行掠夺并创造高点（High），随后向下派发创造低点（Low），我们就可以称这个结构为 OHLC（Open/High/Low/Close）。
-   当一根 K 线先向开盘价（Open）下方进行掠夺并创造低点（Low），随后向上派发创造高点（High），我们就可以称这个结构为 OLHC (Open/Low/High/Close)。



![OHLC & OLHC](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/OHLC%20%26%20OLHC.png)



-   因此，你在交易 PO3 时实际上在 HTF 上看来你是在引线（Wick）处进场，如果你成功在 Distribution 完成时出场，那么你的出场位置会在另一端的引线处。
-   结合这个概念，你会发现所谓的 "Bias"，不只是单纯地认为接下来的波段要涨还是跌。**你的 Bias 实际上意味着你认为 HTF 上的下一根 K 线应该收成阴线（Bearish Candlestick）还是阳线（Bullish Candlestick）**；你的 DOL 实际上意味着你认为 HTF 上的下一根 K 线的引线应该会插到哪里。
-   这也是我们在本章节开头会先提及 Top-Down Analysis 的原因，正确的应用 HTF、LTF、分型等概念会让你的交易系统更全面。如果你在交易时不去思考 HTF 正在发生什么事，那你的视角很容易受限于当前级别结构，有可能在 HTF 上正在发生回撤，但你在 LTF 上却认为这是一段反转，从而错失 HTF 上后续的趋势延续。

### 日內PO3 / Daily PO3

从一开始我们就知道，ICT/SMC 本质上是在根据流动性进行交易（Liquidity Trade）。而一天当中，不同的交易时段实际上存在流动性差异。这也是 ICT/SMC 的应用场景普遍在日内交易以下的原因，因为我们可以透过一天当中的流动性变动进行获利。在日內交易中，我們會經歷三個交易時段，這三個交易時段構成了一整天的 PO3 。



***亚洲交易时段（Asia Session）***

-   **对应着一天当中的 Accumulaton。**
-   由香港、东京等地的机构主导。
-   时段：08:00 ~ 14:00 (UTC+8)
-   亚洲杀戮区（Asia Killzone）: 08:00 ~ 10:00(UTC+8)
-   通常我们不会想在 Asia Session 进行交易，但我们会关注这段时间建立的 Accumulation 区间（Asia Range），并关注区间后续被掠夺的情况。

***伦敦交易时段（London Session）***

-   **对应着一天当中的 Manipulation**。
-   由以伦敦为首的欧洲机构主导。
-   时段：
    -   夏令时：15:00 ~ 23:00 (UTC+8)。
    -   夏令时：16:00 ~ 24:00 (UTC+8)。
-   **伦敦开盘杀戮区（London Open Killzone）**：
    -   夏令时：15:00 ~ 18:00 (UTC+8)。
    -   冬令时：16:00 ~ 19:00 (UTC+8)。
-   **伦敦收盘杀戮区（London Close Killzone）**：
    -   夏令时：21:00 ~ 23:00 (UTC+8)。
    -   冬令时：21:00 ~ 23:00 (UTC+8)。
-   我们会在 London Session 关注 Asia Range 的掠夺情况。通常当时间从 Asia Session 进入 London Session 时，交易波动会开始变大，London Killzone 指的是开盘后的两个小时和收盘前的两个小时，此时交易量会达到顶峰，流动性充足，容易创造一天当中的最高点和最低点。
-   London Session 的市场会充斥着各种假动作（Judas Swing），根据我的经验，在伦敦盘进行的交易最好倾向保守。

***纽约交易时段（New York Killzone）***

-   **对应着一天当中的 Distribution**。
-   由以华尔街为首的美国机构主导。
-   时段：
    -   夏令时：21:30 ~ 04:00 (UTC+8)。
    -   夏令时：22:30 ~ 05:00 (UTC+8)。
-   **纽约杀戮区（New York Killzone）**：
    -   夏令时：21:30 ~ 23:30 (UTC+8)。
    -   冬令时：22:30 ~ 00:30 (UTC+8)。
-   华尔街掌握着世界上最庞大的资金，因此 New York Session 是一天当中交易量/流动性的顶峰。通常 New York Session 在经历完 London Manipulation 后，会推动价格进行单方面的传递，Distribution 完成当天价格的目标位，创造出当日的最高点或最低点。
-   New York Session 的任务是完成当日的 Distribution ，根据我的经验，如果你在 London Session 或 New York Kilzone拿到了一个绝佳的进场位置，可以尝试在此时完成你的最终止盈位。



关于日内 PO3 的内容有个概念就行了。London Session / New York Session 确实是一天当中最适合交易的时段，但在我看来加密货币的时区特性是非常混乱的，有时你也会看到 Asia Range 直接走 Expansion 然后接下来震荡一整天。这段内容最多就是让你在进场时可以取得更多时区方面的共振，借此增强你交易时的信心和完善交易思路。不要简单的认为你可以单凭这里的内容，每天都在伦敦盘找到最优进场点一路拿到纽约盘派发顶点。



## 造市商模型 / Market Maker Model（MMXM）

造市商模型（Market Maker Model）指的是造市商执行价格传递的基本运作结构，根据买入和卖出分为「造市商买入模型（Market Maker Buy Model, MMBM）」和「造市商卖出模型（Market Maker Sell Model, MMSM）」两种，MMBM 和 MMSM 我们又会将他们统称为 MMXM。



MMXM 基本围绕着以下两个重点描述价格传递：

-   ERL & IRL：价格只会在 ERL (Liquidity) 和 IRL (OB / FVG) 之间传递。
-   PO3：价格传递会经历 Accumulation / Manipulation / Distribution 三个阶段。

确保你完全理解这两点，如果还没理解那就回去复习，还是理解不了就直接来问我。



![MMXM](/tutorial/ict-smc/img/07.%20Advanced%20Market%20Structure/MMXM.jpg)



-   **Original Consolidation**：正如我们在 IPDA 所提到的，所有的价格传递都会从 Consolidation 状态开始。
-   **Low Risk Buy (LRB)、Low Risk Sell (LRS)**：在价格传递反转的初始阶段（取得高时框流动性后）提供的交易机会，在此处参与价格传递可以获得优秀的盈亏比。
-   **Accumulation**：PO3 中的积累吸筹阶段。
-   **Smart Money Reversal（聪明钱反转）**：低时框价格传递到高时框，取得高时框流动性后发生反转的行为。
-   **Distribution**：价格在做完 SMR 后向高时框的 ERL 传递时经历的第一次派发，此处主要会派发掉 SMR 后 LRS/LRB 的获利筹码。
-   **Re-Distribution（再派发）**：派发掉第一次 Distribution 的剩余筹码，并且将价格传送到 STDV 2~2.5 区间，形成完整的 PO3。



MMXM 没有固定的形式，附图的 MMXM 只是示意图。MMXM 描述的是 HTF IRL to ERL 在 LTF 上的表现形式，所有的 HTF IRL to ERL 都是 LTF MMXM。其核心概念在于**所有低时框的价格行为都服务于高时框，当低时框上的价格运行到高时框上的 PDA 时，所有低时框上的价格传递都将反转成为高时框的流动性**。
