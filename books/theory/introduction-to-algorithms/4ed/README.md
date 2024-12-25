# Part VI Graph Algorithms
## Chapter 20: Elementary Graph Algorithms
### 20.2 Breadth-first search
states of vertices
 * white - initial
 * gray - *discovered* . *Queue* contains all the gray vertices
 * black - turned from *gray* to *black* . all edges of the gray vertex are exploited

Important explanation on the peudo-code
 * `s` - the source vertex, i.e. the *root*
 * `v.d` - the distance from `s` to vertex `v`

Similar video tutorial: https://www.youtube.com/watch?v=c_0J8v5wPzg

### 20.3 Depth-first search
**DFS VS BFS**

 method | coloring  | recursive | timestamp | result
--------|-----------|-----------|-----------|------------
 BFS    | YES       | NO        | NO        | tree of shortest path
 DFS    | YES       | YES       | YES       | forest
