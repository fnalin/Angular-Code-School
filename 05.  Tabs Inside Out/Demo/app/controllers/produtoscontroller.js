'use strict';

demoApp.controller('produtosController',
    function produtosController($scope) {



        $scope.produtos =
            [
                {
                    id: 1,
                    tipo: 'agasalho',
                    nome: 'Agasalho',
                    valor: 199.99,
                    descricao: 'Se aqueça com esse lindo agasalho',
                    especificacoes: ['100% algodão', '0.5kg'],
                    avaliacoes: [{ nome: 'Fulano', texto: 'Gostei muito!' }, { nome: 'Cicrano', texto: 'Excelente produto' }],
                    imagem: '/images/agasalho.jpg',
                    tab: 1,
                    selectTab : function (setTab) {
                        this.tab = setTab;
                    },
                    isSelected : function (checkTab) {
                        return this.tab === checkTab;
                    }
                },

                {
                    id: 2,
                    tipo: 'mochila',
                    nome: 'Mochila Impermeável',
                    valor: 99.99,
                    descricao: 'Mochila 100% Poliéster do Timão',
                    especificacoes: ['100% Poliéster', '0.350kg', '36x10x15', 'Impermeável'],
                    avaliacoes: [{ nome: 'Fulano da silva', texto: 'Tomei chuva e não molhou!' }, { nome: 'Cicrano Goes', texto: 'Ótimo produto! Recomendo' }],
                    imagem: '/images/mochila.jpg',
                    tab: 1,
                    selectTab: function (setTab) {
                        this.tab = setTab;
                    },
                    isSelected: function (checkTab) {
                        return this.tab === checkTab;
                    }
                },

                {
                    id: 3,
                    tipo: 'Camisa',
                    nome: 'Camisa Feminina',
                    valor: 150.17,
                    descricao: 'Linda camisa do Timão',
                    especificacoes: ['100% algodão', '0.250kg'],
                    avaliacoes: [{ nome: 'Fulana Oliveira', texto: 'Linda e leve!' }, { nome: 'Cicrano Silva', texto: 'Simplesmente linda!' }],
                    imagem: '/images/camisa_feminina.jpg',
                    tab: 1,
                    selectTab: function (setTab) {
                        this.tab = setTab;
                    },
                    isSelected: function (checkTab) {
                        return this.tab === checkTab;
                    }
                },

                {
                    id: 4,
                    tipo: 'Camisa',
                    nome: 'Camisa Masculina',
                    valor: 88.55,
                    descricao: 'Camisa de passeio do Timão',
                    especificacoes: ['100% algodão', '0.350kg'],
                    avaliacoes: [{ nome: 'Fulano Santos', texto: 'Ótima e barata!' }, { nome: 'Cicrana Pereira', texto: 'Ótima para dar de presente' }],
                    imagem: '/images/camisa_passeio.jpg',
                    tab: 1,
                    selectTab: function (setTab) {
                        this.tab = setTab;
                    },
                    isSelected: function (checkTab) {
                        return this.tab === checkTab;
                    }
                },

                {
                    id: 5,
                    tipo: 'Bola',
                    nome: 'Bola Nike',
                    valor: 99.95,
                    descricao: 'Bola da Nike',
                    especificacoes: ['100% alguma coisa', '0.150kg'],
                    avaliacoes: [{ nome: 'Fulano Silva', texto: 'Leve e ótima para chutar!' }, { nome: 'Cicrano Prates', texto: 'Bola muito resistente' }],
                    imagem: '/images/bola_campo.jpg',
                    tab: 1,
                    selectTab: function (setTab) {
                        this.tab = setTab;
                    },
                    isSelected: function (checkTab) {
                        return this.tab === checkTab;
                    }
                },
            ];
    }
);