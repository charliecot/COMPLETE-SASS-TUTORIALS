# SASS / SCSS COMPLETE REFERENCE

## From Project Setup → Gulp → File Structure → Partials → Variables → Mixins → Functions → Built-in Functions → Responsive Design → Advanced Sass

---

# 1. WHAT IS SASS?

**Sass** = Syntactically Awesome Style Sheets.

Sass is a CSS preprocessor.

It allows you to write advanced CSS using features such as:

* Variables
* Nesting
* Partials
* Modules
* Mixins
* Functions
* Loops
* Conditions
* Maps
* Lists
* Mathematical operations
* Color manipulation
* Reusable styles
* File organization

The browser does NOT directly understand SCSS.

You write:

```scss
$primary-color: blue;

.button {
    color: $primary-color;
}
```

Sass compiles it into normal CSS:

```css
.button {
    color: blue;
}
```

---

# 2. SASS VS SCSS

There are two Sass syntaxes.

## SCSS

SCSS looks very similar to normal CSS.

File:

```text
style.scss
```

Example:

```scss
$primary-color: blue;

body {
    background-color: $primary-color;
}
```

This is the syntax most developers use.

---

## Indented Sass Syntax

File:

```text
style.sass
```

Example:

```sass
$primary-color: blue

body
    background-color: $primary-color
```

Notice:

SCSS:

```scss
body {
    color: red;
}
```

Sass:

```sass
body
    color: red
```

For this document, we will use:

```text
.scss
```

---

# 3. INSTALLING SASS

If you are using Node.js:

```bash
npm install -D sass
```

Check:

```bash
npx sass --version
```

Compile:

```bash
npx sass src/scss/main.scss dist/css/main.css
```

Meaning:

```text
src/scss/main.scss
        ↓
      Sass
        ↓
dist/css/main.css
```

---

# 4. WATCH MODE

Instead of compiling every time manually:

```bash
npx sass --watch src/scss/main.scss dist/css/main.css
```

Now Sass watches your files.

Whenever you save:

```text
main.scss
```

Sass automatically updates:

```text
main.css
```

---

# 5. PACKAGE.JSON SCRIPT

Instead of typing the long command every time:

```json
{
    "scripts": {
        "sass": "sass src/scss/main.scss dist/css/main.css",
        "sass:watch": "sass --watch src/scss/main.scss dist/css/main.css"
    }
}
```

Run:

```bash
npm run sass
```

or:

```bash
npm run sass:watch
```

---

# 6. RECOMMENDED SASS PROJECT STRUCTURE

A professional project can look like:

```text
project/
│
├── src/
│   └── scss/
│       │
│       ├── main.scss
│       │
│       ├── abstracts/
│       │   ├── _variables.scss
│       │   ├── _functions.scss
│       │   ├── _mixins.scss
│       │   └── _placeholders.scss
│       │
│       ├── base/
│       │   ├── _reset.scss
│       │   ├── _typography.scss
│       │   └── _base.scss
│       │
│       ├── components/
│       │   ├── _button.scss
│       │   ├── _card.scss
│       │   ├── _navbar.scss
│       │   └── _form.scss
│       │
│       ├── layout/
│       │   ├── _header.scss
│       │   ├── _footer.scss
│       │   ├── _grid.scss
│       │   └── _container.scss
│       │
│       ├── pages/
│       │   ├── _home.scss
│       │   ├── _about.scss
│       │   └── _contact.scss
│       │
│       └── themes/
│           ├── _light.scss
│           └── _dark.scss
│
├── dist/
│   └── css/
│       └── main.css
│
├── index.html
├── package.json
└── gulpfile.js
```

---

# 7. SASS FILE NAMING

Sass partial files normally begin with:

```text
_
```

Examples:

```text
_variables.scss
_mixins.scss
_buttons.scss
_functions.scss
```

The `_` tells Sass that this is a **partial file**.

A partial is normally not compiled directly into its own CSS file.

Instead:

```text
_variables.scss
        ↓
main.scss
        ↓
main.css
```

---

# 8. MAIN SCSS FILE

Your main entry point can be:

```text
main.scss
```

Example:

```scss
@use "abstracts/variables";
@use "abstracts/functions";
@use "abstracts/mixins";

@use "base/reset";
@use "base/base";

@use "components/button";
@use "components/card";

@use "layout/header";
@use "layout/footer";
```

`main.scss` becomes the main Sass entry point.

---

# 9. PARTIALS

Create:

```text
_variables.scss
```

Example:

```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;
```

Then:

```scss
@use "variables";
```

Access the variable:

```scss
.button {
    background-color: variables.$primary-color;
}
```

---

# 10. @USE

Modern Sass recommends:

```scss
@use
```

instead of the older:

```scss
@import
```

Example:

```scss
@use "variables";
```

Then:

```scss
body {
    color: variables.$text-color;
}
```

---

# 11. @IMPORT

Older Sass code may contain:

```scss
@import "variables";
```

Then:

```scss
body {
    color: $text-color;
}
```

However, for new projects prefer:

```scss
@use "variables";
```

because `@use` provides better module organization and avoids many global namespace problems.

---

# 12. NAMESPACES WITH @USE

Suppose:

```text
_variables.scss
```

contains:

```scss
$primary-color: blue;
```

Use:

```scss
@use "variables";

button {
    background: variables.$primary-color;
}
```

The namespace is:

```text
variables
```

---

# 13. CUSTOM NAMESPACE

You can rename the namespace:

```scss
@use "variables" as vars;
```

Then:

