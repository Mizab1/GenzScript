# 💅 GenzScript: The Programming Language fr fr

![Vibes: Immaculate](https://img.shields.io/badge/Vibes-Immaculate-success?style=for-the-badge)
![Aura: +1000](https://img.shields.io/badge/Aura-%2B1000-blueviolet?style=for-the-badge)
![Dependencies: 0](https://img.shields.io/badge/Dependencies-Zero-brightgreen?style=for-the-badge)
![NPM Version](https://img.shields.io/npm/v/genzscript?color=red&style=for-the-badge)

Standard JavaScript is giving NPC energy. It's time to let your code cook.

**GenzScript** is a blazing fast, zero-dependency programming language that executes peak Gen Z slang natively. Write your algorithms with immaculate vibes, hit run, and let the GenzScript engine cook. No cap.

---

## 🚀 Getting Started

GenzScript is officially on the cloud. Say less.

### 1. Install Globally

Drop this into your terminal to install the compiler across your entire machine:

```bash
npm install -g genzscript
```

_(Pro-tip: Don't want to install it? Just use `npx genzscript` to run it on the fly!)_

### 2. Let him cook

Create a `.genz` file anywhere on your computer and run it using the global `cook` command:

```bash
cook my_script.genz
```

---

## 📖 The GenzScript Dictionary

If you want to pass the vibe check, you need to know the vocab. Here is how standard programming maps to GenzScript:

### Variables & Types

| JS Keyword       | GenzScript | Meaning                                   |
| :--------------- | :--------- | :---------------------------------------- |
| `const`          | `fax`      | An unchangeable truth.                    |
| `let`            | `lit`      | A variable that can change.               |
| `var`            | `sus`      | Globally scoped, unpredictable, red flag. |
| `true` / `false` | `W` / `L`  | Win / Loss.                               |
| `null`           | `ghosted`  | Intentionally left blank.                 |

### Logic & Loops

| JS Keyword                | GenzScript                            | Meaning                                      |
| :------------------------ | :------------------------------------ | :------------------------------------------- |
| `if` / `else if` / `else` | `vibecheck` / `plot_twist` / `or_nah` | Standard branching logic.                    |
| `switch` / `case`         | `mood` / `era`                        | Checking different states (e.g. "flop era"). |
| `for` / `while`           | `grind` / `doomscroll`                | Loops.                                       |
| `break` / `continue`      | `dip` / `skrrt`                       | Escaping or skipping loops.                  |

### Functions & Error Handling

| JS Keyword            | GenzScript                   | Meaning                                     |
| :-------------------- | :--------------------------- | :------------------------------------------ |
| `function` / `return` | `cook` / `yeet`              | Preparing logic and throwing it back.       |
| `console.log()`       | `spill()`                    | Spilling the tea to the terminal.           |
| `try` / `catch`       | `send_it` / `caught_lacking` | Reckless execution & intercepting the flop. |
| `throw`               | `cancel`                     | Intentionally crashing the script.          |

---

## 💻 Example: The Rizz Calculator

Create a file called `rizz.genz` and drop this in:

```javascript
fax MINIMUM_RIZZ_REQUIRED = 50;
lit my_rizz = 0;

cook getRizzedUp(current_rizz) {
    spill("Time to glow up, fr fr...");

    // The grind loop: trying different outfits
    grind (lit fit = 1; fit <= 3; fit++) {
        current_rizz = current_rizz + 20;
        spill("Serving look #" + fit + ". Rizz is now at " + current_rizz);
    }
    yeet current_rizz;
}

send_it {
    my_rizz = getRizzedUp(my_rizz);

    vibecheck (my_rizz >= MINIMUM_RIZZ_REQUIRED) {
        spill("No cap, you have enough rizz. Main character energy!");
    } or_nah {
        cancel "Major L. You're giving NPC.";
    }
} caught_lacking (error) {
    spill("Yikes: " + error);
}
```

Then run it:

```bash
cook rizz.genz
```

---

## 🎨 VS Code Syntax Highlighting

Writing GenzScript in plain white text is a massive L.

We built an official VS Code extension so your `fax` and `lit` keywords get beautifully color-coded.

1. Go to the `extension` folder in this repo.
2. Grab the `genzscript-1.0.0.vsix` file.
3. Open VS Code > Extensions > `...` Menu > **Install from VSIX**.

---

**License:** MIT (Main character Initiative Terms)  
_Built while doomscrolling._
