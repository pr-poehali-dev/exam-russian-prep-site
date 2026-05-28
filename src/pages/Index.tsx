import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "materials";

const rulesData = [
  {
    id: 1,
    category: "Орфография",
    icon: "BookOpen",
    color: "bg-slate-400",
    topics: [
      {
        title: "Правописание безударных гласных в корне",
        short: "Проверяй ударением или подбором однокоренного слова.",
        full: `Безударные гласные в корне слова проверяются ударением: нужно найти однокоренное слово или форму слова, в которой проверяемая гласная стоит под ударением.\n\nПримеры:\n• вода́ → во́ды\n• зелёный → зе́лень\n• гора́ → го́рный\n\nНепроверяемые гласные (словарные слова) необходимо запоминать:\n• собака, корова, молоко, велосипед, горизонт\n\nЧередующиеся гласные (гар/гор, зар/зор, лаг/лож, рас/рос) пишутся по особым правилам и НЕ проверяются ударением:\n• загорать (без ударения → гор)\n• заря (без ударения → зар)\n• предлагать (перед г → лаг)\n• изложение (перед ж → лож)`,
      },
      {
        title: "Правописание приставок",
        short: "Приставки на з/с: перед звонкими — з, перед глухими — с.",
        full: `Приставки делятся на три группы:\n\n1. Неизменяемые приставки (всегда пишутся одинаково):\n• до-, за-, на-, над-, о-, об-, от-, по-, под-, пре-, при-, про-, с-\nПример: сделать, отдать, подписать\n\n2. Приставки на з/с (зависят от следующего согласного):\n• перед звонкими согласными → з: разбить, безголосый, изгнать\n• перед глухими согласными → с: расписать, бесполезный, исказить\n\n3. Приставки пре-/при- (зависят от значения):\n• пре- = очень / пере-: прекрасный (очень красивый), преступить (переступить)\n• при- = приближение, присоединение, неполнота действия: приехать, приклеить, приоткрыть`,
      },
      {
        title: "Ь и Ъ знаки",
        short: "Ъ — после приставок перед е, ё, ю, я. Ь — для мягкости и разделения.",
        full: `Разделительный Ъ (твёрдый знак):\n• Пишется ТОЛЬКО после приставок, оканчивающихся на согласный, перед буквами е, ё, ю, я\n• Примеры: объяснить, съежиться, предъявить, въезд\n\nРазделительный Ь (мягкий знак):\n• Пишется в корне и после корня перед буквами е, ё, ю, я, и\n• Примеры: семья, ружьё, вьюга, листья\n\nЬ для обозначения мягкости:\n• После мягких согласных в конце слова: конь, соль, день\n• В середине слова между согласными: письмо, возьми\n\nЬ НЕ пишется:\n• В сочетаниях чк, чн, нч, нщ, щн: речка, ночной, мощный`,
      },
    ],
  },
  {
    id: 2,
    category: "Пунктуация",
    icon: "AlignLeft",
    color: "bg-gray-400",
    topics: [
      {
        title: "Запятая при однородных членах",
        short: "Между однородными членами без союза — запятая; перед «а», «но» — всегда.",
        full: `Однородные члены предложения — это члены предложения, отвечающие на один и тот же вопрос и относящиеся к одному слову.\n\nОсновные правила:\n\n1. Без союза — запятая:\n• Светило солнце, пели птицы, шумел ветер.\n\n2. С союзом И (одиночным) — запятая НЕ ставится:\n• Светило солнце и пели птицы.\n\n3. С союзом И (повторяющимся) — запятая ставится:\n• И солнце светило, и птицы пели, и ветер шумел.\n\n4. Перед союзами А, НО, ДА (=но) — всегда запятая:\n• Он умный, но ленивый.\n• Она устала, а продолжала работать.\n\n5. Обобщающее слово + двоеточие, или тире:\n• Везде: в лесу, в поле, в горах — он чувствовал себя дома.`,
      },
      {
        title: "Запятая в сложном предложении",
        short: "Между частями сложного предложения ставится запятая.",
        full: `Виды сложных предложений:\n\n1. Сложносочинённое (ССП) — части соединены сочинительными союзами:\n• Союзы: и, а, но, да, или, либо, зато, однако\n• Запятая ставится между частями: Солнце зашло, и стало темно.\n• Исключение: общий второстепенный член → запятая не нужна: Вечером пришли гости и началось веселье.\n\n2. Сложноподчинённое (СПП) — есть главная и придаточная части:\n• Придаточная выделяется запятыми со всех сторон\n• Я знаю, что он придёт.\n• Когда наступила ночь, все легли спать.\n• Он ушёл, потому что устал.\n\n3. Бессоюзное (БСП) — знак зависит от смысла:\n• Перечисление → запятая: Светало, туман рассеивался, птицы пели.\n• Противопоставление → тире: Лето кончилось — наступила осень.\n• Причина → двоеточие: Я остался дома: шёл сильный дождь.`,
      },
      {
        title: "Обособленные члены предложения",
        short: "Причастные и деепричастные обороты обособляются запятыми.",
        full: `Обособленные определения:\n\n1. Причастный оборот ПОСЛЕ определяемого слова → запятые обязательны:\n• Книга, лежавшая на столе, была интересной.\n\n2. Причастный оборот ДО определяемого слова → запятые НЕ нужны:\n• Лежавшая на столе книга была интересной.\n\n3. Если определяемое слово — личное местоимение → всегда выделяется:\n• Уставший, он всё равно продолжал работать.\n\nОбособленные обстоятельства:\n\n1. Деепричастный оборот → всегда выделяется запятыми:\n• Прочитав книгу, он лёг спать.\n• Он шёл, не торопясь.\n\n2. Одиночное деепричастие (сохраняет значение действия) → выделяется:\n• Он говорил, улыбаясь.\n\n3. Деепричастие, ставшее наречием → НЕ выделяется:\n• Он работал не торопясь (= медленно).`,
      },
    ],
  },
  {
    id: 3,
    category: "Грамматика",
    icon: "GraduationCap",
    color: "bg-zinc-400",
    topics: [
      {
        title: "Части речи и их признаки",
        short: "10 частей речи: 6 самостоятельных, 3 служебных, 1 особая.",
        full: `Самостоятельные части речи (имеют самостоятельное значение):\n\n1. Имя существительное — кто? что? (предмет): дом, радость, Москва\n2. Имя прилагательное — какой? чей? (признак предмета): красивый, мамин\n3. Имя числительное — сколько? который? (количество, порядок): пять, первый\n4. Местоимение — указывает на предмет, признак, количество: я, этот, столько\n5. Глагол — что делать? что сделать? (действие/состояние): читать, думать\n6. Наречие — как? когда? где? (признак действия/признака): быстро, вчера, здесь\n\nСлужебные части речи (не имеют самостоятельного значения):\n\n7. Предлог — выражает отношения между словами: в, на, из-за, вследствие\n8. Союз — связывает слова и части предложения: и, но, потому что, чтобы\n9. Частица — вносит оттенки значения: не, ни, бы, же, ли, разве\n\nОсобая часть речи:\n10. Междометие — выражает эмоции: ах, ой, браво, ура`,
      },
      {
        title: "Синтаксический разбор предложения",
        short: "Определи грамматическую основу — подлежащее и сказуемое.",
        full: `Порядок синтаксического разбора:\n\n1. Определить вид предложения по цели высказывания:\n• Повествовательное (сообщает): Солнце светит.\n• Вопросительное (спрашивает): Когда придёшь?\n• Побудительное (призывает к действию): Читай книги!\n\n2. Определить вид по интонации:\n• Восклицательное / Невосклицательное\n\n3. Найти грамматическую основу:\n• Подлежащее (кто? что?) — обычно существительное или местоимение\n• Сказуемое (что делает? каков?) — глагол или составное сказуемое\n\n4. Определить вид по наличию основ:\n• Простое (одна основа) / Сложное (две и более основ)\n\n5. Определить вид по наличию второстепенных членов:\n• Распространённое / Нераспространённое\n\n6. Определить второстепенные члены:\n• Определение (какой?) — волнистая линия\n• Дополнение (кого? что?) — пунктирная линия\n• Обстоятельство (где? когда? как?) — линия с точками`,
      },
      {
        title: "Морфологический разбор",
        short: "Разбор слова как части речи: начальная форма + грамматические признаки.",
        full: `Морфологический разбор существительного:\n1. Начальная форма (И.п., ед.ч.)\n2. Постоянные признаки: собственное/нарицательное, одушевлённое/неодушевлённое, род, склонение\n3. Непостоянные признаки: падеж, число\n4. Синтаксическая роль\n\nМорфологический разбор прилагательного:\n1. Начальная форма (И.п., ед.ч., м.р.)\n2. Постоянные признаки: разряд (качественное/относительное/притяжательное)\n3. Непостоянные признаки: полная/краткая форма, степень сравнения, род, число, падеж\n4. Синтаксическая роль\n\nМорфологический разбор глагола:\n1. Начальная форма (инфинитив)\n2. Постоянные признаки: вид, переходность, возвратность, спряжение\n3. Непостоянные признаки: наклонение, время, число, лицо/род\n4. Синтаксическая роль`,
      },
    ],
  },
  {
    id: 4,
    category: "Стилистика",
    icon: "Feather",
    color: "bg-stone-400",
    topics: [
      {
        title: "Стили речи",
        short: "5 стилей: научный, официально-деловой, публицистический, художественный, разговорный.",
        full: `Функциональные стили речи:\n\n1. Научный стиль\n• Цель: передача научных знаний\n• Признаки: точность, объективность, логичность, терминология\n• Жанры: статья, монография, учебник, реферат\n\n2. Официально-деловой стиль\n• Цель: регулирование деловых и правовых отношений\n• Признаки: точность, стандартизированность, безличность, клише\n• Жанры: закон, приказ, договор, заявление, протокол\n\n3. Публицистический стиль\n• Цель: воздействие на общественное мнение\n• Признаки: выразительность, оценочность, актуальность\n• Жанры: статья, репортаж, интервью, эссе\n\n4. Художественный стиль\n• Цель: эстетическое воздействие, образность\n• Признаки: образность, эмоциональность, использование всех языковых средств\n• Жанры: роман, повесть, рассказ, стихотворение\n\n5. Разговорный стиль\n• Цель: повседневное общение\n• Признаки: непринуждённость, эллипсис, просторечия\n• Жанры: диалог, беседа, письмо другу`,
      },
      {
        title: "Средства художественной выразительности",
        short: "Тропы и фигуры речи: метафора, эпитет, сравнение, анафора и другие.",
        full: `Тропы (переносное употребление слов):\n\n• Метафора — скрытое сравнение: золото листьев, море огней\n• Эпитет — образное определение: серебряный голос, мёртвая тишина\n• Сравнение — прямое сопоставление: белый как снег, быстрее ветра\n• Метонимия — замена по смежности: читать Пушкина (=его произведения)\n• Олицетворение — неодушевлённое как одушевлённое: лес молчит, ветер поёт\n• Гипербола — преувеличение: сто лет не виделись, море слёз\n• Литота — преуменьшение: мужичок с ноготок\n• Перифраз — замена описанием: чёрное золото (=нефть)\n\nФигуры речи (синтаксические конструкции):\n\n• Анафора — единоначатие: Клянусь я первым днём творенья... (Лермонтов)\n• Эпифора — единоокончание: повторение в конце строк\n• Антитеза — противопоставление: Ты богат, я очень беден\n• Инверсия — необычный порядок слов: Белеет парус одинокий\n• Риторический вопрос — вопрос без ответа: Куда ты мчишься, тройка?`,
      },
    ],
  },
];

