var PAPER = {
  title: "Sequences & Series — arithmetic, geometric & sum to infinity (10 questions)",
  difficultyRanges: [
    { level: 1, from: 1, to: 3 },
    { level: 2, from: 4, to: 6 },
    { level: 3, from: 7, to: 8 },
    { level: 4, from: 9, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Arithmetic sequences — nth term",
    question: "The arithmetic sequence begins $3, 8, 13, 18, \\ldots$ (a) State the common difference $d$. (b) Write down the next two terms. (c) Find the general term $t_n$. (d) Find $t_{25}$. (e) Which term of the sequence equals $98$?",
    answer: "(a) $d = 8-3 = 5$. (b) $23, 28$. (c) $t_n = 3 + (n-1) \\times 5 = 5n - 2$. (d) $t_{25} = 5(25)-2 = 123$. (e) $5n-2 = 98 \\Rightarrow 5n = 100 \\Rightarrow n = \\mathbf{20}$. The 20th term equals 98."
  },
  {
    id: 2,
    category: "Geometric sequences — nth term",
    question: "The geometric sequence begins $2, 6, 18, 54, \\ldots$ (a) State the common ratio $r$. (b) Write down the next two terms. (c) Write the general term $t_n$. (d) Find $t_6$.",
    answer: "(a) $r = 6 \\div 2 = 3$. (b) $162, 486$. (c) $t_n = 2 \\times 3^{n-1}$. (d) $t_6 = 2 \\times 3^5 = 2 \\times 243 = \\mathbf{486}$."
  },
  {
    id: 3,
    category: "Sum to infinity",
    question: "A geometric sequence has first term $u_1 = 12$ and common ratio $r = \\dfrac{1}{2}$. (a) Write down the first four terms. (b) Explain why the sum to infinity exists, and find $S_\\infty$.",
    answer: "(a) $12,\\; 6,\\; 3,\\; \\dfrac{3}{2}$. (b) $|r| = \\dfrac{1}{2} < 1$, so the sum to infinity exists. $$S_\\infty = \\frac{u_1}{1-r} = \\frac{12}{1 - \\frac{1}{2}} = \\frac{12}{\\frac{1}{2}} = \\mathbf{24}.$$"
  },
  {
    id: 4,
    category: "Finding first term from sum to infinity",
    question: "A geometric sequence has common ratio $r = -\\dfrac{1}{3}$ and sum to infinity $S_\\infty = 9$. (a) Find the first term $u_1$. (b) Write down the first three terms of the sequence. (c) Show that $S_\\infty$ exists for this sequence.",
    answer: "(a) $S_\\infty = \\dfrac{u_1}{1-r} = \\dfrac{u_1}{1+\\frac{1}{3}} = \\dfrac{u_1}{\\frac{4}{3}} = \\dfrac{3u_1}{4} = 9 \\Rightarrow u_1 = \\mathbf{12}$. (b) $12,\\; -4,\\; \\dfrac{4}{3}$. (c) $|r| = \\dfrac{1}{3} < 1$, so $S_\\infty$ exists ✓."
  },
  {
    id: 5,
    category: "Finding common ratio from sum to infinity",
    question: "A geometric sequence has first term $u_1 = 6$ and sum to infinity $S_\\infty = 9$. (a) Find the common ratio $r$. (b) Find the 4th and 5th terms.",
    answer: "(a) $\\dfrac{6}{1-r} = 9 \\Rightarrow 1-r = \\dfrac{2}{3} \\Rightarrow r = \\dfrac{1}{3}$. (b) $t_4 = 6 \\times \\left(\\dfrac{1}{3}\\right)^3 = \\dfrac{6}{27} = \\dfrac{2}{9}$; $t_5 = 6 \\times \\left(\\dfrac{1}{3}\\right)^4 = \\dfrac{6}{81} = \\dfrac{2}{27}$."
  },
  {
    id: 6,
    category: "Arithmetic sequences — two conditions",
    question: "In an arithmetic sequence, the 4th term is $15$ and the 10th term is $33$. (a) Find the common difference $d$. (b) Find the first term $u_1$. (c) Find the 50th term.",
    answer: "(a) $t_{10} - t_4 = 6d \\Rightarrow 33-15 = 6d \\Rightarrow d = \\mathbf{3}$. (b) $t_4 = u_1 + 3d = 15 \\Rightarrow u_1 = 15-9 = \\mathbf{6}$. (c) $t_{50} = 6 + 49 \\times 3 = 6 + 147 = \\mathbf{153}$."
  },
  {
    id: 7,
    category: "Sum of an arithmetic series",
    question: "Find the sum of the first $20$ terms of the arithmetic sequence $5, 11, 17, 23, \\ldots$",
    answer: "$u_1 = 5$, $d = 6$, $n = 20$. $$S_{20} = \\frac{n}{2}\\bigl(2u_1 + (n-1)d\\bigr) = \\frac{20}{2}\\bigl(2(5) + 19(6)\\bigr) = 10(10 + 114) = 10 \\times 124 = \\mathbf{1240}.$$"
  },
  {
    id: 8,
    category: "Arithmetic or geometric?",
    question: "The three terms $4,\\; x,\\; 16$ form a sequence. (a) If the sequence is arithmetic, find $x$ and the common difference. (b) If the sequence is geometric, find all possible values of $x$ and state the corresponding common ratios.",
    answer: "(a) Arithmetic — equal differences: $x - 4 = 16 - x \\Rightarrow 2x = 20 \\Rightarrow x = \\mathbf{10}$, $d = 6$. Sequence: $4, 10, 16$. (b) Geometric — equal ratios: $\\dfrac{x}{4} = \\dfrac{16}{x} \\Rightarrow x^2 = 64 \\Rightarrow x = \\pm 8$. If $x = 8$: $r = 2$, sequence $4, 8, 16$. If $x = -8$: $r = -2$, sequence $4, -8, 16$."
  },
  {
    id: 9,
    category: "Convergence condition",
    question: "A geometric sequence has general term $u_n = 5(2-k)^{n-1}$. (a) State the value of $u_1$ and write down an expression for the common ratio $r$ in terms of $k$. (b) Find the range of values of $k$ for which the sum to infinity $S_\\infty$ exists. (c) When $k = \\dfrac{3}{2}$, find $S_\\infty$.",
    answer: "(a) $u_1 = 5$; $r = 2 - k$. (b) $S_\\infty$ exists when $|r| < 1$: $$|2-k| < 1 \\Rightarrow -1 < 2-k < 1 \\Rightarrow 1 < k < 3.$$ (c) $k = \\dfrac{3}{2}$: $r = 2 - \\dfrac{3}{2} = \\dfrac{1}{2}$. $$S_\\infty = \\frac{5}{1 - \\frac{1}{2}} = \\frac{5}{\\frac{1}{2}} = \\mathbf{10}.$$"
  },
  {
    id: 10,
    category: "Geometric series — two sum conditions",
    question: "In a geometric sequence, the sum of the first two terms is $12$ and the sum of the first four terms is $15$. Find all possible values of the first term $u_1$ and common ratio $r$.",
    answer: "$S_2 = u_1(1+r) = 12$ and $S_4 = u_1(1+r)(1+r^2) = 15$. Dividing: $1 + r^2 = \\dfrac{15}{12} = \\dfrac{5}{4} \\Rightarrow r^2 = \\dfrac{1}{4} \\Rightarrow r = \\pm \\dfrac{1}{2}$. **Case 1** $r = \\dfrac{1}{2}$: $u_1 \\cdot \\dfrac{3}{2} = 12 \\Rightarrow u_1 = \\mathbf{8}$. **Case 2** $r = -\\dfrac{1}{2}$: $u_1 \\cdot \\dfrac{1}{2} = 12 \\Rightarrow u_1 = \\mathbf{24}$. Both are valid geometric sequences: $(8, 4, 2, 1, \\ldots)$ and $(24, -12, 6, -3, \\ldots)$."
  }
];
