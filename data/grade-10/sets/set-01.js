var PAPER = {
  title: "Sets — universal sets, Venn diagrams & set operations (10 questions)",
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
    category: "Universal sets & complements",
    question: "The universal set is $U = \\{n \\in \\mathbb{Z} : 5 \\leq n \\leq 16\\}$ and $A$ is the set of prime numbers in $U$. (a) List all elements of $U$ and state $n(U)$. (b) List the elements of $A$. (c) List the elements of $A'$.",
    answer: "(a) $U = \\{5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16\\}$, $n(U) = 12$. (b) $A = \\{5, 7, 11, 13\\}$. (c) $A' = \\{6, 8, 9, 10, 12, 14, 15, 16\\}$."
  },
  {
    id: 2,
    category: "Intersections, unions & set notation",
    question: "The universal set is $U = \\{1, 2, 3, \\ldots, 20\\}$. Set $A = \\{\\text{factors of } 12\\}$ and set $B = \\{\\text{even numbers in } U\\}$. (a) List the elements of $A$ and $B$. (b) Find $A \\cap B$ and $A \\cup B$. (c) Find $n(A \\cup B)$.",
    answer: "(a) $A = \\{1, 2, 3, 4, 6, 12\\}$; $B = \\{2, 4, 6, 8, 10, 12, 14, 16, 18, 20\\}$. (b) $A \\cap B = \\{2, 4, 6, 12\\}$; $A \\cup B = \\{1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20\\}$. (c) $n(A \\cup B) = 12$."
  },
  {
    id: 3,
    category: "Two-set Venn diagrams",
    diagram: "data/grade-10/sets/img/q03.svg",
    question: "The universal set is $U = \\{1, 2, 3, \\ldots, 12\\}$, $A = \\{\\text{even numbers in } U\\}$ and $B = \\{\\text{multiples of 3 in } U\\}$. (a) List $A$, $B$, $A \\cap B$ and $A'$. (b) Place each element in the correct region of the Venn diagram. (c) List the elements of $(A \\cap B)'$ and $A' \\cap B'$.",
    answer: "(a) $A = \\{2,4,6,8,10,12\\}$; $B = \\{3,6,9,12\\}$; $A \\cap B = \\{6,12\\}$; $A' = \\{1,3,5,7,9,11\\}$. (b) $A$ only $= \\{2,4,8,10\\}$; $A \\cap B = \\{6,12\\}$; $B$ only $= \\{3,9\\}$; outside both $= \\{1,5,7,11\\}$ (see diagram). (c) $(A \\cap B)' = \\{1,2,3,4,5,7,8,9,10,11\\}$; $A' \\cap B' = \\{1,5,7,11\\}$ (elements outside both circles)."
  },
  {
    id: 4,
    category: "Three-set Venn diagrams",
    diagram: "data/grade-10/sets/img/q04.svg",
    question: "The universal set is $U = \\{1, 2, \\ldots, 12\\}$, $A = \\{\\text{even numbers}\\}$, $B = \\{\\text{multiples of 3}\\}$, $C = \\{\\text{multiples of 4}\\}$. (a) List the elements of $A$, $B$ and $C$. (b) Copy and complete the three-set Venn diagram by placing each element in the correct region. (c) Find $n(A \\cup B \\cup C)$ and list $(A \\cup B \\cup C)'$.",
    answer: "(a) $A = \\{2,4,6,8,10,12\\}$; $B = \\{3,6,9,12\\}$; $C = \\{4,8,12\\}$. (b) $A \\cap B \\cap C = \\{12\\}$; $A \\cap B$ only $= \\{6\\}$; $A \\cap C$ only $= \\{4,8\\}$; $B \\cap C$ only $= \\emptyset$ (no multiple of 12 other than 12 itself); $A$ only $= \\{2,10\\}$; $B$ only $= \\{3,9\\}$; $C$ only $= \\emptyset$ (every multiple of 4 is even, so $C \\subseteq A$); outside $= \\{1,5,7,11\\}$. (c) $A \\cup B \\cup C = \\{2,3,4,6,8,9,10,12\\}$, so $n = 8$; $(A \\cup B \\cup C)' = \\{1,5,7,11\\}$."
  },
  {
    id: 5,
    category: "Three-set Venn diagrams — given counts",
    diagram: "data/grade-10/sets/img/q05.svg",
    question: "In a survey of 90 students each was asked whether they play football ($F$), basketball ($B$) or cricket ($C$). The results were: 8 play all three; 18 play $F$ and $B$; 20 play $F$ and $C$; 16 play $B$ and $C$; 48 play football in total; 38 play basketball in total; 42 play cricket in total. (a) Draw a Venn diagram showing the number of students in each region. (b) Find the number who play none of these sports.",
    answer: "First find the pairwise-only counts (subtracting the triple overlap): $F \\cap B$ only $= 18-8=10$; $F \\cap C$ only $= 20-8=12$; $B \\cap C$ only $= 16-8=8$. Then the 'only' counts: $F$ only $= 48-10-12-8=18$; $B$ only $= 38-10-8-8=12$; $C$ only $= 42-12-8-8=14$. Total in at least one sport $= 18+12+14+10+12+8+8=82$. (b) None $= 90-82 = \\mathbf{8}$ students."
  },
  {
    id: 6,
    category: "Two-set Venn diagrams — algebra",
    question: "In a group of 40 students, 4 study neither French nor Spanish. Twice as many students study Spanish only as study French only. In total, 20 students study French and 28 study Spanish. (a) Let $x$ = number studying French only. Write expressions for: the number studying Spanish only; the number studying both languages. (b) Form an equation in $x$ and solve it. (c) Find how many students study both languages, and verify against the Spanish total.",
    answer: "(a) Spanish only $= 2x$. Since total French $= 20$, those studying both $= 20 - x$. (b) Total $= x + 2x + (20 - x) + 4 = 40 \\Rightarrow 2x + 24 = 40 \\Rightarrow x = \\mathbf{8}$. (c) Both $= 20 - 8 = \\mathbf{12}$. Verify Spanish: Spanish only $+ $ both $= 16 + 12 = 28$ ✓."
  },
  {
    id: 7,
    category: "Three-set Venn diagrams — one unknown",
    diagram: "data/grade-10/sets/img/q07.svg",
    question: "60 students were asked about hobbies: reading ($R$), gaming ($G$) and painting ($P$). The results: 5 enjoy all three; 14 enjoy $R$ and $G$ in total; 8 enjoy $R$ and $P$ in total; 9 enjoy $G$ and $P$ in total; 15 enjoy reading only; 6 enjoy painting only. In total, 30 students enjoy gaming. (a) Draw a Venn diagram showing all values. (b) Find the number who enjoy gaming only. (c) Find: (i) the number who enjoy reading but not painting; (ii) the number who enjoy none of these hobbies.",
    answer: "Pairwise-only counts: $R \\cap G$ only $= 14-5=9$; $R \\cap P$ only $= 8-5=3$; $G \\cap P$ only $= 9-5=4$. (b) $G$ only $= 30 - 9 - 4 - 5 = \\mathbf{12}$. Total in at least one hobby $= 15+12+6+9+3+4+5=54$. (c)(i) Reading but not painting $= (R$ only$) + (R \\cap G$ only$) = 15+9 = \\mathbf{24}$. (c)(ii) None $= 60-54 = \\mathbf{6}$."
  },
  {
    id: 8,
    category: "Three-set Venn diagrams — multi-step algebra",
    diagram: "data/grade-10/sets/img/q08.svg",
    question: "100 students were surveyed about beverages: coffee ($C$), tea ($T$) and juice ($J$). Results: 25 like all three; 40 like coffee and juice in total; 6 like tea only; 3 like juice only; 1 likes none. The number who like coffee and juice only equals the number who like coffee only. (a) Find how many like coffee and juice only, and how many like coffee only. (b) Let $k$ = total number who like coffee and tea. Given that coffee and tea only equals tea and juice only, find $k$. (c) Find: (i) the number who like tea and juice; (ii) the number who like tea or juice.",
    answer: "(a) $C \\cap J$ only $= 40 - 25 = 15$; since this equals $C$ only, $C$ only $= \\mathbf{15}$. (b) Let $C \\cap T$ only $= k-25$ and $T \\cap J$ only $= p$ where $k-25 = p$. Total: $15+15+25+(k-25)+p+6+3+1 = 100 \\Rightarrow k+p=60$. Substituting $p = k-25$: $2k-25=60 \\Rightarrow k = \\mathbf{35}$. So $C \\cap T$ only $= 10$ and $T \\cap J$ only $= 10$. (c)(i) Tea and juice $= 10+25 = \\mathbf{35}$. (c)(ii) $n(T)=6+10+25+10=51$; $n(J)=3+15+25+10=53$; by inclusion–exclusion: $n(T \\cup J)=51+53-35= \\mathbf{69}$."
  },
  {
    id: 9,
    category: "Three-set Venn diagrams — find the unknown",
    diagram: "data/grade-10/sets/img/q09.svg",
    question: "60 students were asked which types of books they read from: mystery ($M$), biography ($B$) or science fiction ($S$). The results: 5 read mystery only; 8 read biography only; 9 read science fiction only; 12 read $M$ and $B$ but not $S$; 7 read $M$ and $S$ but not $B$; 4 read $B$ and $S$ but not $M$; $x$ read all three types; 2 read none. (a) Represent this information on a Venn diagram. (b) Find $x$.",
    answer: "(a) Place all given values in the appropriate Venn diagram regions, with $x$ in the centre. (b) Sum of all regions equals 60: $$5 + 8 + 9 + 12 + 7 + 4 + x + 2 = 60 \\Rightarrow 47 + x = 60 \\Rightarrow x = \\mathbf{13}.$$"
  },
  {
    id: 10,
    category: "Set operations — notation & calculation",
    question: "Sets $A$ and $B$ are subsets of a universal set $U$ where $n(U)=50$, $n(A)=30$, $n(B)=25$ and $n(A \\cap B)=10$. (a) Find $n(A \\cup B)$. (b) Find $n(A' \\cap B)$. (c) Find $n\\!\\left((A \\cup B)'\\right)$. (d) A third set $C$ satisfies $C \\subseteq A$, $n(C)=8$, and $C \\cap B = \\emptyset$. Find $n(A \\cap B \\cap C')$.",
    answer: "(a) By inclusion–exclusion: $n(A \\cup B) = 30+25-10 = \\mathbf{45}$. (b) Elements in $B$ but not $A$: $n(A' \\cap B) = n(B) - n(A \\cap B) = 25-10 = \\mathbf{15}$. (c) $n\\!\\left((A \\cup B)'\\right) = n(U) - n(A \\cup B) = 50-45 = \\mathbf{5}$. (d) Since $C \\subseteq A$ and $C \\cap B = \\emptyset$, no element of $C$ is in $B$. Therefore $A \\cap B$ and $C$ are disjoint, so every element of $A \\cap B$ is in $C'$. Hence $A \\cap B \\cap C' = A \\cap B$ and $n(A \\cap B \\cap C') = \\mathbf{10}$."
  }
];