```scss
button {
    background: vars.$primary-color;
}
```

---

# 14. @USE AS *

You can remove the namespace:

```scss
@use "variables" as *;
```

Then:

```scss
button {
    background: $primary-color;
}
```

However, be careful because this can cause naming conflicts.

Generally prefer:

```scss
@use "variables";
```

---

# 15. VARIABLES

Sass variables begin with:

```text
$
```

Example:

```scss
$primary-color: #3498db;
$font-size: 16px;
$border-radius: 8px;
```

Use:

```scss
button {
    color: white;
    background-color: $primary-color;
    font-size: $font-size;
    border-radius: $border-radius;
}
```

---

# 16. VARIABLE TYPES

Sass supports several values.

## Strings

```scss
$font: "Arial";
```

## Numbers

```scss
$size: 20px;
$ratio: 1.5;
```

## Colors

```scss
$blue: #3498db;
```

## Booleans

```scss
$is-dark: true;
```

## Null

```scss
$value: null;
```

## Lists

```scss
$fonts: Arial, Helvetica, sans-serif;
```

## Maps

```scss
$colors: (
    primary: blue,
    secondary: green,
    danger: red
);
```

---

# 17. VARIABLE DEFAULT VALUES

Use:

```scss
$primary-color: blue !default;
```

This means:

"If another value has already been assigned, don't overwrite it."

Useful for configurable libraries.

---

# 18. !GLOBAL

Normally a variable inside a scope stays within that scope.

You can explicitly change a global variable using:

```scss
$color: red;

.example {
    $color: blue !global;
}
```

Use this carefully.

---

# 19. NESTING

Normal CSS:

```css
.navbar {
    background: black;
}

.navbar ul {
    display: flex;
}

.navbar ul li {
    list-style: none;
}
```

SCSS:

```scss
.navbar {
    background: black;

    ul {
        display: flex;

        li {
            list-style: none;
        }
    }
}
```

Sass generates:

```css
.navbar {
    background: black;
}

.navbar ul {
    display: flex;
}

.navbar ul li {
    list-style: none;
}
```

---

# 20. THE & PARENT SELECTOR

The:

```scss
&
```

represents the parent selector.

Example:

```scss
.button {
    color: white;

    &:hover {
        background: blue;
    }
}
```

Produces:

```css
.button {
    color: white;
}

.button:hover {
    background: blue;
}
```

---

# 21. ACTIVE

```scss
.button {
    &:active {
        transform: scale(0.98);
    }
}
```

---

# 22. FOCUS

```scss
.input {
    &:focus {
        outline: 2px solid blue;
    }
}
```

---

# 23. CLASS COMBINATION

```scss
.button {
    &.primary {
        background: blue;
    }

    &.danger {
        background: red;
    }
}
```

Produces:

```css
.button.primary {
    background: blue;
}

.button.danger {
    background: red;
}
```

---

# 24. PSEUDO ELEMENTS

```scss
.title {
    &::before {
        content: "";
    }

    &::after {
        content: "";
    }
}
```

---

# 25. MEDIA QUERIES

You can nest media queries:

```scss
.container {
    width: 1200px;

    @media (max-width: 768px) {
        width: 100%;
    }
}
```

---

# 26. VARIABLES FOR BREAKPOINTS

```scss
$mobile: 576px;
$tablet: 768px;
$desktop: 1200px;
```

Use:

```scss
.container {
    width: 1200px;

    @media (max-width: $tablet) {
        width: 100%;
    }
}
```

---

# 27. MIXINS

A mixin stores reusable CSS.

Define:

```scss
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Use:

```scss
.container {
    @include center;
}
```

---

# 28. MIXIN WITH PARAMETERS

```scss
@mixin center($direction) {
    display: flex;
    flex-direction: $direction;
    justify-content: center;
    align-items: center;
}
```

Use:

```scss
.container {
    @include center(row);
}
```

Another:

```scss
.column {
    @include center(column);
}
```

---

# 29. MIXIN DEFAULT PARAMETERS

```scss
@mixin button($background: blue, $color: white) {
    background: $background;
    color: $color;
    padding: 10px 20px;
}
```

Use default:

```scss
.button {
    @include button;
}
```

Custom:

```scss
.success {
    @include button(green, white);
}
```

---

# 30. KEYWORD ARGUMENTS

Instead of:

```scss
@include button(green, white);
```

You can use:

```scss
@include button(
    $background: green,
    $color: white
);
```

This is easier to understand.

---

# 31. @CONTENT

Mixins can accept a block of CSS.

```scss
@mixin responsive {
    @media (max-width: 768px) {
        @content;
    }
}
```

Use:

```scss
.container {
    width: 1200px;

    @include responsive {
        width: 100%;
    }
}
```

Result:

```css
.container {
    width: 1200px;
}

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
```

---

# 32. FUNCTIONS

A Sass function returns a value.

Example:

```scss
@function double($number) {
    @return $number * 2;
}
```

Use:

```scss
.box {
    width: double(100px);
}
```

Output:

```css
.box {
    width: 200px;
}
```

---

# 33. FUNCTION WITH MULTIPLE PARAMETERS

```scss
@function calculate-width($width, $padding) {
    @return $width - ($padding * 2);
}
```

Use:

```scss
.container {
    width: calculate-width(1200px, 20px);
}
```

---

# 34. @RETURN

A Sass function normally returns a value using:

```scss
@return
```

Example:

```scss
@function add($a, $b) {
    @return $a + $b;
}
```

---

# 35. IF CONDITIONS

Sass supports:

```scss
@if
@else if
@else
```

Example:

```scss
@mixin text-color($theme) {

    @if $theme == dark {
        color: white;
    }

    @else if $theme == light {
        color: black;
    }

    @else {
        color: gray;
    }
}
```

Use:

```scss
body {
    @include text-color(dark);
}
```

---

# 36. @IF WITH VARIABLES

```scss
$theme: dark;

