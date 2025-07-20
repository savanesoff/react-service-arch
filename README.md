# 🧑‍💻 React Hook Architecture Demo

Welcome to the **React Hook Architecture Demo**! This one-page app is designed to showcase modern React patterns for scalable, maintainable, and testable service integration using:

- **React 19**
- **TypeScript**

- **@tanstack/react-query v5** (for data fetching, caching, and mutations)

## 🛠️ What is @tanstack/react-query?

[@tanstack/react-query](https://tanstack.com/query/latest) is a powerful library for managing server state in React applications. It provides:

- **Automatic caching** of query results for fast, efficient data access
- **Background updates** and refetching for real-time data
- **Declarative networking** with hooks (`useQuery`, `useMutation`) for clean, readable code
- **Cache invalidation** and queryKey-based separation for precise control
- **Optimistic updates** and error handling for robust UX
- **Reactive architecture**: UI and dependent services update automatically when data changes

This demo leverages react-query to synchronize service state, manage cache, and handle network requests in a scalable, idiomatic way.

- **Tailwind CSS** (for beautiful, responsive UI)
- **Vite** (for fast development)

## 🎯 Purpose

This demo is built for developers and teams who want to learn how to:

- Structure service logic using custom hooks and context providers
- Manage state and side effects with `useQuery` and `useMutation`
- Expose mutators and state via providers for clean, testable code
- Synchronize service dependencies and cache
- Build a visually clear UI that reflects service status and actions

## 🏗️ Architecture Overview

Each service is implemented in its own directory under `src/hooks/`, with:

- A **Provider** component for context/state/mutators
- A **Context** for sharing state
- A **custom hook** for consuming the service

UI components are split into their own directories under `src/components/`, using barrel exports for clean imports. The app is wrapped in all service providers (in dependency order) and a global `QueryClientProvider` for react-query.

## 🧩 Services

### 🌎 Env Service

- **Purpose:** Manage the current environment (`production`, `development`, `staging`).
- **Provider:** Exposes `env` state and `setEnv` mutator.
- **UI:** Select dropdown to change environment.

### 💤 Standby Service

- **Purpose:** Toggle standby mode (ON/OFF).
- **Provider:** Exposes `isStandby` state and `set` mutator.
- **UI:** Button to enable/disable standby.
- **Note:** Standby is an example of a global state change that triggers updates throughout the app. When enabled, it can force other services (like Auth) to log out or reset, demonstrating how global state can propagate and affect dependent logic reactively.

### 🔐 Auth Service

- **Purpose:** Manage authentication (login/logout).
- **Provider:** Exposes `auth` state, `login` and `logout` mutations.
- **UI:** Button to login/logout, shows current user.
- **Dependencies:** Disabled if Standby is ON or Env is unset.

### 📺 VOD Service

- **Purpose:** Fetch and display Video On Demand assets (requires auth).
- **Provider:** Uses `useQuery`, queryKey includes auth status for cache separation.
- **UI:** Grid of VOD assets, each with details.

### 👤 Account Service

- **Purpose:** Manage user profiles (primary/active), switch between them.
- **Provider:** Exposes profiles, active profile, and `setActiveProfile` mutator.
- **UI:** List of profiles, avatar, and buttons to switch active profile.

### ⚙️ Config Service

- **Purpose:** Simulate network latency and error conditions for demo/testing.
- **Provider:** Exposes `fetchTimeout`, `shouldError`, and mutators to change them.
- **UI:** Button to toggle error, slider to adjust latency.

## 🖥️ UI Components

- **ServiceCard:** Card layout for each service, shows status and actions.
- **StatusBadge:** Visual indicator for query/mutation status (loading, success, error).
- **Button:** Reusable, stylized button.
- **Select:** Dropdown for environment selection.

## 🔄 Data Flow & Patterns

- **Providers** expose state and mutators via context.
- **Hooks** use `useQuery` for data, `useMutation` for actions.
- **QueryClientProvider** wraps the app for global cache.
- **QueryKey** is used for cache separation and invalidation.
- **UI** reflects real-time status and allows triggering service actions.

## 🚀 How to Run

```bash
pnpm install
pnpm dev
```

## 📚 Educational Highlights

- Explicit service dependencies (e.g., VOD depends on Auth)
- State/mutator exposure for testability
- Cache invalidation and query reset logic
- Idiomatic React + react-query patterns
- Tailwind for status indication

---

Feel free to explore the codebase and UI! This demo is a reference for building robust, scalable React apps with modern service architecture. ✨
