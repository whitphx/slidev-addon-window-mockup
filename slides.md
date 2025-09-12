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

# Wrap a code block

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

# Code block with highlight animation

<div grid="~ cols-2" gap-4>

<WindowMockup codeblock>

```shell {1|2}{at:1}
$ echo "Hello, World!"
Hello, World!
```

</WindowMockup>

```shell {1|2}{at:1} window
$ echo "Hello, World!"
Hello, World!
```

```html
    <WindowMockup codeblock>

    ```shell {1|2}{at:1}
    $ echo "Hello, World!"
    Hello, World!
    ```

    </WindowMockup>
```

```html
    ```shell {1|2}{at:1} window
    $ echo "Hello, World!"
    Hello, World!
    ```
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

# Title

<div grid="~ cols-3" gap-4>

<WindowMockup title="qux.js">

```js
function qux() {
  console.log(Math.random());
}
qux();
```

</WindowMockup>

```js [qux.js] window
function qux() {
  console.log(Math.random());
}
qux();
```

```js window {'title': 'qux.js'}
function qux() {
  console.log(Math.random());
}
qux();
```

```html
    <WindowMockup title="qux.js">

    ```js
    function qux() {
      console.log(Math.random());
    }
    qux();
    ```

    </WindowMockup>
```

```html
    ```js [qux.js] window
    function qux() {
      console.log(Math.random());
    }
    qux();
    ```
```

```html
    ```js window {'title': 'qux.js'}
    function qux() {
      console.log(Math.random());
    }
    qux();
    ```
```

</div>

---

# Title positioning and overflow

<div grid="~ cols-2" gap-4>

<WindowMockup title="Centered">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</WindowMockup>

<WindowMockup title="Looooooooooooooooooooooooooooooooooooooooooooooooooooooooong title">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</WindowMockup>

</div>

---

# Custom padding

<div grid="~ cols-2" gap-4>

<WindowMockup padding="2rem">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</WindowMockup>

```js window {padding: '2rem'}
function qux() {
  console.log(Math.random());
}
qux();
```

```html
    <WindowMockup padding="2rem">

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    </WindowMockup>
```

```html
    ```js window {padding: '2rem'}
    function qux() {
      console.log(Math.random());
    }
    qux();
    ```
```
</div>
