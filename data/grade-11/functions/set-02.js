var PAPER = {
  title: "Functions — rational inverses, restricted domains and composites (12 questions)"
};

var QUESTIONS = [
  {
    id: 1,
    difficulty: 2,
    category: "Inverse of a rational function",
    question: "Consider the function $f(x) = \\dfrac{3 - 2x}{x + 4}$, $x \\ne -4$, $x \\in \\mathbb{R}$. (a) State the range of $f$. (b) Find the inverse function $f^{-1}(x)$. (c) State the domain and the range of $f^{-1}(x)$. (d) Find $f^{-1}(1)$.",
    answer: "(a) Horizontal asymptote $y = \\dfrac{-2}{1} = -2$, so the range is $\\mathbf{f(x) \\in \\mathbb{R},\\ f(x) \\ne -2}$. (b) $y = \\dfrac{3 - 2x}{x + 4} \\Rightarrow xy + 4y = 3 - 2x \\Rightarrow x(y + 2) = 3 - 4y \\Rightarrow x = \\dfrac{3 - 4y}{y + 2}$. So $f^{-1}(x) = \\mathbf{\\dfrac{3 - 4x}{x + 2}}$. (c) Domain of $f^{-1}$ = range of $f$: $\\mathbf{x \\ne -2}$. Range of $f^{-1}$ = domain of $f$: $\\mathbf{f^{-1}(x) \\ne -4}$. (d) $f^{-1}(1) = \\dfrac{3 - 4}{3} = \\mathbf{-\\dfrac{1}{3}}$. (Check: $f\\left(-\\tfrac{1}{3}\\right) = \\dfrac{11/3}{11/3} = 1$ ✓.)"
  },
  {
    id: 2,
    difficulty: 1,
    category: "Function notation",
    question: "Use the functions $f(x) = x^2 + 2x$, $g(x) = 4x$ and $h(x) = 5$ to evaluate: (a) $f(3)$ (b) $f(-4)$ (c) $g(-2.5)$ (d) $f(-1) + h(0)$ (e) $2f(1) - 3g(2)$ (f) $h(-3) \\times f(2)$ (g) $g^{-1}(-8)$ (h) $f(g(x))$ (i) $f \\circ g^{-1}(x)$",
    answer: "(a) $9 + 6 = \\mathbf{15}$ (b) $16 - 8 = \\mathbf{8}$ (c) $\\mathbf{-10}$ (d) $-1 + 5 = \\mathbf{4}$ (e) $2(3) - 3(8) = \\mathbf{-18}$ (f) $5 \\times 8 = \\mathbf{40}$ (g) $g^{-1}(x) = \\dfrac{x}{4}$, so $g^{-1}(-8) = \\mathbf{-2}$ (h) $f(4x) = (4x)^2 + 2(4x) = \\mathbf{16x^2 + 8x}$ (i) $f\\left(\\dfrac{x}{4}\\right) = \\dfrac{x^2}{16} + \\dfrac{2x}{4} = \\mathbf{\\dfrac{x^2}{16} + \\dfrac{x}{2}}$"
  },
  {
    id: 3,
    difficulty: 3,
    category: "Inverse of a quadratic",
    question: "Let $f(x) = x^2 - 6x + 11$, $x \\ge k$. (a) Write $f(x)$ in the form $(x - h)^2 + q$. (b) Find the smallest value of $k$ for which $f^{-1}$ exists. (c) Using this value of $k$, find $f^{-1}(x)$ and state its domain and range. (d) Solve the equation $f(x) = f^{-1}(x)$.",
    answer: "(a) $f(x) = (x - 3)^2 - 9 + 11 = \\mathbf{(x - 3)^2 + 2}$. (b) $f$ is one-to-one only on one side of the vertex $x = 3$, so the smallest value is $\\mathbf{k = 3}$. (c) $y = (x - 3)^2 + 2 \\Rightarrow x - 3 = \\pm\\sqrt{y - 2}$. Since $x \\ge 3$, take the positive root: $f^{-1}(x) = \\mathbf{3 + \\sqrt{x - 2}}$. Domain $\\mathbf{x \\ge 2}$ (range of $f$); range $\\mathbf{f^{-1}(x) \\ge 3}$. (d) $f$ is increasing on $x \\ge 3$, so the graphs of $f$ and $f^{-1}$ meet on the line $y = x$. Solve $f(x) = x$: $x^2 - 7x + 11 = 0 \\Rightarrow x = \\dfrac{7 \\pm \\sqrt{5}}{2}$. Since $\\dfrac{7 - \\sqrt{5}}{2} \\approx 2.38 < 3$ is outside the domain, $x = \\mathbf{\\dfrac{7 + \\sqrt{5}}{2}}$."
  },
  {
    id: 4,
    difficulty: 2,
    category: "Inverse & self-composite",
    question: "The function $h(x)$ is defined as $h(x) = \\dfrac{x}{4} + 3$, $x \\ge 0$, $x \\in \\mathbb{R}$. (a) State the range of $h(x)$. (b) Derive an expression for the inverse function $h^{-1}(x)$. (c) Find an expression for $hh(x)$ in the form $ax + b$. (d) Solve the equation $h(x) = h^{-1}(x)$. (e) Explain why the equation $h(x) = h^{-1}(x)$ has the same solution as the equation $h(x) = x$.",
    answer: "(a) $h(0) = 3$ and $h$ is increasing, so $\\mathbf{h(x) \\ge 3}$. (b) $y = \\dfrac{x}{4} + 3 \\Rightarrow x = 4(y - 3)$, so $h^{-1}(x) = \\mathbf{4x - 12}$, $x \\ge 3$. (c) $hh(x) = \\dfrac{1}{4}\\left(\\dfrac{x}{4} + 3\\right) + 3 = \\mathbf{\\dfrac{x}{16} + \\dfrac{15}{4}}$. (d) $\\dfrac{x}{4} + 3 = 4x - 12 \\Rightarrow 15 = \\dfrac{15x}{4} \\Rightarrow x = \\mathbf{4}$. (e) The graph of $h^{-1}$ is the reflection of the graph of $h$ in the line $y = x$. Because $h$ is increasing, the two graphs can only meet on the line $y = x$, so solving $h(x) = h^{-1}(x)$ is the same as solving $h(x) = x$ (check: $h(4) = 4$ ✓)."
  },
  {
    id: 5,
    difficulty: 1,
    category: "Range on a restricted domain",
    question: "Find the range of each function. (a) $f(x) = 2x + 5$, domain $\\{x \\in \\mathbb{R},\\ -3 \\le x \\le 4\\}$ (b) $f(x) = 7 - 4x$, domain $\\{x = -2, -1, 0, 1, 2\\}$ (c) $f(x) = x^2$, domain $\\{x \\in \\mathbb{R},\\ -3 \\le x \\le 1\\}$ (d) $f(x) = 500 - 25x$, domain $\\{x \\in \\mathbb{R},\\ 0 \\le x \\le 20\\}$",
    answer: "(a) $f(-3) = -1$, $f(4) = 13$: $\\mathbf{-1 \\le f(x) \\le 13}$. (b) Values $15, 11, 7, 3, -1$: range $\\mathbf{\\{-1, 3, 7, 11, 15\\}}$. (c) Minimum $f(0) = 0$; the largest value is at the end furthest from $0$: $f(-3) = 9$. Range $\\mathbf{0 \\le f(x) \\le 9}$. (d) $f(0) = 500$, $f(20) = 0$: $\\mathbf{0 \\le f(x) \\le 500}$."
  },
  {
    id: 6,
    difficulty: 3,
    category: "Finding a function from a composite",
    question: "Let $f(x) = 2x - 3$. A function $g$ is such that $(g \\circ f)(x) = 4x^2 - 10x + 5$. (a) By writing $u = 2x - 3$, find $g(x)$. (b) Find $(f \\circ g)(x)$. (c) Solve $(f \\circ g)(x) = (g \\circ f)(x)$.",
    answer: "(a) $u = 2x - 3 \\Rightarrow x = \\dfrac{u + 3}{2}$. Then $4x^2 = (u + 3)^2$ and $10x = 5(u + 3)$, so $g(u) = (u + 3)^2 - 5(u + 3) + 5 = u^2 + 6u + 9 - 5u - 15 + 5 = u^2 + u - 1$. Hence $g(x) = \\mathbf{x^2 + x - 1}$. (Check: $(2x-3)^2 + (2x - 3) - 1 = 4x^2 - 10x + 5$ ✓.) (b) $(f \\circ g)(x) = 2(x^2 + x - 1) - 3 = \\mathbf{2x^2 + 2x - 5}$. (c) $2x^2 + 2x - 5 = 4x^2 - 10x + 5 \\Rightarrow 2x^2 - 12x + 10 = 0 \\Rightarrow x^2 - 6x + 5 = 0 \\Rightarrow (x - 1)(x - 5) = 0 \\Rightarrow x = \\mathbf{1}$ or $x = \\mathbf{5}$."
  },
  {
    id: 7,
    difficulty: 2,
    category: "Graph of a function and its inverse",
    diagram: "data/grade-11/functions/img/set-02-q07.svg",
    question: "The graph shows $y = f(x)$ for $-3 \\le x \\le 3$. (a) Write down the value of (i) $f(-3)$ (ii) $f(1)$. (b) Find the domain of $f^{-1}$. (c) Write down $f^{-1}(0)$. (d) Sketch the graph of $f^{-1}$, labelling the coordinates of its end points and of the points where its gradient changes. (e) Find an expression for $f(x)$ for $-1 \\le x \\le 1$.",
    answer: "(a) (i) $f(-3) = \\mathbf{-4}$ (ii) $f(1) = \\mathbf{1}$. (b) Domain of $f^{-1}$ = range of $f$ = $\\mathbf{-4 \\le x \\le 5}$. (c) $f(-1) = 0$, so $f^{-1}(0) = \\mathbf{-1}$. (d) Reflect the graph in $y = x$ by swapping the coordinates of each key point: $f^{-1}$ is made of straight line segments joining $\\mathbf{(-4, -3)}$, $\\mathbf{(0, -1)}$, $\\mathbf{(1, 1)}$ and $\\mathbf{(5, 3)}$. (e) The segment joins $(-1, 0)$ and $(1, 1)$: gradient $\\dfrac{1}{2}$, so $f(x) = \\mathbf{\\dfrac{1}{2}x + \\dfrac{1}{2}}$."
  },
  {
    id: 8,
    difficulty: 1,
    category: "Composite functions",
    question: "Let $f(x) = x - 4$ and $g(x) = 3x^2$. (a) Find $f(g(1))$. (b) Find $g(f(1))$. (c) Find $(f \\circ g)(x)$. (d) Find $(g \\circ f)(x)$ in expanded form. (e) Find $f^{-1}(x)$ and hence $f^{-1}(10)$.",
    answer: "(a) $g(1) = 3$, $f(3) = \\mathbf{-1}$. (b) $f(1) = -3$, $g(-3) = \\mathbf{27}$. (c) $(f \\circ g)(x) = \\mathbf{3x^2 - 4}$. (d) $(g \\circ f)(x) = 3(x - 4)^2 = \\mathbf{3x^2 - 24x + 48}$. (e) $f^{-1}(x) = \\mathbf{x + 4}$, so $f^{-1}(10) = \\mathbf{14}$."
  },
  {
    id: 9,
    difficulty: 2,
    category: "Equations with composite functions",
    question: "Consider the functions $f(x) = x^2$, $x \\in \\mathbb{R}$ and $g(x) = x + 2$, $x \\in \\mathbb{R}$. (a) Solve the equation $f(x) = g(x)$. (b) Solve the equation $fg(x) = gf(x)$. (c) Solve the equation $fg(x) = 16$.",
    answer: "(a) $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x - 2)(x + 1) = 0 \\Rightarrow x = \\mathbf{2}$ or $x = \\mathbf{-1}$. (b) $fg(x) = (x + 2)^2 = x^2 + 4x + 4$ and $gf(x) = x^2 + 2$. So $4x + 4 = 2 \\Rightarrow x = \\mathbf{-\\dfrac{1}{2}}$. (c) $(x + 2)^2 = 16 \\Rightarrow x + 2 = \\pm 4 \\Rightarrow x = \\mathbf{2}$ or $x = \\mathbf{-6}$."
  },
  {
    id: 10,
    difficulty: 3,
    category: "Self-inverse functions",
    question: "Consider the function $f(x) = \\dfrac{k}{x - 2} + 2$, $x > 2$, $x \\in \\mathbb{R}$, where $k > 0$. (a) Show that $f(x)$ is a self-inverse function. (b) State the range of $f$. (c) Given that $f(4) = 5$, find the value of $k$. (d) Using this value of $k$, solve the equation $f(x) = x$.",
    answer: "(a) Let $y = \\dfrac{k}{x - 2} + 2 \\Rightarrow y - 2 = \\dfrac{k}{x - 2} \\Rightarrow x - 2 = \\dfrac{k}{y - 2} \\Rightarrow x = \\dfrac{k}{y - 2} + 2$. So $f^{-1}(x) = \\dfrac{k}{x - 2} + 2 = f(x)$, hence $f$ is self-inverse. (b) For $x > 2$ and $k > 0$, $\\dfrac{k}{x - 2} > 0$, so $\\mathbf{f(x) > 2}$. (c) $\\dfrac{k}{2} + 2 = 5 \\Rightarrow \\mathbf{k = 6}$. (d) $\\dfrac{6}{x - 2} + 2 = x \\Rightarrow \\dfrac{6}{x - 2} = x - 2 \\Rightarrow (x - 2)^2 = 6 \\Rightarrow x = 2 \\pm \\sqrt{6}$. Since $x > 2$: $x = \\mathbf{2 + \\sqrt{6}}$."
  },
  {
    id: 11,
    difficulty: 1,
    category: "Inverse of a linear function",
    question: "Find the inverse function $f^{-1}(x)$ for each of the following. (a) $f(x) = x + 9$ (b) $f(x) = 6x$ (c) $f(x) = 2x - 7$ (d) $f(x) = \\dfrac{x + 1}{3}$ (e) $f(x) = 5 - x$ (f) For part (c), verify that $f(f^{-1}(x)) = x$.",
    answer: "(a) $\\mathbf{x - 9}$ (b) $\\mathbf{\\dfrac{x}{6}}$ (c) $y = 2x - 7 \\Rightarrow x = \\dfrac{y + 7}{2}$, so $f^{-1}(x) = \\mathbf{\\dfrac{x + 7}{2}}$ (d) $\\mathbf{3x - 1}$ (e) $y = 5 - x \\Rightarrow x = 5 - y$, so $f^{-1}(x) = \\mathbf{5 - x}$ — this function is its own inverse (self-inverse). (f) $f\\left(\\dfrac{x + 7}{2}\\right) = 2 \\cdot \\dfrac{x + 7}{2} - 7 = x + 7 - 7 = x$ ✓."
  },
  {
    id: 12,
    difficulty: 3,
    category: "Domain & range of composites",
    question: "Let $f(x) = \\sqrt{x - 3}$, $x \\ge 3$ and $g(x) = x^2 + 1$, $x \\in \\mathbb{R}$. (a) Find $(f \\circ g)(x)$ and state its largest possible domain and its range. (b) Find $(g \\circ f)(x)$ and state its domain and range. (c) Show that the equation $(f \\circ g)(x) = (g \\circ f)(x)$ has no solutions.",
    answer: "(a) $(f \\circ g)(x) = \\sqrt{x^2 + 1 - 3} = \\mathbf{\\sqrt{x^2 - 2}}$. Need $x^2 \\ge 2$: domain $\\mathbf{x \\le -\\sqrt{2}}$ or $\\mathbf{x \\ge \\sqrt{2}}$; range $\\mathbf{(f \\circ g)(x) \\ge 0}$. (b) $(g \\circ f)(x) = (\\sqrt{x - 3})^2 + 1 = \\mathbf{x - 2}$, but only where $f$ is defined: domain $\\mathbf{x \\ge 3}$, so range $\\mathbf{(g \\circ f)(x) \\ge 1}$. (c) Both sides are defined only for $x \\ge 3$. $\\sqrt{x^2 - 2} = x - 2 \\Rightarrow x^2 - 2 = x^2 - 4x + 4 \\Rightarrow 4x = 6 \\Rightarrow x = 1.5$. But $1.5 < 3$ is not in the common domain, so there are **no solutions**."
  }
];
