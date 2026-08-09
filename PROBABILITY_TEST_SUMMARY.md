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

## 🔵 VENN DIAGRAM SHADING - UNION & INTERSECTION ONLY

**YOU ONLY NEED TO KNOW TWO SYMBOLS. Everything else is combinations of these.**

### THE TWO RULES

#### ∪ = **Union** = **OR** = **Everything in either/both circles**

**Shade:** ALL of A and ALL of B

```
A ∪ B = Both circles completely shaded
(###)(###)
 \###/
```

---

#### ∩ = **Intersection** = **AND** = **The overlap only**

**Shade:** ONLY the MIDDLE (where A and B cross)

```
A ∩ B = Just the middle part
( )( )
 \###/
```

---

## 🎯 COMBINATIONS TO MEMORIZE

### A' ∪ B = **NOT A, union with B**

**Think:** Everything that's NOT A, PLUS everything in B

**Shade:**

- Outside the A circle (including outside both)
- PLUS all of B

```
Basically: Everything EXCEPT the A-only part
(   )(###)
\###\###/
 \#######/
```

---

### (A ∪ B)' = **NOT (A or B)** = **Neither A nor B**

**Think:** The opposite of union. Everything outside both circles.

**Shade:** Only the area OUTSIDE both circles

```
Only the empty space around
( )( )
###
(outside area)
```

---

### A' ∩ B = **NOT A, AND with B**

**Think:** Stuff that's in B but NOT in A

**Shade:** Only the B-only part (not the overlap, not A)

```
Just B's side, not the middle
( )(###)
  \ /
```

---

### (A ∩ B)' = **NOT (A and B)** = **Everything EXCEPT the overlap**

**Think:** Shade everything except where they meet

**Shade:**

- A-only part
- B-only part
- Outside both circles
- NOT the middle

```
Everything BUT the middle
(###)(###)
 \   /
(###)
```

---

### A' ∩ B' = **NOT A, AND NOT B** = **Neither**

**Think:** Nothing in A, nothing in B

**Shade:** Only OUTSIDE both circles

```
Same as (A ∪ B)'
Just the outside
###
( )( )
###
```

---

### A' ∪ B' = **NOT A, OR NOT B** = **Not both**

**Think:** Either not in A, or not in B (or both)

**Shade:**

- Everything except A only
- OR everything except B only
- Basically: A-only + outside + B-only

```
Everything EXCEPT the overlap
(###)(###)
 \   /
(###)
```

---

## 💡 QUICK MEMORY SYSTEM

**Remember these mental pictures:**

| Operation | Picture               | What You Shade                 |
| --------- | --------------------- | ------------------------------ |
| A ∪ B     | Both circles          | **All** of both                |
| A ∩ B     | Tunnel/Cross          | **Middle only**                |
| A' ∪ B    | All + right           | Not-A + all of B               |
| (A ∪ B)'  | Outside               | **Outside only**               |
| A' ∩ B    | Right side            | B but not A                    |
| (A ∩ B)'  | Everything but middle | **Not the overlap**            |
| A' ∩ B'   | Outside only          | **Outside only** (same as top) |
| A' ∪ B'   | Everything but middle | **Not both** (same as row 6)   |

---

## 🎓 THE PATTERN

**With ∪ (Union/OR):** Add regions together
**With ∩ (Intersection/AND):** Find what's in BOTH
**With ' (Complement/NOT):** Flip it (shade the opposite)

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

---

## 📝 CHATGPT CONVERSATION - LAST TWO INTERACTIONS

### Question 15: ☠️ The Nasty Problem

**You said:**

> 15. ☠️ A bag contains 4 red, 3 blue and 2 green marbles. Three marbles are selected without replacement. Find the probability that at least one is blue AND exactly one is red. This one is deliberately nasty because you have two conditions to satisfy.
>
> For this question, what would you do, because i would just list all the outcomes

---

### ChatGPT's Response:

**YES — and listing the valid outcomes is actually a perfectly good method here.** The trick is that you don't need to list every possible colour sequence, only the ones that satisfy **both** conditions.

#### Question:

4 red, 3 blue, 2 green.  
3 marbles drawn without replacement.  
Find **P(at least one blue AND exactly one red)**.

---

#### Step 1: Translate the conditions

**Exactly one red** means:

- There must be exactly ONE R.

**At least one blue** means:

- There must be ONE OR MORE B.

We're drawing 3 total.

So if we already have exactly one R, the other two positions must contain:

- at least one B
- and therefore the possibilities are:
- **RBB, RBG, RGB, BRB, BGR, GBR, GBR...**

