import Link from "next/link";

const components = [
  {
    name: "Button",
    description: "Displays a button with various styles and sizes.",
    href: "/docs/components/button",
  },
  {
    name: "Card",
    description: "A container with optional header, content, and footer sections.",
    href: "/docs/components/card",
  },
  {
    name: "Input",
    description: "Text input field with validation and various states.",
    href: "/docs/components/input",
  },
  {
    name: "Select",
    description: "Dropdown selection component with search functionality.",
    href: "/docs/components/select",
  },
  {
    name: "Modal",
    description: "Dialog component for displaying content in an overlay.",
    href: "/docs/components/modal",
  },
  {
    name: "Dropdown Menu",
    description: "Menu component with nested items and keyboard navigation.",
    href: "/docs/components/dropdown-menu",
  },
  {
    name: "Tabs",
    description: "Organize content into multiple panels with tab navigation.",
    href: "/docs/components/tabs",
  },
  {
    name: "Toast",
    description: "Notification component for displaying brief messages.",
    href: "/docs/components/toast",
  },
  {
    name: "Tooltip",
    description: "Display additional information on hover or focus.",
    href: "/docs/components/tooltip",
  },
  {
    name: "Accordion",
    description: "Collapsible content sections for organizing information.",
    href: "/docs/components/accordion",
  },
  {
    name: "Alert",
    description: "Display important messages and notifications.",
    href: "/docs/components/alert",
  },
  {
    name: "Badge",
    description: "Small labels for displaying status or categories.",
    href: "/docs/components/badge",
  },
  {
    name: "Checkbox",
    description: "Allow users to select one or more items from a set.",
    href: "/docs/components/checkbox",
  },
  {
    name: "Radio Group",
    description: "Select a single option from a list of choices.",
    href: "/docs/components/radio-group",
  },
  {
    name: "Switch",
    description: "Toggle component for binary choices.",
    href: "/docs/components/switch",
  },
  {
    name: "Slider",
    description: "Input component for selecting a value from a range.",
    href: "/docs/components/slider",
  },
  {
    name: "Progress",
    description: "Visual indicator of task completion.",
    href: "/docs/components/progress",
  },
  {
    name: "Separator",
    description: "Visually divide content sections.",
    href: "/docs/components/separator",
  },
  {
    name: "Avatar",
    description: "Display user profile images with fallback options.",
    href: "/docs/components/avatar",
  },
  {
    name: "Popover",
    description: "Display content in a floating panel.",
    href: "/docs/components/popover",
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-lg text-muted-foreground">
          Browse our collection of reusable components. Click on any component
          to view documentation, examples, and source code.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {components.map((component) => (
          <Link
            key={component.name}
            href={component.href}
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:border-primary transition-colors"
          >
            <h3 className="font-semibold group-hover:text-primary">
              {component.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
