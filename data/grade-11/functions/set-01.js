var PAPER = {
  title: "Functions — notation, domain & range, composites and inverses (12 questions)"
};

var QUESTIONS = [
  {
    id: 1,
    difficulty: 1,
    category: "Function notation",
    question: "Use the functions $f(x) = x^2 - 5$, $g(x) = 3x$ and $h(x) = -2$ to evaluate: (a) $f(4)$ (b) $f(-3)$ (c) $g(-5)$ (d) $f(2) + h(7)$ (e) $3f(0) - 2g(1)$ (f) $h(1) \\times f(-1)$ (g) $f(g(x))$ (h) $g^{-1}(6)$",
    answer: "(a) $f(4) = 16 - 5 = \\mathbf{11}$ (b) $f(-3) = 9 - 5 = \\mathbf{4}$ (c) $g(-5) = \\mathbf{-15}$ (d) $f(2) + h(7) = -1 + (-2) = \\mathbf{-3}$ ($h$ is constant, so $h(7) = -2$) (e) $3f(0) - 2g(1) = 3(-5) - 2(3) = \\mathbf{-21}$ (f) $h(1) \\times f(-1) = (-2)(-4) = \\mathbf{8}$ (g) $f(g(x)) = (3x)^2 - 5 = \\mathbf{9x^2 - 5}$ (h) $g^{-1}(x) = \\dfrac{x}{3}$, so $g^{-1}(6) = \\mathbf{2}$ (check: $g(2) = 6$ ✓)."
  },
  {
    id: 2,
    difficulty: 2,
    category: "Evaluating, inverse & solving",
    question: "$f(x) = 5x - 3$, $x \\in \\mathbb{R}$ and $g(x) = x^2 - 6x + 8$, $x \\in \\mathbb{R}$. (a) Find $f(-1)$. (b) Find $g(-3)$. (c) Find an expression for $f^{-1}(x)$. (d) Solve the equation $g(x) = 35$.",
    answer: "(a) $f(-1) = -5 - 3 = \\mathbf{-8}$. (b) $g(-3) = 9 + 18 + 8 = \\mathbf{35}$. (c) Let $y = 5x - 3 \\Rightarrow x = \\dfrac{y+3}{5}$, so $f^{-1}(x) = \\mathbf{\\dfrac{x+3}{5}}$. (d) $x^2 - 6x + 8 = 35 \\Rightarrow x^2 - 6x - 27 = 0 \\Rightarrow (x - 9)(x + 3) = 0 \\Rightarrow x = \\mathbf{9}$ or $x = \\mathbf{-3}$. (This agrees with part (b).)"
  },
  {
    id: 3,
    difficulty: 3,
    category: "Finding a function from a composite",
    question: "Let $f(x) = (x - 1)^3$. Let $g$ be a function such that $(f \\circ g)(x) = 27x^6$. (a) Find $g(x)$. (b) Find $(g \\circ f)(2)$. (c) Solve $(g \\circ f)(x) = 13$, giving your answers in exact form.",
    answer: "(a) $(f \\circ g)(x) = \\bigl(g(x) - 1\\bigr)^3 = 27x^6 = (3x^2)^3$. Taking cube roots: $g(x) - 1 = 3x^2$, so $g(x) = \\mathbf{3x^2 + 1}$. (b) $f(2) = 1^3 = 1$, then $g(1) = 3 + 1 = \\mathbf{4}$. (c) $(g \\circ f)(x) = 3(x-1)^6 + 1 = 13 \\Rightarrow (x-1)^6 = 4 \\Rightarrow x - 1 = \\pm 4^{1/6} = \\pm \\sqrt[3]{2}$. So $x = \\mathbf{1 + \\sqrt[3]{2}}$ or $x = \\mathbf{1 - \\sqrt[3]{2}}$."
  },
  {
    id: 4,
    difficulty: 1,
    category: "Range on a restricted domain",
    question: "Find the range of each function. (a) $f(x) = 3x - 2$, domain $\\{x \\in \\mathbb{R},\\ -4 \\le x \\le 6\\}$ (b) $f(x) = 10 - 3x$, domain $\\{x = -2, 0, 1, 3, 5\\}$ (c) $f(x) = x^2$, domain $\\{x \\in \\mathbb{R},\\ -2 \\le x \\le 5\\}$ (d) $f(x) = 120 - 7.5x$, domain $\\{x \\in \\mathbb{R},\\ 0 \\le x \\le 16\\}$",
    answer: "(a) $f$ is increasing: $f(-4) = -14$, $f(6) = 16$. Range: $\\mathbf{-14 \\le f(x) \\le 16}$. (b) $f(-2)=16,\\ f(0)=10,\\ f(1)=7,\\ f(3)=1,\\ f(5)=-5$. Range: $\\mathbf{\\{-5, 1, 7, 10, 16\\}}$. (c) The domain includes $x = 0$, where $x^2$ takes its minimum value $0$; the maximum is $f(5) = 25$. Range: $\\mathbf{0 \\le f(x) \\le 25}$ (not $4 \\le f(x) \\le 25$). (d) $f$ is decreasing: $f(0) = 120$, $f(16) = 0$. Range: $\\mathbf{0 \\le f(x) \\le 120}$."
  },
  {
    id: 5,
    difficulty: 3,
    category: "Self-inverse functions",
    question: "The function $f$ is defined by $f(x) = \\dfrac{ax + 3}{2x - 5}$, $x \\in \\mathbb{R}$, $x \\ne \\dfrac{5}{2}$, where $a$ is a constant. (a) Find $f^{-1}(x)$ in terms of $a$. (b) Hence find the value of $a$ for which $f$ is a self-inverse function. (c) For this value of $a$, write down the value of $f(f(7))$. (d) For this value of $a$, solve the equation $f(x) = x$, giving your answers in exact form.",
    answer: "(a) $y = \\dfrac{ax+3}{2x-5} \\Rightarrow 2xy - 5y = ax + 3 \\Rightarrow x(2y - a) = 5y + 3 \\Rightarrow x = \\dfrac{5y+3}{2y-a}$. So $f^{-1}(x) = \\mathbf{\\dfrac{5x + 3}{2x - a}}$. (b) Self-inverse means $f^{-1}(x) = f(x)$: comparing $\\dfrac{5x+3}{2x-a}$ with $\\dfrac{ax+3}{2x-5}$ gives $\\mathbf{a = 5}$. Check: $f(f(x)) = \\dfrac{5\\cdot\\frac{5x+3}{2x-5} + 3}{2\\cdot\\frac{5x+3}{2x-5} - 5} = \\dfrac{25x + 15 + 6x - 15}{10x + 6 - 10x + 25} = \\dfrac{31x}{31} = x$ ✓. (c) Since $f$ is self-inverse, $f(f(7)) = \\mathbf{7}$. (d) $\\dfrac{5x+3}{2x-5} = x \\Rightarrow 5x + 3 = 2x^2 - 5x \\Rightarrow 2x^2 - 10x - 3 = 0 \\Rightarrow x = \\dfrac{10 \\pm \\sqrt{124}}{4} = \\mathbf{\\dfrac{5 \\pm \\sqrt{31}}{2}}$."
  },
  {
    id: 6,
    difficulty: 2,
    category: "Domain from range, inverse",
    question: "A function is defined as $f(x) = 4x + 7$. (a) Given that the range of $f(x)$ is $-5 < f(x) < 31$, find the domain of $f(x)$. (b) Find $ff(-2)$. (c) Find the inverse function $f^{-1}(x)$. (d) State the range of the inverse function.",
    answer: "(a) $-5 < 4x + 7 < 31 \\Rightarrow -12 < 4x < 24 \\Rightarrow \\mathbf{-3 < x < 6}$. (b) $f(-2) = -1$, so $ff(-2) = f(-1) = \\mathbf{3}$. (c) $y = 4x + 7 \\Rightarrow x = \\dfrac{y - 7}{4}$, so $f^{-1}(x) = \\mathbf{\\dfrac{x - 7}{4}}$. (d) The range of $f^{-1}$ is the domain of $f$: $\\mathbf{-3 < f^{-1}(x) < 6}$."
  },
  {
    id: 7,
    difficulty: 1,
    category: "Reading a function from a graph",
    diagram: "data/grade-11/functions/img/set-01-q07.svg",
    question: "The graph shows $y = f(x)$ for $-4 \\le x \\le 3$. (a) Write down the value of (i) $f(-4)$ (ii) $f(3)$ (iii) $f(0)$. (b) Solve $f(x) = -1$. (c) State the range of $f$. (d) Write down the domain of $f^{-1}$ and the value of $f^{-1}(2)$.",
    answer: "(a) (i) $f(-4) = \\mathbf{-5}$ (ii) $f(3) = \\mathbf{5}$ (iii) $f(0) = \\mathbf{1}$ (the graph crosses the $y$-axis at $1$). (b) The graph passes through $(-2, -1)$, so $x = \\mathbf{-2}$. (c) Lowest point $(-4,-5)$, highest point $(3,5)$: $\\mathbf{-5 \\le f(x) \\le 5}$. (d) The domain of $f^{-1}$ is the range of $f$: $\\mathbf{-5 \\le x \\le 5}$. The graph passes through $(1, 2)$, so $f^{-1}(2) = \\mathbf{1}$."
  },
  {
    id: 8,
    difficulty: 2,
    category: "Verifying inverse functions",
    question: "For each pair of functions, determine algebraically whether they are inverses of each other. (a) $f(x) = -3x + 6$, $g(x) = -\\dfrac{x - 6}{3}$ (b) $f(x) = \\dfrac{1}{2}x + 3$, $g(x) = 2x - 3$ (c) $f(x) = \\dfrac{1}{2}x^2 + 2$, $x \\ge 0$ and $g(x) = \\sqrt{2x - 4}$, $x \\ge 2$ (d) $f(x) = \\dfrac{2x + 5}{x - 3}$, $g(x) = \\dfrac{3x + 5}{x - 2}$",
    answer: "Two functions are inverses if $f(g(x)) = x$ (and $g(f(x)) = x$). (a) $f(g(x)) = -3\\left(-\\dfrac{x-6}{3}\\right) + 6 = x - 6 + 6 = x$ ✓. **Inverses.** (b) $f(g(x)) = \\dfrac{1}{2}(2x - 3) + 3 = x + \\dfrac{3}{2} \\ne x$. **Not inverses** (the inverse of $f$ is $2x - 6$). (c) $f(g(x)) = \\dfrac{1}{2}(2x - 4) + 2 = x$ ✓ and $g(f(x)) = \\sqrt{x^2 + 4 - 4} = \\sqrt{x^2} = x$ since $x \\ge 0$ ✓. **Inverses.** (d) $f(g(x)) = \\dfrac{2\\cdot\\frac{3x+5}{x-2} + 5}{\\frac{3x+5}{x-2} - 3} = \\dfrac{6x + 10 + 5x - 10}{3x + 5 - 3x + 6} = \\dfrac{11x}{11} = x$ ✓. **Inverses.**"
  },
  {
    id: 9,
    difficulty: 3,
    category: "Ranges, composites & inequalities",
    question: "Consider the functions $f(x) = x^2 - 9$, $g(x) = \\dfrac{1}{x + 2}$, $h(x) = 3^x$. (a) Find the range of each of $f(x)$, $g(x)$ and $h(x)$. (b) Find an expression for $gf(x)$ and state the values of $x$ for which it is undefined. (c) Solve the equation $gf(x) = 9$. (d) Solve the inequality $gh(x) > \\dfrac{1}{29}$.",
    answer: "(a) $f(x) \\ge -9$; $g(x) \\ne 0$ ($g(x) \\in \\mathbb{R}, g(x) \\neq 0$); $h(x) > 0$. (b) $gf(x) = \\dfrac{1}{(x^2 - 9) + 2} = \\mathbf{\\dfrac{1}{x^2 - 7}}$, undefined when $x = \\pm\\sqrt{7}$. (c) $\\dfrac{1}{x^2 - 7} = 9 \\Rightarrow x^2 - 7 = \\dfrac{1}{9} \\Rightarrow x^2 = \\dfrac{64}{9} \\Rightarrow x = \\mathbf{\\pm\\dfrac{8}{3}}$. (d) $gh(x) = \\dfrac{1}{3^x + 2}$. Since $3^x + 2 > 0$ for all $x$, we can take reciprocals and reverse the inequality: $3^x + 2 < 29 \\Rightarrow 3^x < 27 \\Rightarrow \\mathbf{x < 3}$."
  },
  {
    id: 10,
    difficulty: 2,
    category: "Equations with composite functions",
    question: "Consider the functions $f(x) = x^2$, $x \\in \\mathbb{R}$ and $g(x) = 3x - 2$, $x \\in \\mathbb{R}$. (a) Solve the equation $f(x) = g(x)$. (b) Solve the equation $fg(x) = gf(x)$.",
    answer: "(a) $x^2 = 3x - 2 \\Rightarrow x^2 - 3x + 2 = 0 \\Rightarrow (x - 1)(x - 2) = 0 \\Rightarrow x = \\mathbf{1}$ or $x = \\mathbf{2}$. (b) $fg(x) = (3x - 2)^2 = 9x^2 - 12x + 4$ and $gf(x) = 3x^2 - 2$. Setting equal: $9x^2 - 12x + 4 = 3x^2 - 2 \\Rightarrow 6x^2 - 12x + 6 = 0 \\Rightarrow (x - 1)^2 = 0 \\Rightarrow x = \\mathbf{1}$."
  },
  {
    id: 11,
    difficulty: 1,
    category: "Composite functions",
    question: "Let $f(x) = 2x + 1$ and $g(x) = x^2 - 3$. Find: (a) $f(g(2))$ (b) $g(f(2))$ (c) $(f \\circ g)(x)$ (d) $(g \\circ f)(x)$ (e) $(f \\circ f)(x)$",
    answer: "(a) $g(2) = 1$, so $f(g(2)) = f(1) = \\mathbf{3}$. (b) $f(2) = 5$, so $g(f(2)) = g(5) = \\mathbf{22}$. (c) $(f \\circ g)(x) = 2(x^2 - 3) + 1 = \\mathbf{2x^2 - 5}$. (d) $(g \\circ f)(x) = (2x + 1)^2 - 3 = \\mathbf{4x^2 + 4x - 2}$. (e) $(f \\circ f)(x) = 2(2x + 1) + 1 = \\mathbf{4x + 3}$. Note that parts (a) and (b) give different answers: in general $f \\circ g \\ne g \\circ f$."
  },
  {
    id: 12,
    difficulty: 3,
    category: "Inverses & composites — reasoning",
    question: "Let $f(x) = \\sqrt{x} + 2x$, $x \\ge 0$. (a) Let $h$ be a one-to-one function such that $h(9) = -4$. Find $(f \\circ h^{-1})(-4)$. (b) By using the substitution $u = \\sqrt{x}$, solve the equation $f(x) = 10$. (c) Let $g(x) = \\dfrac{x + 1}{x - 2}$, $x \\ne 2$. Find $g^{-1}(x)$ and hence find $(g^{-1} \\circ f)(4)$.",
    answer: "(a) $h(9) = -4 \\Rightarrow h^{-1}(-4) = 9$. So $(f \\circ h^{-1})(-4) = f(9) = 3 + 18 = \\mathbf{21}$. (b) $u + 2u^2 = 10 \\Rightarrow 2u^2 + u - 10 = 0 \\Rightarrow (2u + 5)(u - 2) = 0$. Since $u = \\sqrt{x} \\ge 0$, reject $u = -\\dfrac{5}{2}$. So $u = 2 \\Rightarrow x = \\mathbf{4}$. (c) $y = \\dfrac{x+1}{x-2} \\Rightarrow xy - 2y = x + 1 \\Rightarrow x(y - 1) = 2y + 1$, so $g^{-1}(x) = \\mathbf{\\dfrac{2x + 1}{x - 1}}$. From (b), $f(4) = 10$, so $(g^{-1} \\circ f)(4) = g^{-1}(10) = \\dfrac{21}{9} = \\mathbf{\\dfrac{7}{3}}$. (Check: $g\\left(\\tfrac{7}{3}\\right) = \\dfrac{10/3}{1/3} = 10$ ✓.)"
  }
];
