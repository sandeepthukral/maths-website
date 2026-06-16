// Non-calculator set — all angles are 30°, 45°, 60°, 90° or 120°.
// Exact values: sin30=½, cos30=√3/2, tan30=1/√3,
//               sin45=cos45=1/√2, sin60=√3/2, cos60=½, tan60=√3.

var PAPER = {
  title: "Trigonometry — non-calculator exact values (10 questions)",
  difficultyRanges: [
    { level: 2, from: 1, to: 6 },
    { level: 3, from: 7, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Sine rule",
    diagram: "data/grade-10/trigonometry/img/set-02-q1.svg",
    question: "In triangle $ABC$, $\\angle BAC = 30°$, $\\angle ABC = 90°$ and $BC = 5 \\text{ cm}$. Find the exact lengths of $AB$ and $AC$.",
    answer: "The remaining angle $\\angle BCA = 60°$. Using the sine rule: $$\\frac{BC}{\\sin(\\angle BAC)} = \\frac{AC}{\\sin(\\angle ABC)} \\Rightarrow \\frac{5}{\\sin 30°} = \\frac{AC}{\\sin 90°}$$ $$AC = \\frac{5}{\\tfrac{1}{2}} = 10 \\text{ cm}$$ For $AB$: $$\\frac{AB}{\\sin 60°} = 10 \\Rightarrow AB = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\text{ cm}$$"
  },
  {
    id: 2,
    category: "Cosine rule",
    diagram: "data/grade-10/trigonometry/img/set-02-q2.svg",
    question: "In triangle $PQR$, $PQ = 3 \\text{ cm}$, $PR = 8 \\text{ cm}$ and $\\angle QPR = 60°$. Find the exact length of $QR$.",
    answer: "By the cosine rule: $$QR^2 = PQ^2 + PR^2 - 2 \\cdot PQ \\cdot PR \\cdot \\cos(\\angle QPR)$$ $$= 9 + 64 - 2(3)(8) \\times \\frac{1}{2} = 73 - 24 = 49$$ $$QR = \\sqrt{49} = 7 \\text{ cm}$$"
  },
  {
    id: 3,
    category: "Area",
    diagram: "data/grade-10/trigonometry/img/set-02-q3.svg",
    question: "Triangle $XYZ$ has $XY = 8 \\text{ cm}$, $XZ = 6 \\text{ cm}$ and $\\angle YXZ = 30°$. Find the exact area of the triangle.",
    answer: "$$\\text{Area} = \\frac{1}{2} \\times XY \\times XZ \\times \\sin(\\angle YXZ) = \\frac{1}{2} \\times 8 \\times 6 \\times \\sin 30° = 24 \\times \\frac{1}{2} = 12 \\text{ cm}^2$$"
  },
  {
    id: 4,
    category: "Cosine rule",
    diagram: "data/grade-10/trigonometry/img/set-02-q4.svg",
    question: "Triangle $ABC$ has $AB = 2 \\text{ cm}$, $AC = 2 \\text{ cm}$ and $BC = 2\\sqrt{3} \\text{ cm}$. Find the exact size of angle $BAC$.",
    answer: "By the cosine rule: $$\\cos(\\angle BAC) = \\frac{AB^2 + AC^2 - BC^2}{2 \\cdot AB \\cdot AC} = \\frac{4 + 4 - 12}{2(2)(2)} = \\frac{-4}{8} = -\\frac{1}{2}$$ $$\\angle BAC = \\cos^{-1}\\!\\left(-\\tfrac{1}{2}\\right) = 120°$$"
  },
  {
    id: 5,
    category: "Sine rule",
    diagram: "data/grade-10/trigonometry/img/set-02-q5.svg",
    question: "In triangle $PQR$, $\\angle PQR = 90°$, $\\angle QPR = 45°$ and $PR = 10\\sqrt{2} \\text{ cm}$. Find the exact lengths of $PQ$ and $QR$.",
    answer: "Since $\\angle QPR = 45°$ and $\\angle PQR = 90°$, the remaining angle $\\angle PRQ = 45°$, so the triangle is isosceles. By the sine rule: $$\\frac{PQ}{\\sin(\\angle PRQ)} = \\frac{PR}{\\sin(\\angle PQR)} \\Rightarrow \\frac{PQ}{\\sin 45°} = \\frac{10\\sqrt{2}}{1}$$ $$PQ = 10\\sqrt{2} \\times \\frac{1}{\\sqrt{2}} = 10 \\text{ cm}$$ Since the triangle is isosceles: $QR = PQ = 10 \\text{ cm}$."
  },
  {
    id: 6,
    category: "Area",
    diagram: "data/grade-10/trigonometry/img/set-02-q6.svg",
    question: "Triangle $ABC$ has $AB = 4 \\text{ cm}$, $AC = 6 \\text{ cm}$ and $\\angle BAC = 60°$. Find the exact area of the triangle.",
    answer: "$$\\text{Area} = \\frac{1}{2} \\times AB \\times AC \\times \\sin(\\angle BAC) = \\frac{1}{2} \\times 4 \\times 6 \\times \\sin 60° = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3} \\text{ cm}^2$$"
  },
  {
    id: 7,
    category: "Cosine rule",
    diagram: "data/grade-10/trigonometry/img/set-02-q7.svg",
    question: "Ship $A$ leaves port $P$ and travels 3 km on a bearing of $000°$. Ship $B$ leaves $P$ and travels 8 km on a bearing of $060°$. Find the exact distance between the two ships.",
    answer: "The angle between the two directions at $P$ is $60° - 0° = 60°$. By the cosine rule: $$AB^2 = 3^2 + 8^2 - 2(3)(8)\\cos 60° = 9 + 64 - 48 \\times \\frac{1}{2} = 73 - 24 = 49$$ $$AB = \\sqrt{49} = 7 \\text{ km}$$"
  },
  {
    id: 8,
    category: "Cosine rule",
    diagram: "data/grade-10/trigonometry/img/set-02-q8.svg",
    question: "A triangle has two sides of length 5 cm and 3 cm with an included angle of $120°$. Find the exact length of the third side.",
    answer: "Let the third side be $a$. By the cosine rule: $$a^2 = 5^2 + 3^2 - 2(5)(3)\\cos 120° = 25 + 9 - 30 \\times \\left(-\\frac{1}{2}\\right) = 34 + 15 = 49$$ $$a = \\sqrt{49} = 7 \\text{ cm}$$"
  },
  {
    id: 9,
    category: "Multi-step",
    diagram: "data/grade-10/trigonometry/img/set-02-q9.svg",
    question: "Triangle $ABC$ has $AB = AC = 8 \\text{ cm}$ and $\\angle BAC = 60°$. (a) Use the cosine rule to find $BC$. (b) Find the exact area of triangle $ABC$. (c) $M$ is the midpoint of $BC$. Find the exact length $AM$.",
    answer: "(a) $$BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\angle BAC) = 64 + 64 - 128 \\times \\frac{1}{2} = 64$$ $$BC = 8 \\text{ cm}$$ (The triangle is equilateral.) (b) $$\\text{Area} = \\frac{1}{2} \\times 8 \\times 8 \\times \\sin 60° = 32 \\times \\frac{\\sqrt{3}}{2} = 16\\sqrt{3} \\text{ cm}^2$$ (c) In an equilateral triangle the median is also the altitude: $$AM = \\sqrt{AC^2 - MC^2} = \\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3} \\text{ cm}$$"
  },
  {
    id: 10,
    category: "Multi-step",
    diagram: "data/grade-10/trigonometry/img/set-02-q10.svg",
    question: "In triangle $ABC$, $\\angle ABC = 90°$, $\\angle BAC = 30°$ and $AB = 12 \\text{ cm}$. $M$ is the midpoint of $AC$. (a) Find the exact length $BC$. (b) Find the exact length $AC$. (c) Find the exact length $BM$. (d) Find the exact area of triangle $ABM$.",
    answer: "(a) $\\tan(\\angle BAC) = BC/AB$: $$BC = 12 \\tan 30° = 12 \\times \\frac{1}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3} \\text{ cm}$$ (b) $\\cos(\\angle BAC) = AB/AC$: $$AC = \\frac{AB}{\\cos 30°} = \\frac{12}{\\tfrac{\\sqrt{3}}{2}} = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3} \\text{ cm}$$ (c) In a right-angled triangle the median to the hypotenuse equals half the hypotenuse: $$BM = \\frac{AC}{2} = \\frac{8\\sqrt{3}}{2} = 4\\sqrt{3} \\text{ cm}$$ (d) $$\\text{Area of } \\triangle ABM = \\frac{1}{2} \\times \\text{Area of } \\triangle ABC = \\frac{1}{2} \\times \\frac{1}{2} \\times 12 \\times 4\\sqrt{3} = 12\\sqrt{3} \\text{ cm}^2$$"
  }
];
