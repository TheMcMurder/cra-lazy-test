# running project

## Dev mode (slower)
1. `yarn start`
2. wait for console to show that the dev server is up and running
3. open the URL in the console

## Prod mode
1. `yarn build`
2. npx http-serve
3. Open the url in the console

## Why does this project exist

Test some extreme `react.lazy` scenarios in chrome to see if an internal bug is actually related to `react.lazy` or if that's a false flag

### Okay but 5k files is ridiculous

Yup.

#### How do I change it?

1. Delete `src/generated`
2. Create a new folder in `src` called `generated`
3. change the value `numberToGenerate` in `scripts/generate-files` to your desired number
4. change the value `laziesLength` in `src/App.js` to your desired number

### Couldn't you use webpack.replace to make changing the number easier?

Yup.

#### Why didn't you?

🤷‍♂️