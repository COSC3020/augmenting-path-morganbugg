function augmentingPath(graph, start, end) {
    var visited = {}

    function dfs(node, path) {
        visited[node] = true
        if (node == end) return path
        
        for (var neighbor in graph[node]) {
            if (!visited[neighbor] && graph[node][neighbor] > 0) {
                var augmentedPath = dfs(neighbor, path.concat(neighbor))
                if (augmentedPath) return augmentedPath
            }
        }
        return null
    }

    var initialPath = dfs(start, [start])
    return initialPath || []
}
