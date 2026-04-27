# 供给与需求 / Supply and Demand

>   我们知道，机构在市场中的一举一动会大幅影响市场走向。因此我们可以尝试在图表上寻找机构的足迹，跟随机构的进场点位获取利润。



## 订单块 / Order Block （OB）

Order Block (OB) 是指市场中机构资金或大资金玩家大规模下单的区域。这些区域通常标志着市场价格的关键转折点或延续点，因为机构投资者的资金量庞大，价格往往会在这些区域附近形成支撑或阻力。在图表中寻找 OB 的方式如下：

-   当价格创造出一个明显的 Swing Point 后，价格往往会进行反转并出现大幅度的 Displacement。
-   此时我们可以标注出与价格传递方向相反的最后一根K线。
-   此时这根 K 线所形成的区间就是我们想找的 Order Block。

![Order Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Order%20Block.png)

>   圖中標記了每一根 OB 和他們所對應的價格傳遞方向。簡單來說 OB 就是在價格移動後找出他的最後一根反向K線，那根K線就是我們要的 OB。



-   看跌的 OB 可以被视作供给（Supply）区间，看涨的 OB 可以被视作需求（Demand）区间。
-   OB 的画法有很多种，有些人只会将 OB 的实体部分（不包含引线） 视作 OB，有些人则是将反向的连续 K 线都视作一整块 OB。其实没有绝对的对错，重点还是看价格回到 OB 时的价格行为。
-   OB 的中线称为 Mean Thershold（MT）。

>   就我个人而言，多数时候我只会将实体部分视作订单块的有效区间，除非实体过小或者价格回到订单块引线区域时出现强力的反弹。 



订单块的形成原理如下：由于价格大幅移动时，我们可以视作聪明钱在此处介入市场。因此我们可以将价格大幅移动前的反向K线视作聪明钱进场前的操纵行为，目的是将价格移动到反向，取得一个相对便宜的筹码，再将主要部位介入市场。因此我们可以将 OB 视为聪明钱进场时留下的足迹，当价格回到 OB 时，聪明钱会试图在此处将未成交的订单补齐，再次促使价格移动。

>   价格尊重 OB 且再次往反方向移动的行为称为缓解（Mitigation）。



虽然 OB 很好找，看起来也很好用，但一个真正高效力的 OB 形成时应该满足以下三个条件：

-   完成 Liquidity Sweep：聪明钱进场前操纵价格的表现。
-   OB 形成后，出现大幅度的 Displacement，并且最好带有 FVG：聪明钱确实介入市场的表现。
-   OB 形成后的 Displacement 最好同时完成 MSS：聪明钱确实介入市场的表现。

![The Real Order Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/The%20Real%20Order%20Block.png)

>   高效力 OB 范例。

 

## 破坏块 / Breaker Block（BB）

当我们看到一个 OB 形成且成功出现MSS，但之后这个 OB 却不被尊重，且价格直接击穿 OB 时，此处的订单流向会发生反转（类似 FVG 和 IFVG的关系）。看涨的 OB 将在之后转为看跌 OB，看跌 OB 将在之后转为看涨 OB。



![Breaker Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Breaker%20Block.png)



破坏块的形成原理如下：

-   当一个订单块出现，价格也随即完成 MSS 时，如果这个 OB 没有被尊重，意味着此时这段价格传递实际上是一段**「假的价格传递」**，目的在于诱骗投机钱跟随趋势的延续进场以便聪明钱进行 Order Paring。
-   当价格破坏掉这个 OB 时，实际上此时出现的才是真正的价格传递方向。而当聪明钱引导价格走出真正的传递方向后，聪明钱需要**将前期诱骗投机钱所花费的成本收回**。
-   因此价格会在走出真正的方向后回到破坏块进行成本回收。
-   此时是对投机钱而言则是唯一的解套机会，我们也可以在聪明钱回收成本时进场。

 

## 缓解块 / Mitigation Block（MB）

缓解块的结构及原理和破坏块极为类似，其区别在于破坏块是由一个基础的订单块经由 MSS 后再被反向吞噬，而缓解块则是订单块形成后没有 MSS，而是在走出 Failure Swing 后直接被反向吞噬。

>   Failure Swing 指的是在顺势的波段中，未能成功走出 BOS 创造新高/低的行为，可以视作推动价格的力道正在衰减的一种表现。



![Breaker Block vs. Mitigation Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Breaker%20Block%20vs.%20Mitigation%20Block.png)



-   Mitigation Block 与 Breaker Block 的形成原理相同，其差异只在于 Mitigation Block 被破坏前没有做出 MSS。
-   破坏块能使用的地方，同样都可以用缓解块作替代（后面讲解进场模型时会提到）。但效力方面 Breaker Block 会优于 Mitigation Block。

 

## 推进块 / Propulsion Block（PB）

当价格回到订单块并且出现反转，随即生成一个新的订单块时，我们称之为推进块（Propulsion Block, PB）。推进块也被称为订单块中的订单块，当一个推进块出现时，可以理解成聪明钱在此处推动价格继续前进。



![Propulsion Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Propulsion%20Block.png)



-   当价格接触到推进块时，价格不应该突破推进块的 MT。
-   当价格接触到推进块时，价格应该迅速离开推进块。

 

## 拒绝块 / Rejection Block（RB）

当价格在接触到关键水平（Key Level）时，如果价格此时收出长针，则我们会称这个动作为拒绝（Rejection），表明此时价格离开此处的意图极为强烈。这根针的引线部位则被称为拒绝块（Rejection Block）。



![Rejection Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Rejection%20Block.png)

 

## 重夺塊 / Reclaimed Block

在前面我们提到过，订单块是聪明钱介入市场进行买入 / 卖出的痕迹。当市场结构出现反转时，曾经用来买入的订单块可能会被拿来卖出，曾经用来卖出的订单块可能会被拿来买入。此时。我们将这种订单块称为重夺块（Reclaimed Block）。



![Reclaimed Block](/tutorial/ict-smc/img/04.%20Supply%20and%20Demand/Reclaimed%20Block.png)

>   如果要更深入解释 Reclaimed Block 的原理，则必须提及 MMXM（造市商模型）的概念。因此这边如果有疑惑是正常的，关于 MMXM 的概念会在后续的篇幅中深入解释。

