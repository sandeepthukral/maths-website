var PAPER = {
  title: "Functions — evaluating, inverses, self-inverse and composite equations (12 questions)"
};

var QUESTIONS = [
  {
    id: 1,
    difficulty: 1,
    category: "Function notation",
    question: "Use the functions $f(x) = 3x - 1$, $g(x) = x^2 + 2$ and $h(x) = -3$ to evaluate: (a) $f(4)$ (b) $f(-2)$ (c) $g(-3)$ (d) $g(1) + h(5)$ (e) $4f(0) - g(2)$ (f) $h(2) \\times g(0)$ (g) $f^{-1}(8)$ (h) $g(f(x))$",
    answer: "(a) $12 - 1 = \\mathbf{11}$ (b) $-6 - 1 = \\mathbf{-7}$ (c) $9 + 2 = \\mathbf{11}$ (d) $3 + (-3) = \\mathbf{0}$ (e) $4(-1) - 6 = \\mathbf{-10}$ (f) $(-3)(2) = \\mathbf{-6}$ (g) $f^{-1}(x) = \\dfrac{x + 1}{3}$, so $f^{-1}(8) = \\mathbf{3}$ (check: $f(3) = 8$ ✓) (h) $(3x - 1)^2 + 2 = \\mathbf{9x^2 - 6x + 3}$"
  },
  {
    id: 2,
    difficulty: 3,
    category: "Ranges, composites & inequalities",
    question: "Consider the functions $f(x) = x^2 + 1$, $g(x) = \\dfrac{2}{x - 3}$, $h(x) = 2^x$, $x \\in \\mathbb{R}$. (a) Find the range of each of $f(x)$, $g(x)$ and $h(x)$. (b) Find an expression for $gf(x)$. (c) Solve the equation $gf(x) = \\dfrac{1}{7}$. (d) Find an expression for $gh(x)$ and solve the inequality $gh(x) > \\dfrac{2}{5}$.",
    answer: "(a) $f(x) \\ge 1$; $g(x) \\ne 0$; $h(x) > 0$. (b) $gf(x) = \\dfrac{2}{(x^2 + 1) - 3} = \\mathbf{\\dfrac{2}{x^2 - 2}}$. (c) $\\dfrac{2}{x^2 - 2} = \\dfrac{1}{7} \\Rightarrow x^2 - 2 = 14 \\Rightarrow x = \\mathbf{\\pm 4}$. (d) $gh(x) = \\mathbf{\\dfrac{2}{2^x - 3}}$. The denominator can be negative, so consider its sign. If $2^x - 3 < 0$, then $gh(x) < 0$, which cannot exceed $\\dfrac{2}{5}$. If $2^x - 3 > 0$ (i.e. $x > \\log_2 3$), we can multiply through safely: $2 \\cdot 5 > 2(2^x - 3) \\Rightarrow 2^x - 3 < 5 \\Rightarrow 2^x < 8 \\Rightarrow x < 3$. So $\\mathbf{\\log_2 3 < x < 3}$."
  },
  {
    id: 3,
    difficulty: 2,
    category: "Domain from range, inverse",
    question: "A function $f(x)$ is defined as $f(x) = 5x + 2$. (a) Given that the range of $f(x)$ is $12 < f(x) < 52$, find the domain of $f(x)$. (b) Find $ff(1)$. (c) Find the inverse function $f^{-1}(x)$. (d) State the range of the inverse function.",
    answer: "(a) $12 < 5x + 2 < 52 \\Rightarrow 10 < 5x < 50 \\Rightarrow \\mathbf{2 < x < 10}$. (b) $f(1) = 7$, $ff(1) = f(7) = \\mathbf{37}$. (c) $f^{-1}(x) = \\mathbf{\\dfrac{x - 2}{5}}$. (d) Range of $f^{-1}$ = domain of $f$: $\\mathbf{2 < f^{-1}(x) < 10}$."
  },
  {
    id: 4,
    difficulty: 1,
    category: "Reading a function from a graph",
    diagram: "data/grade-11/functions/img/set-03-q04.svg",
    question: "The graph shows $y = f(x)$ for $-3 \\le x \\le 2$. (a) Write down the value of (i) $f(-3)$ (ii) $f(0)$ (iii) $f(2)$. (b) State the range of $f$. (c) Solve $f(x) = 3$. (d) Find $f^{-1}(-1)$.",
    answer: "(a) (i) $f(-3) = \\mathbf{-2}$ (ii) $f(0) = \\mathbf{1}$ (iii) $f(2) = \\mathbf{5}$. (b) $\\mathbf{-2 \\le f(x) \\le 5}$. (c) For $0 \\le x \\le 2$ the line joins $(0, 1)$ and $(2, 5)$, so $f(x) = 2x + 1$; $2x + 1 = 3 \\Rightarrow x = \\mathbf{1}$. (d) We need $x$ with $f(x) = -1$. For $-3 \\le x \\le 0$ the line joins $(-3,-2)$ and $(0, 1)$, so $f(x) = x + 1$; $x + 1 = -1 \\Rightarrow f^{-1}(-1) = \\mathbf{-2}$."
  },
  {
    id: 5,
    difficulty: 2,
    category: "Inverse of a rational function",
    question: "Consider the function $f(x) = \\dfrac{4x - 1}{2x + 3}$, $x \\ne -\\dfrac{3}{2}$, $x \\in \\mathbb{R}$. (a) State the range of $f$. (b) Find the inverse function $f^{-1}(x)$. (c) State the domain and range of $f^{-1}(x)$. (d) Solve $f^{-1}(x) = 2$.",
    answer: "(a) Horizontal asymptote $y = \\dfrac{4}{2} = 2$: range $\\mathbf{f(x) \\ne 2}$. (b) $y(2x + 3) = 4x - 1 \\Rightarrow 2xy - 4x = -1 - 3y \\Rightarrow x(2y - 4) = -(3y + 1) \\Rightarrow x = \\dfrac{3y + 1}{4 - 2y}$. So $f^{-1}(x) = \\mathbf{\\dfrac{3x + 1}{4 - 2x}}$. (c) Domain $\\mathbf{x \\ne 2}$; range $\\mathbf{f^{-1}(x) \\ne -\\dfrac{3}{2}}$. (d) $f^{-1}(x) = 2 \\iff x = f(2) = \\dfrac{7}{7} = \\mathbf{1}$. (Algebraically: $3x + 1 = 8 - 4x \\Rightarrow x = 1$ ✓.)"
  },
  {
    id: 6,
    difficulty: 3,
    category: "Self-inverse functions",
    question: "(a) Show that $r(x) = \\dfrac{2x + 7}{3x - 2}$, $x \\in \\mathbb{R}$, $x \\ne \\dfrac{2}{3}$ is a self-inverse function. (b) Hence write down the value of $r(r(5))$. (c) Find the values of $x$ for which $r(x) = x$. (d) Given that $r(k) = 3$, use the fact that $r$ is self-inverse to find $k$ without solving an equation.",
    answer: "(a) $y = \\dfrac{2x + 7}{3x - 2} \\Rightarrow 3xy - 2y = 2x + 7 \\Rightarrow x(3y - 2) = 2y + 7 \\Rightarrow x = \\dfrac{2y + 7}{3y - 2}$. So $r^{-1}(x) = \\dfrac{2x + 7}{3x - 2} = r(x)$ ✓. (b) $r(r(5)) = \\mathbf{5}$. (c) $2x + 7 = x(3x - 2) \\Rightarrow 3x^2 - 4x - 7 = 0 \\Rightarrow (3x - 7)(x + 1) = 0 \\Rightarrow x = \\mathbf{\\dfrac{7}{3}}$ or $x = \\mathbf{-1}$. (d) $r(k) = 3 \\Rightarrow k = r^{-1}(3) = r(3) = \\dfrac{6 + 7}{9 - 2} = \\mathbf{\\dfrac{13}{7}}$."
  },
  {
    id: 7,
    difficulty: 1,
    category: "Range on a restricted domain",
    question: "Find the range of each function. (a) $f(x) = 6x - 4$, domain $\\{x \\in \\mathbb{R},\\ -1 \\le x \\le 3\\}$ (b) $f(x) = 1 - 3x$, domain $\\{x = -3, -1, 0, 2, 4\\}$ (c) $f(x) = x^2$, domain $\\{x \\in \\mathbb{R},\\ -4 \\le x \\le 2\\}$ (d) $f(x) = 2^x$, domain $\\{x \\in \\mathbb{R},\\ 0 \\le x \\le 5\\}$",
    answer: "(a) $f(-1) = -10$, $f(3) = 14$: $\\mathbf{-10 \\le f(x) \\le 14}$. (b) Values $10, 4, 1, -5, -11$: $\\mathbf{\\{-11, -5, 1, 4, 10\\}}$. (c) Minimum $f(0) = 0$, maximum $f(-4) = 16$: $\\mathbf{0 \\le f(x) \\le 16}$. (d) $2^x$ is increasing: $f(0) = 1$, $f(5) = 32$: $\\mathbf{1 \\le f(x) \\le 32}$."
  },
  {
    id: 8,
    difficulty: 2,
    category: "Verifying inverse functions",
    question: "For each pair of functions, determine algebraically whether they are inverses of each other. (a) $f(x) = -2x + 8$, $g(x) = \\dfrac{8 - x}{2}$ (b) $f(x) = \\dfrac{x}{3} + 1$, $g(x) = 3x - 1$ (c) $f(x) = x^3 - 2$, $g(x) = \\sqrt[3]{x + 2}$ (d) $f(x) = \\dfrac{x + 5}{x - 1}$, $g(x) = \\dfrac{x + 5}{x - 1}$",
    answer: "(a) $f(g(x)) = -2 \\cdot \\dfrac{8 - x}{2} + 8 = x - 8 + 8 = x$ ✓. **Inverses.** (b) $f(g(x)) = \\dfrac{3x - 1}{3} + 1 = x + \\dfrac{2}{3} \\ne x$. **Not inverses** (the inverse of $f$ is $3x - 3$). (c) $f(g(x)) = (x + 2) - 2 = x$ ✓ and $g(f(x)) = \\sqrt[3]{x^3} = x$ ✓. **Inverses.** (d) $f(f(x)) = \\dfrac{\\frac{x+5}{x-1} + 5}{\\frac{x+5}{x-1} - 1} = \\dfrac{x + 5 + 5x - 5}{x + 5 - x + 1} = \\dfrac{6x}{6} = x$ ✓. **Inverses** — $f$ is self-inverse."
  },
  {
    id: 9,
    difficulty: 3,
    category: "Finding a function from a composite",
    question: "Let $f(x) = 2x + 5$. A function $g$ is such that $(f \\circ g)(x) = 6x^2 - 4x + 1$. (a) Find $g(x)$. (b) Find $(g \\circ f)(-2)$. (c) Solve the equation $g(x) = f^{-1}(x)$.",
    answer: "(a) $2g(x) + 5 = 6x^2 - 4x + 1 \\Rightarrow g(x) = \\mathbf{3x^2 - 2x - 2}$. (b) $f(-2) = 1$, $g(1) = 3 - 2 - 2 = \\mathbf{-1}$. (c) $f^{-1}(x) = \\dfrac{x - 5}{2}$. $3x^2 - 2x - 2 = \\dfrac{x - 5}{2} \\Rightarrow 6x^2 - 4x - 4 = x - 5 \\Rightarrow 6x^2 - 5x + 1 = 0 \\Rightarrow (2x - 1)(3x - 1) = 0 \\Rightarrow x = \\mathbf{\\dfrac{1}{2}}$ or $x = \\mathbf{\\dfrac{1}{3}}$."
  },
  {
    id: 10,
    difficulty: 2,
    category: "Equations with composite functions",
    question: "Consider the functions $f(x) = x^2$, $x \\in \\mathbb{R}$ and $g(x) = 2x + 3$, $x \\in \\mathbb{R}$. (a) Solve the equation $f(x) = g(x)$. (b) Solve the equation $fg(x) = gf(x)$, giving your answers in exact form.",
    answer: "(a) $x^2 - 2x - 3 = 0 \\Rightarrow (x - 3)(x + 1) = 0 \\Rightarrow x = \\mathbf{3}$ or $x = \\mathbf{-1}$. (b) $fg(x) = (2x + 3)^2 = 4x^2 + 12x + 9$; $gf(x) = 2x^2 + 3$. $4x^2 + 12x + 9 = 2x^2 + 3 \\Rightarrow 2x^2 + 12x + 6 = 0 \\Rightarrow x^2 + 6x + 3 = 0 \\Rightarrow x = \\dfrac{-6 \\pm \\sqrt{24}}{2} = \\mathbf{-3 \\pm \\sqrt{6}}$."
  },
  {
    id: 11,
    difficulty: 1,
    category: "Composite functions",
    question: "Let $f(x) = x + 5$ and $g(x) = 2x^2$. Find: (a) $f(g(-1))$ (b) $g(f(-1))$ (c) $(f \\circ g)(x)$ (d) $(g \\circ f)(x)$ in expanded form (e) $(g \\circ g)(x)$",
    answer: "(a) $g(-1) = 2$, $f(2) = \\mathbf{7}$. (b) $f(-1) = 4$, $g(4) = \\mathbf{32}$. (c) $\\mathbf{2x^2 + 5}$. (d) $2(x + 5)^2 = \\mathbf{2x^2 + 20x + 50}$. (e) $2(2x^2)^2 = \\mathbf{8x^4}$."
  },
  {
    id: 12,
    difficulty: 3,
    category: "Inverse of a quadratic",
    question: "Let $f(x) = x^2 + 4x - 1$, $x \\le -2$. (a) Write $f(x)$ in the form $(x + p)^2 + q$. (b) State the range of $f$. (c) Find $f^{-1}(x)$, stating its domain and range. (d) Find $f^{-1}(4)$ and verify your answer. (e) Find the value of $x$ for which $f^{-1}(x) = -6$.",
    answer: "(a) $f(x) = \\mathbf{(x + 2)^2 - 5}$. (b) Vertex $(-2, -5)$ and the domain is the left half of the parabola, so $\\mathbf{f(x) \\ge -5}$. (c) $y = (x + 2)^2 - 5 \\Rightarrow x + 2 = \\pm\\sqrt{y + 5}$. Since $x \\le -2$, $x + 2 \\le 0$, so take the negative root: $f^{-1}(x) = \\mathbf{-2 - \\sqrt{x + 5}}$. Domain $\\mathbf{x \\ge -5}$; range $\\mathbf{f^{-1}(x) \\le -2}$. (d) $f^{-1}(4) = -2 - 3 = \\mathbf{-5}$. Check: $f(-5) = 25 - 20 - 1 = 4$ ✓. (e) $f^{-1}(x) = -6 \\iff x = f(-6) = 36 - 24 - 1 = \\mathbf{11}$."
  }
];
