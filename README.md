# 📝 Note Station

A modern and minimal note-taking app with a sleek UI and smooth performance. Users can create, edit, and delete color-coded notes.

##Figma Link:
https://www.figma.com/design/hFGfxq5pcrqtQYJgdT1Z5a/Notes-App-UI--Community-?node-id=0-1&p=f&t=UbyTVyK7s2mGtLC5-0

## 🚀 Technologies Used

### Frontend:
- React (with TypeScript)
- React Router
- Tailwind CSS
- React Icons

### Backend:
- Django
- Django Rest Framework
- JWT Authentication
- Django Channels (for real-time features/notifications)

## 📁 Project Structure

```bash
note-app/
│
├── frontend/ # React + Tailwind
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Main pages (Notes, AddNote, EditNote)
│ │ ├── services/ # API services
│ │ └── App.tsx
│
├── backend/ # Django project
│ ├── config/ # Django settings
│ ├── notes/ # Notes app
│ ├── accounts/ # Authentication app
│ └── manage.py
```

## ⚙️ How to Run

### 💻 Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
### 💻 Backend (Django)
```bash
cd frontend
npm install
npm run dev
```

✅ Features
Create notes with customizable colors

Edit notes

Delete notes

Display notes in a responsive layout

Secure storage using Django and JWT authentication


🖼️ Screenshots
![notestation2](https://github.com/user-attachments/assets/fcf925d6-dcce-4b6d-8347-dd94ec700aad)
![mobileNoteapp](https://github.com/user-attachments/assets/427a493f-0222-45fb-af51-cf7516c33291)




🧑‍💻 Developer
Built with ❤️ by Ali Ghazalizadeh