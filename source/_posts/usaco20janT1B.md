---
title: USACO 20Jan Bronze T1. Word Processor 题解
date: 2023-01-17 09:05:41
tags:
  - USACO
  - USACO Bronze
  - 模拟
categories:
  - 题解
mathjax: true
---

题意：给定 $n$ 个单词，每行最多 $k$ 个字符（不含空格），输出这些单词的排版。

按照题意模拟即可。

因为行末不能有空格，所以要特判一下 `curline` 的值。

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 101;
int n, k;
string s[N];
int main() {
  freopen("word.in", "r", stdin);
  freopen("word.out", "w", stdout);
  cin >> n >> k;
  for (int i = 1; i <= n; i++)
    cin >> s[i];
  int curline = 0;
  for (int i = 1; i <= n; i++) {
    if (curline + s[i].length() > k) {
      cout << endl << s[i];
      curline = s[i].length();
    } else if (curline + s[i].length() == k) {
      if (!curline) cout << s[i];
      else cout << " " << s[i];
      curline = k;
    } else {
      if (!curline) cout << s[i];
      else cout << " " << s[i];
      curline += s[i].length();
    }
  }
  cout << endl;
  return 0;
}
```