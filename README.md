# start-from

Command-line tool to ignore lines of a stream until a line matches a given pattern, typically to resume an operation from the point where it stopped.

## Install
```sh
npm install -g start-from
```

## Use
```sh
cat ./some_file | start-from "some pattern"
```

## Alternative
It's probably possible to do that with a tool like [`awk`](https://en.wikipedia.org/wiki/AWK), but I coudln't figure it out: if you know how, please enlighten me! :)
