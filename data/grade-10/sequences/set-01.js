var PAPER = {
  title: "Sequences & Series — set 01 (10 questions)",
  difficultyRanges: [
    { level: 2, from: 1, to: 4 },
    { level: 3, from: 5, to: 8 },
    { level: 4, from: 9, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Arithmetic sequences",
    question: "Consider the arithmetic sequence $4, 9, 14, 19, \\ldots$ (a) Find $u_{41}$. (b) Find the value of $n$ such that $u_n = 199$.",
    answer: "First term $u_1 = 4$, common difference $d = 5$. (a) $$u_{41} = 4 + 40 \\times 5 = 4 + 200 = 204$$ (b) $$u_n = 4 + (n-1) \\times 5 = 199 \\Rightarrow 5(n-1) = 195 \\Rightarrow n - 1 = 39 \\Rightarrow n = 40$$"
  },
  {
    id: 2,
    category: "Arithmetic sequences",
    question: "Given that $5k - 1$, $11$, $3k + 7$ are consecutive terms in an arithmetic sequence, find $k$.",
    answer: "For an arithmetic sequence the middle term equals the average of its neighbours, so the common differences are equal: $$11 - (5k-1) = (3k+7) - 11$$ $$12 - 5k = 3k - 4$$ $$16 = 8k \\Rightarrow k = 2$$ Verify: $9, 11, 13$ — common difference $2$. ✓"
  },
  {
    id: 3,
    category: "Geometric sequences",
    question: "Given that $k - 4$, $k + 8$, $5k + 4$ are consecutive terms in a geometric sequence, find all possible values of $k$.",
    answer: "For a geometric sequence the square of the middle term equals the product of its neighbours: $$(k+8)^2 = (k-4)(5k+4)$$ $$k^2 + 16k + 64 = 5k^2 - 16k - 16$$ $$0 = 4k^2 - 32k - 80$$ $$0 = k^2 - 8k - 20 = (k-10)(k+2)$$ So $k = 10$ or $k = -2$. Check $k = 10$: $6, 18, 54$ (ratio $3$). ✓  Check $k = -2$: $-6, 6, -6$ (ratio $-1$). ✓"
  },
  {
    id: 4,
    category: "Geometric sequences",
    question: "In a geometric sequence, $u_2 = 90$ and $u_5 = \\dfrac{10}{3}$. Find $u_6$.",
    answer: "$$\\frac{u_5}{u_2} = r^3 \\Rightarrow r^3 = \\frac{10/3}{90} = \\frac{1}{27} \\Rightarrow r = \\frac{1}{3}$$ $$u_1 = \\frac{u_2}{r} = \\frac{90}{1/3} = 270$$ $$u_6 = u_1 r^5 = 270 \\times \\frac{1}{3^5} = \\frac{270}{243} = \\frac{10}{9}$$"
  },
  {
    id: 5,
    category: "Arithmetic sequences",
    question: "The second term of an arithmetic sequence is $7$. The sum of the first four terms is $12$. Find the first term and the common difference.",
    answer: "Let first term $= u_1$ and common difference $= d$. $$u_2 = u_1 + d = 7 \\quad \\Rightarrow \\quad u_1 = 7 - d$$ $$S_4 = \\frac{4}{2}(2u_1 + 3d) = 2(2u_1 + 3d) = 12 \\Rightarrow 2u_1 + 3d = 6$$ Substituting $u_1 = 7-d$: $2(7-d)+3d = 6 \\Rightarrow 14+d = 6 \\Rightarrow d = -8$ $$u_1 = 7 - (-8) = 15$$ Check: $S_4 = 15 + 7 + (-1) + (-9) = 12$. ✓"
  },
  {
    id: 6,
    category: "Arithmetic & geometric",
    question: "The three terms $a$, $1$, $b$ are in arithmetic progression. The three terms $1$, $a$, $b$ are in geometric progression. Given that $a \\neq b$, find the values of $a$ and $b$.",
    answer: "Arithmetic: $1 - a = b - 1 \\Rightarrow b = 2 - a$. Geometric: $a^2 = 1 \\cdot b = b$. So $a^2 = 2 - a \\Rightarrow a^2 + a - 2 = 0 \\Rightarrow (a+2)(a-1) = 0$. If $a = 1$ then $b = 1 = a$, excluded. So $a = -2$, $b = a^2 = 4$. Verify: $-2, 1, 4$ arithmetic (diff $3$); $1, -2, 4$ geometric (ratio $-2$). ✓"
  },
  {
    id: 7,
    category: "Combined sequences — proof",
    question: "An arithmetic sequence has first term $a$ and common difference $d$, $d \\neq 0$. The $3^{\\text{rd}}$, $4^{\\text{th}}$ and $7^{\\text{th}}$ terms of the arithmetic sequence are the first three terms of a geometric sequence. Show that $a = -\\dfrac{3d}{2}$.",
    answer: "The three terms are $a+2d$, $a+3d$, $a+6d$. For a geometric sequence: $$(a+3d)^2 = (a+2d)(a+6d)$$ $$a^2 + 6ad + 9d^2 = a^2 + 8ad + 12d^2$$ $$0 = 2ad + 3d^2 = d(2a + 3d)$$ Since $d \\neq 0$: $2a + 3d = 0 \\Rightarrow a = -\\dfrac{3d}{2}$. ∎"
  },
  {
    id: 8,
    category: "Combined sequences — proof",
    question: "Using the result from Q7 (where $a = -\\frac{3d}{2}$), show that the $4^{\\text{th}}$ term of the geometric sequence equals the $16^{\\text{th}}$ term of the arithmetic sequence.",
    answer: "With $a = -\\frac{3d}{2}$, the first three terms of the geometric sequence are: $$u_1' = a+2d = \\frac{d}{2}, \\quad u_2' = a+3d = \\frac{3d}{2}, \\quad u_3' = a+6d = \\frac{9d}{2}$$ Common ratio $r = \\frac{3d/2}{d/2} = 3$. So the $4^{\\text{th}}$ term of the geometric sequence is: $$u_4' = \\frac{d}{2} \\times 3^3 = \\frac{27d}{2}$$ The $16^{\\text{th}}$ term of the arithmetic sequence is: $$u_{16} = a + 15d = -\\frac{3d}{2} + 15d = \\frac{27d}{2} \\checkmark$$"
  },
  {
    id: 9,
    category: "Arithmetic sequences",
    question: "The $7^{\\text{th}}$ and $15^{\\text{th}}$ terms of an arithmetic sequence are $1$ and $-23$ respectively. (a) Find the common difference. (b) Write down the formula for the general term $u_n$.",
    answer: "(a) $u_7 = u_1 + 6d = 1$ and $u_{15} = u_1 + 14d = -23$. Subtracting: $8d = -24 \\Rightarrow d = -3$. (b) $u_1 = 1 - 6(-3) = 19$. $$u_n = 19 + (n-1)(-3) = 22 - 3n$$ Check: $u_7 = 22-21=1$ ✓, $u_{15}=22-45=-23$ ✓."
  },
  {
    id: 10,
    category: "Arithmetic series",
    question: "The sum of the first $n$ terms of an arithmetic sequence is given by $S_n = 2n^2 + n$. (a) Find the first term. (b) Find the common difference. (c) Find the value of $n$ for which $u_n = 51$.",
    answer: "(a) $u_1 = S_1 = 2(1)^2 + 1 = 3$. (b) $S_2 = 2(4)+2 = 10$, so $u_2 = S_2 - S_1 = 10 - 3 = 7$. Common difference $d = 7 - 3 = 4$. (c) General term: $u_n = S_n - S_{n-1} = (2n^2+n) - (2(n-1)^2+(n-1)) = 4n - 1$. Setting $4n-1=51$: $$4n = 52 \\Rightarrow n = 13$$"
  }
];
