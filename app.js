(
  angular.module('myApp',[]).controller('myCont',callMyCont).service('mySvc',mySvc);

  callMyCont.$inject=['mySvc'];
  function callMyCont(mySvc){
    callMySvc();
  };

  function mySvc(){
    this.msg = "1st Service";
  };
)();
