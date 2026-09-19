var PAPER = {
  title: "Functions — mixed exam-style practice: graphs, inverses and composites (12 questions)"
};

var QUESTIONS = [
  {
    id: 1,
    difficulty: 2,
    category: "Linear function on an open domain",
    question: "A function is given by $f(x) = 96x - 20$, $-2 < x < 12$. (a) Determine the value of $f\\left(\\dfrac{5}{4}\\right)$. (b) Determine the range of the function $f$. (c) Determine the value of $a$ such that $f(a) = 793.6$. (d) Find $f^{-1}(x)$.",
    answer: "(a) $96 \\times \\dfrac{5}{4} - 20 = 120 - 20 = \\mathbf{100}$. (b) $f$ is increasing: $f(-2) = -212$, $f(12) = 1132$. Since the inequalities are strict: $\\mathbf{-212 < f(x) < 1132}$. (c) $96a - 20 = 793.6 \\Rightarrow 96a = 813.6 \\Rightarrow a = \\mathbf{8.475}$ (which lies in the domain ✓). (d) $f^{-1}(x) = \\mathbf{\\dfrac{x + 20}{96}}$."
  },
  {
    id: 2,
    difficulty: 1,
    category: "Function notation",
    question: "Use the functions $f(x) = 2x^2 - 3$, $g(x) = -5x$ and $h(x) = 4$ to evaluate: (a) $f(2)$ (b) $f(-1)$ (c) $g(-4)$ (d) $f(0) + h(3)$ (e) $3f(1) - g(2)$ (f) $h(-1) \\times f(-2)$ (g) $g^{-1}(15)$ (h) $f(g(x))$ (i) $f \\circ g^{-1}(x)$",
    answer: "(a) $8 - 3 = \\mathbf{5}$ (b) $2 - 3 = \\mathbf{-1}$ (c) $\\mathbf{20}$ (d) $-3 + 4 = \\mathbf{1}$ (e) $3(-1) - (-10) = \\mathbf{7}$ (f) $4 \\times 5 = \\mathbf{20}$ (g) $g^{-1}(x) = -\\dfrac{x}{5}$, so $g^{-1}(15) = \\mathbf{-3}$ (h) $2(-5x)^2 - 3 = \\mathbf{50x^2 - 3}$ (i) $2\\left(-\\dfrac{x}{5}\\right)^2 - 3 = \\mathbf{\\dfrac{2x^2}{25} - 3}$"
  },
  {
    id: 3,
    difficulty: 3,
    category: "Composites & inverses with a parameter",
    question: "Let $f(x) = 3x + k$ and $g(x) = 2x - 1$, where $k$ is a constant. (a) Find the value of $k$ for which $(f \\circ g)(x) = (g \\circ f)(x)$ for all $x$. (b) Using this value of $k$, find $(f \\circ g)^{-1}(x)$. (c) Show that $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$.",
    answer: "(a) $(f \\circ g)(x) = 3(2x - 1) + k = 6x - 3 + k$; $(g \\circ f)(x) = 2(3x + k) - 1 = 6x + 2k - 1$. Equal for all $x$ when $-3 + k = 2k - 1 \\Rightarrow \\mathbf{k = -2}$. (b) $(f \\circ g)(x) = 6x - 5$, so $(f \\circ g)^{-1}(x) = \\mathbf{\\dfrac{x + 5}{6}}$. (c) $f^{-1}(x) = \\dfrac{x + 2}{3}$ and $g^{-1}(x) = \\dfrac{x + 1}{2}$. Then $(g^{-1} \\circ f^{-1})(x) = \\dfrac{\\frac{x + 2}{3} + 1}{2} = \\dfrac{x + 5}{6}$ ✓, which matches part (b). (To undo \"$g$ then $f$\", undo $f$ first, then undo $g$.)"
  },
  {
    id: 4,
    difficulty: 1,
    category: "Range on a restricted domain",
    question: "Find the range of each function. (a) $f(x) = 4x + 3$, domain $\\{x \\in \\mathbb{R},\\ -2 \\le x \\le 5\\}$ (b) $f(x) = 12 - 5x$, domain $\\{x = -1, 0, 1, 2, 3\\}$ (c) $f(x) = x^2$, domain $\\{x \\in \\mathbb{R},\\ -5 \\le x \\le 3\\}$ (d) $f(x) = 300 - 37.5x$, domain $\\{x \\in \\mathbb{R},\\ 0 \\le x \\le 8\\}$",
    answer: "(a) $f(-2) = -5$, $f(5) = 23$: $\\mathbf{-5 \\le f(x) \\le 23}$. (b) Values $17, 12, 7, 2, -3$: $\\mathbf{\\{-3, 2, 7, 12, 17\\}}$. (c) Minimum $f(0) = 0$, maximum $f(-5) = 25$: $\\mathbf{0 \\le f(x) \\le 25}$. (d) $f(0) = 300$, $f(8) = 0$: $\\mathbf{0 \\le f(x) \\le 300}$."
  },
  {
    id: 5,
    difficulty: 2,
    category: "Self-inverse functions",
    question: "Consider the function $f(x) = \\dfrac{4}{x - 3} + 3$, $x > 3$, $x \\in \\mathbb{R}$. (a) Show that $f(x)$ is a self-inverse function. (b) State the range of $f$. (c) Solve the equation $f(x) = x$. (d) Write down the value of $f(f(10))$.",
    answer: "(a) $y - 3 = \\dfrac{4}{x - 3} \\Rightarrow x - 3 = \\dfrac{4}{y - 3} \\Rightarrow x = \\dfrac{4}{y - 3} + 3$. So $f^{-1}(x) = \\dfrac{4}{x - 3} + 3 = f(x)$ ✓. (b) For $x > 3$, $\\dfrac{4}{x - 3} > 0$, so $\\mathbf{f(x) > 3}$. (c) $\\dfrac{4}{x - 3} = x - 3 \\Rightarrow (x - 3)^2 = 4 \\Rightarrow x = 3 \\pm 2$. Since $x > 3$: $x = \\mathbf{5}$. (d) $f$ is self-inverse, so $f(f(10)) = \\mathbf{10}$."
  },
  {
    id: 6,
    difficulty: 3,
    category: "Graph of a function and its inverse",
    diagram: "data/grade-11/functions/img/set-04-q06.svg",
    question: "The graph shows $y = f(x)$ for $-4 \\le x \\le 2$. It consists of three straight line segments. (a) Find $f(f(-2))$. (b) Find $f^{-1}(f^{-1}(1))$. (c) Write $f^{-1}(x)$ as a piecewise function, stating the interval for each piece. (d) Solve the equation $f(x) = f^{-1}(x)$.",
    answer: "(a) $f(-2) = 0$ and $f(0) = 1$, so $f(f(-2)) = \\mathbf{1}$. (b) $f^{-1}(1) = 0$ and $f^{-1}(0) = -2$, so the answer is $\\mathbf{-2}$. (c) Pieces of $f$: $f(x) = 2x + 4$ on $[-4, -2]$; $f(x) = \\tfrac{1}{2}x + 1$ on $[-2, 0]$; $f(x) = 2x + 1$ on $[0, 2]$. Inverting each piece (swap $x$ and $y$, domain becomes range): $$f^{-1}(x) = \\begin{cases} \\dfrac{x - 4}{2}, & -4 \\le x \\le 0 \\\\ 2x - 2, & 0 \\le x \\le 1 \\\\ \\dfrac{x - 1}{2}, & 1 \\le x \\le 5 \\end{cases}$$ (d) $f$ is increasing, so the graphs of $f$ and $f^{-1}$ meet only on $y = x$; solve $f(x) = x$ piece by piece. $2x + 4 = x \\Rightarrow x = -4$ ✓ (in $[-4,-2]$). $\\tfrac{1}{2}x + 1 = x \\Rightarrow x = 2$ ✗ (not in $[-2, 0]$). $2x + 1 = x \\Rightarrow x = -1$ ✗ (not in $[0, 2]$). So the only solution is $x = \\mathbf{-4}$."
  },
  {
    id: 7,
    difficulty: 1,
    category: "Inverse of a linear function",
    question: "Find the inverse function $f^{-1}(x)$ for each of the following. (a) $f(x) = x - 12$ (b) $f(x) = \\dfrac{x}{5}$ (c) $f(x) = 3x + 4$ (d) $f(x) = \\dfrac{x - 2}{7}$ (e) $f(x) = -x$ (f) Using your answer to (c), find $f^{-1}(10)$.",
    answer: "(a) $\\mathbf{x + 12}$ (b) $\\mathbf{5x}$ (c) $y = 3x + 4 \\Rightarrow x = \\dfrac{y - 4}{3}$, so $f^{-1}(x) = \\mathbf{\\dfrac{x - 4}{3}}$ (d) $\\mathbf{7x + 2}$ (e) $\\mathbf{-x}$ (self-inverse) (f) $f^{-1}(10) = \\dfrac{6}{3} = \\mathbf{2}$ (check: $f(2) = 10$ ✓)."
  },
  {
    id: 8,
    difficulty: 2,
    category: "Self-inverse functions",
    question: "(a) Show that $r(x) = \\dfrac{2x + 9}{5x - 2}$, $x \\in \\mathbb{R}$, $x \\ne \\dfrac{2}{5}$ is a self-inverse function. (b) Find $r(1)$. (c) Hence, without further algebra, solve the equation $r(x) = \\dfrac{11}{3}$.",
    answer: "(a) $y = \\dfrac{2x + 9}{5x - 2} \\Rightarrow 5xy - 2y = 2x + 9 \\Rightarrow x(5y - 2) = 2y + 9 \\Rightarrow x = \\dfrac{2y + 9}{5y - 2}$. So $r^{-1}(x) = \\dfrac{2x + 9}{5x - 2} = r(x)$ ✓. (b) $r(1) = \\dfrac{11}{3}$. (c) $r(x) = \\dfrac{11}{3} \\Rightarrow x = r^{-1}\\left(\\dfrac{11}{3}\\right) = r\\left(\\dfrac{11}{3}\\right)$. Since $r(1) = \\dfrac{11}{3}$ and $r$ is self-inverse, $r\\left(\\dfrac{11}{3}\\right) = 1$. So $x = \\mathbf{1}$."
  },
  {
    id: 9,
    difficulty: 3,
    category: "Domain & range of composites",
    question: "Let $f(x) = \\dfrac{1}{x - 1}$ and $g(x) = \\sqrt{x + 4}$. (a) State the largest possible domain of $f$ and of $g$. (b) Find $(f \\circ g)(x)$ and state its largest possible domain. (c) Solve $(f \\circ g)(x) = \\dfrac{1}{2}$. (d) Explain why $(g \\circ f)(3)$ exists but $(g \\circ f)(0.8)$ does not.",
    answer: "(a) $f$: $\\mathbf{x \\ne 1}$. $g$: $\\mathbf{x \\ge -4}$. (b) $(f \\circ g)(x) = \\mathbf{\\dfrac{1}{\\sqrt{x + 4} - 1}}$. Need $x \\ge -4$ (for the square root) and $\\sqrt{x + 4} \\ne 1$, i.e. $x \\ne -3$. Domain: $\\mathbf{x \\ge -4,\\ x \\ne -3}$. (c) $\\sqrt{x + 4} - 1 = 2 \\Rightarrow \\sqrt{x + 4} = 3 \\Rightarrow x = \\mathbf{5}$. (d) $f(3) = \\dfrac{1}{2}$, which is in the domain of $g$: $(g \\circ f)(3) = \\sqrt{4.5} = \\dfrac{3\\sqrt{2}}{2}$. But $f(0.8) = \\dfrac{1}{-0.2} = -5$, and $g(-5) = \\sqrt{-1}$ is not real — $-5$ is outside the domain of $g$."
  },
  {
    id: 10,
    difficulty: 2,
    category: "Inverse & self-composite",
    question: "The function $h(x)$ is defined as $h(x) = \\dfrac{x}{2} + 5$, $x \\ge 0$, $x \\in \\mathbb{R}$. (a) State the range of $h(x)$. (b) Derive an expression for the inverse function $h^{-1}(x)$. (c) Find an expression for $hh(x)$ in the form $ax + b$. (d) Solve the equation $h(x) = h^{-1}(x)$.",
    answer: "(a) $\\mathbf{h(x) \\ge 5}$. (b) $y = \\dfrac{x}{2} + 5 \\Rightarrow x = 2(y - 5)$, so $h^{-1}(x) = \\mathbf{2x - 10}$, $x \\ge 5$. (c) $hh(x) = \\dfrac{1}{2}\\left(\\dfrac{x}{2} + 5\\right) + 5 = \\mathbf{\\dfrac{x}{4} + \\dfrac{15}{2}}$. (d) $\\dfrac{x}{2} + 5 = 2x - 10 \\Rightarrow 15 = \\dfrac{3x}{2} \\Rightarrow x = \\mathbf{10}$. (Check: $h(10) = 10$, so the point $(10, 10)$ lies on $y = x$ ✓.)"
  },
  {
    id: 11,
    difficulty: 1,
    category: "Composite functions",
    question: "Let $f(x) = 3x$ and $g(x) = x - 2$. (a) Find $f(g(5))$. (b) Find $g(f(5))$. (c) Find $(f \\circ g)(x)$ and $(g \\circ f)(x)$. (d) Show that there is no value of $x$ for which $(f \\circ g)(x) = (g \\circ f)(x)$.",
    answer: "(a) $g(5) = 3$, $f(3) = \\mathbf{9}$. (b) $f(5) = 15$, $g(15) = \\mathbf{13}$. (c) $(f \\circ g)(x) = \\mathbf{3x - 6}$; $(g \\circ f)(x) = \\mathbf{3x - 2}$. (d) $3x - 6 = 3x - 2 \\Rightarrow -6 = -2$, which is false, so there is **no solution** (the two graphs are parallel lines)."
  },
  {
    id: 12,
    difficulty: 3,
    category: "Linear functions & inverses — unknowns",
    question: "A linear function is given by $f(x) = ax + b$. It is known that $f(2) = 7$ and $f^{-1}(-5) = -2$. (a) Find the values of $a$ and $b$. (b) Find $f^{-1}(x)$ and solve $f(x) = f^{-1}(x)$. (c) Let $g(x) = x^2 + c$. Find the value of $c$ for which the minimum value of $(f \\circ g)(x)$ is $10$.",
    answer: "(a) $f^{-1}(-5) = -2 \\Rightarrow f(-2) = -5$. So $2a + b = 7$ and $-2a + b = -5$. Adding: $2b = 2 \\Rightarrow b = \\mathbf{1}$, then $a = \\mathbf{3}$. So $f(x) = 3x + 1$. (b) $f^{-1}(x) = \\mathbf{\\dfrac{x - 1}{3}}$. $3x + 1 = \\dfrac{x - 1}{3} \\Rightarrow 9x + 3 = x - 1 \\Rightarrow x = \\mathbf{-\\dfrac{1}{2}}$. (c) $(f \\circ g)(x) = 3(x^2 + c) + 1 = 3x^2 + 3c + 1$. Its minimum (at $x = 0$) is $3c + 1 = 10 \\Rightarrow c = \\mathbf{3}$."
  }
];
