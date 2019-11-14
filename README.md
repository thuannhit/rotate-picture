# rotate-picture

**Guideline:** 

In order run this task, please follow these commands in Commandline console window:

```

git clone git@github.com:thuannhit/rotate-picture.git

cd /rotate-picture

npm install

npm start

```

Now we can see the result in the console.

In order to run the test of this code, just need to run this command:

```
npm test
```
The coverage number is being shown in the console window after we run tests.

In order to use the rotator module, please take a look at the example in index.js:
```
import { startRotating } from './rotator/rotator.js';
```
And then, we just need to transfer the input values to the function:
```
startRotating(picture <which is an array>, <number of times to rotate>)
```
