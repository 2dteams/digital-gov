$(document).ready(function () {
    var cy = cytoscape({
        container: document.getElementById('cy'),
    });

    var eles = cy.add([
        {group: 'nodes', data: {id: 'n0'}, position: {x: 100, y: 100}},
        {group: 'nodes', data: {id: 'n1'}, position: {x: 100, y: 100}},
        {group: 'nodes', data: {id: 'n2'}, position: {x: 100, y: 100}},
        {group: 'nodes', data: {id: 'n3'}, position: {x: 100, y: 100}},
        {group: 'nodes', data: {id: 'n4'}, position: {x: 200, y: 200}},

        {group: 'edges', data: {id: 'e0', source: 'n0', target: 'n1'}},
        {group: 'edges', data: {id: 'e1', source: 'n0', target: 'n3'}},
        {group: 'edges', data: {id: 'e2', source: 'n1', target: 'n2'}},
        {group: 'edges', data: {id: 'e3', source: 'n2', target: 'n4'}},
        {group: 'edges', data: {id: 'e4', source: 'n4', target: 'n0'}}
    ]);
});