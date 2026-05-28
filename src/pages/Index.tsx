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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground text-xs font-bold font-serif">Р</span>
            </div>
            <span className="font-semibold text-foreground font-serif">РусЭкзамен</span>
          </div>
          <nav className="flex items-center gap-7">
            <button
              onClick={() => setPage("home")}
              className={`nav-link text-sm font-medium transition-colors pb-0.5 ${
                page === "home"
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("materials")}
              className={`nav-link text-sm font-medium transition-colors pb-0.5 ${
                page === "materials"
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-foreground"
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
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30"
              style={{background: 'radial-gradient(ellipse 60% 50% at 80% 50%, hsl(36,60%,88%), transparent)'}} />
            <div className="max-w-5xl mx-auto px-6 relative">
              <div className="max-w-xl animate-slide-up">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-7">
                  Подготовка к ЕГЭ и ОГЭ
                </span>
                <h1 className="font-serif text-5xl font-bold leading-snug mb-5 text-foreground">
                  Русский язык —<br />
                  <span className="text-primary">правила просто</span>
                </h1>
                <p className="text-muted-foreground text-[17px] leading-relaxed mb-9">
                  Подробные объяснения орфографии, пунктуации и грамматики. Всё необходимое для уверенной сдачи экзамена.
                </p>
                <button
                  onClick={() => setPage("materials")}
                  className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:brightness-105 transition-all"
                >
                  Открыть материалы
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-10">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="warm-card p-6 text-center">
                    <div className="font-serif text-3xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="warm-card p-8">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">О портале</span>
                  <h2 className="font-serif text-2xl font-bold text-foreground leading-snug mt-3 mb-4">
                    Структурированные знания для сдачи экзамена
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">
                    Каждое правило — подробное объяснение, примеры и исключения. Никакой воды, только нужное.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    Орфография, пунктуация, грамматика, стилистика — все темы ЕГЭ и ОГЭ.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {rulesData.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => { setPage("materials"); setActiveCategory(cat.id); }}
                      className="warm-card p-5 cursor-pointer group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Icon name={cat.icon} fallback="BookOpen" size={18} className="text-primary" />
                      </div>
                      <div className="text-sm font-semibold text-foreground">{cat.category}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{cat.topics.length} темы</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 mb-8">
            <div className="max-w-5xl mx-auto px-6">
              <div className="warm-card p-10 flex flex-col md:flex-row items-center justify-between gap-7"
                style={{background: 'linear-gradient(135deg, hsl(36,40%,99%) 0%, hsl(22,30%,95%) 100%)'}}>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Готов начать подготовку?
                  </h2>
                  <p className="text-muted-foreground text-[15px]">
                    Все материалы бесплатны и доступны без регистрации.
                  </p>
                </div>
                <button
                  onClick={() => setPage("materials")}
                  className="flex-shrink-0 inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium shadow-md hover:brightness-105 transition-all"
                >
                  Перейти к правилам
                  <Icon name="BookOpen" size={16} />
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* MATERIALS PAGE */}
      {page === "materials" && (
        <main className="max-w-5xl mx-auto px-6 py-12">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-medium">Учебные материалы</span>
            <h1 className="font-serif text-4xl font-bold text-foreground mt-2">Правила и грамматика</h1>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-card"
              }`}
            >
              Все разделы
            </button>
            {rulesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-card"
                }`}
              >
                <Icon name={cat.icon} fallback="BookOpen" size={13} />
                {cat.category}
              </button>
            ))}
          </div>

          {/* Rules list */}
          <div className="space-y-10">
            {rulesData
              .filter((cat) => activeCategory === null || cat.id === activeCategory)
              .map((cat) => (
                <div key={cat.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={cat.icon} fallback="BookOpen" size={14} className="text-primary" />
                    </div>
                    <h2 className="font-serif text-lg font-bold text-foreground">{cat.category}</h2>
                    <div className="flex-1 h-px bg-border ml-1" />
                  </div>

                  <div className="space-y-3">
                    {cat.topics.map((topic, idx) => {
                      const key = `${cat.id}-${idx}`;
                      const isOpen = expandedRule === key;
                      return (
                        <div
                          key={idx}
                          className="warm-card overflow-hidden"
                        >
                          <button
                            onClick={() => toggleRule(key)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left group"
                          >
                            <div>
                              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {topic.title}
                              </div>
                              {!isOpen && (
                                <div className="text-sm text-muted-foreground mt-0.5">
                                  {topic.short}
                                </div>
                              )}
                            </div>
                            <div className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                              <Icon name="ChevronDown" size={15} />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6 border-t border-border">
                              <div className="pt-5">
                                {topic.full.split("\n\n").map((block, bi) => (
                                  <div key={bi} className="mb-5">
                                    {block.split("\n").map((line, li) => {
                                      if (line.startsWith("•")) {
                                        return (
                                          <div key={li} className="flex items-start gap-2.5 mb-2 text-sm text-foreground">
                                            <span className="text-primary mt-0.5 flex-shrink-0 font-bold">·</span>
                                            <span>{line.slice(1).trim()}</span>
                                          </div>
                                        );
                                      }
                                      if (/^\d+\./.test(line)) {
                                        return (
                                          <div key={li} className="text-sm font-semibold text-primary mb-2 mt-4">
                                            {line}
                                          </div>
                                        );
                                      }
                                      return (
                                        <div key={li} className="text-sm text-muted-foreground mb-1 leading-relaxed">
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
      <footer className="border-t border-border mt-16 bg-card">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold font-serif">Р</span>
            </div>
            <span className="text-sm font-semibold text-foreground font-serif">РусЭкзамен</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Портал для подготовки к ЕГЭ и ОГЭ по русскому языку
          </p>
          <span className="text-xs text-muted-foreground">Все материалы бесплатны</span>
        </div>
      </footer>
    </div>
  );
}