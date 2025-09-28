'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateCtaAction, CtaGeneratorState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2, Lightbulb } from 'lucide-react';

const initialState: CtaGeneratorState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Suggestions
        </>
      )}
    </Button>
  );
}

export default function CtaGenerator() {
  const [state, formAction] = useFormState(generateCtaAction, initialState);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Input Data</CardTitle>
            <CardDescription>Provide the context for generating new CTAs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentCTAText">Current CTA Text</Label>
              <Input id="currentCTAText" name="currentCTAText" placeholder="e.g., Learn More" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="landingPageSegment">Target Audience Segment</Label>
              <Select name="landingPageSegment" required defaultValue="obra privada">
                <SelectTrigger id="landingPageSegment">
                  <SelectValue placeholder="Select a segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="obra privada">Obra Privada</SelectItem>
                  <SelectItem value="obra civil">Obra Civil</SelectItem>
                  <SelectItem value="desarrolladores de vivienda">Desarrolladores de Vivienda</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="conversionRate">Current Conversion Rate (%)</Label>
              <Input
                id="conversionRate"
                name="conversionRate"
                type="number"
                placeholder="e.g., 5 for 5%"
                step="0.01"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="abTestingData">A/B Testing Data (Optional)</Label>
              <Textarea
                id="abTestingData"
                name="abTestingData"
                placeholder="e.g., 'Contact Us' had 2% higher clicks than 'Get Started'"
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>AI Suggestions</CardTitle>
          <CardDescription>Generated CTA texts and the rationale behind them.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          {state.message === 'success' && state.data ? (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Suggested CTAs:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  {state.data.suggestedCTATexts.map((cta, index) => (
                    <li key={index} className="bg-primary/10 p-3 rounded-md">{cta}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Rationale:</h3>
                <p className="text-sm text-muted-foreground">{state.data.rationale}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <Lightbulb className="mx-auto h-12 w-12" />
              <p>Your suggestions will appear here.</p>
            </div>
          )}
        </CardContent>
         {state.message === 'error' && (
          <CardFooter>
            <p className="text-sm text-destructive">{state.errors}</p>
          </CardFooter>
         )}
      </Card>
    </div>
  );
}
