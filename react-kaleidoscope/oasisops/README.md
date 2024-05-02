<div align="center">
  <img height="60" src="/react-kaleidoscope/oasisops/public/logo-dark.png">
  <h1>OasisOps: Hotel Management Staff App</h1>
</div>

![GIF-OasisOps: Hotel Management Staff App](/react-kaleidoscope/oasisops/public/readmefileImages/OasisOpsGif.gif)
[Video Link for App Demo](https://drive.google.com/file/d/1eduCaGfSvYvGAIN7Kw4SykOCCos-o4Pw/view?usp=sharing)


<p>OasisOps is a feature-rich web application designed to streamline hotel management operations for staff members. It empowers administrators with the tools to efficiently manage settings, cabins, bookings, and user profiles, along with insightful data visualizations for informed decision-making.</p>

## Features

- Master Admin Controls
  - Set minimum/maximum nights per booking
  - Define maximum guests per booking
  - Configure breakfast price
  - Securely create and manage new admin accounts with email verification
- Cabin Management
  - Add, edit, and delete cabins with comprehensive details such as name, capacity, price, and discount.
  - Filter and sort cabins by various criteria (price, capacity, discount)
- Booking Management
  - View a comprehensive list of all bookings
  - Edit, delete, and view booking details
  - Filter bookings based on status (unconfirmed, checked-in, checked-out).
  - Sort bookings based on date (recent first, earlier first) and amount (high first, low first).
- Dashboard
  - Track key performance indicators (KPIs): number of bookings, sales, occupancy rate, check-ins
  - Visualize check-in/check-out activities for the day
  - Stay duration summary presented in a pie chart (Pie chart showing the distribution of bookings with checked-in status based on the number of nights per booking.)
  - Sales trend analysis displayed through a detailed line chart (utilizes Recharts and date-fns). It'll show sales data over time.
- User Management
  - Secure user authentication (signup, login, logout) with Supabase
  - Profile management for admins (update name, avatar, password)
- Dark Mode
  - Enhanced user experience and provided better readability with a toggleable dark mode (toggle between light and dark mode)

## Technologies

- Frontend: React, Vite (build tool)
- State Management: React Query
- UI/Styling: Styled Components, React Icons
- Forms: React Hook Form
- Notifications: react-hot-toast
- API: Supabase (authentication, storage)
- Data Visualization: Recharts
- Date/Time: date-fns (data manipulation)
- Linting: ESLint, ESLint plugins

## Screenshots

![Light-mode (login)](/react-kaleidoscope/oasisops/public/readmefileImages/1.png)
![Light-mode (dashboard)](/react-kaleidoscope/oasisops/public/readmefileImages/2.png)
![Light-mode (bookings)](/react-kaleidoscope/oasisops/public/readmefileImages/3.png)
![Light-mode (cabins)](/react-kaleidoscope/oasisops/public/readmefileImages/4.png)
![Light-mode (create booking form)](/react-kaleidoscope/oasisops/public/readmefileImages/5.png)

![Dark-mode (dashboard)](/react-kaleidoscope/oasisops/public/readmefileImages/6.png)
![Dark-mode (bookings)](/react-kaleidoscope/oasisops/public/readmefileImages/7.png)
![Dark-mode (cabins)](/react-kaleidoscope/oasisops/public/readmefileImages/8.png)
![Dark-mode (user settings)](/react-kaleidoscope/oasisops/public/readmefileImages/9.png)
![Dark-mode (booking react form validations)](/react-kaleidoscope/oasisops/public/readmefileImages/10.png)
![Dark-mode (hotel settings)](/react-kaleidoscope/oasisops/public/readmefileImages/11.png)

## Installation

- Clone this repository.
- Install dependencies using `npm install` (or `yarn install`)
- Set environment variables for Supabase project URL and secret key (refer to Supabase documentation).
- Run the development server using `npm run dev` (or `yarn dev`).
- Access the application in your browser (usually at http://localhost:5173/).

## Usage

- Admins log in using email and password.
- Master admin can create and manage new admin accounts with email verification.
- Manage hotel settings like minimum/maximum nights per booking, maximum guests, and breakfast price.
- Add, edit, and delete cabins with details and filter/sort them using various criteria.
- View a comprehensive list of bookings, filter and sort them, and manage their details (edit, delete, view).
- Access the dashboard for insightful statistics and visualizations.
- Admins can manage their profiles (update name, avatar, password).

### Future Enhancements

- Consider adding support for multiple languages (i18n) for broader accessibility.
- Explore unit testing frameworks like Jest or React Testing Library for robust test coverage.
- Implement automated deployments using CI/CD tools (e.g., GitHub Actions) for streamlined releases.
