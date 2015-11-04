// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);
  // note that you can also chain configs
  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.views.transition("none");
  $ionicConfigProvider.tabs.style("standard");

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.star', {
    url: '/star',
    views: {
      'tab-star': {
        templateUrl: 'templates/tab-star.html',
        controller: 'StartCtrl'
      }
    }
  })
  .state('productDetail', {
    url: '/product/:productId',
    templateUrl: 'templates/product/productDetail.html',
    controller: 'ProductDetailCtrl'
  })

  .state('tab.activity', {
    url: '/activity',
    views: {
      'tab-activity': {
        templateUrl: 'templates/tab-activity.html',
        controller: 'ActivityCtrl'
      }
    }
  })
  .state('activityContent', {
    url: '/activity/content',
    templateUrl: 'templates/activity/activityContent.html',
    controller: 'ActivityContentCtrl'
  })

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html',
        controller: 'CartCtrl'
      }
    }
  })
  .state('settlement', {
    url: '/settlement',
    templateUrl: 'templates/settlement.html',
    controller: 'SettlementCtrl'
  })
      .state('settlementInvoice', {
        url: '/settlement/invoice',
        templateUrl: 'templates/order/edit-invoice.html',
        controller: 'SettlementInvoiceCtrl'
      })
  .state('orderPay', {
    url: '/order/pay',
    templateUrl: 'templates/order/orderPay.html',
    controller: 'OrderPayCtrl'
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('myOrder', {
    url:'/user/myOrder',
    templateUrl: 'templates/user/myOrder.html',
    controller: 'MyOrderCtrl'
  }).state('myCommission', {
    url: '/user/myCommission',
    templateUrl: 'templates/user/myCommission.html',
    controller: 'MyCommissionCtrl'
  }).state('chanagePwd', {
    url: '/user/changePwd',
    templateUrl: 'templates/user/changePwd.html',
    controller: 'ChangePwdCtrl'
  }).state('about', {
    url: '/user/about',
    templateUrl: 'templates/user/about.html'
  }).state('afterSales', {
    url: '/user/afterSales',
    templateUrl : 'templates/user/afterSales.html'
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/star');
});