body {

    @if $theme == dark {
        background: black;
        color: white;
    }

    @else {
        background: white;
        color: black;
    }
}
```

---

# 37. @EACH LOOP

Useful for creating classes automatically.

```scss
$colors: (
    primary: blue,
    success: green,
    danger: red
);

@each $name, $color in $colors {

    .text-#{$name} {
        color: $color;
    }
}
```

Produces:

```css
.text-primary {
    color: blue;
}

.text-success {
    color: green;
}

.text-danger {
    color: red;
}
```

---

# 38. STRING INTERPOLATION

Interpolation uses:

```scss
#{$variable}
```

Example:

```scss
$name: primary;

.button-#{$name} {
    background: blue;
}
```

Produces:

```css
.button-primary {
    background: blue;
}
```

---

# 39. @FOR LOOP

```scss
@for $i from 1 through 5 {

    .margin-#{$i} {
        margin: #{$i}rem;
    }

}
```

Produces:

```css
.margin-1 {
    margin: 1rem;
}

.margin-2 {
    margin: 2rem;
}

.margin-3 {
    margin: 3rem;
}

.margin-4 {
    margin: 4rem;
}

.margin-5 {
    margin: 5rem;
}
```

---

# 40. through VS to

`through` includes the final number.

```scss
@for $i from 1 through 5
```

Gives:

```text
1 2 3 4 5
```

`to` excludes the final number.

```scss
@for $i from 1 to 5
```

Gives:

```text
1 2 3 4
```

---

# 41. @WHILE

```scss
$i: 1;

@while $i <= 5 {

    .item-#{$i} {
        width: #{$i} * 20px;
    }

    $i: $i + 1;
}
```

Use `@while` carefully because a bad condition can create an infinite loop.

---

# 42. LISTS

A Sass list contains multiple values.

```scss
$spacing: 10px 20px 30px 40px;
```

Access values using:

```scss
list.nth()
```

Modern module syntax:

```scss
@use "sass:list";

$value: list.nth($spacing, 2);
```

Result:

```text
20px
```

---

# 43. LIST FUNCTIONS

Import:

```scss
@use "sass:list";
```

## list.nth()

```scss
list.nth($list, $index)
```

Example:

```scss
$colors: red, green, blue;

$value: list.nth($colors, 2);
```

Result:

```text
green
```

---

## list.length()

```scss
list.length($colors);
```

Returns:

```text
3
```

---

## list.append()

```scss
$new-list: list.append($colors, yellow);
```

---

## list.join()

```scss
$list1: red, green;
$list2: blue, yellow;

$new-list: list.join($list1, $list2);
```

---

# 44. MAPS

Maps store key/value pairs.

```scss
$colors: (
    primary: #3498db,
    secondary: #2ecc71,
    danger: #e74c3c
);
```

---

# 45. map.get()

Import:

```scss
@use "sass:map";
```

Get a value:

```scss
$primary: map.get($colors, primary);
```

---

# 46. MAP.PUT()

Add or update:

```scss
$colors: map.set(
    $colors,
    warning,
    orange
);
```

---

# 47. MAP.HAS-KEY()

Check whether a key exists:

```scss
map.has-key($colors, primary);
```

Returns:

```text
true
```

---

# 48. MAP.REMOVE()

```scss
$colors: map.remove($colors, danger);
```

---

# 49. MAP LOOP

```scss
@each $name, $color in $colors {

    .bg-#{$name} {
        background-color: $color;
    }

}
```

---

# 50. IMPORTANT SASS COLOR FUNCTIONS

Sass provides powerful color manipulation.

Older Sass code commonly uses:

```scss
lighten()
darken()
saturate()
desaturate()
adjust-hue()
transparentize()
opacify()
```

However, modern Dart Sass recommends the module-based color APIs, particularly:

```scss
@use "sass:color";
```

This is important because some older global color functions have been deprecated.

---

# 51. THE METHOD YOU REMEMBER: LIGHTEN()

The old syntax:

```scss
$blue: #3498db;

.lighter {
    background: lighten($blue, 20%);
}
```

This means:

"Make the color lighter by 20 percentage points in the HSL lightness channel."

Example:

```scss
$color: #3498db;

button {
    background: $color;

    &:hover {
        background: lighten($color, 10%);
    }
}
```

### IMPORTANT

For modern Sass, prefer:

```scss
@use "sass:color";

button {
    background: $color;

    &:hover {
        background: color.adjust(
            $color,
            $lightness: 10%
        );
    }
}
```

So if you remember a method called:

```scss
lighten()
```

that is probably the one you were thinking about.

---

# 52. color.adjust()

Modern Sass:

```scss
@use "sass:color";

$blue: #3498db;

.lighter {
    color: color.adjust(
        $blue,
        $lightness: 10%
    );
}
```

You can adjust:

```scss
$lightness
$saturation
$alpha
$red
$green
$blue
```

Example:

```scss
color.adjust(
    $color,
    $lightness: 10%
);
```

---

# 53. color.scale()

`color.scale()` is useful when you want to scale a property toward its maximum or minimum rather than simply adding a fixed amount.

```scss
@use "sass:color";

