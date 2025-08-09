# Doctor App Documentation

## Overview

Doctor App is a healthcare management dashboard built with Next.js, React, and TypeScript. It features patient management, doctor scheduling, chat, wallet, and affiliate modules with a responsive sidebar navigation.

---

## Project Structure

/app  
/dashboard # Dashboard page  
/patients # Patients page  
/docter-schedule # Doctor Schedule page  
/appointment # Appointment page  
/chat # Chat page  
/consultation # Consultation page  
/wallet # Wallet page  
/affiliate-dashboard # Affiliate Dashboard and subpages  

/components
/sections # Reusable page sections and components  
/common # Common UI components (buttons, inputs, etc.)  

/public # Static assets (images, icons)  

/styles # Global and component CSS   

/next.config.js # Next.js configuration  

/package.json # Project dependencies and scripts  

## Key Components

### SideNavbar

- Located in `/components/SideNavbar.tsx`
- Dynamic sidebar menu with main and affiliate sections
- Highlights active route using `usePathname` from Next.js navigation
- Uses Lucide icons
- Supports expandable affiliate menu

### Pages (under `/app`)

- Each route corresponds to a folder with a `page.tsx` file.
- Follow Next.js App Router conventions.
- Example: `/app/dashboard/page.tsx` for `/dashboard` route.

###Adding New Page
How to Add a New Page
Create a new folder under /app with the route name, e.g. /app/reports.  

Add a page.tsx file inside the folder.

Implement your React component as the page.

Add the new route to the menuItems array in SideNavbar.tsx if it should appear in the sidebar.

**Development**
Run locally with npm run dev or yarn dev.

Production build with npm run build and start with npm run start.

**Deployment**
Deployed on Vercel at https://doctor-app-zeta.vercel.app/

Connect your GitHub repo to Vercel and deploy automatically on push.

**Future Improvements**

Add authentication and role-based access control.

Integrate backend APIs for real data management.

Enhance UI with animations and improved accessibility.





