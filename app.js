(
  angular.module('myApp',[]).controller('myCont',callMyCont).service('mySvc',mySvc);

  callMyCont.$inject=['mySvc'];
  function callMyCont(mySvc){
    MySvc();
  };

  function mySvc(){
    alert("Service");
    this.msg = "1st Service";

  };
)();
