# 失衡 / Imbalance

>   我们提到过价格只会以流动性和失衡区作为目标进行位移，上一个章节我们详细解释了流动性，这里我们要解释失衡的概念。



-   当价格出现大幅度的位移（Displacement）时，我们可以认为此时聪明钱挟带大量资金介入市场。
-   大量资金进场时，由于价格出现大幅度的位移，会导致一部分限价挂单无法有效成交（Inefficiency），导致特定区域出现流动性流动性失衡（Inbalance）。
-   当流动性出现失衡时，聪明钱会引导价格回到失衡区域将遗留的订单成交（Rebalance）。
-   当失衡区的流动性被 Rebalance 后，价格将延续原有的传递方向继续运行。



这段叙述充分解释了 ICT/SMC 中「价格只以流动性和失衡区作为目标进行位移」的观念。

如果聪明钱想要获得利润，那么只有两个动作要做：

1.  掠夺投机钱的止损订单。
2.  成交自己未能成交的订单。



## 公允价值缺口 / Fair Value Gap（FVG）

当三根连续的K线出现时，如果第一根K线和第三根K线的引线没有完全重合，此时我们称中间区域为**公允价值缺口（Fair Value Gap, FVG）**，这表明了价格在这个区间内存在失衡，演算法会在未来的某一个时刻引导价格回到此处进行 Rebalance。



>   补充：我们在图表上会以（＋）代表看涨，（－）代表看跌。
>
>   别名：
>
>   -   Imbalance (IMB)：失衡
>   -   Inefficiency：低效
>   -   Buyside Imbalance Sellside Inefficiency (BISI)：买方失衡卖方低效，即 +FVG。
>   -   Sellside Imbalance Buyside inefficiency (SIBI)：卖方失衡买方低效，即 -FVG。
>   -   Liquidity Void (LV)：流动性缺失。
>   -   Liquidity Gap (LG)：流动性缺口。



![Fair Value Gap](/tutorial/ict-smc/img/03.%20Imbalance/Fair%20Value%20Gap.png)

>   FVG 的中线称为 Consequent Encroachment（CE）。

## 反向公允价值缺口 / Inversion Fair Value Gap（IFVG）

当价格经过 FVG 时直接进行吞噬，不对这个 FVG 进行 Rebalance。则此处的订单流向会发生反转，此时我们称这个被吞噬的 FVG 为 

**反向公允价值缺口（Inversion Fair Value Gap）**。一般来说 IFVG 的效力会比 FVG 更强。



![Inversion Fair Value Gap](/tutorial/ict-smc/img/03.%20Imbalance/Inversion%20Fair%20Value%20Gap.png)

## 平衡价格区间 / Balance Price Range（BPR）

当两个反向的 FVG 重叠时，我们将重叠区域称作平衡价格区间（Balance Price Range, BPR）。价格在进入 BPR 时应该快速做出反应并且出现强烈的 Displacement。

![Balance Price Range](/tutorial/ict-smc/img/03.%20Imbalance/Balance%20Price%20Range.png)



## Institutional Order Flow Entry Drill (IOFED)

当行情极度强势时，可能会存在 FVG 不被有效填补的情况，我们称为 IOFED。IOFED 的出现必须满足以下两个条件：

-   行情出现大幅度 Displacement 并形成 FVG。
-   价格快速回填 FVG，且**回填幅度不超过 FVG 的 50%**。



当这种价格行为出现时，我们称其为 IOFED，意味着此时的价格传递**极度强势**。

>   在某些比较严格的定义中，会认为必须在 FVG 形成后的下一根K线立即 Rebalance 并收针才能被称为 IOFED。



![Institutional Order Flow Entry Drill](/tutorial/ict-smc/img/03.%20Imbalance/Institutional%20Order%20Flow%20Entry%20Drill.png)



## 新周开盘缺口 / New Week Open Gap（NWOG）

在股市、期货交易市场中，周末一般是处于休市状态的，因此周末的图表会是静止的。所以一但周末出现价格波动，图表会无法及时显示，造成周一的开盘价和前一周周五的收盘价出现落差。此时这个落差（也称跳空）我们称之为新周开盘缺口（New Week Open Gap）。

当 NWOG 出现时，此处的挂单同样处于未成交状态，因此也会存在失衡的情况。未来价格会倾向对 NWOG 进行 Rebalance。

由于加密货币市场是 24/7 处于开盘状态的，这个现象在加密货币市场比较不常出现。但我们仍然可以透过观察 CME 期货缺口得到类似的效果。

>   -   CME 期货图表可以透过在 TradingView 搜索 BTC1!（比特币期货）、ETH1!（以太币期货）的方式查询。
>   -   类似的概念还有新日开盘缺口（New Day Open Gap, NDOG），但在加密货币市场中基本上用不到。

![New Week Open Gap](/tutorial/ict-smc/img/03.%20Imbalance/New%20Week%20Open%20Gap.png)



