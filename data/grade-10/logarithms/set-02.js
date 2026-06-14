// Use var (not const/let) so these become window.PAPER / window.QUESTIONS
// when loaded via dynamic <script> injection in practice.html.
var PAPER = {
  title: "Logarithm practice — 50 questions",
  difficultyRanges: [
    { level: 1, from:  1, to: 10 },
    { level: 2, from: 11, to: 25 },
    { level: 3, from: 26, to: 40 },
    { level: 4, from: 41, to: 50 }
  ]
};

var QUESTIONS = [

  // ── Easy (1–10) ─────────────────────────────────────────────────────────────
  {
    id: 1,
    category: "Evaluate",
    question: "Evaluate $\\log_{10} 1000$",
    answer: "$$\\log_{10} 1000 = 3 \\quad \\text{since } 10^3 = 1000$$"
  },
  {
    id: 2,
    category: "Evaluate",
    question: "Evaluate $\\log_2 64$",
    answer: "$$\\log_2 64 = 6 \\quad \\text{since } 2^6 = 64$$"
  },
  {
    id: 3,
    category: "Evaluate",
    question: "Given $\\log_{10} 2 \\approx 0.301$, find $\\log_{10} 20$",
    answer: "$$\\log_{10} 20 = \\log_{10}(2 \\times 10) = \\log_{10} 2 + 1 \\approx 1.301$$"
  },
  {
    id: 4,
    category: "Express",
    question: "Let $\\log_{10} a = p$ and $\\log_{10} b = q$. Express $\\log_{10}(a^3 b)$ in terms of $p$ and $q$.",
    answer: "$$3\\log_{10} a + \\log_{10} b = 3p + q$$"
  },
  {
    id: 5,
    category: "Single log",
    question: "Write as a single logarithm: $\\log_3 7 + \\log_3 4$",
    answer: "$$\\log_3(7 \\times 4) = \\log_3 28$$"
  },
  {
    id: 6,
    category: "Evaluate",
    question: "Evaluate $\\log_5 1$",
    answer: "$\\log_5 1 = 0$, since any base raised to $0$ equals $1$"
  },
  {
    id: 7,
    category: "Express",
    question: "Let $\\log_a x = p$ and $\\log_a y = q$. Express $\\log_a(xy^2)$ in terms of $p$ and $q$.",
    answer: "$$\\log_a x + 2\\log_a y = p + 2q$$"
  },
  {
    id: 8,
    category: "Single log",
    question: "Write as a single logarithm: $2\\log_{10} 5 + \\log_{10} 4$",
    answer: "$$\\log_{10}(5^2 \\times 4) = \\log_{10} 100 = 2$$"
  },
  {
    id: 9,
    category: "Evaluate",
    question: "Evaluate $\\log_3 27 - \\log_3 9$",
    answer: "$$\\log_3\\!\\left(\\frac{27}{9}\\right) = \\log_3 3 = 1$$"
  },
  {
    id: 10,
    category: "Express",
    question: "Given that $\\log_5 x = y$, express $\\log_5 x^4$ in terms of $y$.",
    answer: "$$4\\log_5 x = 4y$$"
  },

  // ── Medium (11–25) ──────────────────────────────────────────────────────────
  {
    id: 11,
    category: "Single log",
    question: "Write as a single logarithm: $3\\log_a x - \\log_a y + 2\\log_a z$",
    answer: "$$\\log_a\\!\\left(\\frac{x^3 z^2}{y}\\right)$$"
  },
  {
    id: 12,
    category: "Express",
    question: "Let $p = \\log_{10} x$, $q = \\log_{10} y$ and $r = \\log_{10} z$. Write $\\log_{10}\\!\\left(\\dfrac{x}{y^2\\sqrt{z}}\\right)$ in terms of $p$, $q$ and $r$.",
    answer: "$$p - 2q - \\tfrac{1}{2}r$$"
  },
  {
    id: 13,
    category: "Evaluate",
    question: "Given $\\log 2 = 0.301$ and $\\log 3 = 0.477$, find the value of $\\log 18$.",
    answer: "$$18 = 2 \\times 3^2 \\implies \\log 18 = \\log 2 + 2\\log 3 = 0.301 + 0.954 = 1.255$$"
  },
  {
    id: 14,
    category: "Express",
    question: "Let $\\log_{10} P = x$, $\\log_{10} Q = y$, $\\log_{10} R = z$. Express $\\log_{10}\\!\\left(\\dfrac{P^2}{QR^3}\\right)$ in terms of $x$, $y$ and $z$.",
    answer: "$$2x - y - 3z$$"
  },
  {
    id: 15,
    category: "Solve",
    question: "Solve $\\log_3 x + \\log_3 4 = \\log_3 20$",
    answer: "$$\\log_3(4x) = \\log_3 20 \\implies 4x = 20 \\implies x = 5$$"
  },
  {
    id: 16,
    category: "Express",
    question: "Given that $\\log_5 x = y$, express each of the following in terms of $y$.<br><br>(a) $\\log_5 x^3$ &ensp; (b) $\\log_5(1/x)$ &ensp; (c) $\\log_{25} x$",
    answer: "(a) $3y$ &ensp; (b) $-y$ &ensp; (c) $\\log_{25} x = \\dfrac{\\log_5 x}{\\log_5 25} = \\dfrac{y}{2}$"
  },
  {
    id: 17,
    category: "Single log",
    question: "Write $\\tfrac{1}{3}\\log_b x + 2\\log_b w - 3\\log_b z$ as a single logarithm.",
    answer: "$$\\log_b\\!\\left(\\frac{\\sqrt[3]{x} \\cdot w^2}{z^3}\\right)$$"
  },
  {
    id: 18,
    category: "Evaluate",
    question: "Express $\\log 25 + \\log 2 - \\log 5$ as a single logarithm and hence find its exact value.",
    answer: "$$\\log\\!\\left(\\frac{25 \\times 2}{5}\\right) = \\log 10 = 1$$"
  },
  {
    id: 19,
    category: "Solve",
    question: "Solve $\\log_2 x + \\log_2(x - 2) = 3$, for $x > 2$.",
    answer: "$$\\log_2 x(x-2) = 3 \\implies x^2 - 2x = 8 \\implies (x-4)(x+2) = 0 \\implies x = 4$$\n$x = -2$ rejected: $\\log$ of negative undefined"
  },
  {
    id: 20,
    category: "Express",
    question: "Let $p = \\log_a 5$ and $q = \\log_a 2$. Express the following in terms of $p$ and/or $q$.<br><br>(a) $\\log_a 10$ &ensp; (b) $\\log_a 50$ &ensp; (c) $\\log_a 2.5$",
    answer: "(a) $p + q$ &ensp; (b) $2p + q$ &ensp; (c) $p - q$"
  },
  {
    id: 21,
    category: "Simplify",
    question: "Simplify without a calculator: $2\\log_{10} 5 + \\log_{10} 4$",
    answer: "$$\\log_{10}(25 \\times 4) = \\log_{10} 100 = 2$$"
  },
  {
    id: 22,
    category: "Express",
    question: "Given $\\log x = a$, $\\log y = b$ and $\\log z = c$, express $\\log\\!\\left(\\dfrac{x^4 y^3}{z^2}\\right)$ in terms of $a$, $b$ and $c$.",
    answer: "$$4a + 3b - 2c$$"
  },
  {
    id: 23,
    category: "Evaluate",
    question: "Given $\\log a = 0.3$, $\\log b = 0.5$ and $\\log c = 0.8$, find $\\log(ab/c)$.",
    answer: "$$0.3 + 0.5 - 0.8 = 0$$"
  },
  {
    id: 24,
    category: "Single log",
    question: "Write as a single logarithm: $\\log_4 48 - \\log_4 3$",
    answer: "$$\\log_4\\!\\left(\\frac{48}{3}\\right) = \\log_4 16 = 2$$"
  },
  {
    id: 25,
    category: "Express",
    question: "Given $\\log x = a$, $\\log y = b$, $\\log z = c$, express $\\log\\!\\left(\\dfrac{x^4 y^3}{z^2}\\right)$. Hence find its value when $x = 10$, $y = 100$, $z = 10$.",
    answer: "$4a + 3b - 2c$; with $x=10$ ($a=1$), $y=100$ ($b=2$), $z=10$ ($c=1$): $4 + 6 - 2 = 8$"
  },

  // ── Hard (26–40) ────────────────────────────────────────────────────────────
  {
    id: 26,
    category: "Solve",
    question: "Solve $2\\log_3 x - \\log_3(x + 6) = 1$",
    answer: "$$\\log_3\\!\\left(\\frac{x^2}{x+6}\\right) = 1 \\implies x^2 = 3(x+6) \\implies x^2 - 3x - 18 = 0 \\implies (x-6)(x+3) = 0 \\implies x = 6$$\n$x = -3$ rejected: $\\log$ of negative undefined"
  },
  {
    id: 27,
    category: "Express",
    question: "Let $\\log_{10} P = x$, $\\log_{10} Q = y$ and $\\log_{10} R = z$. Express $\\left[\\log_{10}\\!\\left(\\dfrac{P}{QR^3}\\right)\\right]^2$ in terms of $x$, $y$ and $z$.",
    answer: "$$2(x - y - 3z) = 2x - 2y - 6z$$"
  },
  {
    id: 28,
    category: "Simplify",
    question: "Simplify without a calculator: $\\dfrac{4\\log\\sqrt{8} - 3\\log(1/2)}{3 - 6\\log\\sqrt{5}}$",
    answer: "Numerator: $4\\log\\sqrt{8} - 3\\log\\tfrac{1}{2} = 2\\log 8 + 3\\log 2 = 6\\log 2 + 3\\log 2 = 9\\log 2$<br>Denominator: $3 - 3\\log 5 = 3(1 - \\log 5) = 3\\log 2$ $$\\therefore \\frac{9\\log 2}{3\\log 2} = 3$$"
  },
  {
    id: 29,
    category: "Change of base",
    question: "(a) Find $\\log_2 32$.<br><br>(b) Given $\\log_2\\!\\left(\\dfrac{32^x}{8^y}\\right)$ can be written as $px + qy$, find $p$ and $q$.",
    answer: "(a) $\\log_2 32 = 5$, since $2^5 = 32$.<br><br>(b) $32 = 2^5$, $8 = 2^3 \\implies 5x - 3y$, so $p = 5$, $q = -3$"
  },
  {
    id: 30,
    category: "Express",
    question: "Let $p = \\log_{10} x$, $q = \\log_{10} y$ and $r = \\log_{10} z$. Write $\\log_{10}\\!\\left(\\dfrac{x}{y^2\\sqrt{z}}\\right)$ in terms of $p$, $q$ and $r$.",
    answer: "$$p - 2q - \\tfrac{r}{2}$$"
  },
  {
    id: 31,
    category: "Solve",
    question: "Solve $\\log_2(x + 1) + \\log_2(x + 3) = \\log_2 15$",
    answer: "$$(x+1)(x+3) = 15 \\implies x^2 + 4x - 12 = 0 \\implies (x+6)(x-2) = 0 \\implies x = 2$$\n$x = -6$ rejected: $\\log$ of negative undefined"
  },
  {
    id: 32,
    category: "Express",
    question: "Given $\\log x = a$, $\\log y = b$, $\\log z = c$, express $\\log\\!\\left(\\dfrac{x^4 y^3}{z^2}\\right)$. Hence give the value of $\\log(16 \\times 27 / 25)$ in terms of $\\log 2$, $\\log 3$ and $\\log 5$.",
    answer: "General form: $4a + 3b - 2c$.<br>Here $16 = 2^4$, $27 = 3^3$, $25 = 5^2$: $$4\\log 2 + 3\\log 3 - 2\\log 5$$"
  },
  {
    id: 33,
    category: "Simplify",
    question: "Simplify without a calculator: $3\\log_{10} 4 + 2\\log_{10} 5 - \\log_{10} 8$",
    answer: "$$\\log(64) + \\log(25) - \\log(8) = \\log\\!\\left(\\frac{64 \\times 25}{8}\\right) = \\log 200 = \\log(2 \\times 100) = 1 + \\log 2$$"
  },
  {
    id: 34,
    category: "Solve",
    question: "Solve $\\log_4(2x - 3) + \\log_4 x = 1$",
    answer: "$x(2x-3) = 4 \\implies 2x^2 - 3x - 4 = 0 \\implies x = \\dfrac{3 + \\sqrt{41}}{4} \\approx 2.35$ &nbsp;(negative root rejected)"
  },
  {
    id: 35,
    category: "Change of base",
    question: "Given that $p = \\log_a 5$ and $q = \\log_a 2$, express $\\log_a 0.4$ in terms of $p$ and $q$.",
    answer: "$$0.4 = \\frac{2}{5} \\implies \\log_a 2 - \\log_a 5 = q - p$$"
  },
  {
    id: 36,
    category: "Single log",
    question: "Given $x = \\dfrac{ab^2}{\\sqrt{ab}}$, find $\\log x$ in terms of $\\log a$ and $\\log b$.",
    answer: "$$\\log x = \\log a + 2\\log b - \\tfrac{1}{2}(\\log a + \\log b) = \\tfrac{1}{2}\\log a + \\tfrac{3}{2}\\log b$$"
  },
  {
    id: 37,
    category: "Evaluate",
    question: "Given $\\log_{10} 2 \\approx 0.301$ and $\\log_{10} 3 \\approx 0.477$, find $\\log_{10} 72$ without a calculator.",
    answer: "$$72 = 2^3 \\times 3^2 \\implies 3(0.301) + 2(0.477) = 0.903 + 0.954 = 1.857$$"
  },
  {
    id: 38,
    category: "Solve",
    question: "Solve $2\\log_2 x = \\log_2(x + 12) + 1$",
    answer: "$$\\log_2\\!\\left(\\frac{x^2}{x+12}\\right) = 1 \\implies x^2 = 2(x+12) \\implies x^2 - 2x - 24 = 0 \\implies (x-6)(x+4) = 0 \\implies x = 6$$\n$x = -4$ rejected: $\\log$ of negative undefined"
  },
  {
    id: 39,
    category: "Simplify",
    question: "Simplify without a calculator: $\\log_{10} 8 + \\log_{10} 125$",
    answer: "$$\\log_{10}(8 \\times 125) = \\log_{10} 1000 = 3$$"
  },
  {
    id: 40,
    category: "Express",
    question: "Let $\\log_{10} P = x$, $\\log_{10} Q = y$, $\\log_{10} R = z$. Express $\\log_{10}\\!\\left(\\dfrac{\\sqrt{P} \\cdot Q^2}{R^3}\\right)$ in terms of $x$, $y$ and $z$.",
    answer: "$$\\tfrac{1}{2}x + 2y - 3z$$"
  },

  // ── Extension (41–50) ────────────────────────────────────────────────────────
  {
    id: 41,
    category: "Simplify",
    question: "Simplify without a calculator: $\\dfrac{2\\log\\sqrt{27} + \\log(1/3)}{\\log 9}$",
    answer: "Numerator: $2 \\cdot \\tfrac{3}{2}\\log 3 + (-\\log 3) = 3\\log 3 - \\log 3 = 2\\log 3$<br>Denominator: $\\log 9 = 2\\log 3$ $$\\therefore \\frac{2\\log 3}{2\\log 3} = 1$$"
  },
  {
    id: 42,
    category: "Change of base",
    question: "Using the change of base formula, show that $\\log_a b \\times \\log_b a = 1$.",
    answer: "$\\log_a b = \\dfrac{\\log b}{\\log a}$ and $\\log_b a = \\dfrac{\\log a}{\\log b}$, so their product $= \\dfrac{\\log b \\cdot \\log a}{\\log a \\cdot \\log b} = 1$ $\\checkmark$"
  },
  {
    id: 43,
    category: "Solve",
    question: "Solve simultaneously: $\\log_2(x + y) = 3$ and $\\log_2 x + \\log_2 y = \\log_2 12$",
    answer: "$x + y = 8$ and $xy = 12 \\implies t^2 - 8t + 12 = 0 \\implies (t-6)(t-2) = 0$<br>$(x,\\, y) = (6,\\, 2)$ or $(2,\\, 6)$"
  },
  {
    id: 44,
    category: "Express",
    question: "Given $\\log x = a$, $\\log y = b$, $\\log z = c$, express $\\log\\!\\left(\\dfrac{x^4 y^3}{z^2}\\right)$ in terms of $a$, $b$ and $c$. Hence find $\\log(16 \\times 27 / 25)$ in terms of $\\log 2$, $\\log 3$ and $\\log 5$.",
    answer: "$4a + 3b - 2c$; substituting $16=2^4$, $27=3^3$, $25=5^2$: $$4\\log 2 + 3\\log 3 - 2\\log 5$$"
  },
  {
    id: 45,
    category: "Simplify",
    question: "Simplify, leaving the answer in terms of $\\log 2$ and $\\log 5$ if needed: $\\dfrac{6\\log_{10}\\sqrt{2} + 2\\log_{10} 5}{4\\log_{10} 2 + \\log_{10} 25}$",
    answer: "Numerator: $3\\log 2 + 2\\log 5$. Denominator: $4\\log 2 + 2\\log 5$.<br>Using $\\log 2 \\approx 0.301$, $\\log 5 \\approx 0.699$: $\\dfrac{2.301}{2.602} \\approx 0.88$"
  },
  {
    id: 46,
    category: "Change of base",
    question: "Given $\\log_a(\\sqrt{a} \\cdot b^2)$ can be written as $p + q\\log_a b$, find $p$.",
    answer: "$\\log_a\\!\\sqrt{a} = \\tfrac{1}{2}\\log_a a = \\tfrac{1}{2}$, so the expression $= \\tfrac{1}{2} + 2\\log_a b$, giving $p = \\dfrac{1}{2}$"
  },
  {
    id: 47,
    category: "Solve",
    question: "Solve $\\log_3(x - 2) + \\log_3(x + 4) = \\log_3(7x - 2)$",
    answer: "$$(x-2)(x+4) = 7x - 2 \\implies x^2 + 2x - 8 = 7x - 2 \\implies x^2 - 5x - 6 = 0 \\implies (x-6)(x+1) = 0 \\implies x = 6$$\n$x = -1$ rejected: $\\log$ of negative undefined"
  },
  {
    id: 48,
    category: "Express",
    question: "Given $p = \\log_a 5$ and $q = \\log_a 2$, express $\\log_a(\\sqrt{50})$ in terms of $p$ and $q$.",
    answer: "$50 = 2 \\times 5^2 \\implies \\log_a 50 = q + 2p$ $$\\log_a\\sqrt{50} = \\tfrac{1}{2}(2p + q) = p + \\tfrac{q}{2}$$"
  },
  {
    id: 49,
    category: "Simplify",
    question: "Simplify without a calculator: $4\\log_6\\sqrt{3} + 4\\log_6\\sqrt{2} + \\log_6 4$",
    answer: "$4 \\cdot \\tfrac{1}{2}\\log_6 3 + 4 \\cdot \\tfrac{1}{2}\\log_6 2 + 2\\log_6 2 = 2\\log_6 3 + 4\\log_6 2 = \\log_6(9 \\times 16) = \\log_6 144$<br>Since $144 = 6^2 \\times 4$: $\\quad\\log_6 144 = 2 + \\log_6 4$"
  },
  {
    id: 50,
    category: "Solve",
    question: "Given $\\log_a x = 3\\log_a 2 - 2\\log_a 3 + \\log_a 18$, find the exact value of $x$.",
    answer: "$$\\log_a(2^3) - \\log_a(3^2) + \\log_a 18 = \\log_a\\!\\left(\\frac{8 \\times 18}{9}\\right) = \\log_a 16 \\implies x = 16$$"
  }

];
