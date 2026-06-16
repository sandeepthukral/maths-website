var PAPER = {
  title: "Quadratics — vertex form, sketching, optimisation & discriminant (10 questions)",
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
    category: "Completing the square & key features",
    question: "Let $f(x) = x^2 + 2x - 8$. (a) Find the $x$-intercepts and the $y$-intercept. (b) Express $f(x)$ in the form $(x + p)^2 + q$. (c) State the axis of symmetry, the vertex and the range of $f$. (d) Sketch the graph, labelling all key features.",
    answer: "(a) $x$-intercepts: $x^2+2x-8=(x+4)(x-2)=0 \\Rightarrow x=-4$ or $x=2$. Points $(-4,0)$ and $(2,0)$. $y$-intercept: $f(0)=-8$, point $(0,-8)$. (b) $f(x)=(x+1)^2-1-8=(x+1)^2-9$. (c) Axis: $x=-1$; vertex $(-1,-9)$; range $f(x) \\geq -9$. (d) Upward parabola with vertex at $(-1,-9)$, crossing $x$-axis at $x=-4$ and $x=2$."
  },
  {
    id: 2,
    category: "Finding the equation from vertex and point",
    question: "A parabola has vertex $(2, -9)$ and passes through the point $(0, -5)$. (a) Write the equation in the form $y = a(x-h)^2 + k$ and find $a$. (b) Show that the $x$-intercepts are $(-1, 0)$ and $(5, 0)$.",
    answer: "(a) $y = a(x-2)^2 - 9$. Substituting $(0,-5)$: $-5 = 4a - 9 \\Rightarrow a = 1$. Equation: $y = (x-2)^2 - 9$. (b) Set $y=0$: $(x-2)^2 = 9 \\Rightarrow x-2 = \\pm 3 \\Rightarrow x = 5$ or $x = -1$ ✓."
  },
  {
    id: 3,
    category: "Sketch & inequality from a quadratic",
    question: "Consider $y = x^2 - 4x - 12$. (a) Find the $x$-intercepts and the $y$-intercept. (b) Write in completed square form and state the vertex and axis of symmetry. (c) For what values of $x$ is $y \\leq 0$? (d) Sketch the graph, labelling all key features.",
    answer: "(a) $x^2-4x-12=(x-6)(x+2)=0 \\Rightarrow x=6$ or $x=-2$. Intercepts: $(6,0)$ and $(-2,0)$; $y$-intercept $(0,-12)$. (b) $(x-2)^2 - 4 - 12 = (x-2)^2 - 16$. Vertex $(2,-16)$; axis $x=2$. (c) The parabola is below (or on) the $x$-axis between its roots: $\\mathbf{-2 \\leq x \\leq 6}$. (d) Upward parabola with vertex $(2,-16)$, roots at $x=-2$ and $x=6$."
  },
  {
    id: 4,
    category: "Optimisation — maximum area",
    diagram: "data/grade-10/quadratics/img/set-02-q04.svg",
    question: "A rectangular paddock is to be fenced with $40$ m of fencing. One side of the paddock lies along a straight wall so only three sides need to be fenced. Let the width perpendicular to the wall be $x$ metres. (a) Write an expression for the length (parallel to the wall) in terms of $x$. (b) Write and simplify an expression for the area $A(x)$. (c) By completing the square, find the value of $x$ that maximises the area and state the maximum area.",
    answer: "(a) Length $= 40 - 2x$ (two widths use $2x$ m of fencing). (b) $A(x) = x(40-2x) = -2x^2 + 40x$. (c) $A(x) = -2(x^2 - 20x) = -2\\bigl[(x-10)^2 - 100\\bigr] = -2(x-10)^2 + 200$. Maximum when $x = \\mathbf{10}$ m; maximum area $= \\mathbf{200}$ m$^2$ (the optimal enclosure is $10$ m $\\times$ $20$ m)."
  },
  {
    id: 5,
    category: "Vertex, range & symmetry",
    question: "Let $f(x) = x^2 - 8x + 7$. (a) Express $f(x)$ in completed square form and state the vertex. (b) State the axis of symmetry and the range of $f$. (c) Find $f(1)$ and $f(7)$ and explain the result using the symmetry of the graph.",
    answer: "(a) $f(x) = (x-4)^2 - 16 + 7 = (x-4)^2 - 9$. Vertex $(4, -9)$. (b) Axis: $x = 4$; range: $f(x) \\geq -9$. (c) $f(1) = 1-8+7 = 0$ and $f(7) = 49-56+7 = 0$. Both equal zero because $x=1$ and $x=7$ are symmetric about $x=4$ (i.e. $1+7=2\\times 4$) and are the two $x$-intercepts of the parabola."
  },
  {
    id: 6,
    category: "Sketching & horizontal translations",
    question: "Let $f(x) = x^2 + 4x - 5$. (a) Find the $x$-intercepts and $y$-intercept of $y = f(x)$. (b) Write $f(x)$ in completed square form and state the vertex. (c) Sketch $y = f(x)$. (d) On the same axes, sketch $y = f(x-3)$, labelling its vertex and $x$-intercepts.",
    answer: "(a) $(x+5)(x-1)=0 \\Rightarrow x=-5$ or $x=1$; $y$-intercept $(0,-5)$. (b) $f(x) = (x+2)^2 - 9$; vertex $(-2,-9)$. (c) Upward parabola, vertex $(-2,-9)$, roots $x=-5$ and $x=1$. (d) $f(x-3)=(x-3+2)^2-9=(x-1)^2-9$. Vertex $(1,-9)$. Roots: $(x-1)^2=9 \\Rightarrow x=4$ or $x=-2$. This is $f(x)$ translated $3$ units to the right."
  },
  {
    id: 7,
    category: "Discriminant & conditions for roots",
    question: "Consider the equation $(k+2)x^2 - 4x + 1 = 0$ where $k > -2$. (a) By considering the discriminant, show that the equation has no real solutions when $k > 2$. (b) For $k = 2$, show that the equation has a repeated root and find it. (c) State the range of values of $k$ (with $k > -2$) for which the equation has two distinct real roots.",
    answer: "(a) Discriminant $\\Delta = (-4)^2 - 4(k+2)(1) = 16 - 4k - 8 = 8 - 4k$. For no real solutions: $\\Delta < 0 \\Rightarrow 8 - 4k < 0 \\Rightarrow k > 2$ ✓. (b) $k=2$: equation is $4x^2-4x+1=(2x-1)^2=0$, giving repeated root $x = \\dfrac{1}{2}$. (c) Two distinct roots when $\\Delta > 0 \\Rightarrow k < 2$. Combined with $k > -2$: $\\mathbf{-2 < k < 2}$."
  },
  {
    id: 8,
    category: "Proof — always positive",
    question: "Prove that $f(x) = 2x^2 - 5x + 4$ is always positive for all real values of $x$.",
    answer: "**Method 1 (discriminant):** $\\Delta = (-5)^2 - 4(2)(4) = 25 - 32 = -7 < 0$. Since $\\Delta < 0$ and the coefficient of $x^2$ is positive ($a=2>0$), the parabola opens upward and never crosses the $x$-axis. Therefore $f(x) > 0$ for all real $x$. **Method 2 (completing the square):** $$2x^2-5x+4 = 2\\!\\left(x - \\tfrac{5}{4}\\right)^2 + 4 - \\tfrac{25}{8} = 2\\!\\left(x-\\tfrac{5}{4}\\right)^2 + \\tfrac{7}{8} \\geq \\tfrac{7}{8} > 0 \\quad \\checkmark$$"
  },
  {
    id: 9,
    category: "Transformations — reflection in the y-axis",
    question: "Parabola $P_1$ has equation $y = (x-1)^2 - 4$. (a) State the vertex of $P_1$ and describe the transformation from $y = x^2$ to $P_1$. (b) Parabola $P_2$ is obtained by reflecting $P_1$ in the $y$-axis. Write the equation of $P_2$. (c) Find the $x$-intercepts of $P_2$.",
    answer: "(a) Vertex $(1,-4)$. $P_1$ is $y=x^2$ translated $1$ unit right and $4$ units down. (b) Reflect in the $y$-axis: replace $x$ with $-x$. $$P_2: y = (-x-1)^2 - 4 = (x+1)^2 - 4.$$ (c) Set $y=0$: $(x+1)^2 = 4 \\Rightarrow x+1 = \\pm 2 \\Rightarrow x = 1$ or $x = -3$. $x$-intercepts: $(1, 0)$ and $(-3, 0)$."
  },
  {
    id: 10,
    category: "Finding a translation vector",
    question: "The parabola $C_1$ has equation $y = 3x^2 - 12x + 7$. The parabola $C_2$ has equation $y = 3x^2 - 6x + 10$. (a) Find the vertex of $C_1$ and the vertex of $C_2$ by writing each equation in completed square form. (b) Find the vector $\\dbinom{a}{b}$ that translates $C_1$ onto $C_2$.",
    answer: "(a) $C_1$: $3(x^2-4x)+7 = 3(x-2)^2 - 12 + 7 = 3(x-2)^2-5$. Vertex $(2,-5)$. $C_2$: $3(x^2-2x)+10 = 3(x-1)^2-3+10=3(x-1)^2+7$. Vertex $(1,7)$. (b) The translation maps vertex $(2,-5)$ to $(1,7)$: $$a = 1-2 = -1, \\quad b = 7-(-5) = 12.$$ Translation vector: $\\dbinom{-1}{12}$."
  }
];
