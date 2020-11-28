$(document).ready(function () {
    let cy = cytoscape({
        elements: {
            nodes: [
                {data: {id: 'n5', text: 'ФизическоеЛицо'}},
                {data: {id: 'n6', text: 'МедицинскаяОрганизация'}},
                {data: {id: 'n7', text: 'МедицинскийРаботник'}},
                {data: {id: 'n8', text: 'ДолжностноеЛицо'}},
                {data: {id: 'n9', text: 'ГосударственноеОбразование'}},
                {data: {id: 'n10', text: 'Объект'}},
                {data: {id: 'n11', text: 'ЖилойДом'}},
                {data: {id: 'n12', text: 'СубъектПрава'}},
                {data: {id: 'n13', text: 'Дом'}},
                {data: {id: 'n14', text: 'Проект'}},
                {data: {id: 'n15', text: 'ОбъектКапитальногоСтроительства'}},
                {data: {id: 'n16', text: 'Документ'}},
                {data: {id: 'n17', text: 'ЗемельныйУчасток'}},
                {data: {id: 'n18', text: 'Организация'}},
                {data: {id: 'n19', text: 'Договор'}},
                {data: {id: 'n20', text: 'ЮридическоеЛицо'}},
                {data: {id: 'n21', text: 'Услуга'}},
                {data: {id: 'n22', text: 'Кредит'}},
                {data: {id: 'n23', text: 'ФинансовыйИнструмент'}},
                {data: {id: 'n24', text: 'ФинансоваяОрганизация'}},
                {data: {id: 'n25', text: 'ОбъектСтроительства'}},
                {data: {id: 'n26', text: 'Субъект'}},
            ],
            edges: [
                {data: {id: 'e0', source: 'n5', target: 'n8'}},
                {data: {id: 'e1', source: 'n5', target: 'n7'}},
                {data: {id: 'e9', source: 'n10', target: 'n25'}},
                {data: {id: 'e11', source: 'n10', target: 'n23'}},
                {data: {id: 'e18', source: 'n10', target: 'n16'}},
                {data: {id: 'e20', source: 'n10', target: 'n14'}},
                {data: {id: 'e21', source: 'n10', target: 'n17'}},
                {data: {id: 'e22', source: 'n10', target: 'n21'}},
                {data: {id: 'e26', source: 'n12', target: 'n5'}},
                {data: {id: 'e27', source: 'n12', target: 'n18'}},
                {data: {id: 'e28', source: 'n12', target: 'n9'}},
                {data: {id: 'e30', source: 'n13', target: 'n11'}},
                {data: {id: 'e34', source: 'n15', target: 'n13'}},
                {data: {id: 'e42', source: 'n16', target: 'n19'}},
                {data: {id: 'e44', source: 'n18', target: 'n20'}},
                {data: {id: 'e48', source: 'n20', target: 'n24'}},
                {data: {id: 'e49', source: 'n20', target: 'n6'}},
                {data: {id: 'e55', source: 'n23', target: 'n22'}},
                {data: {id: 'e57', source: 'n25', target: 'n15'}},
                {data: {id: 'e58', source: 'n26', target: 'n12'}}
            ]
        },
        container: document.getElementById('cy'),
        layout: {
            name: 'breadthfirst',
        },
        style: [{
            selector: 'node',
            style: {
                'content': 'data(text)',
                'color': 'black',
                'background-color': '#28608c',
            }
        },],
    });

    var nodeOptions = {
        normal: {
            bgColor: '#28608c'
        },
        selected: {
            bgColor: '#9e9711'
        }
    };

    var tableSelect = false;

    var selectedNodeHandler = function (evt) {
        let node = evt.target;
        node.animate({
            style: {
                'background-color': nodeOptions.selected.bgColor
            }
        }, {
            duration: 100
        });

        cy.viewport({
            zoom: 2.0,
            pan: {x: -node.position().x, y: -node.position().y},
        });

        let temp = cy.filter((element, i) => {
            return element.isEdge() && (element.data('source') === node.id() || element.data('target') === node.id());
        });

        let tableElements = "<table><tbody>";
        temp.forEach((elem) => {
            if (elem.data('source') === node.id()) {
                tableElements += '<tr><td>' + cy.getElementById(elem.data('target')).data('text') + '</td></tr>';
            } else {
                tableElements += '<tr><td>' + cy.getElementById(elem.data('source')).data('text') + '</td></tr>';
            }
        })
        tableElements += "</tbody></table>"

        $('#links-info').html(tableElements);

        $('#links-info td').click((cell) => {
            let temp = cy.filter((element, i) => {
                return element.isNode() && element.data('text') === cell.target.innerText;
            });
            tableSelect = true;
            this.unselect();
            temp[0].select();
        });
    }
    var unselectedHandler = function (evt) {
        evt.target.stop();
        evt.target.style({
            'background-color': nodeOptions.normal.bgColor
        });

        cy.viewport({
            zoom: 0.5,
            pan: {x: 300, y: 150},
        });
        if (!tableSelect)
            $('#links-info').html("<h2>Выберете узел</h2>");
    }

    cy.on('select', 'node', selectedNodeHandler);
    cy.on('unselect', 'node', unselectedHandler);
    cy.on('tap', 'node', (evt) => {
        tableSelect = false;
    });
});