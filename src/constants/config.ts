type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
  title: "Adarsh  — Full Stack & ML Engineer Portfolio",
  fullName: "Adarsh ",
  email: "adarshk6678@gmail.com",
},
  hero: {
  name: "Adarsh",
  p: [
    "I build full-stack applications,",
    "AI/ML systems and scalable web solutions"
  ],
},
contact: {
  p: "Get in touch",
  h2: "Contact",
  form: {
    name: {
      span: "Your Name",
      placeholder: "What's your name?",
    },
      email: { 
      span: "Your Email", 
      placeholder: "What's your email?" 
    },
    message: {
      span: "Your Message",
      placeholder: "What would you like to talk about?",
    },
  },
},
  sections: {
  about: {
    p: "Introduction",
    h2: "Overview.",
    content: `I'm a Full Stack Developer and Machine Learning Engineer with strong 
    experience in MERN stack, Python-based AI/ML workflows, and scalable backend 
    development. I specialize in building end-to-end products—from secure 
    authentication systems, REST APIs, and real-time communication features to 
    AI-driven prediction models and computer vision systems. I enjoy solving 
    complex problems and delivering production-ready solutions that create real 
    impact.`,
  },

    experience: {
    p: "What I have done so far",
    h2: "Work Experience.",
    content: `Data Science Intern at Rubixe (2025) — improved ML model accuracy 
    by 12%, built modular ML pipelines, and delivered SQL dashboards supporting 
    decision-making.`,
  },

  works: {
  p: "My Work",
  h2: "Projects.",
  content: `Here are some of my major projects that showcase my expertise in 
  full-stack development, machine learning, artificial intelligence, and 
  data-driven applications. These projects highlight my ability to build 
  end-to-end systems — from frontend UI and backend APIs to model development, 
  deployment, and real-time communication features. Each project includes 
  code repositories, detailed documentation, and demonstrates my capability to 
  solve real-world problems with scalable and production-ready solutions.`,
},

}
};
