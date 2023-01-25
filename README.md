# New Relic Winston repro

Expected:

- The program should log 'hello, world'

Actual:

- The program logs 'undefined'

## Running

    docker build -t repro .
    docker run repro

## Notes

The source file is index.ts. I also checked in the compiled
index.js for ease of reference.

This seems to be related to typescript / JS module types / import format?
If I skip the typescript boilerplate new relic doesn't seem to 
break winston.