BUT let's organise this properly instead of getting lost in permutations.

The **colour combinations** that work are:

**1 red + 2 blue:**

- RBB

**1 red + 1 blue + 1 green:**

- RBG

That's it.

Because with exactly one red and at least one blue, there are only two **types** of selection:

**RBB or RBG**

Now we worry about their different orders.

---

#### Case 1: RBB

There are 3 possible positions for R:

- **RBB, BRB, BBR**

So **3 arrangements**.

One arrangement:
$$\frac{4}{9} \times \frac{3}{8} \times \frac{2}{7}$$

Multiply by 3:
$$3\left(\frac{4}{9} \times \frac{3}{8} \times \frac{2}{7}\right)$$

---

#### Case 2: RBG

Now all three colours are different.

There are:
**3! = 6**

possible arrangements:

- **RBG, RGB, BRG, BGR, GRB, GBR**

So:
$$6\left(\frac{4}{9} \times \frac{3}{8} \times \frac{2}{7}\right)$$

Notice something REALLY nice:

The probability of each valid arrangement is the same because each one contains exactly:

- 1 red
- 1 blue
- 1 green

---

#### So altogether:

$$(3 + 6)\left(\frac{4}{9} \times \frac{3}{8} \times \frac{2}{7}\right)$$

$$= 9\left(\frac{4}{9} \times \frac{3}{8} \times \frac{2}{7}\right)$$

$$= \boxed{\frac{2}{7}}$$

---

### BUT HERE'S WHAT TO DO IN YOUR POSITION

Honestly? **I would probably list the valid outcomes too.**

Because this question is specifically designed to be nasty, and you're trying to build confidence.

I'd write:

```
Exactly 1 R + at least 1 B
RBB BRB BBR RBG RGB BRG BGR GRB GBR
```

That's **9 valid arrangements**.

Then:
$$9\left(\frac{4}{9} \times \frac{3}{8} \times \frac{2}{7}\right) = \boxed{\frac{2}{7}}$$

---

#### 🔥 The important distinction

Don't list **every possible outcome**.

There are:
$$3^3 = 27$$

possible colour sequences if you consider R/B/G choices at each draw.

You only need the **9 that satisfy the conditions**.

And this is exactly the skill I want you developing:

**Translate the wording → determine what colour combinations are allowed → count their arrangements → calculate.**

So if you see a question like this on the test and your instinct is:

> "I'm just gonna list them."

**THAT IS FINE.**

As long as you're listing **only the valid outcomes** and you're not accidentally missing one.

---

# 🚨 COMPREHENSIVE TEST PREP - EVERYTHING YOU NEED TO KNOW

## 🟢 You are already strong at:

- Mean, Median, Mode
- Frequency/cumulative frequency
- Class centres
- Range, Quartiles, IQR
- Five-number summary
- Box plots
- Calculator STAT mode
- Basic probability
- Basic Venn diagrams

## 🟡 You need to consolidate:

- **Probability wording**
- **Exactly / at least / at most / neither**
- **Multi-step probability**
- **Without replacement**
- **Counting valid arrangements**
- **Choosing between Venn / table / array / tree**
- **Set notation**
- **Sampling/bias**
- **Stem-and-leaf interpretation**
- **Grouped frequency/histograms**

## 🔴 YOUR BIGGEST WEAKNESS

**READING THE QUESTION ACCURATELY BEFORE CALCULATING.**

We've literally caught you doing:

- 3 draws → accidentally thinking 4
- 12 total → accidentally starting with 11
- exactly one → accidentally trying an "at least one" complement

Your mathematical logic is actually improving quickly. Your biggest danger is **rushing and letting correct logic get attached to the wrong numbers/wording.**

**So on the test: READ → IDENTIFY → SET UP → CALCULATE → CHECK**

---

## 1. PROBABILITY FUNDAMENTALS

The fundamental formula:

$$P(E) = \frac{\text{favourable outcomes}}{\text{total outcomes}}$$

For equally likely outcomes. Probabilities are between 0 and 1 inclusive.

### Probability can be written as:

$$\frac{1}{2} = 0.5 = 50\%$$

### Sanity check

Probability can NEVER be:

- less than 0
- greater than 1

So if you get $\frac{17}{12}$ — 🚨 **STOP. Something is wrong.**

---

## 2. SAMPLE SPACE

The **sample space** is every possible outcome.

**Example: die:**
$$S = \{1, 2, 3, 4, 5, 6\}$$

**Example: 2 coins:**
$$\{HH, HT, TH, TT\}$$

⚠️ **HT and TH are different outcomes** when the two stages are distinguishable.

