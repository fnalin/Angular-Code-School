'use strict';

productsApp.controller('productsController',
    function productsController($scope) {
        $scope.products = [
            {
                name: 'Dodecahedron',
                price: 2.95,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales imperdiet nunc quis lobortis. Nam imperdiet volutpat rutrum. Integer pellentesque laoreet dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam velit diam, fermentum nec sapien ac, tristique molestie arcu. Duis non pellentesque nunc. Nulla facilisi. Nunc malesuada vestibulum risus. Quisque accumsan pellentesque lorem, finibus cursus ex eleifend ac. Aliquam eros dolor, venenatis ac feugiat vel, consequat eget nulla. Ut consequat et libero sollicitudin dignissim. Nam lobortis pretium nibh a aliquam.',
                canPurchase: true,
                soldOut: false
            }, {
                name: 'Pentagonal Gem',
                price: 5.95,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales imperdiet nunc quis lobortis. Nam imperdiet volutpat rutrum. Integer pellentesque laoreet dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam velit diam, fermentum nec sapien ac, tristique molestie arcu. Duis non pellentesque nunc. Nulla facilisi. Nunc malesuada vestibulum risus. Quisque accumsan pellentesque lorem, finibus cursus ex eleifend ac. Aliquam eros dolor, venenatis ac feugiat vel, consequat eget nulla. Ut consequat et libero sollicitudin dignissim. Nam lobortis pretium nibh a aliquam.',
                canPurchase: false,
                soldOut: true
            }, {
                name: 'Product III',
                price: 11.05,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales imperdiet nunc quis lobortis. Nam imperdiet volutpat rutrum. Integer pellentesque laoreet dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam velit diam, fermentum nec sapien ac, tristique molestie arcu. Duis non pellentesque nunc. Nulla facilisi. Nunc malesuada vestibulum risus. Quisque accumsan pellentesque lorem, finibus cursus ex eleifend ac. Aliquam eros dolor, venenatis ac feugiat vel, consequat eget nulla. Ut consequat et libero sollicitudin dignissim. Nam lobortis pretium nibh a aliquam.',
                canPurchase: false,
                soldOut: false
            }
        ];

        $scope.AddToCart = function (item) {
            alert(item + " adicionado ao carrinho");
        };
    }
);