### TITLE: [Args](http://codingdojo.org/kata/Args/)

#### Pre-Definition

Schema:
 - char    - Boolean arg.
 - char*   - String arg.
 - char#   - Integer arg.
 - char[*] - one element of a string array.

Example schema: `(f,s*,n#,p[*])`

Corresponding command line: `-f -s Bob -n 1 -p e1 -p e2 -p e3`

#### Deconstruct the problem
- [X] 定义schema和string [] 作为实际的命令行参数
- [ ] 在程序的错误处理上卡住了，到底有几种情况呢？
  - [ ] schema存在/不存在某个flag但是 input对应flag存在/不存在
    - [ ] inputParseResult has flag `false/true` (结合下面四种情况去做放到最后)
  - [X] schema不存在 某个flag，input存在
    - [X] 检测flag不存在
    - [X] 抛出异常unexpected flag
  - [X] schema格式错误，抛出异常，指明schema错误
- [ ] Boolean arg
  - [ ] 默认返回(false)
  - [ ] 存在返回(true)
- [ ] String 类型
  - [ ] 接受string
  - [ ] 不然报错
- [ ] Int 类型
  - [ ] 接受Int
  - [ ] 不然报错
- [ ] String[] 类型
  - [ ] 接受string []
  - [ ] 不然报错
- [ ] 多个放在一起解析
  - [ ] ？？？所以到底怎么处理 多的args呢
  
```java
  @Test
  public void testExtraArguments() throws Exception {
    Args args = new Args("x,y*", new String[]{"-x", "-y", "alpha", "beta"});
    assertTrue(args.getBoolean('x'));
    assertEquals("alpha", args.getString('y'));
    assertEquals(3, args.nextArgument());
  }

  @Test
  public void testExtraArgumentsThatLookLikeFlags() throws Exception {
    Args args = new Args("x,y", new String[]{"-x", "alpha", "-y", "beta"});
    assertTrue(args.has('x'));
    assertFalse(args.has('y'));
    assertTrue(args.getBoolean('x'));
    assertFalse(args.getBoolean('y'));
    assertEquals(1, args.nextArgument());
  }
}

```
