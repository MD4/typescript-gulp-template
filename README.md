# typescript-gulp-template

My typescript-gulp template !
Starter kit for building libs using :
 - typescript
 - gulp
 - mocha
 - typedoc

## Install
```
git clone https://github.com/MD4/typescript-gulp-template.git
cd typescript-gulp-template
npm install
```

## Usage

### Dist
Make a dist bundled package :

```gulp dist```
 - Output bundle : ```./dist```
 - Output documentation (typedoc) : ```./doc```


### Test
Runs mocha tests in ```./test``` :

```gulp test```

### Clean
Clean dist/doc/compiled files :

```gulp clean```

Clean all generated files (including node_modules etc.) :

```gulp clean:all```

### Watch (WIP)

Watch sources & build :

```gulp ```


## License

```
Copyright (C) 20015 Martin Dequatremare

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
