(
  angular.module('myApp',[]).controller('myCont',callMyCont).service('mySvc',mySvc);

  callMyCont.$inject=['mySvc'];
  function callMyCont(mySvc){
    alert("Controller");
    mySvc();
  };

  function mySvc(){
    alert("Service");
    this.msg = "1st Service";

  };
)();
