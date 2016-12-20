# justonce
Run a command just once in a given timespan (defaults at 60 seconds)

# Example usage
If you declare a function and call it more than once:
```
var justonce = require('justonce');
function runJustOnce() {
    justonce.run(
      () => console.log('happened just once'),
      60, // Seconds between runs
      () => console.log('already happened, waiting...')
     );
}

runJustOnce();
runJustOnce();
```
It will be called just once.
Example output:
```

happened just once
already happened, waiting...
```
