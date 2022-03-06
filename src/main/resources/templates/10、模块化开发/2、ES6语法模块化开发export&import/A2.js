/*
  在需要使用的地方加上：
    import {函数 , 变量} from "文件" 导入想要使用的变量/函数
*/
import {messageA , name , age , flag , sum} from "./A1.js";

if (flag) {
  console.log(messageA);
  console.log('模块A中的name = ' + name);
  console.log('模块A中的age = ' + age);
  console.log('使用模块A中的sum函数计算的结果是：30 + 20 = ' + sum(30, 20));
}

/*
    import导入类
*/
import {Person} from "./A1.js";
const person = new Person('张三',32);
person.info();
person.run();

/*
  import导入默认函数 import 自定义名(不加{}) from "文件"
*/
import fun from "./A1.js"
fun();

/*
  import导入所有  import * as 自定义名 from "文件"
*/
import * as moduleAInfo from "./A1.js"
console.log('moduleAInfo--->'+moduleAInfo.name);
console.log('moduleAInfo--->'+moduleAInfo.age);