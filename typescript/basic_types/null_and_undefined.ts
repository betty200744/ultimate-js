/*
* Something hasn't been initialized : undefined.
Something is currently unavailable: null.
* */

function foo(a: string, b?: string | null, c?: string) {
    console.log(`this is a: ${a}`);
    console.log(`this is b: ${b}`);
    console.log(`this is c: ${c}`);

}

foo("", null);