const stats = [
  { value: "4", label: "Раздела", icon: "Layers" },
  { value: "12", label: "Правил", icon: "BookOpen" },
  { value: "ЕГЭ", label: "Подготовка", icon: "GraduationCap" },
  { value: "ОГЭ", label: "Подготовка", icon: "Award" },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [expandedRule, setExpandedRule] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const toggleRule = (key: string) => {
    setExpandedRule(expandedRule === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <header className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-display font-bold">Р</span>
            </div>
            <span className="font-display font-semibold text-lg text-primary tracking-wide">
              РусЭкзамен
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <button
              onClick={() => setPage("home")}
              className={`nav-link font-body text-sm font-medium transition-colors pb-0.5 ${
                page === "home"
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("materials")}
              className={`nav-link font-body text-sm font-medium transition-colors pb-0.5 ${
                page === "materials"
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Материалы
            </button>
          </nav>
        </div>
      </header>

      {/* HOME PAGE */}
      {page === "home" && (
        <main>
          {/* Hero */}
          <section className="bg-slate-100 py-24 relative overflow-hidden border-b border-slate-200">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-4 left-8 font-display text-[200px] leading-none text-slate-400 select-none">Я</div>
              <div className="absolute bottom-4 right-8 font-display text-[200px] leading-none text-slate-400 select-none">Ъ</div>
            </div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="max-w-2xl animate-slide-up">
                <div className="inline-flex items-center gap-2 border border-slate-300 px-3 py-1 mb-8 text-xs tracking-widest uppercase text-slate-500 font-body">
                  <Icon name="GraduationCap" size={12} />
                  Подготовка к экзамену
                </div>
                <h1 className="font-display text-6xl font-semibold leading-tight mb-6 text-slate-800">
                  Русский язык.<br />
                  <span className="text-slate-500">Чёткие правила.</span>
                </h1>
                <p className="font-body text-slate-600 text-lg leading-relaxed mb-10 font-light">
                  Подробные объяснения правил орфографии, пунктуации и грамматики.
                  Всё необходимое для уверенной подготовки к ЕГЭ и ОГЭ.
                </p>
                <button
                  onClick={() => setPage("materials")}
                  className="inline-flex items-center gap-3 bg-slate-600 text-white px-8 py-3.5 font-body font-medium text-sm tracking-wide hover:bg-slate-700 transition-colors"
                >
                  Перейти к материалам
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="border-b border-border bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
                {stats.map((s) => (
                  <div key={s.label} className="py-8 px-6 text-center">
                    <div className="font-display text-4xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section className="py-20 max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">О портале</p>
                <h2 className="font-display text-4xl font-semibold text-primary leading-tight mb-6">
                  Структурированные знания для сдачи экзамена
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Каждое правило подкреплено подробным объяснением, примерами и исключениями.
                  Никакой воды — только то, что действительно нужно знать.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Материалы охватывают орфографию, пунктуацию, грамматику и стилистику —
                  все темы, которые проверяются на ЕГЭ и ОГЭ.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {rulesData.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => { setPage("materials"); setActiveCategory(cat.id); }}
                    className={`${cat.color} text-white p-6 cursor-pointer hover:-translate-y-1 transition-transform duration-200 group`}
                  >
                    <Icon name={cat.icon} fallback="BookOpen" size={24} className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="font-display text-lg font-medium">{cat.category}</div>
                    <div className="font-body text-xs text-white/50 mt-1">{cat.topics.length} темы</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-secondary py-16 border-t border-border">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="font-display text-3xl font-semibold text-primary mb-4">
                Готов начать подготовку?
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Все материалы доступны бесплатно и без регистрации.
              </p>
              <button
                onClick={() => setPage("materials")}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 font-body font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Открыть материалы
                <Icon name="BookOpen" size={16} />
              </button>
            </div>
          </section>
        </main>
      )}

      {/* MATERIALS PAGE */}
      {page === "materials" && (
        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-10">
            <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Учебные материалы</p>
            <h1 className="font-display text-5xl font-semibold text-primary">Правила и грамматика</h1>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-6">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-sm font-body font-medium transition-colors ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              Все разделы
            </button>
            {rulesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-4 py-2 text-sm font-body font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                <Icon name={cat.icon} fallback="BookOpen" size={14} />
                {cat.category}
              </button>
            ))}
          </div>

          {/* Rules list */}
          <div className="space-y-12">
            {rulesData
              .filter((cat) => activeCategory === null || cat.id === activeCategory)
              .map((cat) => (
                <div key={cat.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${cat.color} w-8 h-8 flex items-center justify-center`}>
                      <Icon name={cat.icon} fallback="BookOpen" size={16} className="text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-primary">{cat.category}</h2>
                    <div className="flex-1 h-px bg-border ml-2" />
                  </div>

                  <div className="space-y-3">
                    {cat.topics.map((topic, idx) => {
                      const key = `${cat.id}-${idx}`;
                      const isOpen = expandedRule === key;
                      return (
                        <div
                          key={idx}
                          className="border border-border bg-white rule-card transition-all duration-200"
                        >
                          <button
                            onClick={() => toggleRule(key)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left group"
                          >
                            <div>
                              <div className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                                {topic.title}
                              </div>
                              {!isOpen && (
                                <div className="font-body text-sm text-muted-foreground mt-1">
                                  {topic.short}
                                </div>
                              )}
                            </div>
                            <div className={`ml-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                              <Icon name="ChevronDown" size={18} />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6 border-t border-border">
                              <div className="pt-5">
                                {topic.full.split("\n\n").map((block, bi) => (
                                  <div key={bi} className="mb-4">
                                    {block.split("\n").map((line, li) => {
                                      if (line.startsWith("•")) {
                                        return (
                                          <div key={li} className="flex items-start gap-2 mb-1.5 font-body text-sm text-foreground">
                                            <span className="text-amber-500 mt-0.5 flex-shrink-0">—</span>
                                            <span>{line.slice(1).trim()}</span>
                                          </div>
                                        );
                                      }
                                      if (/^\d+\./.test(line)) {
                                        return (
                                          <div key={li} className="font-body text-sm font-medium text-primary mb-2 mt-3">
                                            {line}
                                          </div>
                                        );
                                      }
                                      return (
                                        <div key={li} className="font-body text-sm text-muted-foreground mb-1 leading-relaxed">
                                          {line}
                                        </div>
                                      );
                                    })}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-display font-bold">Р</span>
            </div>
            <span className="font-display text-primary font-semibold">РусЭкзамен</span>
          </div>
          <p className="font-body text-xs text-muted-foreground text-center">
            Портал для подготовки к ЕГЭ и ОГЭ по русскому языку
          </p>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="BookOpen" size={14} />
            <span className="font-body text-xs">Все материалы</span>
          </div>
        </div>
      </footer>
    </div>
  );
}