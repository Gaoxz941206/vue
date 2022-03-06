/*
  方式1、使用：export let 变量/函数 = '' 将变量/函数导出
*/
export let messageA = '模块A的信息';

let name = '模块A';
let age = 32;
let flag = true;

function sum(num1 , num2) {
  return num1 + num2
}
/*
  方式2、使用：export{函数 , 变量} 将变量/函数导出
*/
export{
  name,
  age,
  flag,
  sum
}

/*
  方式3、导出类
*/
export class Person{
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  info(){
    console.log('此人的姓名是：' + this.name + ' ; 年龄是：' + this.age);
  }
  run(){
    console.log(this.name + ' 在奔跑！');
  }
}

/*
  方式4、导出默认（可以让接收者自由命名） 但一个module中只能有一个 export default
      注：export default function 时，函数不可命名
*/
export default function () {
  console.log('导出默认函数');
}
