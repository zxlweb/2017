angular.module('kaifanla', [
  'ng',
  'ngRoute',
  'ngAnimate'
])
  .controller('parentCtrl', function ($scope,$location) {
    //父控制器，作用范围包含所有的ngView所对应的控制器——此控制器一般声明在body元素上
    $scope.jump = function(url){
      $location.path(url);
    }
  })
  .controller('startCtrl', function ($scope) {
  })
  .controller('mainCtrl', function ($scope, $http,$timeout) {
    $scope.hasMoreData = true; //服务器是否还有更多数据可供加载
    //从服务器端获取最开始的5条菜品数据，声明为Model数据，绑定到View中
    $scope.dishList = [];                                                                                                    
    $http.get('data/dish_getbypage.php?start=0')
      .success(function(data){
        $scope.dishList = data; //把服务器异步返回的数据声明为Model数据
      });

    //“加载更多”按钮的监听函数
    $scope.loadMore = function(){
      $http.get('data/dish_getbypage.php?start='+$scope.dishList.length)
        .success(function(data){
          if(data.length<5){
            $scope.hasMoreData = false;
          }
          //把新获取的数据追加到之前已经获取的数据的尾部
          $scope.dishList = $scope.dishList.concat(data);
        });
    }
    var timeout;

    //监视Model数据kw的改变，只要一改变就要发起服务器请求
    $scope.$watch('kw',function(){
      //console.log('Model数据kw改变了：'+$scope.kw);
      if(!$scope.kw){  //模型数据变为空，则不发请求
        return;
      }
      if(timeout) $timeout.cancle(timeout);
      timeout=$timeout(function(){
         $http.get('data/dish_getbykw.php?kw='+$scope.kw)
        .success(function(data){
          $scope.dishList = data;  //覆盖已有数据
        })

      },350)
     
    })
  })
  .controller('detailCtrl', function ($scope,$http, $routeParams) {
    //console.log('DETAIL模板页面获取到的路由参数：');
    //console.log($routeParams);
    $http.get('data/dish_getbyid.php?did='+$routeParams.did)
      .success(function(data){
        $scope.dish = data[0];
      })
  })
  .controller('orderCtrl', function ($scope, $http, $routeParams) {
    //通过方向2的绑定可以将View中的表单输入的值绑定到Model数据
    $scope.order = {did: $routeParams.did};

    //下述四项仅供测试用
    $scope.order.user_name = '大旭';
    $scope.order.sex = '1';
    $scope.order.phone = '13501234567';
    $scope.order.addr = '万寿路123号';

    $scope.submitOrder = function(){
      console.log($scope.order);
      //必须把JS中的对象转换为k=v&k=v字符串形式，才能使用HTTP请求进行提交
      var orderData = jQuery.param($scope.order);
      console.log(orderData);
      /*
      //使用GET请求提交表单数据——由于表单中所有的数据总长度可能超过1024字节，此场景下不推荐使用GET请求
      $http.get('data/order_add.php?'+orderData)
        .success(function(data){
          console.log('接收到服务器返回的数据：')
          console.log(data);
        })
      */
      //使用POST请求提交表单数据
      $http.post('data/order_add.php', orderData)
        .success(function(data){
          console.log('接收到服务器返回的数据：')
          console.log(data);
        })
    }
  })
  .controller('myorderCtrl', function ($scope) {
  })
  .config(function($routeProvider, $httpProvider){
    $routeProvider
      .when('/start', {
        templateUrl: 'tpl/start.html',
        controller: 'startCtrl'
      })
      .when('/main', {
        templateUrl: 'tpl/main.html',
        controller: 'mainCtrl'
      })
      .when('/detail/:did', {
        templateUrl: 'tpl/detail.html',
        controller: 'detailCtrl'
      })
      .when('/order/:did', {
        templateUrl: 'tpl/order.html',
        controller: 'orderCtrl'
      })
      .when('/myorder', {
        templateUrl: 'tpl/myorder.html',
        controller: 'myorderCtrl'
      })
      .otherwise({
        redirectTo: '/start'
      })
  })
  /*.run(function($http){  //修改POST请求的默认头部
    $http.defaults.headers.post =
    {'Content-Type':'application/x-www-form-urlencoded'};
  })*/