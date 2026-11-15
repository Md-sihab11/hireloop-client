# HireLoop — AI-Native Career & Recruitment Platform

HireLoop is a modern, dark-themed AI-driven recruitment and career platform built with Next.js 15 (App Router), React 19, Tailwind CSS, and Shadcn UI. The platform follows a clean, professional, **feature-based folder architecture** separating concerns across dedicated feature domains, role-based portals, shared design system components, and infrastructure utilities.

---

## 📁 Feature-Based Project Directory Structure

```text
hireloop/
├── public/                                # Static public assets (images, icons, svgs)
│   ├── images/
│   │   ├── cta-bg.png                     # Glowing grid background for CTA
│   │   └── ...
│   └── favicon.ico
├── src/
│   ├── app/                               # Next.js App Router (Routes, Pages & Layouts)
│   │   ├── layout.tsx                     # Root layout with providers & fonts
│   │   ├── globals.css                    # Tailwind CSS v4 styling & dark theme tokens
│   │   ├── page.tsx                       # Homepage (Hero, Bento Discovery, Pricing, CTA, Footer)
│   │   ├── home/page.tsx                  # Home route alias
│   │   │
│   │   ├── api/
│   │   │   └── auth/[...all]/             # Better-Auth authentication endpoints
│   │   │       └── route.ts
│   │   │
│   │   ├── jobs/                          # Public Job Discovery
│   │   │   ├── page.tsx                   # Browse Jobs with category filters, salary slider & search
│   │   │   └── [id]/page.tsx              # Job Details: bento info grid, requirements & company overview
│   │   │
│   │   ├── checkout/                      # Pro Plan Checkout
│   │   │   ├── page.tsx                   # Stripe checkout with BDT/USD currency toggle & card form
│   │   │   └── success/page.tsx           # Upgrade success screen with verified transaction ID
│   │   │
│   │   ├── login/page.tsx                 # Sign In (Seeker, Admin, Recruiter role selector)
│   │   ├── signup/page.tsx                # Sign Up (Seeker vs. Recruiter sub-navbar toggle)
│   │   │
│   │   └── dashboard/                     # Authenticated Dashboard Shell & Role Views
│   │       ├── layout.tsx                 # Protected layout with SessionGuard & DashboardShell
│   │       ├── page.tsx                   # Role router redirecting to /dashboard/[role]
│   │       ├── [role]/[...slug]/page.tsx  # Dynamic route handler
│   │       │
│   │       ├── seeker/                    # 🎯 Job Seeker Dashboard Routes
│   │       │   ├── page.tsx               # Seeker Overview (4 stat cards & recent activity feed)
│   │       │   ├── jobs/page.tsx          # Explore Opportunities (In-dashboard AI match finder)
│   │       │   ├── saved/page.tsx         # Saved Jobs (Category filters & draft resume)
│   │       │   ├── applications/page.tsx  # My Applications (Active/Archived tracker & PDF export)
│   │       │   ├── billing/page.tsx       # Subscription & Billing (Pro tier & invoice history)
│   │       │   └── settings/page.tsx      # Profile, resume upload, bio & skills chips
│   │       │
│   │       ├── recruiter/                 # 💼 Recruiter Dashboard Routes
│   │       │   ├── page.tsx               # Recruiter Overview (Applicant count, active jobs & table)
│   │       │   ├── jobs/page.tsx          # Manage Job Posts table with active/expired badges
│   │       │   ├── jobs/new/page.tsx      # Post a New Job multi-section form
│   │       │   ├── applications/page.tsx  # Candidate Pool (Review, interview & reject pipeline)
│   │       │   └── settings/page.tsx      # Employer branding, company logo & team seat access
│   │       │
│   │       └── admin/                     # 🛡️ Platform Admin Dashboard Routes
│   │           ├── page.tsx               # Admin Overview (Platform revenue, user growth & stats)
│   │           ├── users/page.tsx         # User Management (Role switching & account suspension)
│   │           ├── jobs/page.tsx          # Platform-wide job listings & analytical insights
│   │           ├── payments/page.tsx      # Revenue metrics ($1.28M) & recent transactions table
│   │           ├── companies/page.tsx     # Partner company directory & verification status
│   │           └── settings/page.tsx      # Maintenance mode & platform configuration
│   │
│   ├── features/                          # 📦 Feature-Based Architecture
│   │   │
│   │   ├── auth/                          # Authentication Domain
│   │   │   ├── components/
│   │   │   │   ├── auth-card.tsx          # Reusable dark auth container card
│   │   │   │   ├── form-field.tsx         # Labelled input with validation & error styling
│   │   │   │   ├── login-form.tsx         # Login form with 3-role selector & offline fallback
│   │   │   │   ├── signup-form.tsx        # Signup form with Seeker/Recruiter toggle navbar
│   │   │   │   └── social-auth-buttons.tsx# Google OAuth & divider
│   │   │   ├── types/                     # Auth types
│   │   │   └── index.ts                   # Feature barrel export
│   │   │
│   │   ├── jobs/                          # Jobs Domain
│   │   │   ├── components/
│   │   │   │   ├── job-card.tsx           # Public job preview card with tags & badges
│   │   │   │   ├── job-discovery-section.tsx # Homepage discovery grid section
│   │   │   │   └── delete-job-dialog.tsx  # Job deletion confirmation dialog
│   │   │   ├── services/
│   │   │   │   └── jobs-api.ts            # Client & server job data fetching services
│   │   │   ├── actions/
│   │   │   │   └── jobs-actions.ts        # Server actions for job creation
│   │   │   ├── types/                     # Job types & schemas
│   │   │   └── index.ts                   # Feature barrel export
│   │   │
│   │   ├── seeker/                        # Seeker Domain
│   │   │   ├── components/
│   │   │   │   ├── seeker-dashboard.tsx   # Seeker overview dashboard view
│   │   │   │   └── activity-list.tsx      # Seeker activity feed list
│   │   │   ├── types/                     # Seeker types
│   │   │   └── index.ts                   # Feature barrel export
│   │   │
│   │   ├── recruiter/                     # Recruiter Domain
│   │   │   ├── components/
│   │   │   │   ├── recruiter-dashboard.tsx# Recruiter overview dashboard view
│   │   │   │   ├── applications-table.tsx # Candidate applications table with avatars
│   │   │   │   ├── recruiter-jobs-table.tsx# Recruiter manage jobs table
│   │   │   │   └── new-job-form.tsx       # Post a new job form
│   │   │   ├── types/                     # Recruiter types
│   │   │   └── index.ts                   # Feature barrel export
│   │   │
│   │   ├── admin/                         # Admin Domain
│   │   │   ├── components/
│   │   │   │   ├── admin-dashboard.tsx    # Admin overview dashboard view
│   │   │   │   └── transactions-table.tsx # Platform revenue transactions table
│   │   │   ├── types/                     # Admin types
│   │   │   └── index.ts                   # Feature barrel export
│   │   │
│   │   └── billing/                       # Billing & Subscription Domain
│   │       ├── components/
│   │       │   └── pricing-section.tsx    # Monthly / Yearly (25% off) pricing cards
│   │       ├── types/                     # Billing types
│   │       └── index.ts                   # Feature barrel export
│   │
│   ├── components/                        # Globally Reusable UI Components
│   │   ├── ui/                            # Shadcn UI primitives (button, badge, input, table, dialog, etc.)
│   │   ├── layout/                        # Global layouts (site-header, footer, mobile-nav)
│   │   ├── shared/                        # Shared visuals (brand-logo, star-field)
│   │   ├── dashboard/                     # Global dashboard base shell, sidebar, topbar & stat cards
│   │   └── sections/                      # Global landing sections (hero-section, cta-section)
│   │
│   ├── types/                             # Shared TypeScript Definitions
│   │   ├── roles.ts                       # DashboardRole & Role types
│   │   ├── dashboard.ts                   # NavItem, Stat, ActivityItem, ApplicationRow, TransactionRow
│   │   ├── jobs.ts                        # JobListing, JobFormData, JobRow, JobStatus
│   │   ├── auth.ts                        # AuthRole, SignupRole, UserSessionInfo, SessionUser
│   │   └── index.ts                       # Central types barrel export
│   │
│   ├── data/                              # Mock & Static Datasets
│   │   ├── dashboard.ts                   # Navigation items, stat figures, mock candidates & invoices
│   │   └── landing-page.ts                # Hero stats, trending searches, featured jobs
│   │
│   ├── lib/                               # Core Utilities & Infrastructure
│   │   ├── auth.ts                        # Better-Auth server configuration & fast Mongo timeout
│   │   ├── auth-client.ts                 # Better-Auth React client instance
│   │   ├── roles.ts                       # Role definitions (`seeker`, `recruiter`, `admin`)
│   │   ├── session.ts                     # Cookie-based fallback session management
│   │   └── utils.ts                       # Classnames merger (`cn`) helper
│   │
│   └── hooks/                             # Reusable React Hooks
│       └── use-mobile.ts                  # Viewport breakpoint detection hook
│
├── package.json                           # Dependencies and build scripts
├── tsconfig.json                          # TypeScript configuration
├── next.config.ts                         # Next.js compiler settings
└── README.md                              # Project documentation
```