$blue: #3498db;

.lighter {
    color: color.scale(
        $blue,
        $lightness: 30%
    );
}
```

Think of:

```text
adjust()
```

as:

"change by this amount"

while:

```text
scale()
```

means:

"move this property proportionally toward its limit."

---

# 54. color.change()

Use `color.change()` when you want to explicitly set a color channel.

```scss
@use "sass:color";

$red: color.change(
    #3498db,
    $red: 255
);
```

You can change channels such as:

```scss
$red
$green
$blue
$alpha
```

---

# 55. DARKEN

Old:

```scss
darken($color, 10%);
```

Modern approach:

```scss
@use "sass:color";

color.adjust(
    $color,
    $lightness: -10%
);
```

Example:

```scss
button {
    background: blue;

    &:hover {
        background: color.adjust(
            blue,
            $lightness: -10%
        );
    }
}
```

---

# 56. SATURATE

Older:

```scss
saturate($color, 20%);
```

Modern:

```scss
@use "sass:color";

color.adjust(
    $color,
    $saturation: 20%
);
```

---

# 57. DESATURATE

Older:

```scss
desaturate($color, 20%);
```

Modern:

```scss
@use "sass:color";

color.adjust(
    $color,
    $saturation: -20%
);
```

---

# 58. ADJUST HUE

Older:

```scss
adjust-hue($color, 30deg);
```

Modern:

```scss
@use "sass:color";

color.adjust(
    $color,
    $hue: 30deg
);
```

---

# 59. ALPHA / TRANSPARENCY

Modern Sass:

```scss
@use "sass:color";

$color: color.adjust(
    #3498db,
    $alpha: -0.2
);
```

You can also use:

```scss
rgba(52, 152, 219, 0.5);
```

when appropriate.

---

# 60. MIX COLORS

You can mix two colors:

```scss
@use "sass:color";

$result: color.mix(
    red,
    blue,
    50%
);
```

This creates a mixture of the two colors.

---

# 61. COLOR.COMPLEMENT

```scss
@use "sass:color";

$complementary: color.complement(
    $primary-color
);
```

This calculates the complementary color.

---

# 62. BUILT-IN SASS MODULES

Modern Sass provides modules such as:

```scss
sass:color
sass:list
sass:map
sass:math
sass:meta
sass:string
sass:selector
sass:module
sass:random
sass:debug
sass:logger
```

---

# 63. MATH MODULE

Import:

```scss
@use "sass:math";
```

Examples:

```scss
math.div(100px, 2)
```

Result:

```text
50px
```

Modern Sass prefers:

```scss
math.div(100px, 2);
```

instead of relying on `/` for division.

---

# 64. MATH FUNCTIONS

Examples:

```scss
math.ceil(4.2);
math.floor(4.8);
math.round(4.5);
math.abs(-10);
math.min(10, 20, 5);
math.max(10, 20, 5);
```

---

# 65. MATH.POW()

```scss
math.pow(2, 3);
```

Result:

```text
8
```

---

# 66. MATH.PERCENTAGE()

```scss
math.percentage(0.5);
```

Result:

```text
50%
```

---

# 67. MATH.RANDOM()

Generate a random number:

```scss
math.random()
```

Or:

```scss
math.random(10)
```

The second version generates a random integer between:

```text
1 and 10
```

---

# 68. STRING MODULE

```scss
@use "sass:string";
```

Useful functions include:

```scss
string.length()
string.quote()
string.unquote()
string.index()
string.insert()
string.slice()
string.to-upper-case()
string.to-lower-case()
```

Example:

```scss
$name: "hello";

$result: string.to-upper-case($name);
```

Result:

```text
HELLO
```

---

# 69. STRING LENGTH

```scss
@use "sass:string";

$name: "Sass";

$value: string.length($name);
```

Result:

```text
4
```

---

# 70. STRING INDEX

```scss
@use "sass:string";

$value: string.index("Hello World", "World");
```

---

# 71. STRING SLICE

```scss
@use "sass:string";

$value: string.slice("Hello", 1, 3);
```

---

# 72. MAP + MIXIN SYSTEM

This is extremely useful in real projects.

Variables:

```scss
$breakpoints: (
    mobile: 576px,
    tablet: 768px,
    desktop: 1200px
);
```

Mixin:

```scss
@use "sass:map";

@mixin respond($device) {

    @media (max-width: map.get($breakpoints, $device)) {
        @content;
    }

}
```

Use:

```scss
.container {
    width: 1200px;

    @include respond(tablet) {
        width: 100%;
    }
}
```

---

# 73. EXTEND

Sass supports:

```scss
@extend
```

Example:

```scss
.message {
    padding: 20px;
    border-radius: 8px;
}

.success {
    @extend .message;
    background: green;
}
```

This allows `.success` to inherit the selectors from `.message`.

---

# 74. PLACEHOLDERS

Instead of creating a normal class:

```scss
.message {
    padding: 20px;
}
```

you can use:

```scss
%message {
    padding: 20px;
}
```

Then:

```scss
.success {
    @extend %message;
    background: green;
}
```

The `%message` placeholder itself is not output as a CSS selector.

This is useful for reusable internal styles.

---

# 75. MIXIN VS EXTEND

### Mixin

```scss
@mixin button-style {
    padding: 10px;
}
```

Use:

```scss
.button {
    @include button-style;
}
```

### Extend

```scss
%button-style {
    padding: 10px;
}
```

Use:

```scss
.button {
    @extend %button-style;
}
```

General idea:

```text
@mixin
    ↓
