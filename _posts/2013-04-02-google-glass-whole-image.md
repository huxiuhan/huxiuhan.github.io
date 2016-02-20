---
layout: post
title: "Google glass: 整体图像扫描镜显示系统"
date: 2013-02-27 13:12
comments: true
categories: 
---

(Whole image scanning mirror display system)

之前看到google glass的新闻一直困惑一个问题。我们都知道人眼焦距在5cm左右，正常情况下小于二倍焦距（10cm）位置的东西是看不清楚的。那么我们看google glass的图片：

<img src="/images/google-glass.jpg" border="0"  title="photo-media">

显然， 无论眼镜上哪个部分也不可能超过人眼10cm，那么这个眼镜上显示的图像是如何让人看清楚的呢？

于是开始搜原理...发现这个专利 <a href="http://www.google.com/patents/US20130016413">http://www.google.com/patents/US20130016413</a>. 

专利名机翻过来该专利名字等于日志标题。

这篇专利介绍了如何使这个显示图像“变远”、“变大”。首先是变远：

<img src="/images/google-glass-fig1a.jpg" border="0"  title="photo-media">

105是图像来源，125是凸透镜，在焦点f处制造了一个虚像。之后通过110和115两面镜子反射到人眼120中。遗憾的是，这样的图像虽然可以看清楚了，但是太小了，其可视范围受制于110、115镜子的大小。使得人眼最多看到130这一个范围的图像（有效图像显示区域），可以使这个区域的大小正好等于人眼直视该图像中心时看到的窗口大小(eyebox)。

之后为了使图像的范围扩大到人眼可及的范围内，一个巧妙的方法是将110镜子变成可以活动的。见图（标号相同的意义相同）：

<img src="/images/google-glass-fig2a.jpg" border="0"  title="photo-media">

这幅图中FIG. 2A，图像来源具体的使用光栅扫描显示器205表示，210是仍然是凸透镜。可以注意到原来的镜子110变成了215，可以绕r1,r2两轴，统一一个执行器(actuator)来旋转，使其可以通过更大的230反射镜，使其投影图像的可能范围扩大到240。当然，某个时刻，虽然区域位置可以变化，但是其大小还是原来的人眼窗口(eyebox)那么大。

那么接下来只要利用215的旋转能力，通过追踪人眼的聚焦位置，生成对应位置的“部分图像”，将“部分图像”正好投射到人眼窗口(eyebox)的位置，实现一个反馈控制，就可以保证人的眼球转动时可以看见“一整幅大图像”的不同位置的效果。

流程如下：

<img src="/images/google-glass-fig7.jpg" border="0"  title="photo-media">


我们仔细重新观察第一幅图，可以发现原来前面坨玻璃是...

<img src="/images/google-glass-small.jpg" border="0"  title="photo-media">


个人理解的基本原理就是这样～详情请看专利原本，水平有限有错误还请指明，谢谢！

 
---------------------------------

无论google的这些“不靠谱项目”最终能不能推广，个人的态度是先行者值得尊重。赞chromebook，赞driverless car，赞project glass.

更多关于google glass的相关专利，请猛击

<a href="http://www.seobythesea.com/2013/01/project-glass-patents/">
http://www.seobythesea.com/2013/01/project-glass-patents/
</a>

里面罗列了各种相关的专利和其abstract，很多很有意思，值得推荐。
