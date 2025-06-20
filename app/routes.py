from flask import Blueprint, jsonify, request, render_template
from .models import db, About, Project, Skill, Contact
from . import mail
from flask_mail import Message
from flask import current_app

main = Blueprint("main", __name__)

# Render home page template
@main.route("/")
def home():
    return render_template("index.html")

# Render separate pages (for header/footer + content)
@main.route("/about-page")
def about_page():
    return render_template("about.html")

@main.route("/project-page")
def project_page():
    return render_template("project.html")

@main.route("/skills-page")
def skills_page():
    return render_template("skills.html")

@main.route("/contact-page")
def contact_page():
    return render_template("contact.html")

# API endpoints - serve JSON data
# @main.route("/about")
# def about():
#     data = About.query.first()
#     if not data:
#         return {"error": "No about data found"}, 404
#     return jsonify({
#         "name": data.name,
#         "bio": data.bio,
#         "photo_url": data.photo_url
#     })

# @main.route("/projects")
# def projects():
#     data = Project.query.all()
#     return jsonify([
#         {"title": p.title, "description": p.description, "github_link": p.github_link}
#         for p in data
#     ])

# @main.route("/skills")
# def skills():
#     data = Skill.query.all()
#     return jsonify([{"name": s.name} for s in data])

@main.route("/contact", methods=["POST"])
def contact():
    data = request.json
    new_msg = Contact(name=data["name"], email=data["email"], message=data["message"])
    db.session.add(new_msg)
    db.session.commit()

    msg = Message(
    subject="New Contact Form Submission",
    sender=current_app.config['MAIL_USERNAME'],  # must match your Gmail
    recipients=[current_app.config['MAIL_USERNAME']],  # send to yourself
    body=f"""
    Name: {data['name']}
    Email: {data['email']}
    Message: {data['message']}
    """
    )
    mail.send(msg)

    return jsonify({"message": "Message received!"})
