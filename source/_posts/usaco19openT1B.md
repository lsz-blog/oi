---
title: USACO 19Open Bronze T1 - Bucket Brigade 题解
date: 2023-01-17 09:26:35
tags:
  - USACO
  - USACO Bronze
  - 搜索
  - 图
  - BFS
categories:
  - 题解
mathjax: true
---

题意：给定一个 $10\times 10$ 的矩阵，有一个 `B`、一个 `L` 和一个 `R`，其中 `R` 那格不能走。现在求 `B` 和 `L` 之间的最短路（不包括 `B` 和 `L`）。

这题是1权图的最短路，可以用 BFS 求。对于 `R` 那格特判即可。

```c++
#include<bits/stdc++.h>
using namespace std;
const int dx[] = {1, -1, 0, 0};
const int dy[] = {0, 0, 1, -1};
char c[10][10];
bool vst[10][10];
int bx, by, rx, ry, lx, ly;
struct state {
  int x, y, t;
  state (int x = 0, int y = 0, int t = 0): x(x), y(y), t(t) {}
};
int main() {
  freopen("buckets.in", "r", stdin);
  freopen("buckets.out", "w", stdout);
  for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; j++) {
      cin >> c[i][j];
      if (c[i][j] == 'B') bx = i, by = j;
      if (c[i][j] == 'R') rx = i, ry = j;
      if (c[i][j] == 'L') lx = i, ly = j;
    }
  }
  queue<state> q;
  q.push({lx, ly, 0}); // ltob
  while (!q.empty()) {
    auto t = q.front(); q.pop();
    vst[t.x][t.y] = true;
    if (t.x == bx && t.y == by) {
      cout << max(t.t-1, 0) << endl;
      return 0;
    }
    for (int k = 0; k < 4; k++) {
      int nx = t.x + dx[k], ny = t.y + dy[k];
      if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && (rx != nx || ry != ny) && !vst[nx][ny])
        q.push({nx, ny, t.t + 1});
    }
  }
  return 0;
}
```