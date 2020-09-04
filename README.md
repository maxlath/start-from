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
The case can be done with grep, by abusing the `--after-context` option:
```sh
# Set 'infinity' to more than the number of lines in your file
infinity=1000000000000
cat ./some_file | grep "some pattern" --after-context $infinity
```
