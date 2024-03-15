# The-BLOKC-Sui-Bootcamp
## Sui Exercises from The BLOKC

**Environment Setup:**
- `sui genesis` - to create a local sui environment
- `sui client` - to connect your sui client to the devnet
- `sui client new-address ed25519` - to create new wallet addresses

**Get sui Tokens:**
- `sui client faucet`

**Create new sui project:**
- `sui move new <project_name>`

**Build Move modules:**
- `sui move build`

**Test Move modules:**
- `sui move test`

**Publish Move smart contract:**
- `sui client publish --gas-budget 300000000`

**Call Module/Function from your smart contract**
- `sui client call --package <package_id> --module <module_name> --function <function_name> --args <treasurycap_id> 1000000 <recipient_address> --gas-budget 300000000`

**Sui SDK:**
- `yarn add @mysten/sui.js @mysten/dapp-kit @tanstack/react-query`