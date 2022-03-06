(function () {

  if (moduleB.flag) {
    console.log('自定义模块B的flag = true');
  }else {
    console.log('自定义模块B的flag = false');
  }

  console.log(moduleB.name);
  console.log(moduleB.age);

})();