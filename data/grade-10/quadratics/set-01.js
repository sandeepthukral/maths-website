var PAPER = {
  title: "Quadratics — set 01 (10 questions)",
  difficultyRanges: [
    { level: 2, from: 1, to: 4 },
    { level: 3, from: 5, to: 8 },
    { level: 4, from: 9, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Solve by factorisation",
    question: "Solve: $2(x - 3)(x + 2) = 0$",
    answer: "$$x - 3 = 0 \\quad \\text{or} \\quad x + 2 = 0$$ $$x = 3 \\quad \\text{or} \\quad x = -2$$"
  },
  {
    id: 2,
    category: "Solve by square roots",
    question: "Solve: $3(x - 2)^2 - 12 = 0$",
    answer: "$$3(x-2)^2 = 12 \\Rightarrow (x-2)^2 = 4 \\Rightarrow x - 2 = \\pm 2$$ $$x = 4 \\quad \\text{or} \\quad x = 0$$"
  },
  {
    id: 3,
    category: "Solve by factorisation",
    question: "Solve each equation. (a) $2x^2 = 18$ (b) $x^2 - 7x = 18$",
    answer: "(a) $x^2 = 9 \\Rightarrow x = \\pm 3$. (b) $$x^2 - 7x - 18 = 0 \\Rightarrow (x-9)(x+2) = 0 \\Rightarrow x = 9 \\text{ or } x = -2$$"
  },
  {
    id: 4,
    category: "Quadratic formula",
    question: "Solve $2x^2 - 3x + 1 = 0$ using the quadratic formula.",
    answer: "$$x = \\frac{3 \\pm \\sqrt{9 - 8}}{4} = \\frac{3 \\pm 1}{4}$$ $$x = 1 \\quad \\text{or} \\quad x = \\frac{1}{2}$$"
  },
  {
    id: 5,
    category: "Discriminant",
    question: "(a) Without solving, state the nature of the solutions of $3x^2 + 4x - 2 = 0$. (b) Find the value(s) of $m$ for which the equation $x^2 + (m+1)x + m = 0$ has exactly one solution.",
    answer: "(a) Discriminant $\\Delta = 4^2 - 4(3)(-2) = 16 + 24 = 40 > 0$. Two distinct real solutions. (b) For exactly one solution $\\Delta = 0$: $$(m+1)^2 - 4m = 0 \\Rightarrow m^2 + 2m + 1 - 4m = 0 \\Rightarrow m^2 - 2m + 1 = 0 \\Rightarrow (m-1)^2 = 0$$ $$m = 1$$"
  },
  {
    id: 6,
    category: "Substitution method",
    question: "Solve: $\\sqrt{x + 8} = \\dfrac{12}{\\sqrt{x + 8}} + 1$",
    answer: "Let $u = \\sqrt{x+8}$, $u \\geq 0$. Multiplying both sides by $u$: $$u^2 = 12 + u \\Rightarrow u^2 - u - 12 = 0 \\Rightarrow (u-4)(u+3) = 0$$ Since $u \\geq 0$: $u = 4$, so $\\sqrt{x+8} = 4 \\Rightarrow x + 8 = 16 \\Rightarrow x = 8$."
  },
  {
    id: 7,
    category: "Complete the square",
    question: "Solve $x^2 + 6x - 7 = 0$ by completing the square.",
    answer: "$$x^2 + 6x = 7$$ $$(x + 3)^2 - 9 = 7$$ $$(x + 3)^2 = 16$$ $$x + 3 = \\pm 4$$ $$x = 1 \\quad \\text{or} \\quad x = -7$$"
  },
  {
    id: 8,
    category: "Discriminant — no real solutions",
    question: "Show that the equation $3x^2 - 2x + 1 = 0$ has no real solutions.",
    answer: "Discriminant $\\Delta = (-2)^2 - 4(3)(1) = 4 - 12 = -8 < 0$. Since $\\Delta < 0$, the equation has no real solutions."
  },
  {
    id: 9,
    category: "Form and solve",
    question: "A rectangle has length $(x + 5)$ cm and width $(x - 1)$ cm. Its area is $27\\text{ cm}^2$. Find $x$.",
    answer: "$$(x+5)(x-1) = 27$$ $$x^2 + 4x - 5 = 27$$ $$x^2 + 4x - 32 = 0$$ $$(x + 8)(x - 4) = 0$$ $$x = 4 \\quad (\\text{rejecting } x = -8 \\text{ since width must be positive})$$"
  },
  {
    id: 10,
    category: "Multi-step",
    question: "The sum of the squares of two consecutive positive integers is $113$. Find the integers.",
    answer: "Let the integers be $n$ and $n+1$. $$n^2 + (n+1)^2 = 113$$ $$2n^2 + 2n + 1 = 113$$ $$2n^2 + 2n - 112 = 0$$ $$n^2 + n - 56 = 0$$ $$(n + 8)(n - 7) = 0$$ $n = 7$ (rejecting $n = -8$ since $n > 0$). The integers are $\\mathbf{7}$ and $\\mathbf{8}$."
  }
];
