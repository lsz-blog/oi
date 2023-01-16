---
title: USACO 16Jan Bronze T1. Promotion Counting 题解
date: 2023-01-16 20:23:49
tags:
  - USACO
  - USACO Bronze
  - 模拟
categories:
  - 题解
---

题意：给定在各组的原先人数和现在人数，求每个级别的人有多少晋升的。

按照题意模拟即可。

```c++
#include<bits/stdc++.h>
using namespace std;
int b1, b2, s1, s2, g1, g2, p1, p2;
int main() {
  freopen("promote.in", "r", stdin);
  freopen("promote.out", "w", stdout);
  cin >> b1 >> b2 >> s1 >> s2 >> g1 >> g2 >> p1 >> p2;
  int gtp = p2-p1;
  int stg = g2-g1 + gtp;
  int bts = s2-s1 + stg;
  cout << bts << endl << stg << endl << gtp << endl;
  return 0;
}
```