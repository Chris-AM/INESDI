export class A {
  foo: string;
  bar: string;
  lorem: string

  constructor(foo: string, bar: string, lorem = 'lorem') {
    this.foo = foo;
    this.bar = bar;
    this.lorem = lorem;
  }
}
