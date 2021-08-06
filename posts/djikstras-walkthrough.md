---
title: "A Djikstra's Walkthrough"
date: "2021-08-06"
---

I've been meaning to learn some of the harder graph algorithms for a while now. So far, I'm familiar with DFS, BFS, Djikstra's and a little bit of Prim's. Today, just to concrete my understanding of Djikstra's, I am going to walk you (and myself) through it.

Djikstras is a shortest path algorithm for weighted graphs that can be either directed or non-directed. If a graph was not weighted, Djikstra's could still be used if the edge weights are all set to 1, but BFS is a simpler method for that kind of problem. Let's start with the following example (in USACO format):

```
0 5 6
0 3 7
0 4 2
1 3 1
4 1 3
4 2 6
1 2 3
```

is

```
0 -- 3
|    |
4 -- 1
\   /
  2
```
----------------
In this example, the source (the vertex we want to calculate the shortest paths with) is 1 and the number of edges (`e`) is 6. The next `e` lines are understood as follow: the first two numbers are `a` and `b`, each noting distinct vertexes. The third number, `c`, denotes the edge weight between vertexes `a` and `b`. Above only the nodes are represented.

Now, let us manually calculate the shortest paths between the source, 1, and every other vertex:
 - The shortest path from 1 to 1 is 0
 - The shortest path from 1 to 2 is 5
 - The shortest path from 1 to 3 is 8
 - The shortest path from 1 to 4 is 6; you might think it is 7 (1=>4), but it is actually 6 (1=>5=>2=>4)
 - The shortest path from 1 to 5 is 2

Here is how we solve this with code. Djiikstra's is like the intersection of DP (dynamic programming) and graph algorithms. In Djikstra's a shortest path between two vertces can be found using the shortest path from two "sub-vertices" and so on. Here are the steps to this algorithm:

1. The input is taken and is formed into an adjaceny list
2. A distance array (our result containing the shortest paths) is initialized along with a `done` array (checks if a node is finished being processed)
3. We set our `curr`ent vertex to the source vertex supplied in our input
4. A priority queue is initialized and the neighbors of the current node are sorted by their edge weights
5. We start by adding the source vertex to the priority queue
6. Then, while the priority queue is not empty:
7. For each neighbor, in the priority queue:
 - If the neighbor has not been processed completely and there has been no set distance between this neighbor and the source (default is -1), then we set the `distance[neighbor]` is set to the distance between the source and the current node plus the edge weight for the edge between the current node and the current node's neighbor.
 - If the neigbor has not been processed completely, but the ditance value has previously been set, `distance[neighbor]` is equal to the minimum between [the source and the current node plus the edge weight for the edge between the current node and the current node's neighbor] and [the previously set distance]
8. Now, for each unprocessed neighbor node of the current node, the neighbor is added to the priority queue
9. Since the current node has been completely processed, we remove it from the priority queue and update its value in the `done` array.

* Steps 8 and 9 are switched in the code to make implementation easier

Now that the algorithm has been covered, here's the code:
```
// My own implementation of Djikistra's Algorithm:
#include <bits/stdc++.h>
using namespace std;

int main() {
	int s, V, E;
	cin >> s >> V >> E;
	vector<int> distances(V, -1);
	distances[s] = 0;
	vector<vector<pair<int, int>>> graph(V);
	for (int i = 0 ; i < E ; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		graph[a].push_back(make_pair(b, c));
		graph[b].push_back(make_pair(a, c));
	}
	priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
	pq.push(make_pair(0, s));
	vector<bool> done(V, false);
	while (!pq.empty()) {
		for (pair<int, int> neighbor: graph[pq.top().second]) {
			if (!done[neighbor.first]) {
				if (distances[neighbor.first] == -1) {
					distances[neighbor.first] = neighbor.second+distances[pq.top().second];
				} else distances[neighbor.first] = min(neighbor.second+distances[pq.top().second], distances[neighbor.first]);
			}
		}
		int curr = pq.top().second;
		pq.pop();
		done[curr] = 1;
		for (pair<int, int> neighbor:graph[curr]) {
			if (!done[neighbor.first]) {
				pq.push(make_pair(neighbor.second, neighbor.first));
			}
		}
	}
	for (int i = 0 ; i < V ; i++) {
		cout << distances[i] << " ";
	}
	return 0;
}
```
And, Voila! Plugging in our previous inputs gives us this output:
`0 5 8 6 2 `

And that's Djikstra's!
