# 行为守则和编辑规范

## 行为守则

您的行为，应符合以下规范：

1. 不得对任何人进行人身攻击或骚扰（无论是公开还是私人），无论是处于何种目的；
2. 禁止发布有关淫秽、暴力、血腥的内容，除非是用于文档编辑目的；
3. 禁止未经允许发布他人的私人信息；
4. 应使用友善和包容的态度来尊重他者不同的观点和经验。

维护者应当对不可接受的行为采取适当且公平的措施，并负责清楚地解释行为守则。维护者应删除不符合规范的评论、提交、Issue 或其他贡献，也应暂时或永久地封禁那些违反了行为准则的用户。

本行为准则适用于电波脚注的所有仓库，及其社区和附属网站。

## 编辑规范

所有文档均在 `docs` 文件夹下，以下是知识库的结构：

```plain
[公开时间顺序]-[游戏名]
  | - [章节顺序]-[章节标题]
    | - [出场顺序]-[出场内容].md
```

或：

```plain
[公开时间顺序]-[游戏名]
  | - [章顺序]-[章标题]
    | - [节顺序]-[节标题]
      | - [出场顺序]-[出场内容].md
```

顺序从 0 数起，比如我想写「离开的人们 ZERO -prologue-」中第一章第一节的「俄亥阿诺斯」内容，其位置应该是：`2-离开的人们 ZERO -prologue-/0-舍密部警保局搜查1课/0-深渊的仰望者/0-俄亥阿诺斯.md`。

我们使用 Markdown 语法编辑文档，如果您不了解 Markdown 语法，您可以阅读 [Markdown Guide](https://www.markdownguide.org/) 中的[基本语法](https://www.markdownguide.org/basic-syntax/)和[扩展语法](https://www.markdownguide.org/extended-syntax/)。

### 引用格式

脚注应放在文档末尾，并附带分隔线，类似如下：

```markdown
...

---

[^1]: ...
```

### 排版

对于空格，中文与英文之间、中文与数字之间以及数字与单位之间需要添加空格，但不应在全角标点符号与其他符号之间添加空格。对于中英混合的专有名词，应尊重其原文，照官方格式书写。举例：

> R 博士亲手测量了雕像的高度，为 2.14 公尺，而他在报告中写上了虚假的高度：2.17 公尺，多加了 0.3 公尺。

对于引用内容，则不应该有任何修改，原文摘录即可。举例：

> あれは、シュバちやんではなかつたらうか？

英文的专有名词和其缩写时应使用正确的大小写，如果不能确定缩写，请直接使用全称。

中文、日文、韩文和喃文等汉字书写系统的标点应使用全角标点，数字或英文应使用半角标点，以下是一些细化规范：

- 对于书名，请使用 `《 》 〈 〉`
- 对于引号，为了更好的排版效果，请使用直角引号 `「 」 『 』`
- 对于破折号，请使用 `——`
- 对于省略号，请使用 `……`
- 对于波浪号，请使用 `～`，使用全角波浪号的理由是：`~` 在 Markdown 中有特殊作用：双半角波浪号作删除线作用

对于想要着重引用内容（例如句子、书名）等，应当加粗其内容，不附带书名号或引号等；对于英语、法语等拉丁字母书写系统，对于书名的使用，应将其斜体化，而非添加中文的书名号。举例：

> 《**中止奏乐的女孩**》（英文：*Girl Interrupted at Her Music*，荷兰语：*Onderbreking van de muziek*）是荷兰画家扬·维米尔的一副画作。

### 剧透、存疑和警告

如果您编辑的内容涉及了后续剧情发展、个人留有疑惑的猜测和不适宜公开的内容，应在文档开头添加以下代码：

#### 剧透

```markdown
> **剧透**  
> 该文章涉及后续剧情发展或关键情节透露。
```

效果：

> **剧透**  
> 该文章涉及后续剧情发展或关键情节透露。

#### 存疑

```markdown
> **存疑**  
> 该文章涉及主观推测，还请读者留心。
```

效果：

> **存疑**  
> 该文章涉及主观推测，还请读者留心。

#### 不适宜

```markdown
> **不适宜**  
> 该文章涉及不适宜在公共场合阅读的内容。
```

效果：

> **不适宜**  
> 该文章涉及不适宜在公共场合阅读的内容。

### 非知识库内容

如果您的内容不太适合知识库的形式，比如个人的剧情杂谈等，您可以将您的内容放入 `blog` 文件夹下，文件格式如下：`年年年年-月月-日日-英文标题.md`，其开头应该为：

```markdown
---
title: 标题
description: 用简洁的文字描述您的内容
slug: 年年年年-月月-日日-英文标题
authors:
    - name: 您的名字
      title: 您在这篇文章中负责了什么
      image_url: 你的头像 URL
tags: [标签]
---
```
