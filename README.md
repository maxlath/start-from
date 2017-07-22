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
