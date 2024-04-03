---
title: 'A deep dive into the C runtime'
description: "While C and C++ may be native languages, that doesn't stop them from having some boilerplate that gets included in every binary file you compile, so what exactly is the C runtime and why is it needed?"
date: '12th December, 2022'
tags: ['C', 'C++']
---

## What is the CRT?

The C runtime, commonly known as CRT, and refered to as the C runtime library, is a collection of libraries that provide basic functionality for applications built using Microsofts C/C++ compiler, known as MSVC.

Without the CRT, you're left to implement all basic functionality yourself, for example, with the CRT removed you cannot use the new operator:

```cpp
  void* __cdecl operator new[]( unsigned __int64 size ) {
    // Implementation
  }
```

The new operator is used to allocate memory of a given size, without this operator, no memory allocations can happen, this is the very first quirk of removing the CRT and something that the user must implement themselves.

Before we can go further, without the CRT our program wont even compile under MSVC, the compiler is expecting a routine:

```cpp
extern "C" int mainCRTStartup() {
  // CRT startup routine
}
```

We can override the entrypoint with the compiler option /entry
Without the main crt startup routine, certain aspects of our code will not work, primarily, static initializers, which are functions that are inserted into a list of sorts that is executed when `mainCRTStartup()` is invoked, before our traditional `int main()` entrypoint gets called.

## How do we add this functionality back?

If we use a program like [Process Hacker](https://processhacker.sourceforge.io/) to inspect our executable, we can see that Windows loads a few libraries for us at runtime.

1. KernelBase.dll
2. kernel32.dll
3. ntdll.dll

Each of these libraries can provide us the functionality we need through their exports, but how do we go about accessing this data from within our program? Right now we're just using an external tool to analyze our binary during runtime.