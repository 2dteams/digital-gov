$(document).ready(function () {
    var cy = cytoscape({
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

    var eles = cy.add([]);
});