---

## 🚀 Key Routes & Navigation Map

| Path | Screen Name | Role / Access | Feature Domain | Key Capabilities |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | Public | `billing`, `jobs` | Hero, Bento discovery, Pricing (Monthly/Yearly), CTA banner, Footer |
| `/jobs` | Browse Jobs | Public | `jobs` | Search bar, filters (remote, salary, category), job cards grid, pagination |
| `/jobs/[id]` | Job Details | Public | `jobs` | Verified badge, bento info grid, responsibilities, company overview sidebar |
| `/checkout` | Stripe Checkout | Public | `billing` | BDT / USD selector, plan summary, Stripe card entry, 256-bit SSL |
| `/checkout/success` | Payment Successful | Public | `billing` | Status badge, verified session ID, redirect to workspace |
| `/login` | Sign In | Public | `auth` | Role selector (Seeker, Admin, Recruiter), local session fallback |
| `/signup` | Sign Up | Public | `auth` | Seeker vs. Recruiter sub-navbar, role persistence |
| `/dashboard/seeker` | Seeker Overview | Seeker | `seeker` | 4 stat cards, recent activity feed, quick action button |
| `/dashboard/seeker/jobs` | Explore Jobs | Seeker | `jobs`, `seeker` | In-dashboard opportunity finder with AI match scores |
| `/dashboard/seeker/saved` | Saved Jobs | Seeker | `seeker` | Category filters, closing soon alerts, draft continuation |
| `/dashboard/seeker/applications` | Applications | Seeker | `seeker` | Active / Archived tabs, interview notes, PDF export |
| `/dashboard/seeker/billing` | Billing | Seeker | `billing`, `seeker` | Professional tier plan card, visual Stripe card, invoice history |
| `/dashboard/seeker/settings` | Settings | Seeker | `seeker` | Profile details, bio, skills chips editor, resume management |
| `/dashboard/recruiter` | Recruiter Overview | Recruiter | `recruiter` | 4 stat cards, recent candidate applications table with avatars |
| `/dashboard/recruiter/jobs` | Manage Jobs | Recruiter | `recruiter`, `jobs` | Table of posted listings with active/expired badges & applicant count |
| `/dashboard/recruiter/jobs/new` | Post a Job | Recruiter | `recruiter`, `jobs` | Full job post creation form |
| `/dashboard/recruiter/applications` | Candidates | Recruiter | `recruiter` | Pipeline stages (New, Interviewing, Reviewing, Rejected) |
| `/dashboard/recruiter/settings` | Company Settings | Recruiter | `recruiter` | Employer branding, logo upload, team seats & invites |
| `/dashboard/admin` | Admin Overview | Admin | `admin` | 5 stat cards with trends, recent transactions table |
| `/dashboard/admin/users` | User Management | Admin | `admin` | Role switcher (Make Recruiter/Seeker), suspend/activate actions |
| `/dashboard/admin/jobs` | Platform Jobs | Admin | `admin`, `jobs` | Active vs. Closed tabs, time-to-fill analytics, close/reopen actions |
| `/dashboard/admin/payments` | Financials | Admin | `admin`, `billing` | Revenue metrics ($1.28M), transactions data table, CSV export |
| `/dashboard/admin/companies` | Companies | Admin | `admin` | Employer directory, plan tiers, verification badges |
| `/dashboard/admin/settings` | System Settings | Admin | `admin` | Maintenance mode toggle, manual recruiter review, health monitors |

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Next.js 15 (App Router with dynamic server & client components)
* **Library:** React 19
* **Styling:** Tailwind CSS v4 & PostCSS
* **UI Components:** Radix UI primitives & Shadcn UI
* **Icons:** Lucide React
* **Authentication:** Better-Auth with offline-resilient cookie fallback (`hireloop_role`, `hireloop_session`, `hireloop_user`)
* **Database Driver:** MongoDB MongoClient (configured with fast 2-second timeout for graceful offline handling)

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open the platform:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
