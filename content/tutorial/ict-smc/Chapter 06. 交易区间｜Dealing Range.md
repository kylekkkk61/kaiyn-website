# 交易区间 / Dealing Range

只要你能找到一个 Swing High 和 Swing Low，那这两个点之间的价格就能被称为一个「区间」。这对 Swing High 和 Swing Low 可以是任意两个点，当然，他们最好是「有意义的」，特别是出现 MSS 后的 Swing Point。以下是几个我们在交易中时常用到的 Swing Point：



-   上周高点 (Previous Week High, PWH)、上周低点（Previous Week Low）
-   昨日高点 (Previous Day High, PDH)、昨日低点 (Previous Day Low, PDL)
-   周一高点 (Monday High)、周一低点 (Monday Low)
-   亚洲时段高点 (Asia High)、亚洲时段低点 (Asia Low)

>   其实开盘价也可以作为交易 Setup 的一部分，这点会在之后 PO3 和 Time and Price 两个章节详细说明。



除了以上提到的几个 Swing Point，任何你找得到的波段高低点都可以作为你的区间 Setup。还是那句话，只要你知道自己在干嘛，你想怎么做都可以。



![Range](/tutorial/ict-smc/img/06.%20Range/Range.png)



##  溢价折价区阵列矩阵 / Premium and Discount Array Matrix（PDA Matrix）

>   这个名字看上去挺唬人，但其实就是整合一下前面的东西，看完你就能理解了。



### 溢价折价区 / Premium and Discount (P/D)

 当我们定义好 Range 后，我们可以使用斐波那契测量出区间中线（0.5），如果你有认真观看我们前面的教程，你会知道区间的 0.5 那条线我们称作 Equilibrium (EQ)。在 ICT/SMC 中，我们会将区间 EQ 以上的部分视作溢价区（Premium），区间 EQ 以下称作折价区（Discount）。

当价格运行至 Premium 时，我们可以认定价格当前处于超买状态，此时我们会倾向于寻找做空（short）机会；而当价格运行至 Discount 时，可以认定价格当前处于超买状态，此时我们会倾向于寻找做多（long）机会。 

![Premium and Discount](/tutorial/ict-smc/img/06.%20Range/Premium%20and%20Discount.png)

此时，我们可以搭配前面学到的所有 FVG、OB、Liquidity，将他们和 Premium/Discount 整合在一起，会得到如下矩阵/阵列：

![Premium and Discount](/tutorial/ict-smc/img/06.%20Range/PDA%20Matrix.png)

>   我们会把 OB、FVG、Liquidity 这些可能提供反向力道的元素统称为 PDA。

这张图不需要记，你只需要知道当你拉出一个区间时，区间内会存在大量 PDA 由上到下排列，拥有这个概念就足够了。PDA的概念十分重要，在接下来的章节中会被反覆提起。



## 内部流动性 & 外部流动性 / Internal Range Liquidity (IRL) & External Range Liquidity (ERL)

-   **外部流动性 / External Range Liquidity (ERL)**：指旧的高点或低点（old high、old low），可以简单理解成 Liquidity。
-   **内部流动性 / Internal Range Liquidity (IRL)**：指价格传递时所创造的各种指 OB、FVG。

-   **价格只会在 ERL 和 IRL 之间移动**，当价格在执行单方向传递时，会在拿到 ERL 后执行 Retracement，直到 IRL 被 rebalance/mitigate，这个行为称为 **ERL to IRL**；随后价格会立即反转並继续向原方向传递，尝试拿掉 ERL，这个行为称为 **IRL to ERL**。

-   **Draw on Liquidity (DOL)**：

    -   因此，当价格在拿掉 ERL 之后，你会期望价格往回拿掉 IRL，这时你会关注图表上的某个 IRL，你会认为该 IRL 存在对价格的吸引力，你期望价格回到那个 IRL；同理，当价格填补完 IRL 之后，你会期望某个 ERL 存在对价格的吸引力，你期望价格传递过去拿掉那个 ERL 延续价格传递。

    -   此时，那个对价格存在吸引力的 PDA 就会是你认为的 DOL，DOL 应该是你在交易时最关注的元素，因为理论上价格对你的 DOL 的反应会直接影响你的所有决策。

    >   -   如果你经常看我画图，你几乎不会在我的图表上看到我标记出 DOL。但 DOL 的概念非常重要，你可以不把它画出来，但这个概念你必须有。因他在很多时候 DOL 会直接决定你的 Bias，这在后面会不断地提及。
    >   -   有一个类似的概念叫**感兴趣的点位（Point of Interest, POI）**，基本上也是指你所关注的 PDA，在此不过多赘述。

-   **机构订单流（Institutional Order Flow, IOF）**：当价格在进行单方向传递时，同向的 PDA 会不断地被尊重，反向的 PDA 会不断地被突破。

![ERL & IRL](/tutorial/ict-smc/img/06.%20Range/ERL%20%26%20IRL.png)

>   标准的机构订单流和 ERL / IRL 的实例。



## 最佳进场区间 / Optimal Trade Entry（OTE）

-   最佳进场区间（Optimal Trade Entry, OTE）是 ICT 中一种常见的辅助进场工具。他不能单独使用，必须搭配前面提及的概念和元素。
-   OTE 指的是斐波那契 0.62 - 0.79 区间，其 EQ 为0.705。当你在这个区间做进场时，通常可以拿到一个极为优秀的盈亏比。
-   OTE 也可以帮助你寻找你的出场目标位，当然，这一切都必须搭配 DOL、PDA 和前面提及的各种概念。
-   **最后，切记不要在脱离其他概念的场景下使用 OTE，他只是一个辅助工具。**



![OTE](/tutorial/ict-smc/img/06.%20Range/OTE.png)



-   **1**：波段起点。
-   **0**：波段终点（Retracement 开始的 Swing Point）。
-   **0.5**：波段区间的 EQ。
-   **0.62 - 0.79**：**最佳进场区间，你可以关注此处的 PDA 做进场**。
-   **0.705**：**最佳进场区间的 EQ，你可以关注此处的 PDA 作进场**。
-   -0.27：你可以寻找此处的 PDA 作为你的第一目标位（TP1）。
-   -0.62：你可以寻找此处的 PDA 作为你的第二目标位（TP2）。
-   -1：你可以寻找此处的 PDA 作为你的第三目标位（TP3）。