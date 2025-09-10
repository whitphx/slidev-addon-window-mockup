---
title: "Slidev Addon: Window Mockup"
---

# Window Mockup Addon

<WindowMockup>

```js
function foo() {
  console.log(Math.random());
}

foo();
```

</WindowMockup>

---

# Color modes

<div grid="~ cols-2" gap-4>

<WindowMockup light>

</WindowMockup>

<WindowMockup dark>

</WindowMockup>

```html
<WindowMockup light> </WindowMockup>
```

```html
<WindowMockup dark> </WindowMockup>
```

</div>

---

# Window types

<div grid="~ cols-3" gap-4>

<WindowMockup variant="terminal">

```js
function bar() {
  console.log(Math.random());
}

bar();
```

</WindowMockup>

<WindowMockup variant="editor">

```js
function baz() {
  console.log(Math.random());
}

baz();
```

</WindowMockup>

<WindowMockup variant="plain">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</WindowMockup>

</div>

---

# Custom padding

<WindowMockup padding="2rem">

```js
function qux() {
  console.log(Math.random());
}
qux();
```

</WindowMockup>

---

# Title

<WindowMockup title="My Code Example">

```js
function qux() {
  console.log(Math.random());
}
qux();
```

</WindowMockup>
