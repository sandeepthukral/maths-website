var PAPER = {
  title: "Probability — set 01 (10 questions)",
  difficultyRanges: [
    { level: 2, from: 1, to: 4 },
    { level: 3, from: 5, to: 8 },
    { level: 4, from: 9, to: 10 }
  ]
};

var QUESTIONS = [
  {
    id: 1,
    category: "Venn diagrams",
    diagram: "data/grade-10/probability/img/q01.svg",
    question: "The Venn diagram shows how 160 students in Year 8 participated in the school Athletics (A) and Swimming (S) carnivals. 98 students participated in Athletics, 2 students participated in both, and 10 students participated in neither. (a) Complete the Venn diagram by finding the missing values. A student is chosen at random. Find the probability that she: (b) participated in both carnivals, (c) participated in swimming only OR athletics only, (d) did not participate in either carnival.",
    answer: "Athletics only $= 98 - 2 = 96$. Swimming only $= 160 - 96 - 2 - 10 = 52$. (a) A only: 96, A∩S: 2, S only: 52, outside: 10. (b) $$P(\\text{both}) = \\frac{2}{160} = \\frac{1}{80}$$ (c) $$P(\\text{A only or S only}) = \\frac{96+52}{160} = \\frac{148}{160} = \\frac{37}{40}$$ (d) $$P(\\text{neither}) = \\frac{10}{160} = \\frac{1}{16}$$"
  },
  {
    id: 2,
    category: "Venn diagrams",
    diagram: "data/grade-10/probability/img/q02.svg",
    question: "In a class of 30 students, 19 study Physics, 17 study Chemistry and 15 study both of these subjects. Display this on a Venn diagram and find the number of students who study: (a) both subjects, (b) at least one of the subjects, (c) Physics, but not Chemistry, (d) exactly one of the subjects, (e) neither subject.",
    answer: "Physics only $= 19-15 = 4$, Chemistry only $= 17-15 = 2$, both $= 15$, neither $= 30-4-15-2 = 9$. (a) $\\mathbf{15}$ (b) $4+15+2 = \\mathbf{21}$ (c) $\\mathbf{4}$ (d) $4+2 = \\mathbf{6}$ (e) $\\mathbf{9}$"
  },
  {
    id: 3,
    category: "Combined probability",
    question: "For events $A$ and $B$, $\\text{P}(A) = \\dfrac{3}{11}$ and $\\text{P}(B) = \\dfrac{4}{11}$. Calculate $\\text{P}(A \\cap B)$ if: (a) $\\text{P}(A \\cup B) = \\dfrac{6}{11}$, (b) events $A$ and $B$ are independent.",
    answer: "(a) Using the addition rule: $$\\text{P}(A \\cap B) = \\text{P}(A) + \\text{P}(B) - \\text{P}(A \\cup B) = \\frac{3}{11} + \\frac{4}{11} - \\frac{6}{11} = \\frac{1}{11}$$ (b) If $A$ and $B$ are independent: $$\\text{P}(A \\cap B) = \\text{P}(A) \\times \\text{P}(B) = \\frac{3}{11} \\times \\frac{4}{11} = \\frac{12}{121}$$"
  },
  {
    id: 4,
    category: "Venn diagrams",
    question: "In a class of 25 students, 15 play hockey and 16 play basketball. If 4 students play neither sport, find the number of students who play both hockey and basketball.",
    answer: "Let $x$ = number who play both. By inclusion–exclusion: $$15 + 16 - x + 4 = 25 \\Rightarrow 35 - x = 25 \\Rightarrow x = 10$$ So $\\mathbf{10}$ students play both."
  },
  {
    id: 5,
    category: "Tree diagrams",
    diagram: "data/grade-10/probability/img/q05.svg",
    question: "Two ordinary 6-sided dice are rolled. (a) Complete the tree diagram showing the outcomes 'six' and 'not six' for each die with their probabilities. (b) Find the probability of getting one or more sixes.",
    answer: "(a) Each branch: P(six) = $\\frac{1}{6}$, P(not six) = $\\frac{5}{6}$. (b) Using the complement: $$\\text{P(at least one six)} = 1 - \\text{P(no sixes)} = 1 - \\frac{5}{6} \\times \\frac{5}{6} = 1 - \\frac{25}{36} = \\frac{11}{36}$$"
  },
  {
    id: 6,
    category: "Conditional probability",
    question: "In a class, 40 students take Chemistry only, 30 take Physics only, 20 take both Chemistry and Physics, and 60 take neither. A student is chosen at random. Find: (a) P(Physics $|$ Chemistry), (b) P(Physics $|$ not Chemistry), (c) State whether 'taking Chemistry' and 'taking Physics' are independent. Justify your answer.",
    answer: "Total $= 40 + 30 + 20 + 60 = 150$. P(Chemistry) $= 60/150 = 2/5$. P(Physics) $= 50/150 = 1/3$. (a) $$\\text{P}(P|C) = \\frac{\\text{P}(P \\cap C)}{\\text{P}(C)} = \\frac{20/150}{60/150} = \\frac{20}{60} = \\frac{1}{3}$$ (b) $$\\text{P}(P|C') = \\frac{30}{30+60} = \\frac{30}{90} = \\frac{1}{3}$$ (c) Since $\\text{P}(C) \\times \\text{P}(P) = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15} = \\frac{20}{150} = \\text{P}(C \\cap P)$, the events are **independent**."
  },
  {
    id: 7,
    category: "Combined probability",
    question: "Two events $A$ and $B$ are mutually exclusive with $\\text{P}(A) = 0.4$ and $\\text{P}(B) = 0.3$. Find: (a) $\\text{P}(A \\cup B)$, (b) $\\text{P}(A \\cap B)$, (c) $\\text{P}(A')$, (d) $\\text{P}(A' \\cap B)$.",
    answer: "(a) Mutually exclusive, so $\\text{P}(A \\cup B) = 0.4 + 0.3 = \\mathbf{0.7}$. (b) Mutually exclusive $\\Rightarrow \\text{P}(A \\cap B) = \\mathbf{0}$. (c) $\\text{P}(A') = 1 - 0.4 = \\mathbf{0.6}$. (d) Since $A$ and $B$ are mutually exclusive, $B \\subseteq A'$: $\\text{P}(A' \\cap B) = \\text{P}(B) = \\mathbf{0.3}$."
  },
  {
    id: 8,
    category: "Tree diagrams",
    question: "A bag contains 3 red and 4 blue balls. Two balls are drawn at random without replacement. Find the probability that: (a) both are red, (b) the balls are different colours, (c) both are the same colour.",
    answer: "(a) $$\\text{P(both red)} = \\frac{3}{7} \\times \\frac{2}{6} = \\frac{6}{42} = \\frac{1}{7}$$ (b) $$\\text{P(one red, one blue)} = \\frac{3}{7} \\times \\frac{4}{6} + \\frac{4}{7} \\times \\frac{3}{6} = \\frac{12}{42} + \\frac{12}{42} = \\frac{24}{42} = \\frac{4}{7}$$ (c) $\\text{P(both blue)} = \\frac{4}{7} \\times \\frac{3}{6} = \\frac{12}{42} = \\frac{2}{7}$. P(same colour) $= \\frac{1}{7} + \\frac{2}{7} = \\frac{3}{7}$."
  },
  {
    id: 9,
    category: "Conditional probability",
    question: "In a group of 100 students, 50 study Spanish, 40 study French, and 20 study both. A student is chosen at random. Find: (a) P(French $|$ Spanish), (b) P(Spanish $|$ French), (c) P(Spanish $\\cup$ French).",
    answer: "(a) $$\\text{P}(F|S) = \\frac{\\text{P}(F \\cap S)}{\\text{P}(S)} = \\frac{20/100}{50/100} = \\frac{20}{50} = \\frac{2}{5}$$ (b) $$\\text{P}(S|F) = \\frac{20/100}{40/100} = \\frac{20}{40} = \\frac{1}{2}$$ (c) $$\\text{P}(S \\cup F) = \\frac{50+40-20}{100} = \\frac{70}{100} = \\frac{7}{10}$$"
  },
  {
    id: 10,
    category: "Multi-step probability",
    question: "Bag $A$ contains 2 red and 3 blue balls. Bag $B$ contains 4 red and 1 blue ball. A bag is chosen at random and then one ball is drawn. (a) Find the probability that the ball is red. (b) Given that the ball drawn is red, find the probability that it came from bag $A$.",
    answer: "(a) $$\\text{P(red)} = \\frac{1}{2} \\times \\frac{2}{5} + \\frac{1}{2} \\times \\frac{4}{5} = \\frac{1}{5} + \\frac{2}{5} = \\frac{3}{5}$$ (b) Using Bayes' theorem: $$\\text{P}(A|\\text{red}) = \\frac{\\text{P}(A) \\times \\text{P}(\\text{red}|A)}{\\text{P}(\\text{red})} = \\frac{\\frac{1}{2} \\times \\frac{2}{5}}{\\frac{3}{5}} = \\frac{1/5}{3/5} = \\frac{1}{3}$$"
  }
];
