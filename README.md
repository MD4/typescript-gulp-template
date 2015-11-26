# typescript-gulp-template

My typescript-gulp template !

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

```gulp```
