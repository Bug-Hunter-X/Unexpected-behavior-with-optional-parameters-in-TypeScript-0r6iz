function printName(name?: string): void {
  const nameToUse = name || 'there';
  console.log(`Hello, ${nameToUse}!`);
}

printName(); // Output: Hello, there!
printName('John'); // Output: Hello, John!

// Solution:
// The solution addresses the issue by providing a default value for the parameter if it's undefined.
// This eliminates the need to perform explicit type checking or handle the union type.
// This ensures the function always receives a value, preventing unexpected behavior.