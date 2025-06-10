# 💼 Backend Portfolio with Flask & PostgreSQL

A personal portfolio backend built using **Flask** and **PostgreSQL** (managed via **pgAdmin**) that renders dynamic content for sections like About, Projects, Skills, and Contact. Visitors can submit their details through the contact form, and the data is stored directly in the PostgreSQL database.

---

## 🚀 Features

- Modular Flask backend using Blueprint architecture
- Dynamic HTML pages for About, Projects, Skills, and Contact
- Integrated PostgreSQL database via SQLAlchemy ORM
- Contact form that stores submissions in PostgreSQL (viewable in pgAdmin)
- Organized static assets and templates

---

## 🛠 Tech Stack

- **Backend:** Python (Flask)
- **Database:** PostgreSQL (accessed using pgAdmin)
- **ORM:** SQLAlchemy
- **Frontend:** HTML, CSS, JavaScript
- **Templating:** Jinja2

---

## 🔄 Key Routes

| URL              | Template        | Description                |
|------------------|-----------------|----------------------------|
| `/`              | `index.html`    | Home page                  |
| `/about-page`    | `about.html`    | About info                 |
| `/project-page`  | `project.html`  | Projects showcase          |
| `/skills-page`   | `skills.html`   | Technical skills           |
| `/contact-page`  | `contact.html`  | Contact form (stores data) |

---

## 💾 Contact Form + pgAdmin Integration

- Users fill out the contact form on `/contact-page`.
- Submitted data is stored in the `Contact` table in PostgreSQL.
- You can view and manage this data using **pgAdmin**.

---

## 🧪 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/kartheek93/my-portfolio-backend-
   cd backend_portfolio
