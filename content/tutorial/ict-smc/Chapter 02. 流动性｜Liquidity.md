# 流动性 / Liquidity

>   在介绍 ICT / SMC 时，我们提到过流动性。价格只会以流动性和失衡区作为目标进行位移，这一章节我们要来深入探讨流动性。



机构资金在进场时需要进行大量的订单匹配（Order Pairing），所以并不是图表上的所有价格都可以作为机构进场的成本价。机构在进场时需要依靠大量的流动性（Liquidity），以下几个位置是 Liquidity 可能存在的地方。

-   波段高点（Swing High） / 波段低点（Swing Low）
-   等高点（Equal High, EQH）/ 等低点（Equal Low, EQL）



## 辨识流动性

### 买方流动性 / Buyside Liquidity (BSL)

-   当一个明确的高点被突破时，激进的投机资金会认为此时价格即将离开区间，并展开大幅上涨。
-   所以当价格发生突破时，会出现大量的买入订单，且前期的空单止损会被触发（买入平仓），提供 Smart Money 进行 Order Paring 所需的 Liquidity。
-   Smart Money 会在此处和投机钱交换筹码，利用投机钱的买入订单进行卖出，完成空单资金进场。
-   此时，我们将投机钱的追多买入订单称为***买方流动性（Buyside Liquidity, BSL）***。



### 卖方流动性 / Sellside Liquidity (SSL)

-   当一个明确的低点被跌破时，激进的投机资金会认为此时价格即将离开区间，并展开大幅下跌。
-   所以当价格发生跌破时，会出现大量的买入订单，且前期的多单止损会被触发（卖出平仓），提供 Smart Money 进行 Order Paring 所需的 Liquidity。
-   Smart Money 会在此处和投机钱交换筹码，利用投机钱的卖出订单进行买入，完成多单资金进场。
-   此时，我们将投机钱的追空买入订单称为***卖方流动性（Sellside Liquidity, SSL）***。



### 波段高 / 低点（Swing High / Swing Low）

-   Swing High 指的是图表中明确的高点。
-   此处通常是投机钱放置止损的位置，会存在 Liquidity。
-   当一个明确的 Swing High 被突破时，我们可以关注此时价格是否尊重这个高点的 BSL。
-   当一个明确的 Swing Low 被跌破时，我们可以关注此时价格是否尊重这个低点的 SSL。
-   ***请勿在价格发生突破 / 跌破时直接追，因为你不能确定他是否会被尊重。***



### 等高点 / 等低点（Equal High, EQH / Equal Low, EQL）

-   当两个以上 Swing High / Swing Low 重合时，我们可以称他为 EQH / EQL。
-   和 Swing High / Swing Low 一样，会存在 BSL / SSL。
-   和 Swing High / Swing Low 的区别在于这部分的流动性是**被验证过的**，效力会更强一点。
-   ***请勿在价格发生突破 / 跌破时直接追，因为你不能确定他是否会被尊重。***



![Equal High and Equal Low](/tutorial/ict-smc/img/02.%20Liquidity/Equal%20High%20and%20Equal%20Low.png)



## 流动性清扫 / Liquidity Sweep

>   别名：
>
>   -   Stop Loss Hunt (SH / SLH)：止损猎杀。
>   -   Liquidity Grab (Grab)：流动性抢夺。
>   -   Liquidity Raid (Raid)：流动性袭击。
>   -   Swing Failure Pattern (SFP)：失败摆动型态。
>   -   Fu：我也不知道这是啥，反正意思都一样。



-   Liquidity Sweep 指的是价格对 Liquidity 进行突破后快速收回的行为。
-   当价格进行突破后，聪明钱会和投机钱完成 Order Pairing，双方筹码进行交换，随即反转行情。
-   Liquidity Sweep 是每一段多头 or 空头结构的**起点**。



![Liquidity Sweep](/tutorial/ict-smc/img/02.%20Liquidity/Liquidity%20Sweep.png)



## 流动性运行与价格传递 / Liquidity Run and Price Delivery

当价格掠夺反向流动性后，会开始进行价格传递。这个行为我们称之为**流动性运行（Liquidity Run）**。



-   **低阻力流动性运行 / Low Resistance Liquidity Run (LRLR)**

当价格在传递的过程中十分顺畅，遇到反向流动性时没有过多的停留时（阻力低），我们称这种现象为**低阻力流动性运行 / Low Resistance Liquidity Run (LRLR)**。



-    **高阻力流动性运行 / High Resistance Liquidity Run (HRLR)**

当价格在传递的过程中不太顺畅，多数时间处在震荡状态（阻力強），我们称这种现象为**高阻力流动性运行 / High Resistance Liquidity Run (HRLR)**，这表明此时的价格传递并不是很强势。

>   当我们看见 HRLR 时，我们可以预期价格在反转后出现强势的单方向价格传递，将价格在 HRLR 产生的阻力轻松突破并走出LRLR。



![HRLR and LRLR](/tutorial/ict-smc/img/02.%20Liquidity/HRLR%20and%20LRLR.png)



### 传递状态改变 / Change in State of Delivery（CISD）

当价格完成 Liquidity Sweep 之后，如果消化流动性的连续K线之收盘价被吞噬，则此时我们可以认为 Price Delivery 的方向即将发生了改变，这个行为我们称为 Change in State of Delivery（CISD）。与 MSS 类似，CISD 也是可以用来判断反转的价格行为。



![Change in State of Delivery](/tutorial/ict-smc/img/02.%20Liquidity/Change%20in%20State%20of%20Delivery.png) 