This is why "two heads, two tails, one of each" is **NOT 3 equally likely outcomes**. HT and TH are separate.

---

## 3. PROBABILITY WORDING — MEMORISE THIS

### "AND"

Usually means both conditions happen.
$$A \cap B$$

For independent sequential events, multiply along a path:
$$P(A \text{ then } B) = P(A) \times P(B)$$

### "OR"

Means either event, **including both**.
$$A \cup B$$

In a Venn diagram, shade the whole of A and B.

### "NOT"

Complement.
$$A'$$

means: **not A**

And: $$P(A') = 1 - P(A)$$

---

## 4. EXACTLY vs AT LEAST vs AT MOST

### EXACTLY 1

Means **one and only one**.

Two draws:

```
RN NR
```

NOT RR.

### AT LEAST 1

Means: **1 or more**

Two draws:

```
RN NR RR
```

**Shortcut:**
$$P(\text{at least one}) = 1 - P(\text{none})$$

⚠️ **This is where you nearly sold earlier.** If the question says **exactly one**, do NOT automatically use the "1 − none" shortcut.

### AT MOST 1

Means: **0 or 1**

Two draws:

```
NN RN NR
```

### EXACTLY 2

Means exactly two.

For 4 draws:

```
RRNN RNRN RNNR NRRN NRNR NNRR
```

There are **6 arrangements**.

---

## 5. THE ARRANGEMENT TRICK

If there are **N draws** and exactly **one** desired outcome:

**Exactly one red in 4 draws:**

```
RNNN NRNN NNRN NNNR
```

**4 cases.**

Exactly one red in 5 draws? **5 cases.**

**Exactly 3 red in 4 draws:** Don't place the 3 reds. Place the **one non-red**:

```
NRRR RNRR RRNR RRRN
```

Again, **4 cases**.

**YOUR RULE: Put the smaller group into the positions.** This saves you enormous amounts of time.

---

## 6. MULTIPLE ARRANGEMENTS

Suppose: 4 draws, exactly 2 red.

You found:

```
RRBB RBRB RBBR BRRB BRBR BBRR
```

6 arrangements.

If every arrangement has the same probability, you can:

$$\boxed{\text{number of arrangements} \times \text{probability of one arrangement}}$$

---

## 7. WITH REPLACEMENT vs WITHOUT REPLACEMENT

### WITH replacement

Take it → put it back.

Therefore: **Total stays the same.**

Example: 10 marbles.

- First: $\frac{4}{10}$
- Second: $\frac{4}{10}$

### WITHOUT replacement

Take it → DON'T put it back.

Therefore: **Total decreases by 1 after each draw.**

If you start with 12:

```
before draw 1 → 12
after draw 1 → 11
after draw 2 → 10
after draw 3 → 9
```

**YOUR TEST-DAY RULE:** Before calculating, physically write:

- **TOTAL = \_\_\_**
- **DRAWS = \_\_\_**

This prevents the exact mistake you made earlier.

---

## 8. TREE DIAGRAMS

Tree diagrams are useful for **two or more stages**, especially when the probabilities change.

### Along a branch → MULTIPLY

Example: $$P(R \rightarrow B) = P(R) \times P(B|R)$$

### Different successful branches → ADD

Example: Exactly one red:
$$P(RN) + P(NR)$$

---

## 9. WHEN TO USE A TREE

Use one when:

- several stages
- probabilities change
- without replacement
- the paths are complicated
- teacher asks you to show one

But **you don't have to draw a massive tree just because the question involves multiple draws.**

If you can clearly identify:

```
RNN NRN NNR
```

you may be faster doing it directly.

---

## 10. ARRAYS / TABLES

An array is basically a systematic table of outcomes for a **two-step experiment**.

### With replacement

Everything remains possible.

For 3 choices followed by 3 choices: $3 \times 3 = 9$

### Without replacement

Some outcomes disappear.

For 3 distinct objects: $3 \times 2 = 6$

---

## 11. VENN DIAGRAMS

You've basically got this now.

### Symbols

$$\cup = \text{union} = \text{OR}$$
$$\cap = \text{intersection} = \text{AND}$$
$$' = \text{complement} = \text{NOT}$$

### The four regions

Always mentally divide the diagram into:

- A only: $A \cap B'$
- A ∩ B: $A \cap B$
- B only: $A' \cap B$
- Neither: $A' \cap B'$

---

## 12. VENN WORD TRANSLATION

| Words   | Symbol       |
| ------- | ------------ |
| A or B  | $A \cup B$   |
| A and B | $A \cap B$   |
| not A   | $A'$         |
| A only  | $A \cap B'$  |
| B only  | $A' \cap B$  |
| neither | $A' \cap B'$ |

---

## 13. BRACKETS + APOSTROPHES

### $(A \cap B)'$

Do the brackets first: A AND B. That's the middle.

Then `'` means NOT.

**So: everything except the middle.**

### $(A \cup B)'$

First: A OR B. That's both circles.

Then NOT.

**So: outside both circles.**

---

## 14. TWO-WAY TABLES

Think: **four inner boxes + row/column totals.**

**The trick: Every row and column must add to its total.**

---

## 15. THE VENN FORMULA

If:

- total = T
- A = number in A
- B = number in B
- A ∩ B = number in both

Then:
$$|A \cup B| = |A| + |B| - |A \cap B|$$

---

## 16. INDEPENDENT vs DEPENDENT EVENTS

### Independent

Event A doesn't affect event B.

$$P(A \cap B) = P(A) \times P(B)$$

Example: Two coin flips.

### Dependent

Event A affects event B.

Use: $P(A \text{ then } B) = P(A) \times P(B|A)$

Example: Drawing without replacement.

---

## 17. RELATIVE FREQUENCY

$$\boxed{\text{Relative Frequency} = \frac{\text{frequency}}{\text{total}}}$$

This is the experimental probability.

---

## 18. SAMPLING

### Types

- **Simple random:** every person has equal chance
- **Systematic:** every nth person
- **Stratified:** divide into groups first, then randomly sample from each
- **Cluster:** randomly select groups, then survey all in those groups

### Bias

A sample is **biased** if it doesn't represent the population.

Examples:

- Only surveying online → misses offline people
- Only surveying morning → misses night workers
- Voluntary response → self-selected bias

---

## 19. STEM-AND-LEAF PLOTS

The **stem** is the tens digit.
The **leaf** is the units digit.

Example:

```
2 | 3 5 7
```

means: 23, 25, 27

Always **order the leaves.**

---

## 20. FREQUENCY TABLES

Shows how many times each value appears.

For grouped data: Use **class intervals**.

---

## 21. CUMULATIVE FREQUENCY

Add up frequencies as you go down the table.

**Cumulative frequency of a class = all frequencies up to and including that class.**

---

## 22. CUMULATIVE FREQUENCY GRAPHS

Plot cumulative frequency on y-axis.

Use **upper class boundary** on x-axis.

To find median: find 50% of total on y-axis, go across to curve, go down to x-axis.

---

## 23. MEAN FROM GROUPED DATA

$$\boxed{\text{Mean} = \frac{\sum(\text{class centre} \times \text{frequency})}{\text{total frequency}}}$$

---

## 24. MEDIAN FROM GROUPED DATA

Find the class containing the median using cumulative frequency.

Then use interpolation within that class.

---

## 25. MODE FROM GROUPED DATA

The **modal class** is the class with the highest frequency.

---

## 26. PERCENTAGE FREQUENCY

$$\boxed{\frac{\text{frequency}}{\text{total}} \times 100}$$

Example: 8 out of 40 students:
$$\frac{8}{40} \times 100 = 20\%$$

---

## 27. HISTOGRAMS

Unlike a normal bar graph: **Histogram bars touch.**

Because the intervals are continuous/numerical.

Know:

- x-axis = class intervals
- y-axis = frequency or percentage frequency
- bar height = frequency
- no gaps between columns

---

## 28. RANGE

$$\boxed{\text{Range} = \max - \min}$$

---

## 29. QUARTILES

First: **ORDER THE DATA.**

Then:
$$Q_2 = \text{median}$$

### Odd number of values

Find median.
**Remove the median.**
Find middle of lower half = Q1.
Find middle of upper half = Q3.

### Even number

Split into two equal halves.
Middle of lower = Q1.
Middle of upper = Q3.

---

## 30. IQR

$$\boxed{IQR = Q_3 - Q_1}$$

It represents the spread of the **middle 50%** of the data.

---

## 31. BOX PLOTS

**Five-number summary:**
$$\boxed{\min, Q_1, Q_2, Q_3, \max}$$

The box plot has:

```
min ── Q1 [──── Q2 ────] Q3 ── max
```

- left whisker = minimum
- left side of box = Q1
- line inside = median/Q2
- right side = Q3
- right whisker = maximum

Each section represents **25%** of the data.

---

## 32. READING BOX PLOTS

**Highest value?** Look at maximum.

**Highest median?** Compare Q2.

**Highest spread overall?** Compare range.

**Highest spread in middle 50%?** Compare IQR.

**More consistent?** Usually the dataset with the smaller IQR has less spread in its middle 50%.

---

## 33. BOX PLOT PERCENTAGES

- Q1 = 25th percentile
- Q2 = 50th percentile
- Q3 = 75th percentile

Therefore:

- **25%** below Q1.
- **50%** below Q2.
- **75%** below Q3.
- **25%** above Q3.

Example: If 80 students and Q3 = 70:
$$25\% \times 80 = 20$$

So **20 students are above 70**.

---

## 🚨 YOUR PERSONAL "DO NOT SELL" CHECKLIST

### Before EVERY probability question:

#### ① WHAT IS THE TOTAL?

Write it.

If there are 12 objects:
$$\boxed{\text{TOTAL} = 12}$$

Do NOT accidentally start with 11.

#### ② HOW MANY DRAWS?

Write it.

If it says three:
$$\boxed{\text{DRAWS} = 3}$$

Not 4. 😭

#### ③ REPLACEMENT?

Circle:

- **WITH** → total stays.
- **WITHOUT** → total decreases.

#### ④ WHAT EXACTLY DOES THE QUESTION SAY?

Underline:

- exactly
- at least
- at most
- neither
- not
- both
- only
- or
- and

#### ⑤ HOW MANY VALID CASES?

Before calculating.

Example: exactly one red in 3 draws

Immediately:

```
RNN NRN NNR
```

= 3.

#### ⑥ CHECK YOUR PATH

If you write: $RNN$

your probabilities MUST correspond to:

- red → not red → not red

Don't accidentally calculate RRR and call it RNN.

**This was your Q9 issue.**

#### ⑦ SANITY CHECK

Ask: Does my answer make sense?

If you calculated the probability of something very likely and got 0.02: 🚨 Check.

If you got $\frac{15}{10}$: 🚨 Definitely wrong.

---

## 🧠 YOUR ACTUAL WEAKNESS MAP

### 🟢 95%+ territory: Statistics calculations

You already have: calculator STAT, centre, frequency, cumulative frequency, 3 M's, quartiles, IQR, box plots.

Don't spend an hour relearning these. Just do a quick refresh.

### 🟢 Venn diagrams

You've improved massively.

You understand: $\cup = \text{OR}$, $\cap = \text{AND}$, $' = \text{NOT}$

And you've now understood expressions like: $A' \cap B$ and $A \cup B'$ and bracketed complements.

**You're good here.**

### 🟡 Probability structure

You're getting good at:

- identifying tree diagrams
- recognising replacement
- finding arrangements
- exactly one
- exactly two
- using complements

But you need to **slow down**.

---

## 🔴 YOUR #1 THING TO FIX: WORD → MATHEMATICS TRANSLATION

You know the maths. Your mistakes have mostly happened because your brain goes:

> "I KNOW THIS!!!"

and immediately calculates. 😭

Don't.

### Do this:

**QUESTION:**

> 3 counters are selected without replacement. Find the probability of exactly one red.

**YOUR BRAIN:**

- **TOTAL = 12**
- **DRAWS = 3**
- **WITHOUT replacement**
- **EXACTLY ONE red**
- **Cases = RNN, NRN, NNR**
- **One case:** $$\frac{3}{12} \times \frac{9}{11} \times \frac{8}{10}$$
- **× 3 cases**

Then calculate.

That takes maybe **10 seconds**, and it protects you from all three mistakes you made earlier.

---

## 🚨 TEST-DAY STRATEGY

### First pass

Do all the stuff you KNOW.

Statistics calculations, Venns, basic probability, tables.

Don't let one evil probability question eat five minutes.

### Probability question?

**Write: TOTAL / DRAWS / REPLACEMENT / CONDITION / CASES**

### Statistics question?

If it's raw data: **ORDER FIRST.**

### Sampling question?

Ask: **Who was actually surveyed? Does that represent everyone?**

### Box plot?

Find: **min → Q1 → Q2 → Q3 → max**

---

## 🚨 And Sarah, genuinely:

I don't think you're walking into this test without understanding the topic. Your biggest issue is that you sometimes move faster than your own reasoning.

The textbook itself frames the chapter around not just calculating, but **choosing and applying techniques and communicating reasoning** — which is exactly the skill we've been training.

You already proved that when you instantly saw:

```
RBBB, BRBB, BBRB, BBBR
```

without a tree.

That wasn't memorisation. **You understood the structure.**

So today, don't try to become "better at maths" in the last few hours.

Be **slower, more deliberate, and harder to trick.**

**Ms Le can make the question ugly. She cannot change the mathematics.** 😭🫡
