// Use var (not const/let) so these become window.PAPER / window.QUESTIONS
// when loaded via dynamic <script> injection in practice.html.
var PAPER = {
  title: "Logarithm practice — 20 questions"
};

var QUESTIONS = [
  {
    id: 1,
    category: "Express",
    question: "Express $\\log_a(a^2b^3)$ in terms of $\\log_a a$ and $\\log_a b$.",
    answer: "$$\\log_a(a^2b^3) = 2\\log_a a + 3\\log_a b$$"
  },
  {
    id: 2,
    category: "Log laws",
    question: "Simplify: $\\log_3 81 - \\log_3 9$",
    answer: "$$\\log_3 81 - \\log_3 9 = \\log_3\\!\\left(\\frac{81}{9}\\right) = \\log_3 9 = 2$$"
  },
  {
    id: 3,
    category: "Rewrite",
    question: "Given that $\\log_2\\!\\left(\\dfrac{64^x}{4^y}\\right)$ can be written as $px + qy$, find $p$ and $q$.",
    answer: "$$\\log_2\\!\\left(\\frac{64^x}{4^y}\\right) = x\\log_2 64 - y\\log_2 4 = 6x - 2y \\quad\\Rightarrow\\quad p = 6,\\enspace q = -2$$"
  },
  {
    id: 4,
    category: "Solve",
    question: "Solve: $\\log_2(3x - 1) = 4$",
    answer: "$$3x - 1 = 2^4 = 16 \\implies 3x = 17 \\implies x = \\frac{17}{3}$$"
  },
  {
    id: 5,
    category: "Express",
    question: "Use laws of logarithms to express $\\log_a(a^2\\sqrt{b})$ in terms of $\\log_a a$ and $\\log_a b$.",
    answer: "$$\\log_a(a^2\\sqrt{b}) = \\log_a a^2 + \\log_a b^{1/2} = 2\\log_a a + \\tfrac{1}{2}\\log_a b$$"
  },
  {
    id: 6,
    category: "Log laws",
    question: "Show that $\\log_5 125 + \\log_5\\!\\left(\\dfrac{1}{25}\\right) = 1$.",
    answer: "$$\\log_5 125 + \\log_5\\!\\left(\\frac{1}{25}\\right) = 3 + (-2) = 1 \\checkmark$$"
  },
  {
    id: 7,
    category: "Solve",
    question: "Solve: $2\\log_3 x - \\log_3(x + 6) = 1$",
    answer: "$$\\log_3\\!\\left(\\frac{x^2}{x+6}\\right) = 1 \\implies x^2 = 3(x+6) \\implies x^2 - 3x - 18 = 0 \\implies (x-6)(x+3)=0$$\n$x = 6$ &nbsp;($x = -3$ rejected: $\\log$ of negative undefined)"
  },
  {
    id: 8,
    category: "Rewrite",
    question: "Given $\\log_2\\!\\left(\\dfrac{16^x}{2^y}\\right) = px + qy$, find $p$ and $q$.",
    answer: "$$\\log_2(16^x) - \\log_2(2^y) = 4x - y \\quad\\Rightarrow\\quad p = 4,\\enspace q = -1$$"
  },
  {
    id: 9,
    category: "Log laws",
    question: "Evaluate: $3\\log_{10} 2 + \\log_{10}\\!\\left(\\dfrac{1000}{8}\\right)$",
    answer: "$$= \\log_{10}(2^3) + \\log_{10}(125) = \\log_{10}(8 \\times 125) = \\log_{10} 1000 = 3$$"
  },
  {
    id: 10,
    category: "Express",
    question: "Express $\\log_b\\!\\left(\\dfrac{b^4}{c^2}\\right)$ in terms of $\\log_b b$ and $\\log_b c$.",
    answer: "$$\\log_b\\!\\left(\\frac{b^4}{c^2}\\right) = 4\\log_b b - 2\\log_b c$$"
  },
  {
    id: 11,
    category: "Solve",
    question: "Solve: $\\log_4(x^2 - 5) = \\log_4(4x)$",
    answer: "$$x^2 - 5 = 4x \\implies x^2 - 4x - 5 = 0 \\implies (x-5)(x+1) = 0 \\implies x = 5$$\n($x = -1$ rejected: $\\log$ of negative undefined)"
  },
  {
    id: 12,
    category: "Rewrite",
    question: "Given $\\log_3\\!\\left(\\dfrac{243^x}{27^y}\\right)$ can be written as $px + qy$, find $p$ and $q$.",
    answer: "$$\\log_3(243^x) - \\log_3(27^y) = 5x - 3y \\quad\\Rightarrow\\quad p = 5,\\enspace q = -3$$"
  },
  {
    id: 13,
    category: "Log laws",
    question: "Simplify: $\\tfrac{1}{2}\\log_a 36 - \\log_a 2$",
    answer: "$$\\log_a(36^{1/2}) - \\log_a 2 = \\log_a 6 - \\log_a 2 = \\log_a 3$$"
  },
  {
    id: 14,
    category: "Solve",
    question: "Solve: $\\log_3 x + \\log_3(x - 4) = 1$",
    answer: "$$x(x-4) = 3 \\implies x^2 - 4x - 3 = 0 \\implies x = \\frac{4 \\pm \\sqrt{28}}{2} = 2 \\pm \\sqrt{7}$$\n$x = 2 + \\sqrt{7}$ &nbsp;($x = 2 - \\sqrt{7}$ rejected: gives $x < 0$)"
  },
  {
    id: 15,
    category: "Express",
    question: "Use log laws to write $\\log_b(c^2 \\cdot d^3)$ in terms of $\\log_b c$ and $\\log_b d$.",
    answer: "$$\\log_b(c^2 \\cdot d^3) = 2\\log_b c + 3\\log_b d$$"
  },
  {
    id: 16,
    category: "Log laws",
    question: "Evaluate without a calculator: $\\log_2 96 - \\log_2 3$",
    answer: "$$\\log_2\\!\\left(\\frac{96}{3}\\right) = \\log_2 32 = \\log_2 2^5 = 5$$"
  },
  {
    id: 17,
    category: "Rewrite",
    question: "Given $\\log_2\\!\\left(\\dfrac{128^x}{32^y}\\right) = px + qy$, find $p$ and $q$.",
    answer: "$$\\log_2(128^x) - \\log_2(32^y) = 7x - 5y \\quad\\Rightarrow\\quad p = 7,\\enspace q = -5$$"
  },
  {
    id: 18,
    category: "Solve",
    question: "Solve the equation: $2\\log_2 x = \\log_2(x + 12) + 1$",
    answer: "$$\\log_2(x^2) = \\log_2(2(x+12)) \\implies x^2 = 2x + 24 \\implies x^2 - 2x - 24 = 0 \\implies x = 6$$\n($x = -4$ rejected: $\\log$ of negative undefined)"
  },
  {
    id: 19,
    category: "Express",
    question: "Express $\\log_p\\!\\left(\\dfrac{p^5}{q^2}\\right)$ in terms of $\\log_p p$ and $\\log_p q$.",
    answer: "$$\\log_p\\!\\left(\\frac{p^5}{q^2}\\right) = 5\\log_p p - 2\\log_p q$$"
  },
  {
    id: 20,
    category: "Log laws",
    question: "Given $\\log_{10} 2 = 0.301$ and $\\log_{10} 3 = 0.477$, find $\\log_{10} 72$ without a calculator.",
    answer: "$$72 = 2^3 \\times 3^2 \\implies \\log_{10} 72 = 3(0.301) + 2(0.477) = 0.903 + 0.954 = 1.857$$"
  }
];
