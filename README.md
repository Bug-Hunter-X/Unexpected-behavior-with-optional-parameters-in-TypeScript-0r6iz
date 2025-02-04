# Unexpected Behavior with Optional Parameters in TypeScript

This repository demonstrates a subtle bug related to optional parameter type inference in TypeScript.  The bug arises when an optional parameter is not provided, causing unexpected behavior in a function.

## Bug Description

The core issue is that TypeScript infers a union type ('string | undefined') when an optional parameter is omitted.  This can lead to issues if the function doesn't explicitly handle the 'undefined' case. The provided example shows a simple function where this causes no visible error, but may lead to unexpected results in other more complex cases. This is a potential source of runtime errors, especially when integrating with other parts of the codebase.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Compile the TypeScript code: `tsc bug.ts`
4. Run the compiled JavaScript code: `node bug.js`

You'll see the output.  The function works as expected, but the type inference behavior may be a concern in other scenarios.

## Solution

The `bugSolution.ts` file provides a way to mitigate this issue by handling the possibility of 'undefined' more explicitly. 