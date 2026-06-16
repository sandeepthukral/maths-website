var PAPER = {
  title: "Logarithms & Index Laws — set 03 (10 questions)",
  difficultyRanges: [
    { level: 2, from: 1, to: 3 },
    { level: 3, from: 4, to: 7 },
    { level: 4, from: 8, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Log laws — simplify",
    question: "(a) Express $\\log 36 + \\log 5 - \\log 18$ as a single logarithm in the form $\\log k$. (b) Hence find the exact value of $\\log 36 + \\log 5 - \\log 18$.",
    answer: "(a) $$\\log 36 + \\log 5 - \\log 18 = \\log\\!\\left(\\frac{36 \\times 5}{18}\\right) = \\log 10$$ (b) $\\log_{10} 10 = \\mathbf{1}$"
  },
  {
    id: 2,
    category: "Log laws — expand",
    question: "Given that $\\log x = a$, $\\log y = b$ and $\\log z = c$, express $\\log\\!\\left(\\dfrac{x^4 y^3}{z^2}\\right)$ in terms of $a$, $b$ and $c$.",
    answer: "$$\\log\\!\\left(\\frac{x^4 y^3}{z^2}\\right) = \\log x^4 + \\log y^3 - \\log z^2 = 4\\log x + 3\\log y - 2\\log z = 4a + 3b - 2c$$"
  },
  {
    id: 3,
    category: "Log laws — condense",
    question: "Write $\\dfrac{1}{3}\\log_b x + 2\\log_b w - 3\\log_b z$ as a single logarithm.",
    answer: "$$\\frac{1}{3}\\log_b x + 2\\log_b w - 3\\log_b z = \\log_b x^{1/3} + \\log_b w^2 - \\log_b z^3 = \\log_b\\!\\left(\\frac{\\sqrt[3]{x}\\, w^2}{z^3}\\right)$$"
  },
  {
    id: 4,
    category: "Log laws — evaluate",
    question: "Given that $\\log a = 0.3$, $\\log b = 0.5$ and $\\log c = 0.8$, find $\\log\\!\\left(\\dfrac{a^2 b}{c^{1/2}}\\right)$.",
    answer: "$$\\log\\!\\left(\\frac{a^2 b}{c^{1/2}}\\right) = 2\\log a + \\log b - \\tfrac{1}{2}\\log c = 2(0.3) + 0.5 - \\tfrac{1}{2}(0.8) = 0.6 + 0.5 - 0.4 = \\mathbf{0.7}$$"
  },
  {
    id: 5,
    category: "Log laws — express",
    question: "Given $x = \\dfrac{ab^2}{\\sqrt{ab}}$, express $\\log x$ in terms of $\\log a$ and $\\log b$.",
    answer: "$$x = \\frac{ab^2}{(ab)^{1/2}} = \\frac{ab^2}{a^{1/2}b^{1/2}} = a^{1/2}b^{3/2}$$ $$\\log x = \\tfrac{1}{2}\\log a + \\tfrac{3}{2}\\log b$$"
  },
  {
    id: 6,
    category: "Index equations",
    question: "Solve: $3^{x+1} \\times 9^{-x} = \\left(\\dfrac{1}{3}\\right)^{x+1}$",
    answer: "Write everything in base $3$. Note $9 = 3^2$ and $\\frac{1}{3}=3^{-1}$: $$3^{x+1} \\times 3^{-2x} = 3^{-(x+1)}$$ $$3^{1-x} = 3^{-x-1}$$ Equating exponents: $1 - x = -x - 1 \\Rightarrow 1 = -1$. Contradiction — the equation has **no solution**."
  },
  {
    id: 7,
    category: "Index equations",
    question: "Solve: $\\dfrac{5^{2x-5}}{125^x} = \\dfrac{25^{1-2x}}{5^{x+2}}$",
    answer: "Write everything in base $5$. Note $125=5^3$, $25=5^2$: $$\\text{LHS} = \\frac{5^{2x-5}}{5^{3x}} = 5^{2x-5-3x} = 5^{-x-5}$$ $$\\text{RHS} = \\frac{5^{2(1-2x)}}{5^{x+2}} = 5^{2-4x-(x+2)} = 5^{-5x}$$ Equating exponents: $-x - 5 = -5x \\Rightarrow 4x = 5 \\Rightarrow \\boxed{x = \\dfrac{5}{4}}$"
  },
  {
    id: 8,
    category: "Index equations",
    question: "Solve: $4^{x+1} = 2^{x+3}$",
    answer: "Write in base $2$. Note $4 = 2^2$: $$2^{2(x+1)} = 2^{x+3} \\Rightarrow 2x + 2 = x + 3 \\Rightarrow x = 1$$"
  },
  {
    id: 9,
    category: "Log equations",
    question: "Solve $\\log_2(3x - 1) = 3$.",
    answer: "$$3x - 1 = 2^3 = 8 \\Rightarrow 3x = 9 \\Rightarrow x = 3$$"
  },
  {
    id: 10,
    category: "Change of base",
    question: "Given that $\\log_3 2 = p$, express $\\log_3 12$ in terms of $p$.",
    answer: "$$\\log_3 12 = \\log_3(4 \\times 3) = \\log_3 4 + \\log_3 3 = 2\\log_3 2 + 1 = 2p + 1$$"
  }
];
