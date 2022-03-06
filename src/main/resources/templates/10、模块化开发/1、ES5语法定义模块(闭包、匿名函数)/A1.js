var moduleA = (function () {

  var flag = true;
  var name = '小明';
  var age = 32;

  var obj = {};   //定义一个obj类，当做容器，用来存放一些属性
  obj.flag = flag;
  obj.name = name;
  obj.age = age;

  return obj;

})();