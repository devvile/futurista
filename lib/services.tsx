import { MobileMockup } from "@/app/views/our_services/components/MobileMockup";
import { AIAssistantMockup } from "@/app/views/our_services/components/AiAssistantMockup";
import { WorkflowMockup } from "@/app/views/our_services/components/WorkfloMockup";

export const OUR_SERVICES = [
  {
    id: 1,
    badge: "Workflow Automation",
    title: "Automate repetitive tasks",
    description: "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.",
    tags: ['Internal Task Bots', '100+ Automations'],
    image: <WorkflowMockup />,
    reverse: false
  },
  {
    id: 2,
    badge: "AI Assistant",
    title: "Delegate Daily Tasks",
    description: "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
    tags: ['Summaries', 'Scheduling', 'Many more'],
    image: <AIAssistantMockup />,
    reverse: true
  },
  {
    id: 3,
    badge: "Mobile Dashboard",
    title: "Track Performance On The Go",
    description: "Monitor your business metrics, receive real-time notifications, and manage tasks from anywhere with our mobile-optimized dashboard.",
    tags: ['Real-time Updates', 'Push Notifications', 'Offline Mode'],
    image: <MobileMockup />,
    reverse: false
  }
];