Copies generated declarations into the selector

@extend
    ↓
Shares selector rules
```

For many component-based projects, mixins are easier to reason about.

---

# 76. OPERATORS

Sass supports calculations.

```scss
$width: 100px;

.box {
    width: $width * 2;
}
```

Result:

```css
width: 200px;
```

You can use:

```scss
+
-
*
/
%
```

For modern Sass division:

```scss
@use "sass:math";

$value: math.div(100px, 2);
```

---

# 77. COMPARISON OPERATORS

You can use:

```scss
==
!=
>
>=
<
<=
```

Example:

```scss
@if $size > 768px {
    // ...
}
```

---

# 78. LOGICAL OPERATORS

Sass supports logical expressions.

```scss
@if $theme == dark and $size == large {
    // ...
}
```

You can use:

```text
and
or
not
```

---

# 79. @WARN

Display a warning during compilation:

```scss
@warn "This variable is deprecated.";
```

Useful for Sass libraries.

---

# 80. @DEBUG

Print a value while compiling:

```scss
@debug $primary-color;
```

Useful for debugging Sass.

---

# 81. @ERROR

Stop compilation with an error:

```scss
@error "Invalid theme provided.";
```

Example:

```scss
@mixin theme($theme) {

    @if $theme != light and $theme != dark {
        @error "Theme must be light or dark.";
    }

}
```

---

# 82. CUSTOM THEME SYSTEM

Variables:

```scss
$themes: (
    light: (
        background: white,
        text: black
    ),

    dark: (
        background: #111,
        text: white
    )
);
```

Using:

```scss
@use "sass:map";

$dark-theme: map.get($themes, dark);

body {
    background: map.get($dark-theme, background);
    color: map.get($dark-theme, text);
}
```

---

# 83. DARK MODE

A simple CSS approach:

```scss
body {
    background: white;
    color: black;

    @media (prefers-color-scheme: dark) {
        background: #111;
        color: white;
    }
}
```

---

# 84. CSS CUSTOM PROPERTIES + SASS

Sass variables:

```scss
$primary: #3498db;
```

CSS variable:

```scss
:root {
    --primary: #3498db;
}
```

Use CSS variable:

```scss
button {
    background: var(--primary);
}
```

You can combine them:

```scss
$primary: #3498db;

:root {
    --primary: #{$primary};
}
```

The `#{$primary}` is interpolation.

---

# 85. SASS FUNCTION FOR REM

A useful real-world function:

```scss
@function rem($px) {
    @return math.div($px, 16px) * 1rem;
}
```

Remember:

```scss
@use "sass:math";
```

Use:

```scss
.title {
    font-size: rem(32px);
}
```

Result:

```css
.title {
    font-size: 2rem;
}
```

---

# 86. RESPONSIVE FONT FUNCTION

```scss
@function rem($px) {
    @return math.div($px, 16px) * 1rem;
}
```

Then:

```scss
h1 {
    font-size: rem(40px);

    @media (max-width: 768px) {
        font-size: rem(30px);
    }
}
```

---

# 87. SPACING SYSTEM

Create:

```scss
$spacing: (
    xs: 4px,
    sm: 8px,
    md: 16px,
    lg: 24px,
    xl: 32px,
    xxl: 48px
);
```

Use:

```scss
@use "sass:map";

.card {
    padding: map.get($spacing, lg);
}
```

---

# 88. GENERATING UTILITY CLASSES

```scss
@use "sass:map";

$spacing: (
    1: 4px,
    2: 8px,
    3: 16px,
    4: 24px,
    5: 32px
);

@each $key, $value in $spacing {

    .m-#{$key} {
        margin: $value;
    }

    .p-#{$key} {
        padding: $value;
    }

}
```

Creates:

```text
.m-1
.m-2
.m-3
.m-4
.m-5

.p-1
.p-2
.p-3
.p-4
.p-5
```

---

# 89. BUTTON COMPONENT

```scss
@mixin button($background, $color: white) {

    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background: $background;
    color: $color;
    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
}

.primary {
    @include button(#3498db);
}

.success {
    @include button(#2ecc71);
}

.danger {
    @include button(#e74c3c);
}
```

---

# 90. CARD COMPONENT

```scss
.card {
    padding: 20px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &__title {
        font-size: 24px;
    }

    &__body {
        margin-top: 10px;
    }

    &__footer {
        margin-top: 20px;
    }
}
```

This follows BEM-like naming:

```text
card
card__title
card__body
card__footer
```

---

# 91. BEM WITH SASS

BEM:

```text
Block
Element
Modifier
```

Example:

```scss
.card {

    &__title {
        font-size: 20px;
    }

    &__body {
        padding: 20px;
    }

    &--featured {
        border: 2px solid gold;
    }

}
```

Produces:

```css
.card__title {}

.card__body {}

.card--featured {}
```

---

# 92. GULP

Gulp is a JavaScript-based task runner.

It can automate tasks such as:

```text
SCSS compilation
CSS minification
JavaScript minification
Image processing
File watching
Browser synchronization
```

Install:

```bash
npm install --save-dev gulp
```

Install Sass support:

```bash
npm install --save-dev gulp-sass sass
```

---

# 93. GULPFILE.JS

Create:

```text
gulpfile.js
```

Example:

```js
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
    return src("src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("dist/css"));
}

function watchFiles() {
    watch("src/scss/**/*.scss", compileSass);
}

exports.sass = compileSass;
exports.watch = watchFiles;
exports.default = series(compileSass, watchFiles);
```

---

