# Counter Program

This is a Rust-based smart contract developed using the Solana blockchain framework with Anchor. The Counter Program demonstrates the basic functionalities of creating, incrementing, and decrementing a counter on the Solana blockchain.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Program Structure](#program-structure)
- [Testing](#testing)
- [License](#license)

## Installation

To build and deploy the Counter Program, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your/repository.git
   cd counter-program
   ```

2. Build the program:

   ```sh
   cargo build-bpf
   ```

3. Deploy the program to Solana:

   ```sh
   solana program deploy target/deploy/counter_program.so
   ```

## Usage

The Counter Program provides three primary functions:

- `create`: Creates a new counter.
- `increment`: Increases the counter value by 1.
- `decrement`: Decreases the counter value by 1.

You can interact with the program using the Solana command-line tools or by integrating it into your Solana application.

### Example Usage

#### Creating a Counter

```rust
solana program invoke --program-id <program-id> --data 0 --accounts <counter_account> -k <your_private_key> create
```

#### Incrementing the Counter

```rust
solana program invoke --program-id <program-id> --data 0 --accounts <counter_account> -k <your_private_key> increment
```

#### Decrementing the Counter

```rust
solana program invoke --program-id <program-id> --data 0 --accounts <counter_account> -k <your_private_key> decrement
```

## Program Structure

The Counter Program consists of the following components:

- `counter_program`: The main program module that defines the create, increment, and decrement functions.
- `Create`: An Anchor `Accounts` structure for creating a new counter.
- `Counter`: An Anchor `Account` structure that stores the counter's authority and count.
- `Increment`: An Anchor `Accounts` structure for incrementing the counter.
- `Decrement`: An Anchor `Accounts` structure for decrementing the counter.

## Testing

The Counter Program includes a suite of tests to ensure its functionality. These tests are written using the Anchor framework and Solana tools. To run the tests, follow these steps:

1. Install the necessary dependencies if you haven't already:

   ```sh
   npm install @coral-xyz/anchor @solana/web3.js
   ```

2. Run the tests using the following command:

   ```sh
   anchor test
   ```

The provided test suite covers the following scenarios:

- Creating a Counter account.
- Incrementing the Counter.
- Decrementing the Counter.

The tests ensure that the Counter Program's functions work as expected and validate the smart contract's behavior on the Solana blockchain.

To customize the tests for your specific setup or to add more test cases, refer to the test file located at `<your-repo>/tests/counter-program.test.ts`.

**Note:** Make sure you have the required development environment and credentials set up for running the tests successfully.

## License

This Counter Program is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
