# CDN

* [UNPKG](https://unpkg.com/)
* [jsDelivr](https://www.jsdelivr.com/)


```html
<!-- loading the minified version -->
<script src="https://unpkg.com/ipfs/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>

<!-- loading the human-readable (not minified) version -->
<script src="https://unpkg.com/ipfs/dist/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.js"></script>
```

```html
<script>
const node = new window.Ipfs()

node.on('ready', () => {
  // Ready to use!
  // See https://github.com/ipfs/js-ipfs#core-api
})
</script>
```