# 94. UNDERSTANDING THE GULPFILE

This:

```js
src("src/scss/main.scss")
```

means:

"Find my Sass entry file."

This:

```js
.pipe(sass())
```

means:

"Compile SCSS into CSS."

This:

```js
.pipe(dest("dist/css"))
```

means:

"Put the compiled CSS here."

This:

```js
watch("src/scss/**/*.scss", compileSass);
```

means:

"Watch all SCSS files inside the SCSS directory and compile when something changes."

---

# 95. GULP FILE GLOB

This:

```text
src/scss/**/*.scss
```

means:

```text
src/scss/
    ↓
all folders
    ↓
all .scss files
```

Examples:

```text
src/scss/main.scss
src/scss/components/button.scss
src/scss/layout/header.scss
src/scss/pages/home.scss
```

---

# 96. GULP WITH MINIFICATION

Install:

```bash
npm install --save-dev gulp-clean-css
```

Then:

```js
const cleanCSS = require("gulp-clean-css");

function compileSass() {
    return src("src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(dest("dist/css"));
}
```

---

# 97. GULP DEVELOPMENT VS PRODUCTION

Development:

```text
SCSS
 ↓
CSS
 ↓
Readable
```

Production:

```text
SCSS
 ↓
CSS
 ↓
Minification
 ↓
Smaller CSS
```

---

# 98. COMPLETE PROFESSIONAL SASS FLOW

A typical project:

```text
src/
└── scss/
    │
    ├── main.scss
    │
    ├── abstracts/
    │   ├── _variables.scss
    │   ├── _functions.scss
    │   ├── _mixins.scss
    │   └── _placeholders.scss
    │
    ├── base/
    │   ├── _reset.scss
    │   ├── _base.scss
    │   └── _typography.scss
    │
    ├── components/
    │   ├── _buttons.scss
    │   ├── _cards.scss
    │   ├── _forms.scss
    │   └── _navbar.scss
    │
    ├── layout/
    │   ├── _header.scss
    │   ├── _footer.scss
    │   ├── _grid.scss
    │   └── _container.scss
    │
    ├── pages/
    │   ├── _home.scss
    │   ├── _about.scss
    │   └── _contact.scss
    │
    └── themes/
        ├── _light.scss
        └── _dark.scss
```

---

# 99. MAIN.SCSS

```scss
// ABSTRACTS
@use "abstracts/variables";
@use "abstracts/functions";
@use "abstracts/mixins";
@use "abstracts/placeholders";

// BASE
@use "base/reset";
@use "base/base";
@use "base/typography";

// COMPONENTS
@use "components/buttons";
@use "components/cards";
@use "components/forms";
@use "components/navbar";

// LAYOUT
@use "layout/header";
@use "layout/footer";
@use "layout/grid";
@use "layout/container";

// PAGES
@use "pages/home";
@use "pages/about";
@use "pages/contact";

// THEMES
@use "themes/light";
@use "themes/dark";
```

---

# 100. VARIABLES FILE

`_variables.scss`

```scss
// COLORS

$primary-color: #3498db;
$secondary-color: #2ecc71;
$danger-color: #e74c3c;
$warning-color: #f39c12;

$text-color: #333;
$background-color: #fff;


// SPACING

$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;


// BREAKPOINTS

$mobile: 576px;
$tablet: 768px;
$desktop: 1200px;


// BORDER

$border-radius: 8px;


// TYPOGRAPHY

$font-family: Arial, sans-serif;
$font-size: 16px;
```

---

# 101. FUNCTIONS FILE

`_functions.scss`

```scss
@use "sass:math";

@function rem($px) {
    @return math.div($px, 16px) * 1rem;
}
```

---

# 102. MIXINS FILE

`_mixins.scss`

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin responsive($breakpoint) {

    @media (max-width: $breakpoint) {
        @content;
    }

}

@mixin button($background, $color: white) {

    background: $background;
    color: $color;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

}
```

---

# 103. BUTTON FILE

`_buttons.scss`

```scss
@use "../abstracts/mixins";

