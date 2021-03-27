class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vtx){
        if(!this.adjacencyList[vtx])
            this.adjacencyList[vtx] = []; // will not overwrite if a duplicate, protection preferrable
    }

    addEdge(vtx1, vtx2){
        // no error handling, check if both vertices exist
        this.adjacencyList[vtx1].push(vtx2);
        this.adjacencyList[vtx2].push(vtx1);
    }

    dfsRecusive(start){
        let results = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        function dfs(vtx){
            if(!vtx) return; // base case
            results.push(vtx);
            visited[vtx] = true;
            
            for(let v of adjacencyList[vtx]){
                if(!visited[v]){
                    dfs(v);
                }
            }
        }

        dfs(start);

        return results;
    }

    dfsIterative(start){
        let stack = [start]; // we simulate stack using array (you can create your own Stack data structure instead)
        let visited = {};
        let results = [];

        visited[start] = true;

        while(stack.length > 0){
            let vtx = stack.pop();
            results.push(vtx);
            visited[vtx] = true;

            for(let v of this.adjacencyList[vtx]){
                if(!visited[v]){
                    stack.push(v);
                    visited[v] = true;
                }
            }
        }

        return results;
    }

    bfs(start){
        let queue = [start]; // we simulate queue using array (you can create your own Queue data structure instead)
        let visited = {};
        let results = [];

        visited[start] = true;

        while(queue.length > 0){
            let vtx = queue.shift();
            results.push(vtx);
            visited[vtx] = true;

            for(let v of this.adjacencyList[vtx]){
                if(!visited[v]){
                    queue.push(v);
                    visited[v] = true;
                }
            }
        }

        return results;
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
