# 语法补充

## ES6 的 Class

在 ES6 之前，我们通过 function 来定义类，但是这种模式一直被很多从其他编程语言（例如：JAVA、C++、OC 等等）转到 JavaScript 的人所不适应。

原因是，大多数面向对象语言，都使用 class 关键字来定义类的。

而 JavaScript 也从 ES6 开始引入 class 关键字，用于定义以一个类。

转换成 ES6 中的类如何定义呢？

- 类中一个 constructor 构造方法，当我们通过 new 关键字调用时，就会默认执行这个构造方法
  - 构造方法中可以给当前对象添加属性
- 类中也可以定义其他方法，这些方法会被放到类的 prototype 上

另外，属性也可以直接直接定义在类中：

- height 和 address 是直接定义在类中

*01-JavaScript-Class.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Class</title>
</head>
<body>
  <script>
    // ES5
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    Person.prototype.running = function() {
      console.log(this);
      console.log(this.name, this.age, 'running');
    }

    // 隐示绑定
    var p = new Person('Darwin', 31);
    console.log(p.name, p.age);
    p.running();


    // ES6
    class Student {

      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      running() {
        console.log(this);
        console.log(this.name, this.age, 'running');
      }
    }
    const stu = new Student('Newton', 30);
    console.log(stu.name, stu.age);
    stu.running();


    // this 绑定题目
    const func = p.running;
    func();
    let func1 = stu.running;
    try {
      func1();  
    } catch (error) {
      console.error(error);
    }
    
    var obj = {
      name: 'Turing',
      age: 40
    }
    func1.call(obj);


    // 重新赋值 func1
    func1 = func1.bind(obj);
    func1();
  </script>
</body>
</html>
```

继承是面向对象的一大特性，可以减少我们重复代码的编写，方便公共内容的抽取（也是很多面向对象语言中，多态的前提）。

ES6 中增加了 extends 关键字作为类的继承。

> **注意**：在 constructor 中，子类必须通过 super 来调用父类的构造方法，对父类进行初始化，否则会报错

*01-JavaScript-Class-extends.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Class extens</title>
</head>
<body>
  <script>
    /**
     * 面向对象的 3 的特性：封装、多态、继承
     * 
     * 继承：1.减少重复代码 2.多态的前提（鸭子类型）
     */
    class Person {

      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      running() {
        console.log('running');
      }
    }

    class Student extends Person {

      constructor(name, age, sno) {
        super(name, age);
        this.sno = sno;
      }
    }

    const stu = new Student('Darwin', 30, '001');
    console.log(stu.name, stu.age, stu.sno);
    stu.running();
    

    class Teacher extends Person {

      constructor(name, age, title) {
        // 子类必须初始化父类对象
        super(name, age);
        this.title = title;
      }
    }

    const tea = new Teacher('Newton', 31, 'React');
    console.log(tea.name, tea.age, tea.title);
    tea.running();
  </script>
</body>
</html>
```



