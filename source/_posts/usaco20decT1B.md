---
title: USACO 20Dec Bronze T1. Do You Know Your ABCs 题解
date: 2023-01-16 20:31:30
tags:
  - USACO
  - USACO Bronze
  - 数学
  - 排序
categories:
  - 题解
mathjax: true
---

题意：给定七个数，分别是 $a, b, c, a+b, b+c, a+c, a+b+c$，求 $a, b, c$（已知 $0 < a \leq b \leq c, a, b, c \in \mathbb{N}^*$）。

由于 $a, b, c > 0$，故而 $a+b+c$ 一定是这七个数的最大值，$a$ 一定是这七个数的最小值，$b$ 一定是这七个数的第二小值。知道了 $a, b$ 之后，$c$ 就可以算出来了。

```cpp
#include<bits/stdc++.h>
using namespace std;
int a[7];
int main() {
  for (int i = 0; i < 7; i++) cin >> a[i];
  sort(a, a+7);
  cout << a[0] << " " << a[1] << " " << a[6]-a[0]-a[1] << endl;
  return 0;
}
```