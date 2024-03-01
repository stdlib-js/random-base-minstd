<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# MINSTD

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> A linear congruential pseudorandom number generator ([LCG][lcg]) based on Park and Miller.



<section class="usage">

## Usage

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';
```

#### minstd()

Returns a pseudorandom integer on the interval `[1, 2147483646]`.

```javascript
var r = minstd();
// returns <number>
```

#### minstd.normalized()

Returns a pseudorandom number on the interval `[0,1)`.

```javascript
var r = minstd.normalized();
// returns <number>
```

#### minstd.factory( \[options] )

Returns a linear congruential pseudorandom number generator ([LCG][lcg]).

```javascript
var rand = minstd.factory();
```

The function accepts the following `options`:

-   **seed**: pseudorandom number generator seed.
-   **state**: an [`Int32Array`][@stdlib/array/int32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

By default, a random integer is used to seed the returned generator. To seed the generator, provide either an `integer` on the interval `[1, 2147483646]`

```javascript
var rand = minstd.factory({
    'seed': 1234
});

var r = rand();
// returns 20739838
```

or, for arbitrary length seeds, an array-like `object` containing signed 32-bit integers

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';

var rand = minstd.factory({
    'seed': new Int32Array( [ 1234 ] )
});

var r = rand();
// returns 20739838
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = minstd();
}

// Create a new PRNG initialized to the current state of `minstd`:
rand = minstd.factory({
    'state': minstd.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === minstd() );
// returns true
```

#### minstd.NAME

The generator name.

```javascript
var str = minstd.NAME;
// returns 'minstd'
```

#### minstd.MIN

Minimum possible value.

```javascript
var min = minstd.MIN;
// returns 1
```

#### minstd.MAX

Maximum possible value.

```javascript
var max = minstd.MAX;
// returns 2147483646
```

#### minstd.seed

The value used to seed `minstd()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = minstd();
}

// Generate the same pseudorandom values...
rand = minstd.factory({
    'seed': minstd.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

#### minstd.seedLength

Length of generator seed.

```javascript
var len = minstd.seedLength;
// returns <number>
```

#### minstd.state

Writable property for getting and setting the generator state.

```javascript
var r = minstd();
// returns <number>

r = minstd();
// returns <number>

// ...

// Get the current state:
var state = minstd.state;
// returns <Int32Array>

r = minstd();
// returns <number>

r = minstd();
// returns <number>

// Reset the state:
minstd.state = state;

// Replay the last two pseudorandom numbers:
r = minstd();
// returns <number>

r = minstd();
// returns <number>

// ...
```

#### minstd.stateLength

Length of generator state.

```javascript
var len = minstd.stateLength;
// returns <number>
```

#### minstd.byteLength

Size (in bytes) of generator state.

```javascript
var sz = minstd.byteLength;
// returns <number>
```

#### minstd.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = minstd.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The generator has a period of approximately `2.1e9` (see [Numerical Recipes in C, 2nd Edition](#references), p. 279).
-   An [LCG][lcg] is fast and uses little memory. On the other hand, because the generator is a simple [linear congruential generator][lcg], the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. More importantly, the "randomness quality" of the generator's output is lacking. These defects make the generator unsuitable, for example, in Monte Carlo simulations and in cryptographic applications. For more on the advantages and disadvantages of [LCGs][lcg], see [Wikipedia][pros-cons].
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( minstd() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = minstd.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = minstd.factory({
    'seed': minstd.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Park, S. K., and K. W. Miller. 1988. "Random Number Generators: Good Ones Are Hard to Find." _Communications of the ACM_ 31 (10). New York, NY, USA: ACM: 1192–1201. doi:[10.1145/63039.63042][@park:1988].
-   Press, William H., Brian P. Flannery, Saul A. Teukolsky, and William T. Vetterling. 1992. _Numerical Recipes in C: The Art of Scientific Computing, Second Edition_. Cambridge University Press.

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/minstd`][@stdlib/random/array/minstd]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="package-name">[`@stdlib/random-iter/minstd`][@stdlib/random/iter/minstd]</span><span class="delimiter">: </span><span class="description">create an iterator for a linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="package-name">[`@stdlib/random-streams/minstd`][@stdlib/random/streams/minstd]</span><span class="delimiter">: </span><span class="description">create a readable stream for a linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="package-name">[`@stdlib/random-base/minstd-shuffle`][@stdlib/random/base/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="package-name">[`@stdlib/random-base/mt19937`][@stdlib/random/base/mt19937]</span><span class="delimiter">: </span><span class="description">A 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random-base/randi`][@stdlib/random/base/randi]</span><span class="delimiter">: </span><span class="description">pseudorandom numbers having integer values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-minstd.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-minstd

[test-image]: https://github.com/stdlib-js/random-base-minstd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-minstd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-minstd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-minstd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-minstd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-minstd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-minstd/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-minstd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-minstd/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-minstd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-minstd/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-minstd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-minstd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-minstd/main/LICENSE

[lcg]: https://en.wikipedia.org/wiki/Linear_congruential_generator

[pros-cons]: https://en.wikipedia.org/wiki/Linear_congruential_generator#Advantages_and_disadvantages_of_LCGs

[@park:1988]: http://dx.doi.org/10.1145/63039.63042

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32/tree/esm

<!-- <related-links> -->

[@stdlib/random/array/minstd]: https://github.com/stdlib-js/random-array-minstd/tree/esm

[@stdlib/random/iter/minstd]: https://github.com/stdlib-js/random-iter-minstd/tree/esm

[@stdlib/random/streams/minstd]: https://github.com/stdlib-js/random-streams-minstd/tree/esm

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle/tree/esm

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937/tree/esm

[@stdlib/random/base/randi]: https://github.com/stdlib-js/random-base-randi/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
