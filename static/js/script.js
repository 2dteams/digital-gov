$(document).ready(function () {
    var cy = cytoscape({
        elements: {
            nodes: [
                {data: {id: 'n0'}},
                {data: {id: 'n1'}},
                {data: {id: 'n2'}},
                {data: {id: 'n3'}},
                {data: {id: 'n4'}},
            ],
            edges: [
                {data: {id: 'e0', source: 'n0', target: 'n1'}},
                {data: {id: 'e1', source: 'n0', target: 'n3'}},
                {data: {id: 'e2', source: 'n1', target: 'n2'}},
                {data: {id: 'e3', source: 'n2', target: 'n4'}},
                {data: {id: 'e4', source: 'n4', target: 'n0'}}
            ]
        },
        container: document.getElementById('cy'),
        layout: {
            name: 'grid',
        },
        style: [{
            selector: 'node',
            style: {
                'content': 'data(id)',
                'text-valign': 'center',
                'color': 'white',
                'background-color': '#262626',
                'text-outline-width': 2,
                'text-outline-color': '#222'
            }
        }],
    });
});