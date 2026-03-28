# 0xMiden Epoch: ZK Time-Locked Notes Interface

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Alpha%20(Testnet)-orange.svg)
![Blockchain](https://img.shields.io/badge/Network-0xPolygonMiden-purple)

**0xMiden Epoch** is a minimalist, fully client-side interface designed to experiment with Miden Assembly (MASM) and native Account Abstraction on the **0xPolygonMiden** network. It demonstrates how to issue cryptographic Time-Locked Notes without relying on heavy EVM smart contracts.

## ⚡ The Architecture

Instead of utilizing global state variables like Ethereum's `block.timestamp`, Miden Epoch leverages Miden's unique UTXO-based Note model. 

When a user initiates a lock, the interface dynamically constructs a MASM constraint script that asserts the `push.env.block_number`. The Heavy ZK-STARK proving algorithm is intended to be executed entirely locally via the `@miden-sdk/miden-sdk` WebWorker, ensuring total privacy until the exact unlock epoch is breached.

### Core MASM Logic Implemented:
```masm
begin
    push.{target_block}
    push.env.block_number
    gte assert
    # ... asset transfer logic ...
end
```

## 🛠️ Built With
- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS (Vercel-Brutalist Aesthetic)
- **Blockchain SDK:** `@miden-sdk/miden-sdk` (Simulation Mode enabled for V1 UI demo)

## 🚀 Getting Started

**Run locally for development:**
```bash
npm install
npm run dev
```

**Build for Production:**
```bash
npm run build
```

## 📜 Notice
This is a conceptual UI prototype designed to push the boundaries of what is possible on client-side ZK-Rollups. Currently simulating proving delays for frontend demonstration purposes prior to full testnet network integration.

---
*Built for the 0xPolygonMiden Builder Ecosystem.*
