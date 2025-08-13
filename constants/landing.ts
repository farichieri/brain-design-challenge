export const LANDING_CONTENT = {
  hero: {
    title: 'Your AI-powered OUAF Assistant',
    subtitle:
      'Get instant answers, code examples, and expert guidance for Oracle Utilities Application Framework',
    description: 'Start a conversation below or choose from our popular topics',
  },

  sections: {
    explore: {
      title: 'What would you like to explore?',
      subtitle:
        'Choose from our most popular AI assistance topics or start your own conversation',
    },
    conversation: {
      title: 'Start a conversation',
      subtitle: 'Ask anything about OUAF and get instant AI-powered assistance',
      placeholder:
        'Ask about OUAF documentation, code examples, best practices...',
    },
  },

  intentCards: [
    {
      title: 'Summarize Documentation',
      description:
        'Get concise summaries of OUAF documentation sections, technical guides, or implementation details.',
      message: 'Can you summarize the key concepts of OUAF architecture?',
      icon: 'DocumentIcon',
    },
    {
      title: 'Batch Job Configuration',
      description:
        'Learn how to create, configure, and troubleshoot batch jobs in the OUAF framework.',
      message: 'How do I configure a new batch job in OUAF?',
      icon: 'SettingsIcon',
    },
    {
      title: 'Explain Code Snippet',
      description:
        'Get detailed explanations of OUAF code snippets, functions, and implementation patterns.',
      message: 'Can you explain this OUAF code snippet and how it works?',
      icon: 'CodeIcon',
    },
    {
      title: 'MVC Architecture',
      description:
        'Understand the Model-View-Controller pattern implementation within the OUAF framework.',
      message:
        'Explain the MVC pattern in OUAF and how to implement it properly',
      icon: 'ArchitectureIcon',
    },
    {
      title: 'Troubleshooting',
      description:
        'Get help diagnosing and solving common issues in OUAF development and deployment.',
      message: 'Help me troubleshoot common OUAF errors and performance issues',
      icon: 'WarningIcon',
    },
    {
      title: 'Technical Q&A',
      description:
        'Ask specific technical questions about OUAF features, APIs, and best practices.',
      message: 'I have a technical question about OUAF implementation',
      icon: 'QuestionIcon',
    },
  ],

  features: [
    {
      title: 'Real-time Streaming Responses',
      description:
        'Get instant answers with live streaming for a smooth conversation experience',
      icon: 'BoltIcon',
      gradient: 'from-primary to-primary/80',
    },
    {
      title: 'OUAF-specific Expertise',
      description:
        'Specialized knowledge about Oracle Utilities Application Framework',
      icon: 'BookOpenIcon',
      gradient: 'from-primary to-primary/80',
    },
    {
      title: 'Clean, Intuitive Interface',
      description:
        'Simple and elegant design focused on getting you answers quickly',
      icon: 'DisplayIcon',
      gradient: 'from-primary to-primary/80',
    },
    {
      title: 'Quick Start Options',
      description:
        'Start from intent cards or jump straight into free-form conversation',
      icon: 'RocketIcon',
      gradient: 'from-primary to-primary/80',
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: 'Start a conversation',
      description: 'Type your question or choose from our intent cards',
      icon: 'DocumentIcon',
    },
    {
      step: 2,
      title: 'AI processes your query',
      description:
        'Our specialized OUAF assistant analyzes and understands your request',
      icon: 'LightningIcon',
    },
    {
      step: 3,
      title: 'Get actionable answers',
      description:
        'Receive detailed responses with code examples and best practices',
      icon: 'BookIcon',
    },
  ],

  finalCta: {
    title: 'Ready to transform your OUAF development experience?',
    subtitle: 'Start chatting with your AI-powered assistant today',
    buttonText: 'Start Chatting',
  },
} as const;

export type IconName =
  | 'DocumentIcon'
  | 'SettingsIcon'
  | 'CodeIcon'
  | 'ArchitectureIcon'
  | 'WarningIcon'
  | 'QuestionIcon'
  | 'LightningIcon'
  | 'BookIcon'
  | 'BoltIcon'
  | 'BookOpenIcon'
  | 'DisplayIcon'
  | 'RocketIcon';
