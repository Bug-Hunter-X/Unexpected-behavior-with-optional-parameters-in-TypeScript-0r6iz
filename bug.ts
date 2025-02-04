function printName(name?: string): void {
  if (name === undefined) {
    console.log('Hello, there!');
  } else {
    console.log(`Hello, ${name}!`);
  }
}

printName(); // Output: Hello, there!
printName('John'); // Output: Hello, John!

// The bug:
// The parameter 'name' is optional, but when calling printName without an argument,
// TypeScript infers the type of name as 'string | undefined'. This is the root cause of the bug.
// Because the 'name' parameter is optional, its type can be either 'string' or 'undefined'. If we don't provide a value, the type becomes 'undefined', but because the function doesn't handle this type, it may lead to unexpected results or errors depending on how the function is designed.