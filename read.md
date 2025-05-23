Figma Link
https://www.figma.com/design/hFGfxq5pcrqtQYJgdT1Z5a/Notes-App-UI--Community-?node-id=0-1&p=f&t=UbyTVyK7s2mGtLC5-0


# 📝 Note Station

یک اپلیکیشن نوت‌برداری سریع و مدرن با طراحی زیبا و عملکرد روان. کاربران می‌توانند نوت‌های رنگی اضافه کنند، ویرایش کنند و حذف کنند.

## 🚀 تکنولوژی‌های استفاده شده

### فرانت‌اند:
- React (با TypeScript)
- React Router
- Tailwind CSS
- React Icons

### بک‌اند:
- Django
- Django Rest Framework
- JWT Authentication
- Django Channels (برای نوتیفیکیشن یا ویژگی‌های real-time)

## 📁 ساختار پروژه

note-app/
│
├── frontend/ # React + Tailwind
│ ├── src/
│ │ ├── components/ # کامپوننت‌های قابل استفاده مجدد
│ │ ├── pages/ # صفحات اصلی مثل Notes, AddNote, EditNote
│ │ ├── services/ # فایل‌های API
│ │ └── App.tsx
│
├── backend/ # Django project
│ ├── config/ # تنظیمات اصلی
│ ├── notes/ # اپلیکیشن مدیریت نوت
│ ├── accounts/ # اپلیکیشن احراز هویت
│ └── manage.py

## ⚙️ نحوه اجرا

### 💻 اجرای بک‌اند (Django.py)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # در ویندوز: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### 💻 اجرای فرانت اند (React.js)

```bash
cd frontend
npm install
npm run dev


✅ ویژگی‌ها
ایجاد نوت با رنگ دلخواه

ویرایش نوت‌ها

حذف نوت‌ها

نمایش لیست نوت‌ها با استایل ریسپانسیو

ذخیره‌سازی نوت‌ها در دیتابیس با ارتباط امن (JWT)

(در حال توسعه) نوتیفیکیشن بلادرنگ با WebSocket

🖼️ اسکرین‌شات
(در این بخش می‌تونی تصاویر از UI اضافه کنی)

🧑‍💻 توسعه‌دهنده
ساخته شده توسط علی غزالی زاده ❤️