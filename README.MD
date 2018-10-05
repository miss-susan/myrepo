# Blockchain Project

I had to make two changes to your smart contract. The first one was to decrease the Solidity version to `0.4.24`. The second change was to add `emit` before `Instructor(_fName, _age);` 

## Installing the app
In the command prompt/terminal, type `npm install`

## Running the app
After the app is installed, you can run the app with `node index.js`. After the app is up and running, open [http://localhost](http://localhost) in your browser.

## Installing dependencies
I think you can skip the `truffle` part because you already have it installed. Make sure you have `ganache-cli` installed.

### Truffle
Truffle is one of the most popular Ethereum development frameworks and helps you create basic solidity templates to deploy.

You can install `truffle` by running 

```npm install truffle -g```

After the package is installed, run `truffle.cmd init` in the root directory.

If you're not using Windows to develop this project, you can drop the `.cmd` suffix from the truffle commands.

### Ganache Cli
Ganache-cli is the command line version of Ganache. It’s used to simulate full client behavior and make developing Ethereum applications faster, easier, and safer.

You can install `ganache-cli` by running

```npm install ganache-cli -g```

After you installed the package, you can run it by typing `ganache-cli` in your terminal/command prompt.

### Creating a smart contract
You can create a smart contract by running

```truffle.cmd create contract Coursetro```

You can skip this part because the smart contract is already created.


### Compiling the smart contract
You can compile the smart contract using the following command

```truffle.cmd compile```

You can skip this part because the smart contract is already compiled.

### Deploying the smart contract
Make sure `ganache-cli` is running. Type `truffle.cmd migrate` in your terminal/command prompt.

After the contract is deployed, you can copy the address after `Coursetro: ` and put it in `index.html` and `show.html`
