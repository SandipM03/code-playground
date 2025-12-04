import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          Displays a button with various styles, sizes, and states.
        </p>
      </div>

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <ComponentPreview>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
              Button
            </button>
          </ComponentPreview>
        </TabsContent>
        <TabsContent value="code" className="mt-4">
          <CodeBlock
            language="tsx"
            code={`<Button>Button</Button>`}
          />
        </TabsContent>
      </Tabs>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Installation</h2>
        <p>Copy and paste the following code into your project:</p>
        <CodeBlock
          language="bash"
          code="npx @your-library/cli add button"
        />

        <h2>Usage</h2>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}`}
        />

        <h2>Variants</h2>
        <p>The button component supports multiple variants:</p>
        
        <h3>Default</h3>
        <ComponentPreview>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            Default
          </button>
        </ComponentPreview>

        <h3>Secondary</h3>
        <ComponentPreview>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
            Secondary
          </button>
        </ComponentPreview>

        <h3>Outline</h3>
        <ComponentPreview>
          <button className="px-4 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground">
            Outline
          </button>
        </ComponentPreview>

        <h3>Ghost</h3>
        <ComponentPreview>
          <button className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md">
            Ghost
          </button>
        </ComponentPreview>

        <h3>Destructive</h3>
        <ComponentPreview>
          <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90">
            Destructive
          </button>
        </ComponentPreview>

        <h2>Sizes</h2>
        <div className="flex items-center gap-4">
          <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary/90">
            Small
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            Default
          </button>
          <button className="px-6 py-3 text-lg bg-primary text-white rounded-md hover:bg-primary/90">
            Large
          </button>
        </div>

        <h2>Props</h2>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>
                "default" | "secondary" | "outline" | "ghost" | "destructive"
              </td>
              <td>"default"</td>
              <td>The visual style of the button</td>
            </tr>
            <tr>
              <td>size</td>
              <td>"sm" | "md" | "lg"</td>
              <td>"md"</td>
              <td>The size of the button</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>false</td>
              <td>Whether the button is disabled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
