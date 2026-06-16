// Non-calculator set — exact trig values only (30°/45°/60°/90°/120°).
// Radians and sinusoidal models do not require a calculator for the given sub-parts.

var PAPER = {
  title: "Trigonometry — radians, sinusoidal models & compound figures (10 questions)",
  difficultyRanges: [
    { level: 2, from: 1, to: 3 },
    { level: 3, from: 4, to: 7 },
    { level: 4, from: 8, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Radians & degrees",
    question: "Convert the following angles, giving exact answers. (a) Convert $\\dfrac{7\\pi}{4}$ radians into degrees. (b) Convert $210°$ into radians.",
    answer: "(a) $$\\frac{7\\pi}{4} \\times \\frac{180°}{\\pi} = \\frac{7 \\times 180°}{4} = \\frac{1260°}{4} = 315°$$ (b) $$210° \\times \\frac{\\pi}{180°} = \\frac{210\\pi}{180} = \\frac{7\\pi}{6} \\text{ rad}$$"
  },
  {
    id: 2,
    category: "Sinusoidal models",
    diagram: "data/grade-10/trigonometry/img/set-03-q2.svg",
    question: "The depth $h(t)$ metres of water at a harbour entrance $t$ hours after midnight is given by $$h(t) = 6 + 4\\sin\\!\\left(\\frac{\\pi t}{12}\\right), \\quad 0 \\leq t \\leq 24.$$ (a) Find the depth at midnight ($t=0$). (b) Find the maximum and minimum depths and the times at which they occur. (c) Find all values of $t$ in $[0, 24]$ for which $h(t) = 8$.",
    answer: "(a) $h(0) = 6 + 4\\sin(0) = \\mathbf{6}$ m. (b) Max when $\\sin = 1$: $h = 10$ m at $\\frac{\\pi t}{12} = \\frac{\\pi}{2} \\Rightarrow t = 6$ h. Min when $\\sin = -1$: $h = 2$ m at $\\frac{\\pi t}{12} = \\frac{3\\pi}{2} \\Rightarrow t = 18$ h. (c) $4\\sin\\!\\left(\\frac{\\pi t}{12}\\right) = 2 \\Rightarrow \\sin\\!\\left(\\frac{\\pi t}{12}\\right) = \\frac{1}{2}$. In $[0,2\\pi]$: $\\frac{\\pi t}{12} = \\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$, giving $t = \\mathbf{2}$ or $t = \\mathbf{10}$. In $[2\\pi,4\\pi]$ (i.e. $t \\in [12,24]$): $t = 14$ or $t = 22$."
  },
  {
    id: 3,
    category: "Trig equations",
    question: "Solve $2\\cos^2 x - \\cos x - 1 = 0$ for $0 \\leq x \\leq 2\\pi$.",
    answer: "Factorise: $(2\\cos x + 1)(\\cos x - 1) = 0$. So $\\cos x = -\\dfrac{1}{2}$ or $\\cos x = 1$. From $\\cos x = 1$: $x = 0$ or $x = 2\\pi$. From $\\cos x = -\\dfrac{1}{2}$: $x = \\dfrac{2\\pi}{3}$ or $x = \\dfrac{4\\pi}{3}$. Solutions: $$x = 0,\\; \\frac{2\\pi}{3},\\; \\frac{4\\pi}{3},\\; 2\\pi$$"
  },
  {
    id: 4,
    category: "Angle of elevation",
    diagram: "data/grade-10/trigonometry/img/set-03-q4.svg",
    question: "A person observes the top of a tower at an angle of elevation of $30°$ when standing $15$ m from its base. They then walk $10$ m closer to the tower. Find: (a) the new angle of elevation, (b) the exact height of the tower.",
    answer: "(b) Let $h$ = height of tower. From first position: $h = 15\\tan 30° = \\dfrac{15}{\\sqrt{3}} = 5\\sqrt{3}$ m. (a) From second position (distance $= 5$ m): $$\\tan\\theta = \\frac{h}{5} = \\frac{5\\sqrt{3}}{5} = \\sqrt{3} \\Rightarrow \\theta = 60°$$ New angle $= \\mathbf{60°}$, height $= \\mathbf{5\\sqrt{3}}$ m."
  },
  {
    id: 5,
    category: "Compound figures",
    diagram: "data/grade-10/trigonometry/img/set-03-q5.svg",
    question: "In the diagram, triangle $ABC$ is right-angled at $B$ with $\\angle BAC = 60°$ and $BC = 3$ cm. Triangle $ACD$ is right-angled at $D$ with $\\angle CAD = 60°$. Find: (a) the perimeter of quadrilateral $ABCD$, (b) the area of quadrilateral $ABCD$.",
    answer: "In $\\triangle ABC$ ($\\angle B = 90°$, $\\angle BAC = 60°$, $BC = 3$): $$AB = \\frac{BC}{\\tan 60°} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} \\text{ cm}, \\quad AC = \\frac{BC}{\\sin 60°} = \\frac{3}{\\sqrt{3}/2} = 2\\sqrt{3} \\text{ cm}$$ In $\\triangle ACD$ ($\\angle D = 90°$, $\\angle CAD = 60°$, $AC = 2\\sqrt{3}$): $$CD = AC\\sin 60° = 2\\sqrt{3} \\cdot \\frac{\\sqrt{3}}{2} = 3 \\text{ cm}, \\quad AD = AC\\cos 60° = 2\\sqrt{3} \\cdot \\frac{1}{2} = \\sqrt{3} \\text{ cm}$$ (a) Perimeter $= AB + BC + CD + DA = \\sqrt{3} + 3 + 3 + \\sqrt{3} = \\mathbf{6 + 2\\sqrt{3}}$ cm. (b) Area $= \\tfrac{1}{2}(AB)(BC) + \\tfrac{1}{2}(AD)(CD) = \\tfrac{1}{2}(\\sqrt{3})(3) + \\tfrac{1}{2}(\\sqrt{3})(3) = \\mathbf{3\\sqrt{3}}$ cm$^2$."
  },
  {
    id: 6,
    category: "Area of compound shapes",
    diagram: "data/grade-10/trigonometry/img/set-03-q6.svg",
    question: "A campsite has the shape of quadrilateral $PQRS$. The diagonal $PR$ divides it into two triangles. $PQ = 6$ m, $QR = 8$ m, $\\angle PQR = 30°$, $PS = 10$ m, $RS = 6$ m and $\\angle PSR = 60°$. Find the exact total area of the campsite.",
    answer: "Area of $\\triangle PQR = \\frac{1}{2} \\times PQ \\times QR \\times \\sin(\\angle PQR) = \\frac{1}{2} \\times 6 \\times 8 \\times \\sin 30° = 24 \\times \\frac{1}{2} = 12$ m$^2$. Area of $\\triangle PSR = \\frac{1}{2} \\times PS \\times RS \\times \\sin(\\angle PSR) = \\frac{1}{2} \\times 10 \\times 6 \\times \\sin 60° = 30 \\times \\frac{\\sqrt{3}}{2} = 15\\sqrt{3}$ m$^2$. Total area $= \\mathbf{(12 + 15\\sqrt{3})}$ m$^2$."
  },
  {
    id: 7,
    category: "Bearings",
    diagram: "data/grade-10/trigonometry/img/set-03-q7.svg",
    question: "Plane $A$ leaves JFK airport on a bearing of $050°$ for $3$ km. Plane $B$ leaves JFK on a bearing of $170°$ for $5$ km. Find the exact distance between the two planes.",
    answer: "The angle between the two bearings at JFK $= 170° - 50° = 120°$. By the cosine rule: $$AB^2 = 3^2 + 5^2 - 2(3)(5)\\cos 120° = 9 + 25 - 30 \\times \\left(-\\frac{1}{2}\\right) = 34 + 15 = 49$$ $$AB = \\sqrt{49} = \\mathbf{7} \\text{ km}$$"
  },
  {
    id: 8,
    category: "Heights & distances",
    diagram: "data/grade-10/trigonometry/img/set-03-q8.svg",
    question: "Anna and Bob stand $10$ m apart on flat ground, both on the same side of a flagpole. Anna observes the top at $30°$ elevation and Bob (who is closer to the pole) observes it at $60°$ elevation. Find the exact height of the flagpole and the distance of each person from the base.",
    answer: "Let $d$ = Bob's distance from base. Then Anna's distance $= d + 10$. From Anna: $h = (d+10)\\tan 30° = \\dfrac{d+10}{\\sqrt{3}}$. From Bob: $h = d\\tan 60° = d\\sqrt{3}$. Setting equal: $$d\\sqrt{3} = \\frac{d+10}{\\sqrt{3}} \\Rightarrow 3d = d + 10 \\Rightarrow 2d = 10 \\Rightarrow d = 5 \\text{ m}$$ Bob is $\\mathbf{5}$ m from the base, Anna is $\\mathbf{15}$ m. Height $= 5\\sqrt{3} = \\mathbf{5\\sqrt{3}}$ m."
  },
  {
    id: 9,
    category: "Sinusoidal models — inequality",
    question: "A Ferris wheel seat's height above the ground is modelled by $h(t) = 15 + 12\\sin\\!\\left(\\dfrac{\\pi t}{6}\\right)$ metres, where $t$ is in minutes. (a) Find the minimum height. (b) Find the length of time during one full revolution that the seat is above $21$ m.",
    answer: "(a) Min $= 15 - 12 = \\mathbf{3}$ m. (b) Period $= \\dfrac{2\\pi}{\\pi/6} = 12$ minutes. Solve $h > 21$: $$12\\sin\\!\\left(\\frac{\\pi t}{6}\\right) > 6 \\Rightarrow \\sin\\!\\left(\\frac{\\pi t}{6}\\right) > \\frac{1}{2}$$ In one period $[0, 12]$: $\\dfrac{\\pi t}{6} \\in \\left(\\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{6}\\right) \\Rightarrow t \\in (1, 5)$. Duration $= 5 - 1 = \\mathbf{4}$ minutes."
  },
  {
    id: 10,
    category: "Multi-step trigonometry",
    diagram: "data/grade-10/trigonometry/img/set-03-q10.svg",
    question: "In triangle $PQR$, $PQ = PR = 6$ cm and $\\angle QPR = 120°$. (a) Find the exact length of $QR$. (b) Find the exact area of triangle $PQR$. (c) Find the exact perpendicular distance from $P$ to the line $QR$.",
    answer: "(a) By the cosine rule: $$QR^2 = PQ^2 + PR^2 - 2 \\cdot PQ \\cdot PR \\cdot \\cos 120° = 36 + 36 - 72\\left(-\\frac{1}{2}\\right) = 72 + 36 = 108$$ $$QR = \\sqrt{108} = 6\\sqrt{3} \\text{ cm}$$ (b) $$\\text{Area} = \\frac{1}{2}(6)(6)\\sin 120° = 18 \\times \\frac{\\sqrt{3}}{2} = 9\\sqrt{3} \\text{ cm}^2$$ (c) $\\text{Area} = \\frac{1}{2} \\times QR \\times h$: $$9\\sqrt{3} = \\frac{1}{2} \\times 6\\sqrt{3} \\times h \\Rightarrow h = \\frac{9\\sqrt{3}}{3\\sqrt{3}} = \\mathbf{3} \\text{ cm}$$"
  }
];
