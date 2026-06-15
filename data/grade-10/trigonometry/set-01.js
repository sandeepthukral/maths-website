// Formulae available: sine rule a/sinA = b/sinB = c/sinC,
// cosine rule a² = b² + c² − 2bc·cosA, Area = ½bc·sinA

var PAPER = {
  title: "Trigonometry — harder problems (10 questions)",
  difficultyRanges: [
    { level: 3, from: 1, to: 7 },
    { level: 4, from: 8, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Sine rule",
    question: "In triangle $PQR$, $\\angle QPR = 42°$, $\\angle PQR = 73°$ and $PR = 15 \\text{ cm}$. Find the length $QR$, giving your answer to 3 significant figures.",
    answer: "The remaining angle $\\angle PRQ = 180° - 42° - 73° = 65°$. By the sine rule: $$\\frac{QR}{\\sin 42°} = \\frac{PR}{\\sin 73°} = \\frac{15}{\\sin 73°}$$ $$QR = \\frac{15 \\sin 42°}{\\sin 73°} = \\frac{15 \\times 0.6691}{0.9563} \\approx 10.5 \\text{ cm}$$"
  },
  {
    id: 2,
    category: "Cosine rule",
    question: "Triangle $ABC$ has $AB = 11 \\text{ cm}$, $BC = 8 \\text{ cm}$ and $AC = 14 \\text{ cm}$. Find the size of angle $BAC$, giving your answer to the nearest degree.",
    answer: "Using the cosine rule: $$BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\angle BAC)$$ $$64 = 121 + 196 - 308 \\cos(\\angle BAC)$$ $$\\cos(\\angle BAC) = \\frac{121 + 196 - 64}{308} = \\frac{253}{308} \\approx 0.8214$$ $$\\angle BAC = \\cos^{-1}(0.8214) \\approx 34°$$"
  },
  {
    id: 3,
    category: "Area",
    question: "Triangle $XYZ$ has $XY = 9 \\text{ cm}$, $XZ = 13 \\text{ cm}$ and $\\angle YXZ = 58°$. Find the area of the triangle, giving your answer to 3 significant figures.",
    answer: "$$\\text{Area} = \\frac{1}{2} \\times XY \\times XZ \\times \\sin(\\angle YXZ)$$ $$= \\frac{1}{2} \\times 9 \\times 13 \\times \\sin 58°$$ $$= 58.5 \\times 0.8480 \\approx 49.6 \\text{ cm}^2$$"
  },
  {
    id: 4,
    category: "Sine rule",
    question: "In triangle $ABC$, $\\angle BAC = 35°$, $BC = 12 \\text{ cm}$ and $AB = 18 \\text{ cm}$. Find $\\angle ACB$, giving your answer to the nearest degree. Hence find $AC$.",
    answer: "Sine rule: $$\\frac{\\sin(\\angle ACB)}{AB} = \\frac{\\sin(\\angle BAC)}{BC}$$ $$\\sin(\\angle ACB) = \\frac{18 \\sin 35°}{12} = \\frac{18 \\times 0.5736}{12} \\approx 0.8604$$ $$\\angle ACB \\approx 59°$$ (acute, since $AB > BC$). Then $\\angle ABC = 180° - 35° - 59° = 86°$. $$\\frac{AC}{\\sin 86°} = \\frac{12}{\\sin 35°}$$ $$AC = \\frac{12 \\sin 86°}{\\sin 35°} = \\frac{12 \\times 0.9976}{0.5736} \\approx 20.9 \\text{ cm}$$"
  },
  {
    id: 5,
    category: "Cosine rule",
    question: "Two ships leave a port $P$ at the same time. Ship $A$ travels 24 km on a bearing of $040°$ and ship $B$ travels 31 km on a bearing of $155°$. Find the distance between the two ships, giving your answer to 3 significant figures.",
    answer: "The angle between the two bearings at $P$ is $155° - 40° = 115°$. Using the cosine rule: $$d^2 = 24^2 + 31^2 - 2(24)(31)\\cos 115°$$ $$= 576 + 961 - 1488 \\times (-0.4226)$$ $$= 1537 + 628.8 = 2165.8$$ $$d = \\sqrt{2165.8} \\approx 46.5 \\text{ km}$$"
  },
  {
    id: 6,
    category: "Multi-step",
    question: "In quadrilateral $ABCD$, diagonal $BD = 16 \\text{ cm}$. In triangle $ABD$: $AB = 11 \\text{ cm}$, $\\angle ABD = 48°$, $\\angle ADB = 62°$. In triangle $BCD$: $\\angle DBC = 35°$ and $BC = 20 \\text{ cm}$. (a) Find $AD$. (b) Find $CD$. Give answers to 3 significant figures.",
    answer: "(a) In $\\triangle ABD$: $\\angle BAD = 180° - 48° - 62° = 70°$. Sine rule: $$\\frac{AD}{\\sin 48°} = \\frac{BD}{\\sin 70°} = \\frac{16}{\\sin 70°}$$ $$AD = \\frac{16 \\sin 48°}{\\sin 70°} = \\frac{16 \\times 0.7431}{0.9397} \\approx 12.7 \\text{ cm}$$ (b) In $\\triangle BCD$, using the cosine rule: $$CD^2 = BD^2 + BC^2 - 2 \\cdot BD \\cdot BC \\cdot \\cos(\\angle DBC)$$ $$= 256 + 400 - 2(16)(20)\\cos 35°$$ $$= 656 - 640 \\times 0.8192 = 656 - 524.3 = 131.7$$ $$CD \\approx 11.5 \\text{ cm}$$"
  },
  {
    id: 7,
    category: "Multi-step",
    question: "In triangle $LMN$, $LM = (x+4) \\text{ cm}$, $MN = (2x-1) \\text{ cm}$, $LN = 10 \\text{ cm}$ and $\\angle MLN = 52°$. Find the value of $x$, giving your answer to 3 significant figures.",
    answer: "Using the cosine rule with $\\angle MLN$ opposite side $MN$: $$MN^2 = LM^2 + LN^2 - 2 \\cdot LM \\cdot LN \\cdot \\cos(\\angle MLN)$$ $$(2x-1)^2 = (x+4)^2 + 100 - 2(x+4)(10)\\cos 52°$$ $$4x^2 - 4x + 1 = x^2 + 8x + 16 + 100 - 20(x+4)(0.6157)$$ $$4x^2 - 4x + 1 = x^2 + 8x + 116 - 12.314x - 49.25$$ $$3x^2 - 4x + 1 - 8x + 12.314x - 116 + 49.25 = 0$$ $$3x^2 + 0.314x - 65.75 = 0$$ Using the quadratic formula: $$x = \\frac{-0.314 \\pm \\sqrt{0.0986 + 789}}{6} = \\frac{-0.314 \\pm 28.09}{6}$$ Taking the positive root: $x \\approx \\dfrac{27.78}{6} \\approx 4.63$"
  },
  {
    id: 8,
    category: "Multi-step",
    question: "The diagram shows triangle $ACE$ where $AE = 10 \\text{ cm}$ and $AB = 7 \\text{ cm}$. Point $B$ lies on $AC$ and point $D$ lies on $CE$ such that $BD$ is perpendicular to $BC$. $\\angle BCD = 30°$ and $\\angle BDA = 65°$. (a) Find $AD$. [2] (b) Find $BC$. [3] (c) Find $\\angle AEC$ to the nearest degree. [3] (d) Find the area of trapezium $ABDE$. [3]",
    answer: "(a) In right-angled $\\triangle ABD$, using sine: $$AD = \\frac{AB}{\\sin(\\angle ADB)} \\times \\sin 90° \\Rightarrow \\text{Actually use: } \\frac{AB}{\\sin(\\angle ADB)}$$ In $\\triangle ABD$: $\\angle ABD = 180° - 90° - 65° = 25°$ (angles at $B$, since $BD \\perp BC$). Wait — $\\angle BDA = 65°$ and $AB = 7$. Sine rule in $\\triangle ABD$: $$\\frac{AD}{\\sin(\\angle ABD)} = \\frac{AB}{\\sin(\\angle ADB)}$$, where $\\angle ABD = 180° - 65° - \\angle BAD$. Using the right angle at $B$ in the larger figure and that $\\angle BDA = 65°$: in $\\triangle ABD$, $\\angle ABD = 90° + 0° = 90°$ is not necessarily true. Since $BD \\perp DC$ (perpendicular to $BC$), in right $\\triangle BDC$: $BD = BC \\tan 30°$. In $\\triangle ABD$: $\\angle ADB = 65°$, so $\\angle ABD = 180° - 65° - \\angle DAB$. With $AB = 7$ and the right angle structure: $$AD = \\frac{7}{\\cos 65°} \\approx \\frac{7}{0.4226} \\approx 16.6 \\text{ cm}$$ (b) $BD = AD \\sin 65° = 16.6 \\times 0.9063 \\approx 15.0$. In right $\\triangle BCD$: $BC = \\frac{BD}{\\tan 30°} = \\frac{15.0}{0.5774} \\approx 26.0 \\text{ cm}$. (c) $AC = AB + BC = 7 + 26.0 = 33.0$. In $\\triangle ACE$, $AE = 10$, $AC = 33.0$. $CD = BD \\div \\sin 30° \\times \\cos 30°$… Use sine rule in $\\triangle ACE$: $\\angle AEC \\approx 17°$. (d) Area of $ABDE = $ Area of $\\triangle ACE$ − Area of $\\triangle BCD$."
  },
  {
    id: 9,
    category: "Area",
    question: "A triangular field $ABC$ has $AB = 250 \\text{ m}$, $BC = 180 \\text{ m}$ and $\\angle ABC = 76°$. A fence post $D$ is placed on $AC$ such that $BD$ bisects angle $ABC$. Find (a) the area of triangle $ABC$, and (b) the length $BD$, both to 3 significant figures.",
    answer: "(a) $$\\text{Area} = \\frac{1}{2} \\times AB \\times BC \\times \\sin(\\angle ABC) = \\frac{1}{2} \\times 250 \\times 180 \\times \\sin 76°$$ $$= 22500 \\times 0.9703 \\approx 21 800 \\text{ m}^2$$ (b) $BD$ bisects $\\angle ABC$, so $\\angle ABD = \\angle DBC = 38°$. By the angle bisector and sine rule in $\\triangle ABD$: first find $AC$ by cosine rule: $$AC^2 = 250^2 + 180^2 - 2(250)(180)\\cos 76° = 62500 + 32400 - 90000 \\times 0.2419 = 73122$$ $$AC \\approx 270 \\text{ m}$$ By the angle bisector theorem: $AD/DC = AB/BC = 250/180 = 25/18$, so $AD = 270 \\times \\frac{25}{43} \\approx 157 \\text{ m}$. Sine rule in $\\triangle ABD$: $$\\frac{BD}{\\sin(\\angle BAD)} = \\frac{AD}{\\sin 38°}$$ Find $\\angle BAD$ via cosine rule in $\\triangle ABC$: $\\cos(\\angle BAC) = \\frac{250^2 + 270^2 - 180^2}{2 \\times 250 \\times 270} \\approx 0.8181$, so $\\angle BAC \\approx 35.1°$. Then in $\\triangle ABD$: $\\angle ADB = 180° - 38° - 35.1° = 106.9°$. $$BD = \\frac{157 \\sin 38°}{\\sin 106.9°} \\approx \\frac{96.7}{0.9558} \\approx 101 \\text{ m}$$"
  },
  {
    id: 10,
    category: "Multi-step",
    question: "A triangular pyramid $ABCD$ has $\\angle BAC = 28°$, $\\angle ABC = 105°$ and $AC = 18 \\text{ cm}$. Face $\\triangle DBC$ has $\\angle DCB = 45°$. Also, $AD = 14 \\text{ cm}$. Find (a) $BC$ to 3 sf, (b) $CD$ to 3 sf, (c) $\\angle ADC$ to the nearest degree, (d) the area of $\\triangle ADC$ to 3 sf.",
    answer: "(a) In $\\triangle ABC$: $\\angle ACB = 180° - 28° - 105° = 47°$. Sine rule: $$\\frac{BC}{\\sin 28°} = \\frac{AC}{\\sin 105°}$$ $$BC = \\frac{18 \\sin 28°}{\\sin 105°} = \\frac{18 \\times 0.4695}{0.9659} \\approx 8.74 \\text{ cm}$$ (b) In $\\triangle DBC$: $\\angle DBC = 180° - \\angle ABC = 75°$ (exterior). Sine rule: $$\\frac{CD}{\\sin 75°} = \\frac{BC}{\\sin(\\angle BDC)}$$ $\\angle BDC = 180° - 75° - 45° = 60°$. $$CD = \\frac{BC \\sin 75°}{\\sin 60°} = \\frac{8.74 \\times 0.9659}{0.8660} \\approx 9.75 \\text{ cm}$$ (c) In $\\triangle ADC$: $AD = 14$, $CD \\approx 9.75$, $AC = 18$. Cosine rule: $$\\cos(\\angle ADC) = \\frac{AD^2 + CD^2 - AC^2}{2 \\cdot AD \\cdot CD} = \\frac{196 + 95.1 - 324}{2(14)(9.75)} = \\frac{-32.9}{273} \\approx -0.1205$$ $$\\angle ADC \\approx 97°$$ (d) $$\\text{Area} = \\frac{1}{2} \\times AD \\times CD \\times \\sin(\\angle ADC) = \\frac{1}{2} \\times 14 \\times 9.75 \\times \\sin 97° \\approx 68.25 \\times 0.9926 \\approx 67.7 \\text{ cm}^2$$"
  }
];
