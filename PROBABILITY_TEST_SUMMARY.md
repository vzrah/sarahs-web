# PROBABILITY & STATISTICS TEST SUMMARY - KEY POINTS

## 🎯 YOUR BIGGEST ISSUE (Not your logic - it's READING)

You're rushing past the information the question gives you. You make **execution errors**, NOT logic errors. Your brain understands probability structure, but you need to slow down.

---

## 📋 CRITICAL FRAMEWORK: Always Do This FIRST

**Before calculating ANY without-replacement question, write:**

```
TOTAL = ___
DRAWS = ___
CONDITION = ___
```

**Example (Question 13):**

```
TOTAL = 12 (3 red + 4 blue + 5 green)
DRAWS = 3 (marbles selected)
CONDITION = exactly 1 red
```

✅ **This 5-second pause will save you MULTIPLE MARKS on Monday.**

---

## 🔴 Common Mistakes You're Making

### Mistake #1: Confusing the Number of Draws

- You read **3 draws** but thought **4 draws**
- **FIX:** Highlight/underline the number of draws immediately
- For exactly 1 red in **3 draws** → 3 positions (RNN, NRN, NNR)
- For exactly 1 red in **4 draws** → 4 positions (RNNN, NRNN, NNRN, NNNR)

**SHORTCUT:**

> **Exactly ONE desired item in N draws → N possible arrangements**

So:

- 2 draws → **2** arrangements
- 3 draws → **3** arrangements
- 4 draws → **4** arrangements
- 5 draws → **5** arrangements
- 10 draws → **10** arrangements

### Mistake #2: Wrong Starting Denominator

- You used **3/11** instead of **3/12**
- The first draw happens from the **TOTAL** pile
- There are 12 marbles BEFORE you draw anything

### Mistake #3: Forgetting Denominators Decrease

- **Without replacement** means one marble is removed after each draw
- 1st draw: 12 marbles available
- 2nd draw: 11 left (one was removed)
- 3rd draw: 10 left

**Pattern:**

```
START: 12 marbles
↓ (after 1st draw)
11 marbles left
↓ (after 2nd draw)
10 marbles left
↓ (after 3rd draw)
9 marbles left
```

---

## ✅ HOW TO SOLVE "EXACTLY 1 RED" CORRECTLY

**Question:** 3 red, 4 blue, 5 green. Draw 3 without replacement. Find P(exactly 1 red).

### Step 1: Write the framework

```
TOTAL = 12
DRAWS = 3
CONDITION = exactly 1 red
```

### Step 2: List all positions

Exactly 1 red in 3 draws means:

- **RNN** (red 1st, not-red 2nd, not-red 3rd)
- **NRN** (not-red 1st, red 2nd, not-red 3rd)
- **NNR** (not-red 1st, not-red 2nd, red 3rd)

**Total arrangements = 3**

### Step 3: Calculate ONE case (RNN)

```
Not-red marbles = 4 + 5 = 9

P(RNN) = (3/12) × (9/11) × (8/10)
         3/12 ← red is 3 out of TOTAL 12
         9/11 ← not-red is 9, and 11 remain
         8/10 ← one more non-red taken, 10 remain
```

### Step 4: Multiply by number of arrangements

```
P(exactly 1 red) = 3 × (3/12 × 9/11 × 8/10) = 9/22
```

---

## 🎓 KEY CONCEPTS TO LOCK IN

### 1. **Without Replacement**

- Once you draw, that item is **gone**
- Denominators **always decrease** by 1
- Next probability uses a smaller total

### 2. **"Exactly" Questions Need Multiple Cases**

- "Exactly 1 red" = count ALL ways this can happen
- For N draws with exactly 1 success = **N different arrangements**
- Add up all the cases (or multiply by N if each case is the same)

### 3. **Reading Numbers Carefully**

- Ms Le ALWAYS hides numbers in the wording
- Underline/highlight: total items, number of draws, the condition
- Don't assume — **always read the full question**

### 4. **Shortcut for "Exactly One" Questions**

If drawing N items and want exactly 1 of something:

- Number of arrangements = N
- Just calculate ONE arrangement, then multiply by N

---

## 🚨 YOUR TEST STRATEGY FOR MONDAY

1. **READ SLOWLY** - Don't rush. Highlight numbers.
2. **Write the framework** - TOTAL, DRAWS, CONDITION
3. **Draw/list the cases** - Especially for "exactly" or "at least" questions
4. **Calculate carefully** - Focus on fractions, don't panic
5. **Check denominators** - Do they decrease? (If without replacement: yes)
6. **Multiply by arrangements** - If multiple ways something can happen

---

## 💡 WHAT YOU'RE ACTUALLY GOOD AT

- ✅ You understand the **structure** of probability questions
- ✅ You know **which cases** to count (RNN, NRN, NNR)
- ✅ You recognize **contradictions** ("4 takes doesn't make sense")
- ✅ Your brain catches the structure — you just need to slow down

**You're NOT bad at probability. You're rushing. Fix the rushing, get the marks.** 😭

---

## ⏰ Final Reminder

That 5-second pause to write TOTAL, DRAWS, CONDITION is the difference between a passing mark and a really good mark on Monday. Do it every time.

Good luck! 🫡
