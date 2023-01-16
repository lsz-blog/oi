---
title: USACO 18Feb Bronze T1. Teleportation 题解
date: 2023-01-16 19:41:51
tags:
  - USACO
  - USACO Bronze
categories:
  - 题解
mathjax: true
---

题意：在一条直线上有四个点 $A, B, X, Y$，其中 $X, Y$ 两点可以通过传送门互相传送，求 $A$ 到 $B$ 的最短距离。

易得总共只有三种情况：$A$ 直接到 $B$，$A$ 到 $X$ 传送到 $Y$ 再到 $B$，$A$ 到 $Y$ 传送到 $X$ 再到 $B$。直接计算即可。

```c++
#include<bits/stdc++.h>
using namespace std;
int a, b, x, y;
int main() {
  freopen("teleport.in", "r", stdin);
  freopen("teleport.out", "w", stdout);
  cin >> a >> b >> x >> y;
  cout<<min({abs(a-b), abs(a-x)+abs(b-y), abs(a-y)+abs(b-x)})<<endl;
  return 0;
}
```