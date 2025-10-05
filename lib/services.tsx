import { MobileMockup } from "@/app/views/our_services/components/MobileMockup";
import { AIAssistantMockup } from "@/app/views/our_services/components/AiAssistantMockup";
import { WorkflowMockup } from "@/app/views/our_services/components/WorkfloMockup";

export const OUR_SERVICES = [
  {
    id: 1,
    badge: "Business Automations",
    title: "Business Automations",
    description: "We optimize your internal operations by automating manual workflows—like data entry, reporting, dashboarding and approval chains—saving time and reducing errors. Automation brings greater efficiency, consistency, and allows your team to focus on what truly drives growth.",
    tags: ['Internal Task Bots', '100+ Automations'],
    image: <WorkflowMockup />,
    reverse: false
  },
  {
    id: 2,
    badge: "Ai Intergtaions",
    title: "Ai Intergtaions",
    description: "We seamlessly integrate AI models with the platforms you already use, transforming how your teams work—from automating data analysis to streamlining customer interactions and beyond.",
    tags: ['Summaries', 'Scheduling', 'Many more'],
    image: <AIAssistantMockup />,
    reverse: true
  },
  {
    id: 3,
    badge: "Web and mobile apps",
    title: "Web and mobile apps",
    description: "Our AI-enhanced development process transforms how we build mobile and web applications—automating coding tasks, optimizing workflows, and cutting development time in half while maintaining exceptional quality.",
    tags: ['Real-time Updates', 'Push Notifications', 'Offline Mode'],
    image: <MobileMockup />,
    reverse: false
  },
  {
    id: 4,
    badge: "Social Media",
    title: "Social Media Automations",
    description: "We deliver intelligent automations for social platforms—handling engagement, detecting negative interactions, and moderating conversations. Our solutions also drive lead generation, helping you turn social presence into measurable growth.",
    tags: ['Engagement', 'Moderation', 'Lead Generation'],
    image: <MobileMockup />,
    reverse: true
  },
];