---
title: "A Djikstra's Walkthrough"
date: "2021-08-06"
---

I've been meaning to learn some of the harder graph algorithms for a while now. So far, I'm familiar with DFS, BFS, Djikstra's and a little bit of Prim's. Today, just to concrete my understanding of Djikstra's, I am going to walk you (and myself) through it.

Djikstras is a shortest path algorithm for weighted graphs that can be either directed or non-directed. If a graph was not weighted, Djikstra's could still be used if the edge weights are all set to 1, but BFS is a simpler method for that kind of problem. Let's start with the following example (in USACO format):

```
1 6
1 4 7
1 5 2
2 4 1
5 2 3
5 3 6
2 3 3
```
----------------
In this example, the source (the vertex we want to calculate the shortest paths with) is 1 and the number of edges (`e`) is 6. The next `e` lines are understood as follow: the first two numbers are `a` and `b`, each noting distinct vertexes. The third number, `c`, denotes edge weight between vertexes `a` and `b`. 