.button {

    @include mixins.button(#3498db);

    &:hover {
        opacity: 0.8;
    }

    &--success {
        @include mixins.button(#2ecc71);
    }

    &--danger {
        @include mixins.button(#e74c3c);
    }

}
```

---

# 104. RESET FILE

`_reset.scss`

```scss
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

img {
    max-width: 100%;
    display: block;
}

button,
input,
textarea,
select {
    font: inherit;
}
```

---

# 105. BASE FILE

```scss
@use "../abstracts/variables";

body {
    font-family: variables.$font-family;
    font-size: variables.$font-size;
    color: variables.$text-color;
    background: variables.$background-color;
}
```

---

# 106. IMPORTANT SASS BUILT-IN FUNCTION CHEAT SHEET

## Color

```scss
color.adjust()
color.scale()
color.change()
color.mix()
color.complement()
color.same()
color.channel()
color.is-missing()
```

Use:

```scss
@use "sass:color";
```

---

## Math

```scss
math.abs()
math.ceil()
math.floor()
math.round()
math.max()
math.min()
math.div()
math.pow()
math.sqrt()
math.random()
math.percentage()
math.clamp()
```

Use:

```scss
@use "sass:math";
```

---

## List

```scss
list.append()
list.index()
list.join()
list.length()
list.nth()
list.set-nth()
list.separator()
list.slash()
```

Use:

```scss
@use "sass:list";
```

---

## Map

```scss
map.get()
map.set()
map.merge()
map.deep-merge()
map.remove()
map.has-key()
map.keys()
map.values()
```

Use:

```scss
@use "sass:map";
```

---

## String

```scss
string.index()
string.insert()
string.length()
string.quote()
string.slice()
string.to-lower-case()
string.to-upper-case()
string.unquote()
```

Use:

```scss
@use "sass:string";
```

---

# 107. IMPORTANT DIRECTIVES

Remember these:

```scss
@use
@forward
@import       // legacy
@mixin
@include
@function
@return
@if
@else
@for
@each
@while
@extend
@debug
@warn
@error
@at-root
@content
```

---

# 108. @FORWARD

`@forward` is useful for creating a central module.

Example:

```text
abstracts/
    _variables.scss
    _mixins.scss
    _functions.scss
    _index.scss
```

`_index.scss`:

```scss
@forward "variables";
@forward "mixins";
@forward "functions";
```

Then:

```scss
@use "abstracts";
```

Instead of:

```scss
@use "abstracts/variables";
@use "abstracts/mixins";
@use "abstracts/functions";
```

This is useful for larger projects.

---

# 109. @AT-ROOT

`@at-root` moves a rule out of its current nesting.

Example:

```scss
.component {

    @at-root .special {
        color: red;
    }

}
```

Useful in advanced Sass architecture.

---

# 110. COMMON SASS MISTAKES

## Mistake 1

Wrong:

```scss
color: $primary;
```

when the variable was not defined.

Correct:

```scss
$primary: blue;
```

---

## Mistake 2

Wrong file:

```text
variable.scss
```

when your intended partial is:

```text
_variables.scss
```

---

## Mistake 3

Using an incorrect path:

```scss
@use "variables";
```

from the wrong directory.

You may need:

```scss
@use "../abstracts/variables";
```

---

## Mistake 4

Forgetting namespace:

```scss
@use "variables";

body {
    color: $primary-color;
}
```

Usually wrong with `@use`.

Correct:

```scss
body {
    color: variables.$primary-color;
}
```

---

# 111. OLD @IMPORT VS MODERN @USE

Old:

```scss
@import "variables";
@import "mixins";
```

Modern:

```scss
@use "variables";
@use "mixins";
```

Prefer:

```scss
@use
```

for new Sass projects.

---

# 112. LIGHTEN() QUICK REFERENCE

The method you were remembering is most likely:

```scss
lighten()
```

Example:

```scss
$primary: #3498db;

button {
    background: $primary;

    &:hover {
        background: lighten($primary, 10%);
    }
}
```

But for modern Sass, use:

```scss
@use "sass:color";

button {
    background: $primary;

    &:hover {
        background: color.adjust(
            $primary,
            $lightness: 10%
        );
    }
}
```

Similarly:

```scss
// Old style
darken($color, 10%)

// Modern
color.adjust($color, $lightness: -10%)
```

```scss
// Old
saturate($color, 10%)

// Modern
color.adjust($color, $saturation: 10%)
```

```scss
// Old
desaturate($color, 10%)

// Modern
color.adjust($color, $saturation: -10%)
```

---

# 113. COMPLETE MINI PROJECT

## Folder

```text
sass-project/
│
├── src/
│   └── scss/
│       ├── main.scss
│       │
│       ├── abstracts/
│       │   ├── _variables.scss
│       │   ├── _mixins.scss
│       │   └── _functions.scss
│       │
│       ├── base/
│       │   ├── _reset.scss
│       │   └── _base.scss
│       │
│       └── components/
│           ├── _button.scss
│           └── _card.scss
│
├── dist/
│   └── css/
│
├── index.html
├── package.json
└── gulpfile.js
```

---

## _variables.scss

```scss
$primary: #3498db;
$success: #2ecc71;
$danger: #e74c3c;

$text: #333;
$white: #fff;

$radius: 8px;

$mobile: 576px;
$tablet: 768px;
```

---

## _mixins.scss

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin button($background) {

    background: $background;
    color: white;

    padding: 10px 20px;

    border: none;
    border-radius: 8px;

    cursor: pointer;

}
```

---

## _functions.scss

```scss
@use "sass:math";

@function rem($px) {
    @return math.div($px, 16px) * 1rem;
}
```

---

## _button.scss

```scss
@use "../abstracts/variables";
@use "../abstracts/mixins";
@use "sass:color";

.button {

    @include mixins.button(
        variables.$primary
    );

    &:hover {

        background: color.adjust(
            variables.$primary,
            $lightness: -10%
        );

    }

    &--success {

        @include mixins.button(
            variables.$success
        );

    }

    &--danger {

        @include mixins.button(
            variables.$danger
        );

    }

}
```

---

## _card.scss

```scss
@use "../abstracts/variables";

.card {

    padding: 20px;

    border-radius:
        variables.$radius;

    background:
        variables.$white;

    box-shadow:
        0 4px 15px
        rgba(0, 0, 0, 0.1);

    &__title {

        font-size: 24px;
        color: variables.$text;

    }

    &__body {

        margin-top: 10px;

    }

}
```

---

# 114. MAIN.SCSS

```scss
@use "base/reset";
@use "base/base";

@use "components/button";
@use "components/card";
```

---

# 115. GULPFILE

```js
const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(
    require("sass")
);

function compileSass() {

    return src("src/scss/main.scss")
        .pipe(
            sass().on(
                "error",
                sass.logError
            )
        )
        .pipe(
            dest("dist/css")
        );

}

function watchFiles() {

    watch(
        "src/scss/**/*.scss",
        compileSass
    );

}

exports.sass = compileSass;

exports.watch = watchFiles;

exports.default = series(
    compileSass,
    watchFiles
);
```

Run:

```bash
npx gulp
```

Now edit:

```text
src/scss/
```

and Gulp automatically recompiles the CSS.

---

# 116. SASS WORKFLOW TO REMEMBER

The overall workflow is:

```text
Write SCSS
     ↓
Organize into partials
     ↓
@use modules
     ↓
main.scss
     ↓
Sass compiler / Gulp
     ↓
CSS
     ↓
Browser
```

---

# 117. WHEN SHOULD YOU USE EACH FEATURE?

| Sass feature     | Useful for                    |
| ---------------- | ----------------------------- |
| Variables        | Colors, spacing, fonts        |
| Nesting          | Organizing related selectors  |
| `&`              | Hover, active, modifiers, BEM |
| Partials         | Splitting large files         |
| `@use`           | Importing Sass modules        |
| `@forward`       | Building module indexes       |
| Mixins           | Reusable CSS patterns         |
| Functions        | Calculating values            |
| `@if`            | Conditional styles            |
| `@each`          | Generating classes            |
| `@for`           | Generating numbered classes   |
| Maps             | Theme/configuration systems   |
| Lists            | Groups of values              |
| `@extend`        | Sharing selectors             |
| Placeholders     | Reusable hidden base styles   |
| `color.adjust()` | Color modifications           |
| `color.scale()`  | Proportional color changes    |
| `math.*`         | Calculations                  |
| Gulp             | Automation/build workflow     |

---

# 118. MOST IMPORTANT SASS PATTERNS TO MEMORIZE

### Variable

```scss
$primary: blue;
```

### Nesting

```scss
.card {
    .title {
        color: red;
    }
}
```

### Parent selector

```scss
.button {
    &:hover {
        background: red;
    }
}
```

### Mixin

```scss
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Include

```scss
.container {
    @include center;
}
```

### Function

```scss
@function double($number) {
    @return $number * 2;
}
```

### Condition

```scss
@if $theme == dark {
    background: black;
}
```

### Loop

```scss
@each $name, $color in $colors {
    .text-#{$name} {
        color: $color;
    }
}
```

### Map

```scss
$colors: (
    primary: blue,
    danger: red
);
```

### Get map value

```scss
map.get($colors, primary);
```

### Modern color manipulation

```scss
@use "sass:color";

color.adjust(
    $color,
    $lightness: 10%
);
```

### Partial

```text
_variables.scss
```

### Module

```scss
@use "variables";
```

### Forward

```scss
@forward "variables";
```

---

# 119. THE BIG PICTURE

Think about Sass this way:

```text
                    SASS
                     │
       ┌─────────────┼─────────────┐
       │             │             │
   Variables      Nesting       Modules
       │             │             │
       │             │       @use / @forward
       │             │
       └──────┬──────┘
              │
           Mixins
              │
          Functions
              │
       ┌──────┼──────┐
       │      │      │
      @if   @each   @for
       │      │      │
       └──────┼──────┘
              │
           Maps/Lists
              │
        Built-in modules
              │
     ┌────────┼─────────┐
     │        │         │
   color     math      list
     │        │         │
     └────────┼─────────┘
              │
             CSS
              │
            Gulp
              │
        Production CSS
```

---

# 120. FINAL SASS CHEAT SHEET

```scss
// VARIABLE
$color: blue;


// NESTING
.card {
    .title {
        color: $color;
    }
}


// PARENT SELECTOR
.button {
    &:hover {
        background: red;
    }
}


// MIXIN
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}


// INCLUDE
.box {
    @include center;
}


// FUNCTION
@function double($number) {
    @return $number * 2;
}


// IF
@if $theme == dark {
    background: black;
}


// EACH
@each $name, $color in $colors {
    .text-#{$name} {
        color: $color;
    }
}


