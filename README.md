# Job Board Application

This is a full-stack job board application built with Django and MySQL for the backend and Next.js for the frontend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Viewing a list of job listings
- Viewing individual job details
- Applying for a job
- Tracking application status
- User authentication and state management

## Prerequisites

- Python 3.x
- Node.js
- MySQL
- Git

## Backend Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd job_board
    ```

2. **Create and activate a virtual environment:**

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Setup MySQL database:**

    - Open MySQL Workbench and run the following commands:

      ```sql
      CREATE DATABASE job_board_db;
      CREATE USER 'job_user'@'localhost' IDENTIFIED BY 'tanmay';
      GRANT ALL PRIVILEGES ON job_board_db.* TO 'job_user'@'localhost';
      FLUSH PRIVILEGES;
      ```

5. **Run migrations:**

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6. **Create a superuser:**

    ```bash
    python manage.py createsuperuser
    ```

7. **Run the development server:**

    ```bash
    python manage.py runserver
    ```

## Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../job-board-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser and navigate to:**

    ```text
    http://localhost:3000
    ```

## API Endpoints

### Authentication

- **Register:** `POST /api/auth/registration/`
- **Login:** `POST /api/auth/login/`
- **Logout:** `POST /api/auth/logout/`

### Jobs

- **List Jobs:** `GET /api/jobs/`
- **Create Job:** `POST /api/jobs/`
- **Retrieve Job:** `GET /api/jobs/:id/`
- **Update Job:** `PUT /api/jobs/:id/`
- **Delete Job:** `DELETE /api/jobs/:id/`

### Applications

- **Apply for Job:** `POST /api/applications/`
- **List Applications:** `GET /api/applications/`
- **Retrieve Application:** `GET /api/applications/:id/`
- **Update Application:** `PUT /api/applications/:id/`
- **Delete Application:** `DELETE /api/applications/:id/`

## Folder Structure

```plaintext
job_board/
├── job_board/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── jobs/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
├── manage.py
job-board-frontend/
├── public/
├── src/
│   ├── pages/
│   ├── components/
│   ├── styles/
├── .eslintrc.json
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

To add this `README.md` file to your repository:

1. **Create the README.md file:**

    ```bash
    touch README.md
    ```

2. **Open the README.md file in your code editor and paste the content above.**

3. **Add, commit, and push the file to your repository:**

    ```bash
    git add README.md
    git commit -m "Add README.md"
    git push origin main  # or `master`, depending on your default branch
    ```

This should create a comprehensive `README.md` file for your job board project. Let me know if you need any further assistance!
