(function () {

  if (moduleA.flag) {
    console.log('自定义模块A的flag = true');
  }else {
    console.log('自定义模块A的flag = false');
  }

  console.log(moduleA.name);
  console.log(moduleA.age);

})();