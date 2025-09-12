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

<WindowMockup color="light">

</WindowMockup>

<WindowMockup color="dark">

</WindowMockup>

```html
<WindowMockup color="light">

</WindowMockup>
```

```html
<WindowMockup color="dark">

</WindowMockup>
```

<WindowMockup light>

</WindowMockup>

<WindowMockup dark>

</WindowMockup>

```html
<WindowMockup light>

</WindowMockup>
```

```html
<WindowMockup dark>

</WindowMockup>
```

</div>

---

# Wrap a codeblock

<div grid="~ cols-2" gap-4>

<WindowMockup codeblock>

```shell
$ echo "Hello, World!"
Hello, World!
```

</WindowMockup>

```shell window
$ echo "Hello, World!"
Hello, World!
```

```html
    <WindowMockup codeblock>

    ```shell
    $ echo "Hello, World!"
    Hello, World!
    ```

    </WindowMockup>
```

```html
    ```shell window
    $ echo "Hello, World!"
    Hello, World!
    ```
```

</div>

---

# Code block with color scheme

<div grid="~ cols-2" gap-4>

<WindowMockup codeblock color="light">

```shell
$ echo "Hello, World!"
Hello, World!
```

</WindowMockup>

<WindowMockup codeblock color="dark">

```shell
$ echo "Hello, World!"
Hello, World!
```

</WindowMockup>

```html
    <WindowMockup codeblock color="light">

    ```shell
    $ echo "Hello, World!"
    Hello, World!
    ```

    </WindowMockup>
```

```html
    <WindowMockup codeblock color="dark">

    ```shell
    $ echo "Hello, World!"
    Hello, World!
    ```

    </WindowMockup>
```


</div>

---

# Codeblock syntax options

<div grid="~ cols-2" gap-4>

```shell window {color: 'light'}
$ echo "Hello, World!"
Hello, World!
```

```shell window {color: 'dark'}
$ echo "Hello, World!"
Hello, World!
```

```html
    ```shell window {color: 'light'}
    $ echo "Hello, World!"
    Hello, World!
    ```
```

```html
    ```shell window {color: 'dark'}
    $ echo "Hello, World!"
    Hello, World!
    ```
```

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
