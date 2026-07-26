<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Anglit][anglit-distribution] distribution [probability density function][pdf].

<section class="intro">

The [probability density function][pdf] for an [anglit][anglit-distribution] random variable is

<!-- <equation class="equation" label="eq:anglit_pdf" align="center" raw="f(x) = \frac{1}{\sigma} \cos\left( \frac{2(x-\mu)}{\sigma} \right)" alt="Probability density function for an anglit distribution."> -->

```math
f(x) = \frac{1}{\sigma} \cos\left( \frac{2(x-\mu)}{\sigma} \right)
```

<!-- </equation> -->

for `-\pi/4 \le (x-\mu)/\sigma \le \pi/4`, where `μ` is the location parameter and `σ > 0` is the scale parameter. Outside of this interval, the density is zero.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
pdf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-anglit-pdf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var pdf = require( 'path/to/vendor/umd/stats-base-dists-anglit-pdf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-anglit-pdf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.pdf;
})();
</script>
```

#### pdf( x, mu, sigma )

Evaluates the [probability density function][pdf] for an [anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```javascript
var y = pdf( 0.0, 0.0, 1.0 );
// returns 1.0

y = pdf( 0.5, 0.0, 1.0 );
// returns ~0.540

y = pdf( 2.0, 0.0, 1.0 );
// returns 0.0

y = pdf( -2.0, 0.0, 1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `σ <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 0.0, 0.0, -1.0 );
// returns NaN

y = pdf( 0.0, 0.0, 0.0 );
// returns NaN
```

#### pdf.factory( mu, sigma )

Returns a `function` for evaluating the [PDF][pdf] of an [anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```javascript
var myPDF = pdf.factory( 0.0, 1.0 );

var y = myPDF( 0.0 );
// returns 1.0

y = myPDF( 10.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-anglit-pdf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float64'
};

var x = uniform( 10, -5.0, 5.0, opts );
var mu = uniform( 10, -5.0, 5.0, opts );
var sigma = uniform( 10, 0.5, 5.0, opts );

logEachMap( 'x: %0.4f, μ: %0.4f, σ: %0.4f, f(x;μ,σ): %0.4f', x, mu, sigma, pdf );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-anglit-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-anglit-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-anglit-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-anglit-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-anglit-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-anglit-pdf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-anglit-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-anglit-pdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[anglit-distribution]: https://en.wikipedia.org/wiki/Anglit_distribution

</section>

<!-- /.links -->