// FOR
@for $i from 1 through 5 {
    .item-#{$i} {
        margin: #{$i}px;
    }
}


// MAP
$colors: (
    primary: blue,
    danger: red
);


// MAP GET
@use "sass:map";

color: map.get(
    $colors,
    primary
);


// COLOR
@use "sass:color";

color: color.adjust(
    #3498db,
    $lightness: 10%
);


// MATH
@use "sass:math";

width: math.div(
    100px,
    2
);


// LIST
@use "sass:list";

$value: list.nth(
    $colors,
    1
);


// MODULE
@use "variables";


// FORWARD
@forward "variables";


// DEBUG
@debug $color;


// WARNING
@warn "Check this value";


// ERROR
@error "Invalid value";


// CONTENT
@mixin responsive {
    @media (max-width: 768px) {
        @content;
    }
}


// EXTEND
%button {
    padding: 10px;
}

.primary {
    @extend %button;
}
```

---

# THE MOST IMPORTANT THINGS TO LEARN FIRST

Do not try to memorize everything at once.

Learn in this order:

```text
1. SCSS syntax
        ↓
2. Variables
        ↓
3. Nesting
        ↓
4. &
        ↓
5. Partials
        ↓
6. @use
        ↓
7. Mixins
        ↓
8. Functions
        ↓
9. Maps
        ↓
10. @if
        ↓
11. @each
        ↓
12. @for
        ↓
13. Color functions
        ↓
14. Math functions
        ↓
15. @forward
        ↓
16. Advanced architecture
        ↓
17. Gulp/build automation
```

The key idea is:

**Sass is not a replacement for CSS. It is a tool that helps you write, organize, reuse, calculate, and generate CSS more efficiently.**
