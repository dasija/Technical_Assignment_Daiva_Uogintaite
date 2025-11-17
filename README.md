This project is my implementation of the Junior Front-End Developer Technical Assignment.
The goal was to build a mobile-only web experience based on the provided Figma design, including three main pages:

Landing page – user selects their gender

Quiz page – interactive 6-question quiz

Checkout page – final summary with a countdown timer and before/after images

I used the technologies recommended in the assignment.
Next.js
React
TypeScript
Tailwind CSS
Custom SVG icons created as React components

The entire project is built only for mobile screens, as required.
The mobile background uses a light beige tone, matching the Figma mockups

All selectable cards and blocks are white

Spacing, typography and icon layout follow the design as closely as possible

Landing Page (Gender Selection)
User can choose Male or Female
The selection is saved for later steps
Buttons include active and hover states

Quiz Page
Shows progress (1/6, 2/6, etc.)
Includes a progress bar
Each question has its own custom icon
When an option is selected:
background color changes
text color changes
icon color changes
There are three answer types:
Yes → green
No → red
I'm not sure → yellow
All icons were built as React SVG components.

Checkout Page
Includes a 15:00 countdown timer
When the timer reaches 00:00, it restarts automatically
Displays before/after images depending on the selected gender
Layout matches the Figma structure

I recreated all icons as clean SVG components, including:
6 icons for the second question
Icons for Yes / No / Maybe
Icons from the first question group
They follow Figma style: rounded strokes, lightweight outlines, consistent sizing.

Project Structure
app/
layout.tsx
page.tsx
quiz/
page.tsx
checkout/
page.tsx

components/
checkout
Arrows.tsx
BeforeAfter.tsx
CheckoutNavbar.tsx
PatternGoal.tsx
Summarycard.tsx
Summarylist.tsx

quiz/
icons/
HealthIcon.tsx
RelationshipsIcon.tsx
ControlIcon.tsx
MoneyIcon.tsx
PerformanceIcon.tsx
RoleModelIcon.tsx
StressOrAnxietyIcon.tsx
SocializingIcon.tsx
RelaxationIcon.tsx
EmotionalEscapeIcon.tsx
HabitIcon.tsx
ConfidenceBoostIcon.tsx
SuccessIcon.tsx
BlockIcon.tsx

AnswersList.tsx
ProgressBar.tsx
QuizHeader.tsx
CustomArrowLeft.tsx

GenderCard.tsx
Logo.tsx

landing/
page

quiz/
landing

Install dependencies
npm install

Start development server
npm run dev

Visit:
http://localhost:3000

The project covers all key technical and UI requirements from the assignment.
I focused on keeping the code simple, clean, and close to the Figma design.
I really enjoyed it!

Thank you for reviewing my submission.
