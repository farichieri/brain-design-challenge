export const LANDING_CONTENT = {
  hero: {
    title: 'OUAF Assistant',
    subtitle:
      'Your intelligent companion for Oracle Utilities Application Framework',
    description:
      'Ask questions, get code examples, and learn best practices with AI-powered assistance',
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
      title: 'Code Examples',
      description:
        'Get practical code snippets and implementation examples for common OUAF development patterns.',
      message:
        'Show me code examples for implementing a custom business object in OUAF',
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
      title: 'Real-time Responses',
      description:
        'Get instant answers with streaming responses for a smooth conversation experience powered by AI',
      icon: 'LightningIcon',
      gradient: 'from-primary to-primary/80',
    },
    {
      title: 'OUAF Expertise',
      description:
        'Specialized knowledge about Oracle Utilities Application Framework documentation and best practices',
      icon: 'BookIcon',
      gradient: 'from-secondary to-accent',
    },
    {
      title: 'Code Examples',
      description:
        'Get practical code snippets and implementation examples for your development needs',
      icon: 'CodeIcon',
      gradient: 'from-accent to-accent/80',
    },
  ],
} as const;

export type IconName =
  | 'DocumentIcon'
  | 'SettingsIcon'
  | 'CodeIcon'
  | 'ArchitectureIcon'
  | 'WarningIcon'
  | 'QuestionIcon'
  | 'LightningIcon'
  | 'BookIcon';
