export const en = {
  // Navigation
  nav: {
    home: "Home",
    models: "Models",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign Out",
    profile: "Profile",
    appearance: "Appearance",
  },

  // Models categories
  models: {
    featured: "Featured Models",
    featuredDescription:
      "Check out our curated collection of premium 3D models",
    architectural: "Architectural",
    architecturalDescription:
      "Buildings, landscapes and architectural elements",
    characters: "Characters",
    charactersDescription: "Figurines, characters and collectibles",
    mechanical: "Mechanical",
    mechanicalDescription: "Functional parts, gears and mechanical components",
  },

  // Services
  services: {
    printing: "3D Printing",
    printingDescription:
      "High-quality printing services with various materials",
    customDesign: "Custom Design",
    customDesignDescription:
      "Custom 3D modeling services for your specific needs",
    consultation: "Consultation",
    consultationDescription: "Expert advice for your 3D printing projects",
  },

  // Home page
  home: {
    hero: {
      title: "Premium 3D Models & Printing Services",
      subtitle:
        "Transform your ideas into reality with our high-quality 3D models and professional printing solutions",
      exploreButton: "Explore Models",
      contactButton: "Get Started",
    },
    services: {
      title: "Our 3D Printing Services",
      modelDesign: {
        title: "Model Design",
        description:
          "Expert 3D modeling services to bring your concepts to life with precision and creativity",
      },
      rapidPrototyping: {
        title: "Rapid Prototyping",
        description:
          "Quick turnaround on prototype development with iterative refinement options",
      },
      productionPrinting: {
        title: "Production Printing",
        description:
          "Large-scale production capabilities with consistent quality and competitive pricing",
      },
    },
    materials: {
      title: "Premium Materials",
      description:
        "Wide selection of high-quality filaments and resins for any project",
    },
  },

  // Auth
  auth: {
    signIn: {
      title: "Sign in to your account",
      description: "Enter your email below to sign in to your account",
      forgotPassword: "Forgot password?",
      noAccount: "Don't have an account?",
      createAccount: "Create an account",
      email: "Email",
      password: "Password",
      submit: "Sign In",
    },
    signUp: {
      title: "Create an account",
      description: "Enter your details below to create your account",
      alreadyHaveAccount: "Already have an account?",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      passwordRequirements: "Password must be at least 8 characters long",
      termsAndConditions: "I agree to the terms of service and privacy policy",
      submit: "Sign Up",
      avatarUrl: "Profile picture",
      phone: "Phone",
    },
  },

  // Contact
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    success: "Your message has been sent. We'll get back to you soon!",
    error: "There was an error sending your message. Please try again.",
  },

  // Common
  common: {
    loading: "Loading...",
    error: "An error occurred",
    retry: "Retry",
    continueWith: "Or continue with",
    with: "with",
    github: "GitHub",
    google: "Google",
    toggleMenu: "Toggle menu",
    close: "Close",
    explorePortfolio: "Explore our portfolio",
    newDesignsWeekly: "New designs added weekly",
    english: "English",
    bulgarian: "Bulgarian",
    changeLanguage: "Change language",
    country: "Country",
    city: "City",
    selectCountry: "Select country",
    selectCity: "Select city",
    selectCountryFirst: "Select country first",
    placeholders: {
      firstName: "John",
      lastName: "Doe",
      createPassword: "Create a secure password",
      confirmPassword: "Confirm your password",
      phone: "0889345960",
    },
  },

  countries: {
    us: "United States",
    uk: "United Kingdom",
    ca: "Canada",
    au: "Australia",
    fr: "France",
  },
};

export type TranslationType = typeof en;

export default en;
