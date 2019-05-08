### TITLE: [Args](http://codingdojo.org/kata/Args/)

### REQUIREMENTS:
1. use 10 mins deconstruct the problem and make the todo list before starting
2. count time spent
3. TDD - test first then code

### DETAILS:
#### [0.1.0] - 2019-05-02
* timeSpent:
* > 20mins(deconstruct the problem) + 90mins(implement idea using code with TDD) = 110mins
* quality: 7/10
* > It's ok, and it can be better.
* how about TDD
* > It's great. I will be happy and encouraged if there is PASS on my screen.
* differences of sequence between todo list and real case
* > `todo list` is just a rodemap. But `real case` means more specific problems that I never thought about before.
* notes:
* > To be honest, I tried two days ago. Then I found that I made a mistake while deconstructing the problem, which made me hard to pass the unittest. Then I tried another method and it worked.

今天加了一些测试用例，之前没有直接测试 -1 的情况，还有更加详细的区分了 unknown option、bad option、bad value的情况。

但是感觉我审题有点问题, 并没有处理flag值的类型，比如number都是string的形式，我的开发也是不是测试驱动的，我是写完了我觉得很多测试用例然后再尝试全部跑通，而不是一步一步。

今天准备看看别人的代码学习学习，然后明天在写一下
