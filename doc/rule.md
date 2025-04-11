# 🌟 Astro + Tailwind CSS Naming Conventions

A consistent naming guide to keep your project clean and maintainable.

---

## 🔤 File Naming Conventions

| File Type                    | Convention   | Example                        |
|-----------------------------|--------------|--------------------------------|
| Astro component files       | `PascalCase` | `Header.astro`, `UserCard.astro` |
| Utility/helper functions    | `camelCase`  | `fetchData.ts`, `formatDate.ts` |
| Layout files                | `PascalCase` | `BaseLayout.astro`, `MainLayout.astro` |
| Page files (`/pages`)       | `kebab-case` | `about.astro`, `blog-posts.astro` |
| Static assets (images, etc.)| `kebab-case` | `hero-image.jpg`, `logo-icon.svg` |
| Style files (if separated)  | `kebab-case` | `global.css`, `typography.css` |

---

## 📁 Folder Naming Conventions

| Folder Type             | Convention   | Example             |
|------------------------|--------------|---------------------|
| Component directories  | `PascalCase` | `components/`, `layouts/` |
| Pages directory        | `kebab-case` | `pages/`, `blog-posts/` |
| Asset folders          | `kebab-case` | `assets/images/`, `assets/fonts/` |
| Utility functions      | `camelCase`  | `utils/`, `apiClient/` |

---


## 📄 Variable & Function Naming

| Use Case                  | Convention           | Example                      |
|---------------------------|----------------------|------------------------------|
| JS/TS variables/functions | `camelCase`          | `userId`, `fetchUserData()`  |
| Constants                 | `UPPER_SNAKE_CASE`   | `API_BASE_URL`, `DEFAULT_LIMIT` |

---


## 📑 Summary Table

| Naming Style   | Example              | Common Use Case                             |
|----------------|----------------------|---------------------------------------------|
| `camelCase`    | `userName`           | JS variables, function names, object props  |
| `PascalCase`   | `UserProfile`        | Components, classes, TypeScript types       |
| `kebab-case`   | `user-profile-card`  | CSS classes, filenames, URLs                |

---

## 📌 Tips

- **Be consistent** across all team members.
- Stick to `PascalCase` for components to match Astro conventions.
- Use Tailwind utility classes as much as possible before reaching for custom CSS.

---

