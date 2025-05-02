import { TranslationType } from "./en";

export const bg: TranslationType = {
  nav: {
    home: "Начало",
    models: "Модели",
    services: "Услуги",
    pricing: "Цени",
    contact: "Контакти",
    signIn: "Вход",
    signUp: "Регистрация",
    signOut: "Разлогване",
    profile: "Профил",
    appearance: "Изглед",
  },

  // Models categories
  models: {
    featured: "Препоръчани модели",
    featuredDescription:
      "Разгледайте нашата специална колекция от премиум 3D модели",
    architectural: "Архитектурни",
    architecturalDescription: "Сгради, ландшафти и архитектурни елементи",
    characters: "Герои",
    charactersDescription: "Фигурки, герои и колекционерски предмети",
    mechanical: "Механични",
    mechanicalDescription:
      "Функционални части, зъбни колела и механични компоненти",
  },

  // Services
  services: {
    printing: "3D Принтиране",
    printingDescription:
      "Висококачествени услуги за печат с различни материали",
    customDesign: "Дизайн по поръчка",
    customDesignDescription: "Услуги за 3D моделиране по ваши изисквания",
    consultation: "Консултация",
    consultationDescription: "Експертни съвети за вашите 3D проекти",
  },

  // Home page
  home: {
    hero: {
      title: "Премиум 3D модели и услуги за печат",
      subtitle:
        "Превърнете идеите си в реалност с нашите висококачествени 3D модели и професионални решения за принтиране",
      exploreButton: "Разгледай моделите",
      contactButton: "Започни сега",
    },
    services: {
      title: "Нашите услуги за 3D принтиране",
      modelDesign: {
        title: "Моделен дизайн",
        description:
          "Експертни услуги за 3D моделиране, които дават живот на вашите концепции с прецизност и креативност",
      },
      rapidPrototyping: {
        title: "Бързо прототипиране",
        description:
          "Бързо изпълнение на прототипи с възможности за итеративно усъвършенстване",
      },
      productionPrinting: {
        title: "Производствен печат",
        description:
          "Възможности за широкомащабно производство с постоянно качество и конкурентни цени",
      },
    },
    materials: {
      title: "Премиум материали",
      description:
        "Богат избор от висококачествени нишки и смоли за всякакви проекти",
    },
  },

  // Auth
  auth: {
    signIn: {
      title: "Вход в профила",
      description: "Въведете вашия имейл, за да влезете в профила си",
      forgotPassword: "Забравена парола?",
      noAccount: "Нямате профил?",
      createAccount: "Създайте профил",
      email: "Имейл",
      password: "Парола",
      submit: "Вход",
    },
    signUp: {
      title: "Създаване на профил",
      description: "Въведете вашите данни по-долу, за да създадете профил",
      alreadyHaveAccount: "Вече имате профил?",
      firstName: "Име",
      lastName: "Фамилия",
      email: "Имейл",
      password: "Парола",
      confirmPassword: "Потвърдете паролата",
      passwordRequirements: "Паролата трябва да бъде поне 8 символа",
      termsAndConditions:
        "Съгласен съм с условията за ползване и политиката за поверителност",
      submit: "Регистрация",
      avatarUrl: "Профилна снимка",
      phone: "Телефонен номер",
    },
  },

  // Contact
  contact: {
    title: "Свържете се с нас",
    subtitle: "Свържете се с нашия екип",
    name: "Име",
    email: "Имейл",
    message: "Съобщение",
    submit: "Изпрати съобщение",
    success: "Вашето съобщение беше изпратено. Ще се свържем с вас скоро!",
    error:
      "Възникна грешка при изпращането на съобщението. Моля, опитайте отново.",
  },

  // Common
  common: {
    loading: "Зареждане...",
    error: "Възникна грешка",
    retry: "Опитай отново",
    continueWith: "Или продължи с",
    with: "с",
    github: "GitHub",
    google: "Google",
    toggleMenu: "Превключване на меню",
    close: "Затвори",
    explorePortfolio: "Разгледайте нашето портфолио",
    newDesignsWeekly: "Нови дизайни всяка седмица",
    english: "Английски",
    bulgarian: "Български",
    changeLanguage: "Смяна на езика",
    country: "Държава",
    city: "Град",
    selectCountry: "Изберете държава",
    selectCity: "Изберете град",
    selectCountryFirst: "Първо изберете държава",
    placeholders: {
      firstName: "Иван",
      lastName: "Петров",
      createPassword: "Създайте сигурна парола",
      confirmPassword: "Потвърдете паролата си",
      phone: "0889345960",
    },
  },

  countries: {
    us: "Съединени щати",
    uk: "Обединено кралство",
    ca: "Канада",
    au: "Австралия",
    fr: "Франция",
  },
};

export default bg;
