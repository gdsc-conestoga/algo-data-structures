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

    removeEdge(vtx1, vtx2){
        // no error handling, check if both vertices exist
        this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(v => v != vtx2);
        this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v != vtx1);
    }

    removeVertex(vtx){
        while(this.adjacencyList[vtx].length > 0){
            let adjacentVtx = this.adjacencyList[vtx].pop();
            this.removeEdge(vtx, adjacentVtx);
        }

        delete this.adjacencyList[vtx];
    }
}

let graph = new Graph();
graph.addVertex('Toronto');
graph.addVertex('New York');
graph.addVertex('Calgary');

graph.addEdge('Toronto', 'New York');
graph.addEdge('Toronto', 'Calgary');

// graph.removeEdge('Toronto', 'New York');
// graph.removeEdge('Toronto', 'Calgary');

// graph.removeVertex('Toronto');
