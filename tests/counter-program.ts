import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { CounterProgram } from "../target/types/counter_program";
import { Keypair, SystemProgram } from "@solana/web3.js";

describe("counter-program", () => {
  anchor.setProvider(anchor.AnchorProvider.env())
  const provider = anchor.AnchorProvider.env()
  const program = anchor.workspace.CounterProgram as Program<CounterProgram>

	// create counter keypair
  let counter = Keypair.generate()

  it("Create Counter account!", async () => {
    const tx = await program.methods.create()
    .accounts({
      counter: counter.publicKey,
      authority: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId
    })
    .signers([counter])
    .rpc()
    console.log("Your transaction signature", tx)
  });

it("Increment the Counter", async () => {
  const tx = await program.methods.increment()
  .accounts({
    counter: counter.publicKey,
    authority: provider.wallet.publicKey
  })
  .signers([])
  .rpc()

  const account = await program.account.counter.fetch(counter.publicKey);
  console.log("Your transaction signature", tx)
  console.log("New counter value: ", account.count.toNumber())
});

it("Decrement the Counter", async () => {
  const tx = await program.methods.decrement()
  .accounts({
    counter: counter.publicKey,
    authority: provider.wallet.publicKey
  })
  .signers([])
  .rpc()

  const account = await program.account.counter.fetch(counter.publicKey);
  console.log("Your transaction signature", tx)
  console.log("New counter value: ", account.count.toNumber())
});
});

