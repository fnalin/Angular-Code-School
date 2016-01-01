'use strict';

app.controller('productscontroller',
    function productsController($scope) {

        $scope.AlertaTag = function (tag,nome) {
            alert('Vc clicou na tag: ' + tag + " do produto: " + nome);
        };

        $scope.products = [
            {
                id: 1,
                nome: 'produto I',
                data: '20150313T00:00:00',
                valor: 0.51,
                tags:['tag 1','tag 2','tag 3', 'tag 4']
            },
            {
                id: 2,
                nome: 'produto II',
                data: '20150501T18:10:51',
                valor: 10.01,
                tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4']
            },
            {
                id: 3,
                nome: 'produto III',
                data: '20151231T13:50:51',
                valor: 201.00,
                tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4']
            },
            {
                id: 4,
                nome: 'produto IV',
                data: '20160101T00:50:51',
                valor: 10.99,
                tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4']
    }
        ];
    }
);